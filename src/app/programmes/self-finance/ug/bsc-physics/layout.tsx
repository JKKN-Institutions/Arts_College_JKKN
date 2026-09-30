import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscPhysicsFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Affiliated to Periyar University. Rs 25,000 a year (MQ, 2026-27). Eligibility: +2 with Maths, Physics, Chemistry.";

export const metadata: Metadata = {
  title: "B.Sc Physics in Tamil Nadu - Fees, Eligibility, Syllabus",
  description: DESCRIPTION,
  keywords: [
    "BSc Physics",
    "BSc Physics college in Namakkal",
    "BSc Physics colleges in Tamil Nadu",
    "BSc Physics fees",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
  },
  openGraph: {
    title: "B.Sc Physics | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Physics"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-physics"
        programPrerequisites="Pass in the Higher Secondary (+2) examination with Mathematics, Physics and Chemistry (Periyar University B.Sc Physics regulations)"
        offerPrice={25000}
        offerDescription="Annual tuition fee, management quota, 2026-27. Government quota as per Government norms."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Physics",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
          },
        ]}
      />
      <FAQSchema faqs={bscPhysicsFaqs} />
      {children}
    </>
  );
}
