import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Science in Chemistry at JKKN College of Arts and Science",
  description:
    "Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu.",
  keywords: [
    "MSc Chemistry",
    "MSc Chemistry college near Erode",
    "postgraduate chemistry Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
  },
  openGraph: {
    title:
      "Master of Science in Chemistry | JKKN College of Arts and Science",
    description:
      "Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Chemistry"
        description="Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
          },
        ]}
      />
      {children}
    </>
  );
}
