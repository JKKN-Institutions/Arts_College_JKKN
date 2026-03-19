import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Science in Physics",
  description:
    "Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu.",
  keywords: [
    "MSc Physics",
    "MSc Physics college near Erode",
    "postgraduate physics Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
  },
  openGraph: {
    title: "M.Sc Physics | JKKN Arts & Science",
    description:
      "Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Physics"
        description="Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-physics"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Physics",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-physics",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Sc Physics programme?", answer: "The M.Sc Physics programme is a 2-year full-time postgraduate degree comprising four semesters. Each academic year consists of two semesters with a combination of theoretical coursework, laboratory practicals, and research project work. The fourth semester includes a mandatory dissertation component where Learners conduct original research under the guidance of learning facilitators." },
        { question: "What are the career opportunities after M.Sc Physics?", answer: "M.Sc Physics graduates have diverse career opportunities including Research Scientist positions at ISRO, DRDO, BARC, and TIFR; University Lecturer/Professor roles after NET/SLET qualification; Medical Physicist in hospitals; Nuclear Scientist in atomic energy sector; Data Scientist in IT companies; Quantum Computing Researcher; Space Research Engineer; and Electronics Engineer in semiconductor industries." },
        { question: "What is the eligibility criteria for M.Sc Physics admission?", answer: "Candidates must have completed B.Sc Physics or Physical Sciences from a recognized university with a minimum aggregate of 50% marks (45% for reserved categories). Mathematics or Statistics as an ancillary subject is preferred. Admission is based on entrance examination performance or merit in undergraduate studies, followed by a personal interview if required." },
        { question: "What research facilities are available for M.Sc Physics Learners?", answer: "The department offers advanced research facilities including a well-equipped Physics laboratory with modern experimental setups, Computational Physics lab with high-performance computing, Spectroscopy and Optics lab with UV-Vis and FTIR instruments, Electronics workshop, and access to digital libraries with IEEE and Physical Review journal subscriptions. Learners also receive guidance for research project work and paper publications." },
        { question: "Can I pursue higher studies after M.Sc Physics?", answer: "Yes, M.Sc Physics opens pathways to Ph.D. programmes in Physics, Applied Physics, Astrophysics, Material Science, or related fields at universities and research institutions worldwide. Graduates can also pursue research positions at premier institutes like IISc, IITs, TIFR, or international universities. Additionally, qualified candidates can pursue teaching careers in higher education after clearing NET/SLET examinations." },
        { question: "Does the college provide placement assistance for Physics graduates?", answer: "Yes, our dedicated Placement Cell actively supports M.Sc Physics Learners through campus recruitment drives, industry interaction sessions, and research internship opportunities. We have partnerships with organizations like ISRO, DRDO, IT companies, and academic institutions. The placement rate for M.Sc Physics graduates has consistently been above 85% with an average package of Rs. 6 lakhs per annum for research and data science roles." },
        { question: "What makes this M.Sc Physics programme unique?", answer: "Our M.Sc Physics programme stands out due to its research-oriented curriculum, advanced laboratory infrastructure, experienced PhD-qualified learning facilitators, strong emphasis on computational physics and data analysis, collaborations with premier research institutions, opportunities for paper publications, and comprehensive training in both theoretical and experimental physics preparing Learners for careers in research, academia, and industry." },
        { question: "Are computational physics skills taught in the programme?", answer: "Yes, computational physics is an integral part of the curriculum. Learners receive comprehensive training in numerical methods, simulation techniques, and programming using Python, MATLAB, and specialized physics software. The programme covers finite element methods, Monte Carlo simulations, molecular dynamics, and data analysis techniques. A dedicated Computational Physics lab with high-performance computing facilities supports this training." },
      ]} />
      {children}
    </>
  );
}
