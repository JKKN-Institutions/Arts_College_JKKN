/**
 * Shared types for the MyJKKN faculty sync (Arts & Science).
 *
 * `StaffApiRow`      — the SOURCE shape returned by the MyJKKN Staff API.
 * `FacultyUpsertRow` — the LOCAL shape written to the shared `public.faculty`
 *                      table (Arts column names, which differ from Engineering's).
 *
 * The API-side fields are all optional/permissive because the live MyJKKN
 * contract cannot be verified from this repo; the adapter parses defensively.
 */

// ─── Local (Arts) JSONB element shapes — must match FacultyForm.tsx / detail page ──

export type AcademicQualification = {
  degree: string;
  specialisation: string;
  university: string;
  year: string;
};
export type ExperienceEntry = {
  type: string; // 'Teaching' | 'Clinical'
  period_start: string;
  period_end: string;
  role: string;
  institution: string;
  description: string;
};
export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi_url: string;
  pubmed_url: string;
};
export type FundedResearch = {
  project: string;
  agency: string;
  amount: string;
  period: string;
  status: string; // 'Ongoing' | 'Completed'
};
export type Certification = { name: string; organisation: string; year: string };
export type Award = { award: string; body: string; year: string };
export type Membership = { organisation: string; type: string; since: string };
export type PhdScholar = { scholar: string; research_topic: string; status: string };
export type FAQ = { question: string; answer: string };

// ─── Source: MyJKKN Staff API row ──────────────────────────────────────────────
// Field names follow MYJKKN-FACULTY-SYNC-PROCESS.md §6. Several fields whose exact
// API name is uncertain (display id, professional summary, social links) have a few
// candidate keys; the adapter tries each. The string index signature permits
// defensive access to any additional/unlisted field.

export interface StaffApiRow {
  id?: string;

  // Human-readable display id (e.g. "CAS123"). Exact key varies — adapter checks several.
  staff_id?: string;
  employee_id?: string;
  display_id?: string;
  staff_code?: string;

  first_name?: string;
  last_name?: string;
  designation?: string;
  department?: { department_name?: string } | string | null;

  institution_email?: string;
  email?: string;

  qualification_summary?: string;
  professional_summary?: string;
  summary?: string;
  bio?: string;

  profile_picture?: string;
  photo_url?: string;

  experience_years?: number | string;
  display_order?: number | string;
  is_active?: boolean;
  role_key?: string;

  google_scholar_url?: string;
  researchgate_url?: string;
  orcid_url?: string;

  badges?: Array<{ label?: string } | string>;
  qualifications?: Array<{
    year?: string | number;
    degree?: string;
    institution?: string;
    specialization?: string;
    specialisation?: string;
  }>;
  specialisations?: Array<{ name?: string } | string>;
  experience_entries?: Array<{
    from?: string | number;
    to?: string | number;
    role?: string;
    organisation?: string;
    institution?: string;
    description?: string;
    type?: string;
  }>;
  research_focus_areas?: Array<{ area?: string } | string>;
  publications?: Array<{
    doi?: string;
    url?: string;
    year?: string | number;
    title?: string;
    journal?: string;
    authors?: string;
  }>;
  funded_projects?: Array<{
    title?: string;
    agency?: string;
    amount?: string | number;
    status?: string;
    period?: string;
  }>;
  certifications?: Array<{ name?: string; issuer?: string; organisation?: string; year?: string | number }>;
  awards?: Array<{ year?: string | number; title?: string; name?: string; awarded_by?: string; body?: string }>;
  memberships?: Array<{ body?: string; organisation?: string; role?: string; type?: string; since?: string | number }>;
  phd_scholars_list?: Array<{ name?: string; scholar?: string; topic?: string; research_topic?: string; status?: string }>;
  faqs?: Array<{ question?: string; answer?: string }>;

  // Allow defensive access to any field not modelled above.
  [key: string]: unknown;
}

// ─── Local: row written to public.faculty ─────────────────────────────────────

export interface FacultyUpsertRow {
  id: string;
  college_id: string;
  name: string;
  designation: string;
  department: string;
  aided_or_self: Segment;
  qualification: string;
  slug: string;
  experience_years: number;
  email: string;
  display_order: number;
  is_active: boolean;
  photo_url: string | null;
  summary: string | null;
  research_papers_count: number;
  phd_scholars_count: number;
  awards_won_count: number;
  google_scholar_url: string | null;
  researchgate_url: string | null;
  orcid_url: string | null;
  mentoring_description: string | null;
  pg_dissertations_guided: number;
  ug_projects_guided: number;
  badges: string[];
  academic_qualifications: AcademicQualification[];
  areas_of_specialisation: string[];
  experience: ExperienceEntry[];
  research_focus: string[];
  publications: Publication[];
  funded_research: FundedResearch[];
  certifications: Certification[];
  awards: Award[];
  memberships: Membership[];
  phd_scholars: PhdScholar[];
  faqs: FAQ[];
  // sync bookkeeping
  synced_from_api: boolean;
  staff_id: string | null;
  last_synced_at: string;
  updated_at: string;
  created_at?: string; // set only when inserting a brand-new synced row
}

// ─── Segments & report ─────────────────────────────────────────────────────────

export type Segment = 'Aided' | 'Self-Finance';

export interface SegmentConfig {
  key: Segment;
  institutionId: string;
  apiKey: string;
}

export interface SyncRowReport {
  id: string;
  name: string;
  segment: Segment;
  isActive: boolean;
  missing: string[];
}

export interface SegmentReport {
  ok: boolean;
  fetched: number;
  upserted: number;
  published: number;
  hidden: number;
  orphansDeactivated: number;
  error?: string;
}

export interface SyncReport {
  fetched: number;
  upserted: number;
  published: number;
  hidden: number;
  orphansDeactivated: number;
  perSegment: Record<Segment, SegmentReport>;
  errors: string[];
  warnings: string[];
  rows: SyncRowReport[];
  durationMs: number;
  ts: string;
}
