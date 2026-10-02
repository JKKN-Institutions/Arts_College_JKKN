import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscAiDsFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Computer Science (Artificial Intelligence and Data Science) - B.Sc AI & DS - Self-Finance, at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Periyar University. Rs 34,000 a year (MQ, 2026-27). A 3-year arts and science B.Sc, not a B.Tech.";

export const metadata: Metadata = {
  title: "B.Sc AI & Data Science (Computer Science) in Tamil Nadu - Fees, Syllabus",
  description: DESCRIPTION,
  keywords: [
    "BSc AI and Data Science",
    "BSc Computer Science AI and DS",
    "BSc AI DS colleges in Tamil Nadu",
    "artificial intelligence course arts and science college",
    "BSc AI DS college in Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
  },
  openGraph: {
    title: "B.Sc Computer Science (AI & DS) | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science (Artificial Intelligence and Data Science)"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-ai-ds"
        programPrerequisites="Pass in the Higher Secondary (+2) examination; confirm the required +2 subjects with the admissions office"
        offerPrice={34000}
        offerDescription="Annual tuition fee, management quota, 2026-27. Government quota as per Government norms."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. CS (AI & Data Science)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
          },
        ]}
      />
      <FAQSchema faqs={bscAiDsFaqs} />
      {children}
    </>
  );
}
