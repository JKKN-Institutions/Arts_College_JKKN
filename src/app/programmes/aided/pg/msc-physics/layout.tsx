import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Science in Physics at JKKN College of Arts and Science",
  description:
    "Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu.",
  keywords: [
    "MSc Physics",
    "MSc Physics college near Erode",
    "postgraduate physics Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
  },
  openGraph: {
    title:
      "Master of Science in Physics | JKKN College of Arts and Science",
    description:
      "Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Physics"
        description="Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-physics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Physics",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
          },
        ]}
      />
      {children}
    </>
  );
}
