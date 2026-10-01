import { siteConfig } from '@/lib/site-config';

/**
 * Careers integration config. Browser-safe (no secrets).
 * NEXT_PUBLIC_MYJKKN_URL is optional; production MyJKKN host is https://www.jkkn.ai.
 * If the host ever changes, also update connect-src in next.config.ts.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
export const CAREERS_API = `${MYJKKN_URL}/api/public/careers`;
export const CAREERS_PATH = '/careers';
export const SITE_URL = `https://${siteConfig.domain}`;
export const CAREERS_REVALIDATE_SECONDS = 300;
export const RESUME_MAX_BYTES = 2 * 1024 * 1024;
