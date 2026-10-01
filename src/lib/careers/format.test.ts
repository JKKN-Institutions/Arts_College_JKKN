import { describe, expect, it } from 'vitest';
import {
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from './format';

describe('labels', () => {
  it('maps role categories to JKKN terminology', () => {
    expect(roleCategoryLabel('teaching_faculty')).toBe('Senior Learner');
    expect(roleCategoryLabel('non_teaching')).toBe('Team Member');
    expect(roleCategoryLabel('medical')).toBe('Clinical');
    expect(roleCategoryLabel('research_assistant')).toBe('Research Assistant');
    expect(roleCategoryLabel(null)).toBeNull();
  });

  it('maps job types and education levels', () => {
    expect(jobTypeLabel('full_time')).toBe('Full-time');
    expect(jobTypeLabel('internship')).toBe('Internship');
    expect(educationLabel('phd')).toBe('Ph.D.');
    expect(educationLabel('masters')).toBe("Master's degree");
    expect(educationLabel(null)).toBeNull();
  });
});

describe('experienceLabel', () => {
  it('formats ranges and open-ended values', () => {
    expect(experienceLabel(1, 5)).toBe('1–5 years');
    expect(experienceLabel(10, null)).toBe('10+ years');
    expect(experienceLabel(1, null)).toBe('1+ year');
    expect(experienceLabel(0, null)).toBe('Freshers welcome');
    expect(experienceLabel(null, 3)).toBe('Up to 3 years');
    expect(experienceLabel(2, 2)).toBe('2 years');
    expect(experienceLabel(null, null)).toBeNull();
  });
});

describe('salaryLabel', () => {
  it('formats INR ranges with duration', () => {
    expect(salaryLabel({ min: 30000, max: 50000, currency: 'INR', duration: 'per_month' })).toBe(
      '₹30,000 – ₹50,000 / month',
    );
    expect(salaryLabel({ min: 150000, max: null, currency: 'INR', duration: 'per_year' })).toBe(
      'From ₹1,50,000 / year',
    );
  });

  it('returns null instead of throwing for an invalid currency code', () => {
    expect(salaryLabel({ min: 15000, max: null, currency: 'Rs', duration: 'per_month' })).toBeNull();
  });

  it('returns null when hidden or empty', () => {
    expect(salaryLabel(null)).toBeNull();
    expect(salaryLabel({ min: null, max: null, currency: 'INR', duration: 'per_month' })).toBeNull();
  });
});

describe('misc labels', () => {
  it('formats location, date and positions', () => {
    expect(locationLabel({ city: 'Komarapalayam', state: 'Tamil Nadu' })).toBe('Komarapalayam, Tamil Nadu');
    expect(locationLabel({ city: null, state: null })).toBeNull();
    expect(formatDate('2026-09-01T00:00:00Z')).toBe('1 September 2026');
    expect(formatDate(null)).toBeNull();
    expect(formatDate('garbage')).toBeNull();
    expect(positionsLabel(1)).toBe('1 position');
    expect(positionsLabel(3)).toBe('3 positions');
    expect(positionsLabel(null)).toBeNull();
  });
});
