import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Computer Applications at JKKN College of Arts and Science",
  description:
    "Study BCA at JKKN College of Arts and Science (Autonomous). 3-year programme in computer applications with modern labs and IT placements near Erode, Tamil Nadu.",
  keywords: [
    "BCA",
    "BCA college near Erode",
    "computer applications degree Tamil Nadu",
    "BCA Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
  },
  openGraph: {
    title:
      "Bachelor of Computer Applications | JKKN College of Arts and Science",
    description:
      "Study BCA at JKKN College of Arts and Science (Autonomous). 3-year programme in computer applications with modern labs and IT placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Computer Applications"
        description="Study BCA at JKKN College of Arts and Science (Autonomous). 3-year programme in computer applications with modern labs and IT placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bca"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "BCA",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
          },
        ]}
      />
      {children}
    </>
  );
}
