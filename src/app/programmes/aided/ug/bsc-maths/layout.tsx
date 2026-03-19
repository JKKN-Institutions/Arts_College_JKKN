import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "B.Sc Mathematics",
  description:
    "Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu.",
  keywords: [
    "BSc Mathematics",
    "BSc Maths college near Erode",
    "maths degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
  },
  openGraph: {
    title: "B.Sc Mathematics | JKKN Arts & Science",
    description:
      "Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Mathematics"
        description="Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-maths"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Mathematics",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-maths",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Mathematics programme?", answer: "The B.Sc Mathematics programme is a 3-year full-time undergraduate degree comprising six semesters." },
        { question: "What are the career opportunities after B.Sc Mathematics?", answer: "Graduates can pursue careers in data science, actuarial science, banking, teaching, research, financial analysis, software development, civil services, and quantitative analysis in various industries." },
        { question: "What is the eligibility criteria for B.Sc Mathematics admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Mathematics as a subject. Minimum aggregate marks requirement varies by institution." },
      ]} />
      {children}
    </>
  );
}
