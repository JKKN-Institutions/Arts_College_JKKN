import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in English at JKKN College of Arts and Science",
  description:
    "Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu.",
  keywords: [
    "BA English",
    "BA English college near Erode",
    "English literature degree Tamil Nadu",
    "arts college Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
  },
  openGraph: {
    title:
      "Bachelor of Arts in English | JKKN College of Arts and Science",
    description:
      "Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in English"
        description="Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/ba-english"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.A. English",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-english",
          },
        ]}
      />
      {children}
    </>
  );
}
