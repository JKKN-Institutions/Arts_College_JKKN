import { describe, expect, it } from 'vitest';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import { ARTS_AIDED_ID, ARTS_IDS, DENTAL_ID, makeJob } from './test-fixtures';

const artsSelf = makeJob();
const artsAided = makeJob({
  id: '22222222-2222-4222-8222-222222222222',
  institution: { id: ARTS_AIDED_ID, name: 'JKKN College of Arts and Science (Aided)' },
});
const dental = makeJob({
  id: '11111111-1111-4111-8111-111111111111',
  institution: { id: DENTAL_ID, name: 'JKKN Dental College and Hospital' },
});

describe('isUuid', () => {
  it('accepts a uuid and rejects other strings', () => {
    expect(isUuid(DENTAL_ID)).toBe(true);
    expect(isUuid('not-a-uuid')).toBe(false);
    expect(isUuid('../../admin')).toBe(false);
  });
});

describe('filterInstitutionJobs', () => {
  it('keeps jobs of any of the given institutions and drops others', () => {
    expect(filterInstitutionJobs({ data: [artsSelf, dental, artsAided] }, ARTS_IDS)).toEqual([artsSelf, artsAided]);
  });

  it('fails closed when no institution ids are configured', () => {
    expect(filterInstitutionJobs({ data: [artsSelf, dental] }, [])).toEqual([]);
  });

  it('returns [] for malformed payloads', () => {
    expect(filterInstitutionJobs(null, ARTS_IDS)).toEqual([]);
    expect(filterInstitutionJobs({ data: 'oops' }, ARTS_IDS)).toEqual([]);
    expect(filterInstitutionJobs({ error: 'boom' }, ARTS_IDS)).toEqual([]);
  });

  it('drops entries that are not valid jobs', () => {
    const broken = { id: 'x', institution: { id: ARTS_AIDED_ID } };
    expect(filterInstitutionJobs({ data: [broken, artsSelf] }, ARTS_IDS)).toEqual([artsSelf]);
  });
});

describe('pickInstitutionJob', () => {
  it('returns the job when it belongs to one of the institutions', () => {
    expect(pickInstitutionJob({ data: artsSelf }, ARTS_IDS)).toEqual(artsSelf);
    expect(pickInstitutionJob({ data: artsAided }, ARTS_IDS)).toEqual(artsAided);
  });

  it("rejects another college's job", () => {
    expect(pickInstitutionJob({ data: dental }, ARTS_IDS)).toBeNull();
  });

  it('fails closed without institution ids or with a bad payload', () => {
    expect(pickInstitutionJob({ data: artsSelf }, [])).toBeNull();
    expect(pickInstitutionJob({ error: 'Job not found.' }, ARTS_IDS)).toBeNull();
  });
});
