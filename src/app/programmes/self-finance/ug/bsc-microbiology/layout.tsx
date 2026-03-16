import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Microbiology at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Microbiology at JKKN College of Arts and Science (Autonomous). 3-year programme with lab facilities and research opportunities near Erode, Tamil Nadu.",
  keywords: [
    "BSc Microbiology",
    "BSc Microbiology college near Erode",
    "microbiology degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
  },
  openGraph: {
    title:
      "Bachelor of Science in Microbiology | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Microbiology at JKKN College of Arts and Science (Autonomous). 3-year programme with lab facilities and research opportunities near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Microbiology"
        description="Study B.Sc. Microbiology at JKKN College of Arts and Science (Autonomous). 3-year programme with lab facilities and research opportunities near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-microbiology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Microbiology",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-microbiology",
          },
        ]}
      />
      {children}
    </>
  );
}
