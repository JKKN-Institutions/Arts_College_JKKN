import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in History at JKKN College of Arts and Science",
  description:
    "Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu.",
  keywords: [
    "BA History",
    "BA History college near Erode",
    "history degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
  },
  openGraph: {
    title:
      "Bachelor of Arts in History | JKKN College of Arts and Science",
    description:
      "Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in History"
        description="Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/ba-history"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.A. History",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
          },
        ]}
      />
      {children}
    </>
  );
}
