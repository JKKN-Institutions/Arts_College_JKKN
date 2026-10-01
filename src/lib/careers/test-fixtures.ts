import type { PublicJob } from './types';

export const ARTS_SELF_ID = 'b0b8a724-7c65-4f07-8047-2a38e8100ad5';
export const ARTS_AIDED_ID = 'a33138b6-4eea-4675-941f-1071bf88b127';
export const DENTAL_ID = 'e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5';
export const ARTS_IDS = [ARTS_AIDED_ID, ARTS_SELF_ID] as const;

export function makeJob(overrides: Partial<PublicJob> = {}): PublicJob {
  return {
    id: 'eab98a80-0000-4000-8000-000000000001',
    job_code: null,
    title: 'Assistant Professor - COMPUTER SCIENCE',
    role_category: 'teaching_faculty',
    job_type: 'full_time',
    description: '<p>Role summary</p>',
    institution: { id: ARTS_SELF_ID, name: 'JKKN College of Arts and Science (Self)' },
    department: { id: 'dept-1', name: 'Computer Science (PG)' },
    city: 'Komarapalayam',
    state: 'Tamil Nadu',
    country: 'India',
    education_level: 'masters',
    min_experience_years: 2,
    max_experience_years: null,
    qualifications: [],
    skills: [],
    positions_open: 1,
    posted_at: null,
    closes_at: null,
    salary: null,
    ...overrides,
  };
}
