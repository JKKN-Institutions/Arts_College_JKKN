import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Science in Zoology at JKKN College of Arts and Science",
  description:
    "Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu.",
  keywords: [
    "MSc Zoology",
    "MSc Zoology college near Erode",
    "postgraduate zoology Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
  },
  openGraph: {
    title:
      "Master of Science in Zoology | JKKN College of Arts and Science",
    description:
      "Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Zoology"
        description="Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
          },
        ]}
      />
      {children}
    </>
  );
}
