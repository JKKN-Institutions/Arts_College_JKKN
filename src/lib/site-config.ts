/**
 * Site configuration — driven entirely by environment variables.
 * Every value has a sensible fallback so this site (Arts & Science) works
 * with zero extra env vars; other colleges just override what they need.
 *
 * Used by:
 *  - Server components (app/layout.tsx, metadata, etc.)
 *  - Client components can import siteConfig directly (NEXT_PUBLIC_ vars
 *    are inlined at build time, so this file works on both sides).
 */
export const siteConfig = {
  /** Database college identifier — must match the `id` in the colleges table */
  id: process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'arts-science',

  /** Full institution name shown in metadata, headers, footer */
  name:
    process.env.NEXT_PUBLIC_COLLEGE_NAME ??
    'JKKN College of Arts and Science',

  /** Short name used in compact UI (admin sidebar subtitle, login page) */
  shortName:
    process.env.NEXT_PUBLIC_COLLEGE_SHORT_NAME ??
    'Arts & Science',

  /** Main tagline — shown on the hero / homepage */
  tagline:
    process.env.NEXT_PUBLIC_COLLEGE_TAGLINE ??
    'Autonomous institution offering 27+ programmes in Arts, Science and Commerce',

  /** Primary brand color (hex) — used for buttons, headings, accents */
  primaryColor:
    process.env.NEXT_PUBLIC_PRIMARY_COLOR ?? '#0b6d41',

  /** Darker shade for sidebar background and hero gradient */
  primaryDark:
    process.env.NEXT_PUBLIC_PRIMARY_DARK ?? '#002309',

  /** Mid-dark shade for gradient / hover */
  primaryMid:
    process.env.NEXT_PUBLIC_PRIMARY_MID ?? '#004d28',

  /** Hover shade for buttons */
  primaryHover:
    process.env.NEXT_PUBLIC_PRIMARY_HOVER ?? '#095c37',

  /** Contact */
  phone: process.env.NEXT_PUBLIC_COLLEGE_PHONE ?? '+919345855001',
  email: process.env.NEXT_PUBLIC_COLLEGE_EMAIL ?? 'arts@jkkn.ac.in',
  address:
    process.env.NEXT_PUBLIC_COLLEGE_ADDRESS ??
    'JKKN College of Arts and Science, Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal (DT), Tamil Nadu 638183.',

  /** Google Maps embed src URL */
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.495264960904!2d77.72893427452533!3d11.444134546524035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96a44bd8b7e95%3A0x8b2fdaacb4ef1b8d!2sJKKN%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin',

  /** Admission form URL (can differ per college) */
  admissionFormUrl:
    process.env.NEXT_PUBLIC_ADMISSION_FORM_URL ??
    'https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8',

  /** Site domain — used for canonical URLs and footer links */
  domain:
    process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'cas.jkkn.ac.in',

  /** Logo path (relative to /public) */
  logoPath: process.env.NEXT_PUBLIC_LOGO_PATH ?? '/images/logo.png',
} as const;

export type SiteConfig = typeof siteConfig;
