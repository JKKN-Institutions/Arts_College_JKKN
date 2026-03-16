import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce in Banking and Insurance at JKKN College of Arts and Science",
  description:
    "Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode.",
  keywords: [
    "BCom Banking Insurance",
    "BCom BI college near Erode",
    "banking degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
  },
  openGraph: {
    title:
      "Bachelor of Commerce in Banking and Insurance | JKKN College of Arts and Science",
    description:
      "Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce in Banking and Insurance"
        description="Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-banking-insurance"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Banking & Insurance)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-banking-insurance",
          },
        ]}
      />
      {children}
    </>
  );
}
