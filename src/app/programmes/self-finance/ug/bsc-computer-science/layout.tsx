import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscCsFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. Rs 34,000 a year (MQ, 2026-27). Eligibility: +2 with Maths, Business Maths, Computer Science or Statistics.";

export const metadata: Metadata = {
  title: "B.Sc Computer Science in Tamil Nadu - Fees, Eligibility, Syllabus",
  description: DESCRIPTION,
  keywords: [
    "BSc Computer Science",
    "BSc Computer Science college in Namakkal",
    "BSc Computer Science colleges in Tamil Nadu",
    "BSc Computer Science without maths",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
  },
  openGraph: {
    title: "B.Sc Computer Science | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-computer-science"
        programPrerequisites="Pass in the Higher Secondary (+2) examination with Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University B.Sc Computer Science regulations)"
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
            name: "B.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
          },
        ]}
      />
      <FAQSchema faqs={bscCsFaqs} />
      {children}
    </>
  );
}
