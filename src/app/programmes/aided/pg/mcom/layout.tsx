import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Commerce at JKKN College of Arts and Science",
  description:
    "Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu.",
  keywords: [
    "MCom",
    "MCom college near Erode",
    "master of commerce Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
  },
  openGraph: {
    title:
      "Master of Commerce | JKKN College of Arts and Science",
    description:
      "Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Commerce"
        description="Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/mcom"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Com",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
          },
        ]}
      />
      {children}
    </>
  );
}
