interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  duration: string;
  educationalLevel: "UG" | "PG" | "PhD";
  category: "Aided" | "Self-Finance";
  url: string;
}

export function CourseSchema({
  name,
  description,
  provider = "JKKN College of Arts and Science",
  duration,
  educationalLevel,
  category,
  url,
}: CourseSchemaProps) {
  const levelMap = {
    UG: "Undergraduate",
    PG: "Postgraduate",
    PhD: "Doctoral",
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
