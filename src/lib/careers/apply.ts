import { CAREERS_API, RESUME_MAX_BYTES } from './config';
import type { ApplyResult } from './types';

/**
 * Browser-side application submit for the MyJKKN Public Careers API.
 * MUST run in the applicant's browser — the API rate-limits per IP and only
 * accepts the college site's origin (CORS).
 */

export interface ApplicationInput {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience_years: string;
  experience_extra_months: string;
  current_job_title: string;
  current_company: string;
  resume: File | null;
  consent: boolean;
  /** Honeypot — must stay empty. */
  company_fax: string;
}

export const APPLICATION_FIELD_ORDER = [
  'first_name',
  'last_name',
  'email',
  'phone',
  'qualification',
  'experience_months',
  'current_job_title',
  'current_company',
  'resume',
  'consent',
] as const;

export type ApplicationField = (typeof APPLICATION_FIELD_ORDER)[number];
export type FieldErrors = Partial<Record<ApplicationField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS_RE = /^[\d\s+\-()]+$/;
const RESUME_EXT_RE = /\.(pdf|docx?)$/i;

function toWholeNumber(value: string): number {
  return value.trim() === '' ? Number.NaN : Number(value);
}

export function toExperienceMonths(years: string, months: string): number | null {
  const y = toWholeNumber(years);
  const m = toWholeNumber(months);
  if (!Number.isInteger(y) || !Number.isInteger(m) || y < 0 || m < 0 || m > 11) return null;
  const total = y * 12 + m;
  return total <= 720 ? total : null;
}

export function validateApplication(input: ApplicationInput): FieldErrors {
  const errors: FieldErrors = {};

  const requireText = (key: 'first_name' | 'last_name' | 'qualification', label: string, max: number) => {
    const value = input[key].trim();
    if (!value) errors[key] = `${label} is required.`;
    else if (value.length > max) errors[key] = `${label} must be ${max} characters or fewer.`;
  };
  requireText('first_name', 'First name', 100);
  requireText('last_name', 'Last name', 100);
  requireText('qualification', 'Highest qualification', 200);

  if (!EMAIL_RE.test(input.email.trim())) errors.email = 'Enter a valid email address.';

  const phone = input.phone.trim();
  const digits = phone.replace(/\D/g, '').length;
  if (!PHONE_CHARS_RE.test(phone) || digits < 10 || digits > 15) {
    errors.phone = 'Enter a phone number with 10–15 digits.';
  }

  if (toExperienceMonths(input.experience_years, input.experience_extra_months) === null) {
    errors.experience_months = 'Enter whole years (0–60) and months (0–11). Use 0 if you are a fresher.';
  }

  if (input.current_job_title.trim().length > 150) errors.current_job_title = 'Must be 150 characters or fewer.';
  if (input.current_company.trim().length > 150) errors.current_company = 'Must be 150 characters or fewer.';

  const resume = input.resume;
  if (!resume) errors.resume = 'Attach your resume.';
  else if (!RESUME_EXT_RE.test(resume.name)) errors.resume = 'Resume must be a PDF, DOC or DOCX file.';
  else if (resume.size === 0) errors.resume = 'The selected file is empty.';
  else if (resume.size > RESUME_MAX_BYTES) errors.resume = 'Resume must be smaller than 2 MB.';

  if (!input.consent) errors.consent = 'Please confirm your consent to continue.';

  return errors;
}

export function buildApplicationFormData(input: ApplicationInput, utmSource: string): FormData {
  const fd = new FormData();
  fd.set('first_name', input.first_name.trim());
  fd.set('last_name', input.last_name.trim());
  fd.set('email', input.email.trim());
  fd.set('phone', input.phone.trim());
  fd.set('qualification', input.qualification.trim());
  fd.set('experience_months', String(toExperienceMonths(input.experience_years, input.experience_extra_months)));
  if (input.current_job_title.trim()) fd.set('current_job_title', input.current_job_title.trim());
  if (input.current_company.trim()) fd.set('current_company', input.current_company.trim());
  if (input.resume) fd.set('resume', input.resume);
  fd.set('consent', input.consent ? 'true' : 'false');
  fd.set('utm_source', utmSource.slice(0, 100));
  fd.set('company_fax', input.company_fax);
  return fd;
}

const STATUS_MESSAGES: Record<number, string> = {
  400: 'Please correct the highlighted fields.',
  403: 'Applications can only be submitted from the official JKKN website.',
  404: 'This position is no longer open.',
  413: 'Your resume is too large. Please upload a file under 2 MB.',
  429: 'Too many applications from your network. Please try again in an hour.',
};

const FALLBACK_ERROR = 'Something went wrong on our side. Please try again in a few minutes.';

export async function submitApplication(
  jobId: string,
  formData: FormData,
  fetchImpl: typeof fetch = (input, init) => fetch(input, init),
): Promise<ApplyResult> {
  let res: Response;
  try {
    // No Content-Type header: the browser adds the multipart boundary.
    res = await fetchImpl(`${CAREERS_API}/jobs/${encodeURIComponent(jobId)}/apply`, { method: 'POST', body: formData });
  } catch {
    return {
      ok: false,
      status: 0,
      error: 'We could not reach the application server. Check your connection and try again.',
      fields: {},
    };
  }

  let body: { reference?: unknown; error?: unknown; fields?: unknown } = {};
  try {
    body = await res.json();
  } catch {
    // Non-JSON body (e.g. gateway error page) — fall through to generic handling.
  }

  if (res.status === 201) {
    return { ok: true, reference: typeof body.reference === 'string' ? body.reference : '' };
  }

  const fields: Record<string, string> = {};
  if (body.fields && typeof body.fields === 'object') {
    for (const [key, value] of Object.entries(body.fields)) {
      if (typeof value === 'string') fields[key] = value;
    }
  }
  const apiError = typeof body.error === 'string' && body.error ? body.error : null;
  return { ok: false, status: res.status, error: STATUS_MESSAGES[res.status] ?? apiError ?? FALLBACK_ERROR, fields };
}
