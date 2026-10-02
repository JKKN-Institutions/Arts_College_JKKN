import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { bscViscomFaqs } from "./faqs";

const DESCRIPTION =
  "B.Sc Visual Communication (B.Sc Viscom), Self-Finance, at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu. Periyar University. Rs 32,000 a year (MQ, 2026-27). Any +2 group eligible; no minimum percentage in the regulation.";

export const metadata: Metadata = {
  title: "B.Sc Visual Communication (Viscom) in Tamil Nadu - Fees, Eligibility",
  description: DESCRIPTION,
  keywords: [
    "BSc Visual Communication",
    "BSc Viscom",
    "viscom colleges in Tamil Nadu",
    "viscom full form",
    "BSc visual communication college in Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
  },
  openGraph: {
    title: "B.Sc Visual Communication (Viscom) | JKKN Arts & Science, Komarapalayam",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Visual Communication"
        description={DESCRIPTION}
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-visual-communication"
        programPrerequisites="Pass in the Higher Secondary (+2) examination or an equivalent, or a 10+3 year Diploma; no minimum percentage (Periyar University B.Sc Visual Communication regulations)"
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
            name: "B.Sc. Visual Communication",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication",
          },
        ]}
      />
      <FAQSchema faqs={bscViscomFaqs} />
      {children}
    </>
  );
}
