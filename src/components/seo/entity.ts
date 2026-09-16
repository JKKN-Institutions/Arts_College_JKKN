/**
 * Single source of truth for this college's ENTITY identity.
 *
 * Why this file exists: before 2026-09-16 the site published three different
 * Facebook URLs across three JSON-LD blocks (jkknarts, jkkngroup, jkkncas) and
 * twelve city pages each declared their own anonymous CollegeOrUniversity node.
 * Search engines and AI answer engines saw several colleges, not one.
 *
 * RULE: every sameAs / profile URL for this college lives HERE and nowhere else.
 * Import it. Never re-type a profile URL in a page or component.
 */

/** The one canonical node id for this college. Everything else references it. */
export const ORG_ID = "https://cas.jkkn.ac.in/#organization";

/** The one canonical node id for the website itself. */
export const WEBSITE_ID = "https://cas.jkkn.ac.in/#website";

export const SITE_URL = "https://cas.jkkn.ac.in";

/**
 * The one display name for this college. Components that reference the college
 * as a provider / publisher / organizer must use THIS, never a re-typed string:
 * two different names under one @id is how a clean graph becomes a contradiction.
 */
export const ORG_NAME = "JKKN College of Arts and Science";

/**
 * Parent group site. Use the www host: https://jkkn.ac.in answers 308 and
 * redirects to https://www.jkkn.ac.in (measured 2026-09-16).
 */
export const PARENT_URL = "https://www.jkkn.ac.in";
export const PARENT_ID = "https://www.jkkn.ac.in/#organization";

/**
 * Google Maps pin. Verified 2026-09-16: 302 -> maps place
 * "JKKN College of Arts and Science", place coords 11.4437785, 77.7302436.
 */
export const MAPS_PIN = "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7";

/**
 * Official social profiles for THIS college.
 * Source: user-supplied ground truth 2026-08-13 (given twice, both lists agree)
 * plus a live content check on 2026-09-16.
 *
 * Do NOT add the group-level YouTube channel here. @JKKNINSTITUTIONS belongs to
 * J.K.K. Nattraja Educational Institutions, not to this college; putting a group
 * handle on a college entity is what merges two entities into one.
 */
export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/jkknarts",
  instagram: "https://www.instagram.com/jkknarts",
  linkedin: "https://www.linkedin.com/school/jkknarts",
} as const;

/**
 * Retired URLs. Kept as a record so nobody re-adds them.
 *  - facebook.com/jkkngroup  (was in salem/page.tsx)  HTTP 200 but the body reads
 *    "This content isn't available at the moment" - dead. Also a GROUP handle.
 *  - facebook.com/jkkncas    (was in tiruppur/page.tsx) same dead response.
 *  - https://cas.jkkn.ac.in  (was in 9 city pages) - a page's own URL is `url`,
 *    never `sameAs`.
 * Measured 2026-09-16 by reading the response body, not the status code.
 */
export const RETIRED_SAME_AS = [
  "https://www.facebook.com/jkkngroup",
  "https://www.facebook.com/jkkncas",
] as const;

/**
 * The college's sameAs set.
 *
 * Third-party aggregator profiles (Shiksha, Collegedunia, Careers360, Wikidata)
 * belong here too, but ONLY after each page has been opened and confirmed to
 * describe THIS college - a JKKN-looking slug is not proof. A wrong Shiksha URL
 * pointing at a college in Nanded was removed in commit b976e3f for exactly that
 * reason. None are verified yet, so none are listed.
 */
export const ORG_SAME_AS: readonly string[] = [
  PARENT_URL,
  MAPS_PIN,
  SOCIAL_PROFILES.facebook,
  SOCIAL_PROFILES.instagram,
  SOCIAL_PROFILES.linkedin,
];

/**
 * Reference to the college entity, for use as `about` / `publisher` / `provider`
 * on a page-level node. Emits a pointer, not a second copy of the college.
 */
export const ORG_REF = {
  "@type": "CollegeOrUniversity",
  "@id": ORG_ID,
} as const;
