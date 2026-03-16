import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Arts in History at JKKN College of Arts and Science",
  description:
    "Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu.",
  keywords: [
    "MA History",
    "MA History college near Erode",
    "postgraduate history Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
  },
  openGraph: {
    title:
      "Master of Arts in History | JKKN College of Arts and Science",
    description:
      "Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Arts in History"
        description="Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/ma-history"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.A. History",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
          },
        ]}
      />
      {children}
    </>
  );
}
