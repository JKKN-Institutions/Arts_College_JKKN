import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Computer Science at JKKN College of Arts and Science",
  description:
    "Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu.",
  keywords: [
    "BSc Computer Science",
    "BSc CS college near Erode",
    "computer science degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
  },
  openGraph: {
    title:
      "Bachelor of Science in Computer Science | JKKN College of Arts and Science",
    description:
      "Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science"
        description="Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-computer-science"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
          },
        ]}
      />
      {children}
    </>
  );
}
