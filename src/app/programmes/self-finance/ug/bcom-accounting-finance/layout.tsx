import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce in Accounting and Finance at JKKN College of Arts and Science",
  description:
    "Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode.",
  keywords: [
    "BCom Accounting Finance",
    "BCom AF college near Erode",
    "accounting degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
  },
  openGraph: {
    title:
      "Bachelor of Commerce in Accounting and Finance | JKKN College of Arts and Science",
    description:
      "Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce in Accounting and Finance"
        description="Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-accounting-finance"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Accounting & Finance)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
          },
        ]}
      />
      {children}
    </>
  );
}
