import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Chemistry at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu.",
  keywords: [
    "BSc Chemistry",
    "BSc Chemistry college near Erode",
    "chemistry degree Tamil Nadu",
    "science college Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
  },
  openGraph: {
    title:
      "Bachelor of Science in Chemistry | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Chemistry"
        description="Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
          },
        ]}
      />
      {children}
    </>
  );
}
