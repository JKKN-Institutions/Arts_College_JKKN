import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in English at JKKN College of Arts and Science",
  description:
    "Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu.",
  keywords: [
    "BA English self finance",
    "BA English college near Erode",
    "English degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
  },
  openGraph: {
    title:
      "Bachelor of Arts in English | JKKN College of Arts and Science",
    description:
      "Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in English"
        description="Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/ba-english"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.A. English",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/ba-english",
          },
        ]}
      />
      {children}
    </>
  );
}
