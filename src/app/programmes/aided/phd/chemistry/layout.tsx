import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Chemistry at JKKN College of Arts and Science",
  description:
    "Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu.",
  keywords: [
    "PhD Chemistry",
    "PhD Chemistry college near Erode",
    "doctoral chemistry Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
  },
  openGraph: {
    title:
      "Doctor of Philosophy in Chemistry | JKKN College of Arts and Science",
    description:
      "Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Chemistry"
        description="Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
          },
        ]}
      />
      {children}
    </>
  );
}
