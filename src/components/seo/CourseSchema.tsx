import { ORG_ID, ORG_NAME, SITE_URL } from "./entity";

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
}: CourseSchemaProps) {
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
    name,
    description,
    url: `https://cas.jkkn.ac.in${url}`,
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
    offers: {
      "@type": "Offer",
      category: category,
      availability: "https://schema.org/InStock",
      url: "https://www.jkkn.ai/apply/jkkn-admission-2026",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
