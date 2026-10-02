import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscMicrobiologyFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Microbiology, Self-Finance, at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Periyar University. Rs 34,000 a year (MQ, 2026-27). Eligibility: +2 with any one of Botany, Zoology or Biology; no entrance test.";

export const metadata: Metadata = {
  title: "B.Sc Microbiology in Tamil Nadu - Fees, Eligibility, Syllabus",
  description: DESCRIPTION,
  keywords: [
    "BSc Microbiology",
    "BSc Microbiology colleges in Tamil Nadu",
    "BSc Microbiology college in Namakkal",
    "is chemistry compulsory for BSc microbiology",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
  },
  openGraph: {
    title: "B.Sc Microbiology | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Microbiology"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-microbiology"
        programPrerequisites="Pass in the Higher Secondary (+2) examination in any one of Botany, Zoology or Biology, academic or vocational stream (Periyar University B.Sc Microbiology regulations)"
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
            name: "B.Sc. Microbiology",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
          },
        ]}
      />
      <FAQSchema faqs={bscMicrobiologyFaqs} />
      {children}
    </>
  );
}
