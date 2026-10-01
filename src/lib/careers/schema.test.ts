import { describe, expect, it } from 'vitest';
import { buildJobPostingSchema, serializeJsonLd } from './schema';
import { makeJob } from './test-fixtures';

const URL = 'https://cas.jkkn.ac.in/careers/abc';

describe('buildJobPostingSchema', () => {
  it('returns null when posted_at is missing (Google requires datePosted)', () => {
    expect(buildJobPostingSchema(makeJob({ posted_at: null }), URL, '<p>x</p>')).toBeNull();
  });

  it('builds a JobPosting with employment type, hiring organisation and address', () => {
    const schema = buildJobPostingSchema(makeJob({ posted_at: '2026-09-01T00:00:00Z' }), URL, '<p>x</p>');
    expect(schema).toMatchObject({
      '@type': 'JobPosting',
      title: 'Assistant Professor - COMPUTER SCIENCE',
      datePosted: '2026-09-01T00:00:00Z',
      employmentType: 'FULL_TIME',
      directApply: true,
      url: URL,
      hiringOrganization: { name: 'JKKN College of Arts and Science', sameAs: 'https://cas.jkkn.ac.in' },
      jobLocation: { address: { addressLocality: 'Komarapalayam', postalCode: '638183', addressCountry: 'IN' } },
    });
    expect(schema).not.toHaveProperty('baseSalary');
    expect(schema).not.toHaveProperty('validThrough');
  });

  it('adds salary and closing date when present', () => {
    const schema = buildJobPostingSchema(
      makeJob({
        posted_at: '2026-09-01T00:00:00Z',
        closes_at: '2026-10-01T00:00:00Z',
        salary: { min: 30000, max: 50000, currency: 'INR', duration: 'per_month' },
      }),
      URL,
      '<p>x</p>',
    );
    expect(schema).toMatchObject({
      validThrough: '2026-10-01T00:00:00Z',
      baseSalary: { currency: 'INR', value: { minValue: 30000, maxValue: 50000, unitText: 'MONTH' } },
    });
  });
});

describe('serializeJsonLd', () => {
  it('escapes < so data cannot close the script tag, and stays valid JSON', () => {
    const data = { title: '</script><script>alert(1)</script>' };
    const out = serializeJsonLd(data);
    expect(out).not.toContain('</script>');
    expect(JSON.parse(out)).toEqual(data);
  });
});
