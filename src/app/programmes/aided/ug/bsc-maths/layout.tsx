import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Bachelor of Science in Mathematics at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu.",
  keywords: [
    "BSc Mathematics",
    "BSc Maths college near Erode",
    "maths degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
  },
  openGraph: {
    title:
      "Bachelor of Science in Mathematics | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Mathematics"
        description="Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-maths"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Mathematics",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
          },
        ]}
      />
      {children}
    </>
  );
}
