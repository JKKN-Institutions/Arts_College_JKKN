import type { PublicJob } from './types';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: string): boolean {
  return UUID_RE.test(value);
}

function isPublicJob(value: unknown): value is PublicJob {
  if (!value || typeof value !== 'object') return false;
  const job = value as Partial<PublicJob>;
  return typeof job.id === 'string' && typeof job.title === 'string' && typeof job.institution?.id === 'string';
}

function payloadData(payload: unknown): unknown {
  return payload && typeof payload === 'object' ? (payload as { data?: unknown }).data : undefined;
}

/** Jobs from a list response that belong to one of `institutionIds`. Fails closed: no ids → []. */
export function filterInstitutionJobs(payload: unknown, institutionIds: readonly string[]): PublicJob[] {
  if (institutionIds.length === 0) return [];
  const data = payloadData(payload);
  if (!Array.isArray(data)) return [];
  return data.filter(isPublicJob).filter((job) => institutionIds.includes(job.institution.id));
}

/** The job from a detail response if it belongs to one of `institutionIds`, else null. */
export function pickInstitutionJob(payload: unknown, institutionIds: readonly string[]): PublicJob | null {
  if (institutionIds.length === 0) return null;
  const data = payloadData(payload);
  return isPublicJob(data) && institutionIds.includes(data.institution.id) ? data : null;
}
