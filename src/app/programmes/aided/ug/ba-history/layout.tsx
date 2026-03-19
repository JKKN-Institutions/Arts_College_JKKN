import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Arts in History",
  description:
    "Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu.",
  keywords: [
    "BA History",
    "BA History college near Erode",
    "history degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
  },
  openGraph: {
    title: "B.A. History | JKKN Arts & Science",
    description:
      "Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Arts in History"
        description="Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/ba-history"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.A. History",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/ba-history",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the BA History programme?", answer: "The BA History (Honours) programme is a 3-year full-time undergraduate degree comprising six semesters." },
        { question: "What are the career opportunities after BA History?", answer: "Graduates can pursue careers in Civil Services (IAS, IPS, IFS through UPSC), State Public Service Commission Jobs, Museum Curator and Archivist, Teaching (after B.Ed.), Archaeology and Heritage Management, Journalism and Historical Research, Tourism and Travel Industry, and Documentary Film Production." },
        { question: "What is the eligibility criteria for BA History admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board. Minimum aggregate marks requirement is 50% (45% for reserved categories). All streams are eligible." },
        { question: "Is there coaching available for UPSC preparation?", answer: "Yes, our college provides dedicated UPSC coaching and guidance with experienced faculty. We have a proven track record with 500+ UPSC selections from our alumni." },
        { question: "What are the higher education options after BA History?", answer: "After completing BA History, students can pursue MA History (Ancient/Medieval/Modern), M.Phil. and Ph.D. in History, B.Ed. for teaching career, MA Archaeology, MBA (Management Studies), Diploma in Museology, Diploma in Archives & Records Management, and Law (LLB)." },
      ]} />
      {children}
    </>
  );
}
