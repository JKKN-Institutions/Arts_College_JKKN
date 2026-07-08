/**
 * Faculty sync orchestrator (Arts & Science).
 *
 * Pulls all active faculty from the two MyJKKN Arts institutions (Aided +
 * Self-Finance), adapts each to the Arts `faculty` shape, re-hosts photos, computes
 * visibility, and upserts by stable id (= MyJKKN staff UUID). Rows that vanish from
 * a segment's API response are soft-deactivated — scoped per segment so a partial
 * outage never touches the other tab, and never touches manual rows.
 *
 * Node runtime only. All three trigger surfaces (cron, admin proxy) call this.
 */
import { createServiceClient } from '@/lib/supabase/service';
import { listInstitutionStaff } from '@/lib/services/staff-api';
import { staffToFacultyRow, rawPhotoUrl } from '@/lib/adapters/staff-to-faculty';
import { rehostFacultyPhoto } from '@/lib/sync/photo-rehost';
import { computeVisibility } from '@/lib/sync/draft-rule';
import type {
  Segment,
  SegmentConfig,
  SegmentReport,
  SyncReport,
  SyncRowReport,
  StaffApiRow,
} from '@/lib/sync/types';

const COLLEGE_ID = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'arts';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function normName(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function emptySegmentReport(): SegmentReport {
  return { ok: false, fetched: 0, upserted: 0, published: 0, hidden: 0, orphansDeactivated: 0 };
}

export async function syncFacultyFromMyJKKN(): Promise<SyncReport> {
  const startedAt = Date.now();
  const ts = new Date().toISOString();

  const report: SyncReport = {
    fetched: 0,
    upserted: 0,
    published: 0,
    hidden: 0,
    orphansDeactivated: 0,
    perSegment: { Aided: emptySegmentReport(), 'Self-Finance': emptySegmentReport() },
    errors: [],
    warnings: [],
    rows: [],
    durationMs: 0,
    ts,
  };

  // Each Arts segment has its OWN MyJKKN API key (aided / self are separate
  // institutions with separate keys). Falls back to a shared JKKN_API_KEY if a
  // per-segment key isn't set.
  const fallbackKey = process.env.JKKN_API_KEY ?? '';
  const rawSegments: Array<{ key: Segment; institutionId?: string; apiKey?: string }> = [
    {
      key: 'Aided',
      institutionId: process.env.JKKN_ARTS_AIDED_INSTITUTION_ID,
      apiKey: process.env.JKKN_ARTS_AIDED_API_KEY || fallbackKey,
    },
    {
      key: 'Self-Finance',
      institutionId: process.env.JKKN_ARTS_SELF_INSTITUTION_ID,
      apiKey: process.env.JKKN_ARTS_SELF_API_KEY || fallbackKey,
    },
  ];

  const segments: SegmentConfig[] = [];
  for (const s of rawSegments) {
    if (!s.institutionId) continue;
    if (!s.apiKey) {
      report.errors.push(`[${s.key}] institution set but no API key (JKKN_ARTS_${s.key === 'Aided' ? 'AIDED' : 'SELF'}_API_KEY).`);
      continue;
    }
    segments.push({ key: s.key, institutionId: s.institutionId, apiKey: s.apiKey });
  }

  if (segments.length === 0) {
    report.errors.push(
      'No institution IDs configured — set JKKN_ARTS_AIDED_INSTITUTION_ID and/or JKKN_ARTS_SELF_INSTITUTION_ID.'
    );
    report.durationMs = Date.now() - startedAt;
    return report;
  }

  const svc = createServiceClient();

  // ── Snapshot existing local rows (service role → bypasses RLS) ──
  const existingSyncedIds = new Set<string>();
  {
    const { data } = await svc
      .from('faculty')
      .select('id')
      .eq('college_id', COLLEGE_ID)
      .eq('synced_from_api', true);
    for (const r of data ?? []) existingSyncedIds.add(r.id as string);
  }

  // Manual rows — used only to warn about likely duplicates. Never mutated.
  const manualEmails = new Set<string>();
  const manualNames = new Set<string>();
  {
    const { data } = await svc
      .from('faculty')
      .select('name, email')
      .eq('college_id', COLLEGE_ID)
      .eq('synced_from_api', false);
    for (const r of data ?? []) {
      const email = String(r.email ?? '').trim().toLowerCase();
      const name = normName(String(r.name ?? ''));
      if (email) manualEmails.add(email);
      if (name) manualNames.add(name);
    }
  }

  // ── Pull both institutions in parallel, capturing per-segment success/failure ──
  const fetches = await Promise.allSettled(
    segments.map((s) => listInstitutionStaff(s.institutionId, s.apiKey))
  );

  const warnedDupes = new Set<string>();

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const segReport = report.perSegment[seg.key];
    const result = fetches[i];

    if (result.status === 'rejected') {
      segReport.ok = false;
      segReport.error = String(result.reason?.message ?? result.reason);
      report.errors.push(`[${seg.key}] fetch failed: ${segReport.error}`);
      continue; // partial-failure isolation: no orphan sweep for a failed segment
    }

    segReport.ok = true;
    const apiRows: StaffApiRow[] = result.value;
    segReport.fetched = apiRows.length;
    report.fetched += apiRows.length;

    const seenIds = new Set<string>();

    for (const apiRow of apiRows) {
      try {
        const row = staffToFacultyRow(apiRow, seg.key);

        if (!row.id) {
          report.errors.push(`[${seg.key}] skipped a row with no id (name="${row.name}")`);
          continue;
        }

        // Photo re-host (soft-fails to null)
        row.photo_url = await rehostFacultyPhoto(svc, rawPhotoUrl(apiRow), row.id);

        // Deterministic, collision-proof slug (nav is by id, so slug is decorative)
        row.slug = `${slugify(row.name) || 'faculty'}-${row.id.slice(0, 8)}`;

        // Visibility
        const { isActive, missing } = computeVisibility(
          row,
          row.photo_url,
          apiRow.is_active === true,
          String(apiRow.status ?? '')
        );
        row.is_active = isActive;
        row.last_synced_at = ts;
        row.updated_at = ts;

        const isNew = !existingSyncedIds.has(row.id);
        const payload = isNew ? { ...row, created_at: ts } : row;

        const { error } = await svc.from('faculty').upsert(payload, { onConflict: 'id' });
        if (error) {
          report.errors.push(`[${seg.key}] upsert ${row.id} (${row.name}): ${error.message}`);
          continue;
        }

        // Duplicate-manual warning (does not block; admin resolves manually)
        const email = (row.email ?? '').toLowerCase();
        const nkey = normName(row.name);
        if ((email && manualEmails.has(email)) || (nkey && manualNames.has(nkey))) {
          const w = `Possible duplicate of a manual row: "${row.name}"${email ? ` <${email}>` : ''}`;
          if (!warnedDupes.has(w)) {
            warnedDupes.add(w);
            report.warnings.push(w);
          }
        }

        seenIds.add(row.id);
        segReport.upserted += 1;
        report.upserted += 1;
        if (isActive) {
          segReport.published += 1;
          report.published += 1;
        } else {
          segReport.hidden += 1;
          report.hidden += 1;
        }

        const rowReport: SyncRowReport = {
          id: row.id,
          name: row.name,
          segment: seg.key,
          isActive,
          missing,
        };
        report.rows.push(rowReport);
      } catch (e) {
        report.errors.push(`[${seg.key}] row error: ${(e as Error).message}`);
      }
    }

    // ── Orphan sweep — this segment only, and only because it fetched OK ──
    // Deactivate synced rows of THIS segment that MyJKKN no longer returns.
    // Scoped by aided_or_self so it can never touch the other tab; only flips rows
    // currently active (accurate count, no churn); manual rows are excluded by
    // synced_from_api = true.
    let sweep = svc
      .from('faculty')
      .update({ is_active: false, last_synced_at: ts })
      .eq('college_id', COLLEGE_ID)
      .eq('synced_from_api', true)
      .eq('aided_or_self', seg.key)
      .eq('is_active', true);

    if (seenIds.size > 0) {
      sweep = sweep.not('id', 'in', `(${Array.from(seenIds).join(',')})`);
    }

    const { data: swept, error: sweepErr } = await sweep.select('id');
    if (sweepErr) {
      report.errors.push(`[${seg.key}] orphan sweep: ${sweepErr.message}`);
    } else {
      segReport.orphansDeactivated = swept?.length ?? 0;
      report.orphansDeactivated += segReport.orphansDeactivated;
    }
  }

  report.durationMs = Date.now() - startedAt;

  // Structured, single-line log for Vercel log scanning.
  console.log(
    JSON.stringify({
      event: 'faculty_sync_completed',
      fetched: report.fetched,
      upserted: report.upserted,
      published: report.published,
      hidden: report.hidden,
      orphansDeactivated: report.orphansDeactivated,
      slugSegments: segments.map((s) => s.key),
      errors: report.errors,
      warnings: report.warnings,
      durationMs: report.durationMs,
      ts: report.ts,
    })
  );

  return report;
}
