import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Tamil at JKKN College of Arts and Science",
  description:
    "Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu.",
  keywords: [
    "PhD Tamil",
    "PhD Tamil college near Erode",
    "doctoral Tamil literature",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
  },
  openGraph: {
    title:
      "Doctor of Philosophy in Tamil | JKKN College of Arts and Science",
    description:
      "Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Tamil"
        description="Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/tamil"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Tamil",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
          },
        ]}
      />
      {children}
    </>
  );
}
