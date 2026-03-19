import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Zoology",
  description:
    "Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode.",
  keywords: [
    "BSc Zoology",
    "BSc Zoology college near Erode",
    "zoology degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
  },
  openGraph: {
    title: "B.Sc Zoology | JKKN Arts & Science",
    description:
      "Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Zoology"
        description="Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bsc-zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Sc. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-zoology",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Zoology programme?", answer: "The B.Sc Zoology programme is a 3-year full-time Undergraduate degree comprising six semesters with practical laboratory sessions." },
        { question: "What are the career opportunities after B.Sc Zoology?", answer: "Graduates can pursue careers in wildlife conservation, pharmaceutical research, biotechnology, environmental consulting teaching, forensic science, healthcare, and government services including Forest Service and UPSC examinations." },
        { question: "What is the eligibility criteria for B.Sc Zoology admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Biology as a mandatory subject. Minimum aggregate marks requirement is typically 50% for general category." },
      ]} />
      {children}
    </>
  );
}
