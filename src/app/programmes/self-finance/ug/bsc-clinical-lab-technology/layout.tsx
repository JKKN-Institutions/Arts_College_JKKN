import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const PATH = "/programmes/self-finance/ug/bsc-clinical-lab-technology";
const URL = `https://cas.jkkn.ac.in${PATH}`;
const NAME = "Bachelor of Science in Clinical Laboratory Technology";

const META_DESCRIPTION =
  "B.Sc. Clinical Laboratory Technology at JKKN College of Arts and Science (Autonomous), Komarapalayam. A 3-year, 6-semester full-time self-finance undergraduate programme affiliated to Periyar University.";

// Only facts already published by the college or Periyar University are stated here.
// Curriculum, career and lab detail is deliberately absent until the department supplies it.
const COURSE_DESCRIPTION =
  "The B.Sc. in Clinical Laboratory Technology is a 3-year, 6-semester self-finance undergraduate programme at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University, Salem. The programme name follows Periyar University's approved list of undergraduate programmes for affiliated colleges (introduced 2021-22).";

export const metadata: Metadata = {
  title: "B.Sc. Clinical Laboratory Technology",
  description: META_DESCRIPTION,
  keywords: [
    "BSc Clinical Laboratory Technology",
    "BSc CLT course near Erode",
    "clinical lab technology degree Tamil Nadu",
    "JKKN Arts and Science self-finance UG",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "B.Sc. Clinical Laboratory Technology | JKKN Arts & Science",
    description: META_DESCRIPTION,
    url: URL,
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name={NAME}
        description={COURSE_DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url={PATH}
        programPrerequisites="10+2 or equivalent from a recognized board"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          { name: "B.Sc. Clinical Laboratory Technology", url: URL },
        ]}
      />
      {children}
    </>
  );
}
