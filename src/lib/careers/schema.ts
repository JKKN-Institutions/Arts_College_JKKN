import { siteConfig } from '@/lib/site-config';
import { SITE_URL } from './config';
import type { PublicJob } from './types';

/** Postal address — kept in sync with src/components/seo/OrganizationSchema.tsx. */
const COLLEGE_ADDRESS = {
  streetAddress: 'Natarajapuram, NH-544 (Salem-Coimbatore Highway)',
  addressLocality: 'Komarapalayam',
  addressRegion: 'Tamil Nadu',
  postalCode: '638183',
  addressCountry: 'IN',
};

const EMPLOYMENT_TYPES: Record<string, string> = {
  full_time: 'FULL_TIME',
  part_time: 'PART_TIME',
  contract: 'CONTRACTOR',
  internship: 'INTERN',
  freelance: 'CONTRACTOR',
};

const SALARY_UNITS: Record<string, string> = {
  per_hour: 'HOUR',
  per_day: 'DAY',
  per_week: 'WEEK',
  per_month: 'MONTH',
  per_year: 'YEAR',
};

/** JSON for a <script type="application/ld+json">, with `<` escaped so data cannot close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * schema.org JobPosting for Google Jobs. Returns null when posted_at is missing,
 * because datePosted is a required property.
 */
export function buildJobPostingSchema(
  job: PublicJob,
  pageUrl: string,
  descriptionHtml: string,
): Record<string, unknown> | null {
  if (!job.posted_at) return null;
  const salary = job.salary;
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: descriptionHtml || job.title,
    identifier: { '@type': 'PropertyValue', name: siteConfig.name, value: job.job_code ?? job.id },
    datePosted: job.posted_at,
    ...(job.closes_at ? { validThrough: job.closes_at } : {}),
    employmentType: EMPLOYMENT_TYPES[job.job_type] ?? 'OTHER',
    hiringOrganization: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.name,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...COLLEGE_ADDRESS,
        addressLocality: job.city ?? COLLEGE_ADDRESS.addressLocality,
        addressRegion: job.state ?? COLLEGE_ADDRESS.addressRegion,
      },
    },
    directApply: true,
    url: pageUrl,
    ...(salary && (salary.min != null || salary.max != null)
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: salary.currency || 'INR',
            value: {
              '@type': 'QuantitativeValue',
              ...(salary.min != null ? { minValue: salary.min } : {}),
              ...(salary.max != null ? { maxValue: salary.max } : {}),
              unitText: SALARY_UNITS[salary.duration] ?? 'MONTH',
            },
          },
        }
      : {}),
  };
}
