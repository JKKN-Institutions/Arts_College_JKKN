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
  provider = "JKKN College of Arts and Science",
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
      "@id": "https://cas.jkkn.ac.in/#organization",
      name: provider,
      url: "https://cas.jkkn.ac.in",
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
      url: "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
