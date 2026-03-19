import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Science in Zoology",
  description:
    "Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu.",
  keywords: [
    "MSc Zoology",
    "MSc Zoology college near Erode",
    "postgraduate zoology Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
  },
  openGraph: {
    title: "M.Sc Zoology | JKKN Arts & Science",
    description:
      "Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Zoology"
        description="Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-zoology",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Sc Zoology programme?", answer: "The M.Sc Zoology programme is a 2-year full-time postgraduate degree comprising four semesters with advanced coursework, specialized electives, and a mandatory dissertation project." },
        { question: "What are the career opportunities after M.Sc Zoology?", answer: "M.Sc Zoology graduates can pursue careers as Research Scientists, Wildlife Biologists, University Lecturers, Conservation Officers, Biotechnology Researchers, Environmental Consultants, and positions in pharmaceutical R&D. The degree also qualifies candidates for Ph.D programs and competitive examinations like CSIR-NET, GATE, and UPSC." },
        { question: "What is the eligibility criteria for M.Sc Zoology admission?", answer: "Candidates must have completed B.Sc in Zoology or equivalent degree in Life Sciences from a recognized university with minimum 50% aggregate marks (45% for reserved categories)." },
        { question: "Is dissertation project mandatory in M.Sc Zoology?", answer: "Yes, the dissertation project is a mandatory component of the M.Sc Zoology programme conducted in the final semester. Learners undertake independent research under faculty supervision, culminating in a thesis submission and viva-voce examination." },
        { question: "Can I pursue Ph.D after M.Sc Zoology?", answer: "Yes, M.Sc Zoology graduates are eligible to pursue Ph.D programs in Zoology, Wildlife Biology, Biotechnology, Ecology, and related fields in Indian and international universities. Many learners also qualify for research fellowships through CSIR-NET, GATE, and other examinations." },
        { question: "Are there opportunities for research publications?", answer: "Yes, learners are encouraged to publish their research work in peer-reviewed journals. The department supports learners in preparing manuscripts, participating in conferences, and presenting research papers at national and international symposia." },
        { question: "What is the placement scenario for M.Sc Zoology graduates?", answer: "M.Sc Zoology graduates have excellent placement opportunities in research institutions, pharmaceutical companies, biotechnology firms, environmental agencies, and academic institutions. The placement cell provides training, internship opportunities, and campus recruitment drives to facilitate career placement." },
      ]} />
      {children}
    </>
  );
}
