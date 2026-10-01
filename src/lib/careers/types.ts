/**
 * Types for the MyJKKN Public Careers API (https://www.jkkn.ai/api/public/careers).
 * Nullable fields reflect live data (posted_at, job_code, department, salary are
 * frequently null).
 */

export type JobType = 'full_time' | 'part_time' | 'contract' | 'internship' | 'freelance';

export interface PublicJobRef {
  id: string;
  name: string;
}

export interface PublicJobSalary {
  min: number | null;
  max: number | null;
  currency: string;
  duration: string;
}

export interface PublicJob {
  id: string;
  job_code: string | null;
  title: string;
  role_category: string | null;
  job_type: JobType | string;
  description: string | null;
  institution: PublicJobRef;
  department: PublicJobRef | null;
  city: string | null;
  state: string | null;
  country: string | null;
  education_level: string | null;
  min_experience_years: number | null;
  max_experience_years: number | null;
  qualifications: string[] | null;
  skills: string[] | null;
  positions_open: number | null;
  posted_at: string | null;
  closes_at: string | null;
  salary: PublicJobSalary | null;
}

export interface PublicJobsResponse {
  data: PublicJob[];
  institutions: Array<PublicJobRef & { open_jobs: number }>;
}

export type ApplyResult =
  | { ok: true; reference: string }
  | { ok: false; status: number; error: string; fields: Record<string, string> };
