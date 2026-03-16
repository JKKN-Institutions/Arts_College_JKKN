import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Artificial Intelligence and Data Science at JKKN College of Arts and Science",
  description:
    "Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode.",
  keywords: [
    "BSc AI Data Science",
    "BSc AIDS college near Erode",
    "artificial intelligence degree Tamil Nadu",
    "data science Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
  },
  openGraph: {
    title:
      "Bachelor of Science in Artificial Intelligence and Data Science | JKKN College of Arts and Science",
    description:
      "Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Artificial Intelligence and Data Science"
        description="Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-ai-ds"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. AI & Data Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
          },
        ]}
      />
      {children}
    </>
  );
}
