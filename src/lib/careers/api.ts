import 'server-only';
import { cache } from 'react';
import { CAREERS_API, CAREERS_REVALIDATE_SECONDS } from './config';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import type { PublicJob } from './types';

const TIMEOUT_MS = 8000;

/**
 * MyJKKN institution ids for this college. Arts & Science is two institutions
 * (aided + self-finance) — the same env vars the faculty sync uses.
 */
function getInstitutionIds(): string[] {
  return [process.env.JKKN_ARTS_AIDED_INSTITUTION_ID, process.env.JKKN_ARTS_SELF_INSTITUTION_ID]
    .map((id) => id?.trim())
    .filter((id): id is string => Boolean(id));
}

export interface CollegeJobsResult {
  jobs: PublicJob[];
  /** false when the API could not be reached or config is missing — show a fallback notice. */
  available: boolean;
}

/** Open jobs for this college only. Never throws (safe for build + sitemap). */
export async function getCollegeJobs(): Promise<CollegeJobsResult> {
  const institutionIds = getInstitutionIds();
  if (institutionIds.length === 0) {
    console.error('[careers] JKKN_ARTS_*_INSTITUTION_ID not set — showing no jobs');
    return { jobs: [], available: false };
  }
  try {
    // The API's institution_id filter takes a single id, so fetch all open jobs once and filter here.
    const res = await fetch(`${CAREERS_API}/jobs`, {
      next: { revalidate: CAREERS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { jobs: filterInstitutionJobs(await res.json(), institutionIds), available: true };
  } catch (error) {
    console.error('[careers] failed to load jobs:', error);
    return { jobs: [], available: false };
  }
}

/**
 * One job of this college, or null when the id is invalid, the job is closed, or it
 * belongs to another institution. Throws on server/network errors so ISR keeps the stale page.
 */
export const getCollegeJob = cache(async (jobId: string): Promise<PublicJob | null> => {
  const institutionIds = getInstitutionIds();
  if (institutionIds.length === 0 || !isUuid(jobId)) return null;
  const res = await fetch(`${CAREERS_API}/jobs/${jobId}`, {
    next: { revalidate: CAREERS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`[careers] job ${jobId}: HTTP ${res.status}`);
  return pickInstitutionJob(await res.json(), institutionIds);
});
