/**
 * Adapter — the single boundary that translates a MyJKKN Staff API row into an
 * Arts `faculty` row. PURE: no I/O, no Date, no randomness. Every field defaults
 * defensively (arrays → [], strings → '' / null, numbers → 0) so a sparse or
 * slightly-off API payload never throws.
 *
 * The orchestrator FINALISES five fields after this runs — do not rely on their
 * placeholder values here:
 *   • slug            (deterministic slug + id suffix)
 *   • photo_url       (re-hosted to our bucket, or null)
 *   • is_active       (completeness + API active state)
 *   • last_synced_at  (batch timestamp)
 *   • updated_at      (batch timestamp)
 *
 * Arts column names differ from the Engineering site's (e.g. `name` not
 * `full_name`, `summary` not `professional_summary`) — see the mapping in the plan.
 */
import type {
  StaffApiRow,
  FacultyUpsertRow,
  Segment,
  AcademicQualification,
  ExperienceEntry,
  Publication,
  FundedResearch,
  Certification,
  Award,
  Membership,
  PhdScholar,
  FAQ,
} from '@/lib/sync/types';

// ─── coercion helpers ──────────────────────────────────────────────────────────

function str(v: unknown): string {
  if (v === null || v === undefined) return '';
  return String(v).trim();
}

function strOrNull(v: unknown): string | null {
  const s = str(v);
  return s === '' ? null : s;
}

function num(v: unknown): number {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  const n = parseInt(str(v), 10);
  return Number.isFinite(n) ? n : 0;
}

function collapseWs(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

/** First non-empty string among the given keys of a raw object. */
function pick(row: StaffApiRow, keys: string[]): string {
  for (const k of keys) {
    const s = str(row[k]);
    if (s) return s;
  }
  return '';
}

/** Title-case an ALL-CAPS string ("ASSOCIATE PROFESSOR" → "Associate Professor"). */
function titleCaseIfUpper(s: string): string {
  if (!s || s !== s.toUpperCase()) return s;
  return s
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function flattenStrings(arr: unknown, key: string): string[] {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((item) => (typeof item === 'string' ? item.trim() : str((item as Record<string, unknown>)?.[key])))
    .filter((s) => s !== '');
}

function normalizeExpType(raw: string): string {
  return /clinical/i.test(raw) ? 'Clinical' : 'Teaching';
}

function normalizeStatus(raw: string): string {
  return /complete/i.test(raw) ? 'Completed' : 'Ongoing';
}

function doiToUrl(raw: string): string {
  const s = str(raw);
  if (!s) return '';
  if (/^https?:\/\//i.test(s)) return s;
  return `https://doi.org/${s.replace(/^doi:/i, '')}`;
}

function departmentName(v: StaffApiRow['department']): string {
  if (!v) return '';
  if (typeof v === 'string') return v.trim();
  return str(v.department_name);
}

// ─── the adapter ───────────────────────────────────────────────────────────────

export function staffToFacultyRow(api: StaffApiRow, segment: Segment): FacultyUpsertRow {
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'arts';

  const name = collapseWs(`${str(api.first_name)} ${str(api.last_name)}`) || str(api.name);

  const academic_qualifications: AcademicQualification[] = (api.qualifications ?? []).map((q) => ({
    degree: str(q.degree),
    specialisation: str(q.specialisation ?? q.specialization),
    university: str(q.institution),
    year: str(q.year),
  }));

  const experience: ExperienceEntry[] = (api.experience_entries ?? []).map((e) => {
    // MyJKKN stores the enum type inside `description` when there's no `type` field.
    const hasOwnType = str(e.type) !== '';
    const type = normalizeExpType(hasOwnType ? str(e.type) : str(e.description));
    return {
      type,
      period_start: str(e.from),
      period_end: str(e.to),
      role: str(e.role),
      institution: str(e.institution ?? e.organisation),
      description: hasOwnType ? str(e.description) : '',
    };
  });

  const publications: Publication[] = (api.publications ?? []).map((p) => ({
    title: str(p.title),
    authors: str(p.authors),
    journal: str(p.journal),
    year: str(p.year),
    doi_url: doiToUrl(str(p.doi)),
    pubmed_url: str(p.url),
  }));

  const funded_research: FundedResearch[] = (api.funded_projects ?? []).map((f) => ({
    project: str(f.title),
    agency: str(f.agency),
    amount: str(f.amount),
    period: str(f.period),
    status: normalizeStatus(str(f.status)),
  }));

  const certifications: Certification[] = (api.certifications ?? []).map((c) => ({
    name: str(c.name),
    organisation: str(c.organisation ?? c.issuer),
    year: str(c.year),
  }));

  const awards: Award[] = (api.awards ?? []).map((a) => ({
    award: str(a.title ?? a.name),
    body: str(a.awarded_by ?? a.body),
    year: str(a.year),
  }));

  const memberships: Membership[] = (api.memberships ?? []).map((m) => ({
    organisation: str(m.organisation ?? m.body),
    type: str(m.type ?? m.role),
    since: str(m.since),
  }));

  const phd_scholars: PhdScholar[] = (api.phd_scholars_list ?? []).map((s) => ({
    scholar: str(s.scholar ?? s.name),
    research_topic: str(s.research_topic ?? s.topic),
    status: str(s.status),
  }));

  const faqs: FAQ[] = (api.faqs ?? []).map((f) => ({
    question: str(f.question),
    answer: str(f.answer),
  }));

  const badges = flattenStrings(api.badges, 'label');
  const areas_of_specialisation = flattenStrings(api.specialisations, 'name');
  const research_focus = flattenStrings(api.research_focus_areas, 'area');

  return {
    id: str(api.id),
    college_id: collegeId,
    name,
    designation: titleCaseIfUpper(str(api.designation)),
    department: departmentName(api.department),
    aided_or_self: segment,
    qualification: str(api.qualification_summary),
    slug: '', // FINALISED by orchestrator
    experience_years: num(api.experience_years),
    email: str(api.institution_email) || str(api.email),
    display_order: num(api.display_order),
    is_active: api.is_active === true, // recomputed by orchestrator via completeness
    photo_url: null, // FINALISED by orchestrator (re-hosted)
    summary: strOrNull(pick(api, ['professional_summary', 'summary', 'bio'])),
    // MyJKKN scalar counts are `research_papers` / `phd_scholars` / `awards_won`
    // (verified against the live API). Fall back to `_count` names, then to the
    // length of the corresponding detail array.
    research_papers_count: num(api.research_papers) || num(api.research_papers_count) || publications.length,
    phd_scholars_count: num(api.phd_scholars) || num(api.phd_scholars_count) || phd_scholars.length,
    awards_won_count: num(api.awards_won) || num(api.awards_won_count) || awards.length,
    google_scholar_url: strOrNull(api.google_scholar_url),
    researchgate_url: strOrNull(api.researchgate_url),
    orcid_url: strOrNull(api.orcid_url),
    mentoring_description: strOrNull(api.mentoring_description),
    pg_dissertations_guided: num(api.pg_dissertations_guided),
    ug_projects_guided: num(api.ug_projects_guided),
    badges,
    academic_qualifications,
    areas_of_specialisation,
    experience,
    research_focus,
    publications,
    funded_research,
    certifications,
    awards,
    memberships,
    phd_scholars,
    faqs,
    synced_from_api: true,
    staff_id: strOrNull(pick(api, ['staff_id', 'employee_id', 'display_id', 'staff_code'])),
    last_synced_at: '', // FINALISED by orchestrator
    updated_at: '', // FINALISED by orchestrator
  };
}

/** Raw upstream photo URL for a staff row (before re-hosting). */
export function rawPhotoUrl(api: StaffApiRow): string {
  return str(api.profile_picture) || str(api.photo_url);
}
