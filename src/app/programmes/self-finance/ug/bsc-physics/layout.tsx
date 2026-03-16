import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Physics at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu.",
  keywords: [
    "BSc Physics",
    "BSc Physics college near Erode",
    "physics degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
  },
  openGraph: {
    title:
      "Bachelor of Science in Physics | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Physics"
        description="Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-physics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Physics",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-physics",
          },
        ]}
      />
      {children}
    </>
  );
}
