import { describe, expect, it, vi } from 'vitest';
import {
  buildApplicationFormData,
  submitApplication,
  toExperienceMonths,
  validateApplication,
  type ApplicationInput,
} from './apply';

const pdf = (bytes = 10, name = 'cv.pdf') => new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });

const valid = (overrides: Partial<ApplicationInput> = {}): ApplicationInput => ({
  first_name: 'Priya',
  last_name: 'Kumar',
  email: 'priya@example.com',
  phone: '+91 93458-55001',
  qualification: 'M.Sc. Computer Science',
  experience_years: '2',
  experience_extra_months: '6',
  current_job_title: '',
  current_company: '',
  resume: pdf(),
  consent: true,
  company_fax: '',
  ...overrides,
});

describe('toExperienceMonths', () => {
  it('converts years + months within 0–720', () => {
    expect(toExperienceMonths('2', '6')).toBe(30);
    expect(toExperienceMonths('0', '0')).toBe(0);
    expect(toExperienceMonths('60', '0')).toBe(720);
  });

  it('rejects out-of-range, fractional and blank values', () => {
    expect(toExperienceMonths('60', '1')).toBeNull();
    expect(toExperienceMonths('1', '12')).toBeNull();
    expect(toExperienceMonths('1.5', '0')).toBeNull();
    expect(toExperienceMonths('-1', '0')).toBeNull();
    expect(toExperienceMonths('', '0')).toBeNull();
  });
});

describe('validateApplication', () => {
  it('accepts a valid application', () => {
    expect(validateApplication(valid())).toEqual({});
  });

  it('flags missing and malformed fields', () => {
    const errors = validateApplication(
      valid({ first_name: ' ', email: 'nope', phone: '12345', consent: false, experience_years: '' }),
    );
    expect(Object.keys(errors).sort()).toEqual(['consent', 'email', 'experience_months', 'first_name', 'phone']);
  });

  it('rejects phones with letters and over-long text', () => {
    expect(validateApplication(valid({ phone: '93458abc55' }))).toHaveProperty('phone');
    expect(validateApplication(valid({ current_company: 'x'.repeat(151) }))).toHaveProperty('current_company');
  });

  it('checks resume presence, type and size', () => {
    expect(validateApplication(valid({ resume: null }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'cv.png') }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(3 * 1024 * 1024) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(0) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'CV.DOCX') }))).toEqual({});
  });
});

describe('buildApplicationFormData', () => {
  it('maps inputs to API field names', () => {
    const fd = buildApplicationFormData(valid({ first_name: '  Priya ' }), 'cas.jkkn.ac.in');
    expect(fd.get('first_name')).toBe('Priya');
    expect(fd.get('experience_months')).toBe('30');
    expect(fd.get('consent')).toBe('true');
    expect(fd.get('utm_source')).toBe('cas.jkkn.ac.in');
    expect(fd.get('company_fax')).toBe('');
    expect(fd.get('resume')).toBeInstanceOf(File);
    expect(fd.has('current_company')).toBe(false);
  });

  it('includes optional fields when provided', () => {
    const fd = buildApplicationFormData(valid({ current_company: 'Sona College' }), 'cas.jkkn.ac.in');
    expect(fd.get('current_company')).toBe('Sona College');
  });
});

describe('submitApplication', () => {
  const body = new FormData();
  const respond = (status: number, payload: unknown) =>
    vi.fn<typeof fetch>(async () => new Response(typeof payload === 'string' ? payload : JSON.stringify(payload), { status }));

  it('posts to the job apply endpoint and returns the reference', async () => {
    const fetchMock = respond(201, { reference: 'JOB-001-AB12CD34' });
    const result = await submitApplication('abc', body, fetchMock);
    expect(result).toEqual({ ok: true, reference: 'JOB-001-AB12CD34' });
    expect(fetchMock).toHaveBeenCalledWith(
      'https://www.jkkn.ai/api/public/careers/jobs/abc/apply',
      expect.objectContaining({ method: 'POST', body }),
    );
  });

  it('sends no Content-Type header so the browser sets the multipart boundary', async () => {
    const fetchMock = respond(201, { reference: 'R' });
    await submitApplication('abc', body, fetchMock);
    const init = fetchMock.mock.calls[0][1];
    expect(init?.headers).toBeUndefined();
  });

  it('passes through field errors on 400', async () => {
    const result = await submitApplication('abc', body, respond(400, { error: 'Invalid', fields: { email: 'Bad email' } }));
    expect(result).toEqual({
      ok: false,
      status: 400,
      error: 'Please correct the highlighted fields.',
      fields: { email: 'Bad email' },
    });
  });

  it('uses friendly messages for rate limit and closed jobs', async () => {
    const limited = await submitApplication('abc', body, respond(429, { error: 'Too many' }));
    expect(limited.ok === false && limited.error).toMatch(/try again in an hour/);
    const closed = await submitApplication('abc', body, respond(404, { error: 'Job not found.' }));
    expect(closed.ok === false && closed.error).toMatch(/no longer open/);
  });

  it('shows the API message for 5xx and survives non-JSON bodies', async () => {
    const withMessage = await submitApplication('abc', body, respond(503, { error: 'Maintenance, retry soon' }));
    expect(withMessage.ok === false && withMessage.error).toBe('Maintenance, retry soon');
    const html = await submitApplication('abc', body, respond(502, '<html>Bad gateway</html>'));
    expect(html).toMatchObject({ ok: false, status: 502, fields: {} });
  });

  it('reports network failures without throwing', async () => {
    const failing = vi.fn<typeof fetch>(async () => {
      throw new TypeError('Failed to fetch');
    });
    const result = await submitApplication('abc', body, failing);
    expect(result).toMatchObject({ ok: false, status: 0 });
  });
});
