import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Zoology at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode.",
  keywords: [
    "BSc Zoology",
    "BSc Zoology college near Erode",
    "zoology degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
  },
  openGraph: {
    title:
      "Bachelor of Science in Zoology | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Zoology"
        description="Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
          },
        ]}
      />
      {children}
    </>
  );
}
