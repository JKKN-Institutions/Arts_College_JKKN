import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Business Administration at JKKN College of Arts and Science",
  description:
    "Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu.",
  keywords: [
    "BBA",
    "BBA college near Erode",
    "business administration Tamil Nadu",
    "BBA Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
  },
  openGraph: {
    title:
      "Bachelor of Business Administration | JKKN College of Arts and Science",
    description:
      "Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Business Administration"
        description="Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bba"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "BBA",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
          },
        ]}
      />
      {children}
    </>
  );
}
