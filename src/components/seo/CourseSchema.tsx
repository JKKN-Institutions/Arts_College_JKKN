import { ORG_ID, ORG_NAME, SITE_URL } from "./entity";
import { programmeMetadata } from "@/data/programme-metadata";

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  duration: string;
  educationalLevel: "UG" | "PG" | "PhD";
  category: "Aided" | "Self-Finance";
  url: string;
  programPrerequisites?: string;
  educationalCredentialAwarded?: string;
  /**
   * True while the programme is awaiting Periyar University approval.
   * Leave it unset: it is read from programme-metadata by `url`, which is the
   * one place the approval state is recorded. Pass it only to override.
   */
  proposed?: boolean;
}

export function CourseSchema({
  name,
  description,
  provider = ORG_NAME,
  duration,
  educationalLevel,
  category,
  url,
  programPrerequisites,
  educationalCredentialAwarded,
  proposed,
}: CourseSchemaProps) {
  // Call sites are inconsistent: the town pages pass an absolute URL, the
  // programme layouts pass a path. Normalise, or the @id becomes
  // "https://cas.jkkn.ac.inhttps://cas.jkkn.ac.in/..." and the register lookup
  // misses - both of which the 2026-09-18 build check caught.
  const path = url.replace(/^https?:\/\/cas\.jkkn\.ac\.in/, "");

  // 52 call sites pass `url`; none of them should have to remember the approval
  // state as well. Derive it from the register, and let an explicit prop win.
  //
  // Two URL shapes reach here for the SAME programme: /programmes/<funding>/<level>/<slug>
  // and /admissions/<slug>. Until 2026-09-18 only the first was resolved, so the
  // /admissions/ pages for the three programmes awaiting Periyar University
  // approval published them as InStock, and every course held two @ids.
  const metaKey = path.replace(/^\/programmes\//, "").replace(/^\//, "");
  const byPath = programmeMetadata[metaKey];
  const bySlug = byPath
    ? undefined
    : Object.entries(programmeMetadata).find(([, v]) => path === `/admissions/${v.slug}`);
  const meta = byPath ?? bySlug?.[1];
  // The programme's own page is the course entity's home, whichever page renders it.
  const canonicalPath = byPath ? path : bySlug ? `/programmes/${bySlug[0]}` : path;
  const isProposed = proposed ?? meta?.proposed ?? false;
  const courseUrl = `https://cas.jkkn.ac.in${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  // One @id must carry one name. The town pages label the same programme
  // differently from its own page - "B.Com (Bachelor of Commerce)" on /salem vs
  // "Bachelor of Commerce" on /programmes/aided/ug/bcom, and a "B.Sc (Various
  // Specialisations)" that is not a programme at all but points at the chemistry
  // URL. Measured 2026-09-18: 39 distinct Course names for 38 programmes. The
  // register wins; whatever the page passed is kept as an alternateName.
  const canonicalName = meta?.fullName ?? name;
  const alternateName = meta && meta.fullName !== name ? name : undefined;

  const levelMap = {
    UG: "Undergraduate",
    PG: "Postgraduate",
    PhD: "Doctoral",
  };

  const defaultPrerequisites = {
    UG: "Higher Secondary (10+2) from a recognized board",
    PG: "Bachelor's degree in a relevant discipline from a recognized university",
    PhD: "Master's degree in the relevant discipline with qualifying score",
  };

  const defaultCredentials = {
    UG: `Bachelor's Degree (${name})`,
    PG: `Master's Degree (${name})`,
    PhD: "Doctor of Philosophy (Ph.D.)",
  };


  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    // A stable @id, so the same programme quoted on a town page and on its own
    // page is ONE course in the graph rather than several anonymous copies.
    "@id": `${courseUrl}#course`,
    name: canonicalName,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: courseUrl,
    provider: {
      "@type": "CollegeOrUniversity",
      "@id": ORG_ID,
      name: provider,
      url: SITE_URL,
    },
    timeRequired: duration,
    educationalLevel: levelMap[educationalLevel],
    occupationalCategory: category,
    programPrerequisites: programPrerequisites ?? defaultPrerequisites[educationalLevel],
    educationalCredentialAwarded: educationalCredentialAwarded ?? defaultCredentials[educationalLevel],
    inLanguage: "en",
    availableLanguage: ["English", "Tamil"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Full-time",
      courseWorkload: duration,
      instructor: {
        "@type": "Organization",
        name: provider,
      },
    },
    // A proposed programme is still awaiting university approval, so it carries
    // no Offer: "InStock" would tell Google and every AI answer engine that a
    // seat can be taken today. AllCoursesSchema has always honoured this flag;
    // this component did not, so the three proposed programmes advertised
    // themselves as available on their OWN pages until 2026-09-18.
    ...(isProposed
      ? {}
      : {
          offers: {
            "@type": "Offer",
            category: category,
            availability: "https://schema.org/InStock",
            url: "https://www.jkkn.ai/apply/jkkn-admission-2026",
          },
        }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
