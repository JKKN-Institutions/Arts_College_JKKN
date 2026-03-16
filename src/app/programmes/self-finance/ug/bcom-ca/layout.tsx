import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce with Computer Applications at JKKN College of Arts and Science",
  description:
    "Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu.",
  keywords: [
    "BCom CA",
    "BCom Computer Applications",
    "BCom CA college near Erode",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
  },
  openGraph: {
    title:
      "Bachelor of Commerce with Computer Applications | JKKN College of Arts and Science",
    description:
      "Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce with Computer Applications"
        description="Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-ca"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Computer Applications)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
          },
        ]}
      />
      {children}
    </>
  );
}
