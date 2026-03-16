import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce at JKKN College of Arts and Science",
  description:
    "Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode.",
  keywords: [
    "BCom",
    "BCom college near Erode",
    "commerce degree Namakkal",
    "aided BCom Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
  },
  openGraph: {
    title: "Bachelor of Commerce | JKKN College of Arts and Science",
    description:
      "Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce"
        description="Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bcom"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Com",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
          },
        ]}
      />
      {children}
    </>
  );
}
