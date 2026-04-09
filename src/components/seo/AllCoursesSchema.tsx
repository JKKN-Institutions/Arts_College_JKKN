import { programmeMetadata } from "@/data/programme-metadata";

/**
 * Renders JSON-LD Course schema for ALL programmes on the homepage.
 * Uses a single <script> tag with @graph array for efficiency.
 */
export function AllCoursesSchema() {
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

  const courses = Object.entries(programmeMetadata).map(([path, prog]) => ({
    "@type": "Course",
    name: prog.fullName,
    description: prog.description,
    url: `https://cas.jkkn.ac.in/programmes/${path}`,
    provider: {
      "@type": "CollegeOrUniversity",
      "@id": "https://cas.jkkn.ac.in/#organization",
      name: "JKKN College of Arts and Science",
    },
    timeRequired: prog.duration,
    educationalLevel: levelMap[prog.level],
    occupationalCategory: prog.category,
    programPrerequisites: defaultPrerequisites[prog.level],
    educationalCredentialAwarded: `${prog.degree} — ${prog.fullName}`,
    inLanguage: "en",
    availableLanguage: ["English", "Tamil"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Full-time",
      courseWorkload: prog.duration,
    },
    offers: {
      "@type": "Offer",
      category: prog.category,
      availability: "https://schema.org/InStock",
      url: "https://www.jkkn.ai/apply/jkkn-admission-2026",
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": courses,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
