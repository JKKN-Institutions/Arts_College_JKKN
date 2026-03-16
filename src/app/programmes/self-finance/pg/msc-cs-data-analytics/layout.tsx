import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Master of Science in Computer Science with Data Analytics at JKKN College of Arts and Science",
  description:
    "Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu.",
  keywords: [
    "MSc Data Analytics",
    "MSc CS Data Analytics college near Erode",
    "data analytics degree Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
  },
  openGraph: {
    title:
      "Master of Science in Computer Science with Data Analytics | JKKN College of Arts and Science",
    description:
      "Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Computer Science with Data Analytics"
        description="Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/msc-cs-data-analytics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          {
            name: "Self-Finance",
            url: "https://cas.jkkn.ac.in/programmes/self-finance",
          },
          {
            name: "PG",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg",
          },
          {
            name: "M.Sc. CS (Data Analytics)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
          },
        ]}
      />
      {children}
    </>
  );
}
