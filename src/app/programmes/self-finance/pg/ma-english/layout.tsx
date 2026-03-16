import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Master of Arts in English at JKKN College of Arts and Science",
  description:
    "Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu.",
  keywords: [
    "MA English",
    "MA English college near Erode",
    "postgraduate English Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
  },
  openGraph: {
    title:
      "Master of Arts in English | JKKN College of Arts and Science",
    description:
      "Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Arts in English"
        description="Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/ma-english"
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
            name: "M.A. English",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/ma-english",
          },
        ]}
      />
      {children}
    </>
  );
}
