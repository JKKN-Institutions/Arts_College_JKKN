import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscTfdFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Textile and Fashion Designing (B.Sc TFD), a three-year fashion design degree, Self-Finance, at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Periyar University. Rs 32,000 a year (MQ, 2026-27). Any +2 group eligible; diploma holders can join the second year.";

export const metadata: Metadata = {
  title: "B.Sc Textile and Fashion Designing (Fashion Design) - Fees, Eligibility",
  description: DESCRIPTION,
  keywords: [
    "BSc Fashion Designing",
    "BSc Textile and Fashion Designing",
    "BSc TFD full form",
    "fashion designing colleges in Tamil Nadu",
    "BSc fashion designing college in Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
  },
  openGraph: {
    title: "B.Sc Textile and Fashion Designing | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Textile and Fashion Designing"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-textile-fashion-designing"
        programPrerequisites="Pass in any Higher Secondary (+2) course, academic or vocational, of the State Board, CBSE, ICSE or an equivalent examination; a three-year Diploma in a Fashion, Costume, Textile or Apparel course qualifies for direct second-year admission (Periyar University B.Sc Textile and Fashion Designing regulations)"
        offerPrice={32000}
        offerDescription="Annual tuition fee, management quota, 2026-27. Government quota as per Government norms."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Textile & Fashion Designing",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-textile-fashion-designing",
          },
        ]}
      />
      <FAQSchema faqs={bscTfdFaqs} />
      {children}
    </>
  );
}
