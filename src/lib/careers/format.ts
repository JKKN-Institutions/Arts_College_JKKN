import type { PublicJob, PublicJobSalary } from './types';

/** JKKN terminology: teaching staff = Senior Learners, non-teaching staff = Team Members. */
const ROLE_LABELS: Record<string, string> = {
  teaching_faculty: 'Senior Learner',
  non_teaching: 'Team Member',
  medical: 'Clinical',
};

const JOB_TYPE_LABELS: Record<string, string> = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
  freelance: 'Freelance',
};

const EDUCATION_LABELS: Record<string, string> = {
  phd: 'Ph.D.',
  masters: "Master's degree",
  bachelors: "Bachelor's degree",
  diploma: 'Diploma',
};

const DURATION_LABELS: Record<string, string> = {
  per_hour: ' / hour',
  per_day: ' / day',
  per_week: ' / week',
  per_month: ' / month',
  per_year: ' / year',
};

function humanize(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function lookup(labels: Record<string, string>, value: string | null): string | null {
  if (!value) return null;
  return labels[value] ?? humanize(value);
}

export const roleCategoryLabel = (value: string | null) => lookup(ROLE_LABELS, value);
export const jobTypeLabel = (value: string | null) => lookup(JOB_TYPE_LABELS, value);
export const educationLabel = (value: string | null) => lookup(EDUCATION_LABELS, value);

const years = (n: number) => (n === 1 ? 'year' : 'years');

export function experienceLabel(min: number | null, max: number | null): string | null {
  if (min == null && max == null) return null;
  if (min != null && max != null) return min === max ? `${min} ${years(min)}` : `${min}–${max} years`;
  if (min != null) return min === 0 ? 'Freshers welcome' : `${min}+ ${years(min)}`;
  return `Up to ${max} ${years(max as number)}`;
}

/** ISO 4217 code for a salary (default INR), or null when the API sends an invalid code. */
export function validCurrency(code: string | null | undefined): string | null {
  const currency = (code || 'INR').trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(currency)) return null;
  try {
    new Intl.NumberFormat('en-IN', { style: 'currency', currency });
    return currency;
  } catch {
    return null;
  }
}

export function salaryLabel(salary: PublicJobSalary | null): string | null {
  if (!salary || (salary.min == null && salary.max == null)) return null;
  const currency = validCurrency(salary.currency);
  if (!currency) return null;
  const money = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
  const per = DURATION_LABELS[salary.duration] ?? '';
  if (salary.min != null && salary.max != null) return `${money.format(salary.min)} – ${money.format(salary.max)}${per}`;
  if (salary.min != null) return `From ${money.format(salary.min)}${per}`;
  return `Up to ${money.format(salary.max as number)}${per}`;
}

export function locationLabel(job: Pick<PublicJob, 'city' | 'state'>): string | null {
  return [job.city, job.state].filter(Boolean).join(', ') || null;
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
});

export function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : DATE_FORMAT.format(date);
}

export function positionsLabel(count: number | null): string | null {
  if (count == null || count < 1) return null;
  return `${count} ${count === 1 ? 'position' : 'positions'}`;
}
