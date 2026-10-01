import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscCyberFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Computer Science (Cyber Security), Self-Finance, at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. Rs 32,000 a year (MQ, 2026-27). Maths not compulsory: +2 with Maths, Business Maths, CS or Statistics.";

export const metadata: Metadata = {
  title: "B.Sc Cyber Security in Tamil Nadu - Fees, Eligibility, Syllabus",
  description: DESCRIPTION,
  keywords: [
    "BSc Cyber Security",
    "BSc Cyber Security colleges in Tamil Nadu",
    "BSc Cyber Security college in Namakkal",
    "is maths compulsory for BSc cyber security",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
  },
  openGraph: {
    title: "B.Sc Cyber Security | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science with Cyber Security"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-cs-cyber-security"
        programPrerequisites="Pass in the Higher Secondary (+2) examination with Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University B.Sc Computer Science (Cyber Security) regulations)"
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
            name: "B.Sc. CS (Cyber Security)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
          },
        ]}
      />
      <FAQSchema faqs={bscCyberFaqs} />
      {children}
    </>
  );
}
