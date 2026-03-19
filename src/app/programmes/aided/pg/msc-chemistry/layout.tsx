import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Science in Chemistry",
  description:
    "Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu.",
  keywords: [
    "MSc Chemistry",
    "MSc Chemistry college near Erode",
    "postgraduate chemistry Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
  },
  openGraph: {
    title: "M.Sc Chemistry | JKKN Arts & Science",
    description:
      "Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Chemistry"
        description="Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-chemistry",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Sc Chemistry programme?", answer: "The M.Sc Chemistry programme is a 2-year full-time postgraduate degree comprising four semesters with intensive laboratory sessions and a mandatory research dissertation in the final semester." },
        { question: "What are the career opportunities after M.Sc Chemistry?", answer: "Graduates can pursue careers as Research Scientists, Quality Control Analysts, Pharmaceutical Researchers, Chemical Engineers, Environmental Chemists, Forensic Scientists, Academic Professors, and can appear for competitive examinations like CSIR-NET, GATE, and UPSC." },
        { question: "What is the eligibility criteria for M.Sc Chemistry admission?", answer: "Candidates must have completed B.Sc in Chemistry or B.Sc with Chemistry as a major subject from a recognized university with minimum 50% aggregate marks (Reserved categories as per government norms)." },
        { question: "Is research dissertation mandatory?", answer: "Yes, a research dissertation is mandatory in the fourth semester. Students work under the guidance of faculty supervisors on original research projects, conduct experiments, analyze data, and submit a comprehensive thesis followed by viva-voce examination." },
        { question: "Can I pursue Ph.D. after M.Sc Chemistry?", answer: "Yes, M.Sc Chemistry graduates are eligible to pursue Ph.D. in Chemistry or related fields. Our programme prepares students for research careers through comprehensive training in research methodology, literature review, and scientific writing." },
        { question: "Does the programme offer specializations?", answer: "The programme covers all major branches of Chemistry - Organic, Inorganic, Physical, and Analytical. In the first three semesters, students can choose electives in specialized areas like Polymer Chemistry, Pharmaceutical Chemistry, Environmental Chemistry, or Materials Science based on their research interests." },
        { question: "What is the placement support for M.Sc Chemistry?", answer: "Our placement cell actively connects students with pharmaceutical companies, chemical industries, research laboratories, and quality control labs. We also provide training for CSIR-NET, GATE, Competitive exams and conducted hands on training, supported by ours MOU companies/Lab. The placement rate for M.Sc Chemistry is consistently above 90%." },
      ]} />
      {children}
    </>
  );
}
