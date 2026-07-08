/**
 * MyJKKN Staff API client — the ONLY module that talks to MyJKKN.
 *
 * If MyJKKN's contract changes, only this file and the adapter change.
 * Node runtime only (uses the resilient jkknFetch under the hood).
 */
import { jkknFetch } from '@/lib/net/jkkn-fetch';
import type { StaffApiRow } from '@/lib/sync/types';

/**
 * Role filter. Empty = one call with no `role_key` (returns the full roster for
 * the institution — the default for "all active faculty"). If MyJKKN instead
 * requires an explicit role_key, set e.g. ['faculty', 'hod', 'principal'] here and
 * the client fans out one call per role and dedupes by id. One-line change.
 */
const ROLE_KEYS: string[] = [];

function apiBase(): string {
  const raw = process.env.JKKN_API_BASE_URL || 'https://www.jkkn.ai/api';
  // Always use www.jkkn.ai — the bare host 307-redirects and strips Authorization.
  return raw.replace('://jkkn.ai', '://www.jkkn.ai').replace(/\/+$/, '');
}

function buildUrl(institutionId: string, roleKey?: string): string {
  const params = new URLSearchParams({
    institution_id: institutionId,
    is_active: 'true',
    has_extended_profile: 'true',
    all: 'true',
  });
  if (roleKey) params.set('role_key', roleKey);
  return `${apiBase()}/api-management/staff?${params.toString()}`;
}

function extractRows(json: unknown): StaffApiRow[] {
  if (Array.isArray(json)) return json as StaffApiRow[];
  if (json && typeof json === 'object') {
    const o = json as Record<string, unknown>;
    for (const key of ['data', 'staff', 'results', 'rows', 'items']) {
      if (Array.isArray(o[key])) return o[key] as StaffApiRow[];
    }
  }
  return [];
}

/**
 * One authenticated GET with a single retry on 429 (honouring Retry-After).
 * Throws on any non-2xx so a failed segment is detectable by the orchestrator.
 */
async function fetchStaff(url: string, apiKey: string, attempt = 0): Promise<StaffApiRow[]> {
  const res = await jkknFetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
  });

  if (res.status === 429 && attempt === 0) {
    const retryAfter = parseInt(res.headers.get('retry-after') || '', 10);
    const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2000;
    await new Promise((r) => setTimeout(r, waitMs));
    return fetchStaff(url, apiKey, attempt + 1);
  }

  if (!res.ok) {
    const bodyText = await res.text().catch(() => '');
    throw new Error(`[staff-api] ${res.status} ${res.statusText} for ${url} :: ${bodyText.slice(0, 300)}`);
  }

  const json = await res.json().catch(() => null);
  return extractRows(json);
}

/**
 * Pull all staff for one MyJKKN institution. Deduped by id when fanning out roles.
 * The API key is per-institution (Arts aided and self-finance have distinct keys).
 */
export async function listInstitutionStaff(
  institutionId: string,
  apiKey: string
): Promise<StaffApiRow[]> {
  if (!apiKey) throw new Error('[staff-api] apiKey is required');
  if (!institutionId) throw new Error('[staff-api] institutionId is required');

  if (ROLE_KEYS.length === 0) {
    return fetchStaff(buildUrl(institutionId), apiKey);
  }

  const perRole = await Promise.all(
    ROLE_KEYS.map((role) => fetchStaff(buildUrl(institutionId, role), apiKey))
  );

  // Dedupe by id (a person can hold multiple role_keys).
  const byId = new Map<string, StaffApiRow>();
  for (const rows of perRole) {
    for (const row of rows) {
      const id = typeof row.id === 'string' ? row.id : '';
      if (id && !byId.has(id)) byId.set(id, row);
    }
  }
  return Array.from(byId.values());
}
