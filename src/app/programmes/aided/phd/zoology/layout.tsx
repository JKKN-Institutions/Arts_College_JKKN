import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Zoology at JKKN College of Arts and Science",
  description:
    "Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu.",
  keywords: [
    "PhD Zoology",
    "PhD Zoology college near Erode",
    "doctoral zoology Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
  },
  openGraph: {
    title:
      "Doctor of Philosophy in Zoology | JKKN College of Arts and Science",
    description:
      "Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Zoology"
        description="Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
          },
        ]}
      />
      {children}
    </>
  );
}
