import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Microbiology",
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
    title: "B.Sc Microbiology | JKKN Arts & Science",
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
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Microbiology programme?", answer: "The B.Sc Microbiology programme is a 3-year full-time undergraduate degree comprising six semesters with comprehensive coursework covering general microbiology, immunology, molecular biology, industrial microbiology, and biotechnology applications, along with extensive laboratory practical training and a final year project." },
        { question: "What are the career opportunities after B.Sc Microbiology?", answer: "B.Sc Microbiology graduates can pursue careers as Microbiologists, Quality Control Analysts, Clinical Laboratory Technicians, Research Associates, Food Microbiologists, Pharmaceutical Scientists, Environmental Microbiologists, and Biotechnology Executives in hospitals, diagnostic labs, pharmaceutical companies, food industries, research institutions, and government agencies." },
        { question: "What is the eligibility criteria for B.Sc Microbiology admission?", answer: "Candidates must have completed Higher Secondary (10+2) or equivalent examination with Biology (Botany and Zoology) and Chemistry as core subjects from a recognized board with minimum 50% aggregate marks (45% for reserved categories). Students with Physics, Chemistry, Mathematics (PCM) background with Biology as an additional subject may also be eligible." },
        { question: "What competitive exams can I appear for after B.Sc Microbiology?", answer: "After B.Sc Microbiology, you can appear for various competitive examinations including CSIR-NET (Life Sciences) for JRF and lecturership, GATE (Life Sciences) for M.Tech and PSU jobs, ICMR-JRF for research fellowships, DBT-JRF for biotechnology research, State SET for lectureship eligibility, and UPSC for civil services." },
        { question: "What is the difference between B.Sc Microbiology and B.Sc Biotechnology?", answer: "B.Sc Microbiology focuses specifically on the study of microorganisms including bacteria, viruses, fungi, and their applications in medicine, industry, and environment. B.Sc Biotechnology is broader, covering genetic engineering, tissue culture, bioinformatics, and industrial applications across plants, animals, and microbes." },
        { question: "Are internship and placement opportunities available?", answer: "Yes, the programme includes mandatory internship training with pharmaceutical companies, diagnostic laboratories, research institutions, and food processing industries. Our placement cell facilitates campus recruitment drives with top employers including Biocon, Dr. Reddy's Laboratories, Cipla, Apollo Hospitals, and CSIR laboratories." },
        { question: "What is the scope of B.Sc Microbiology in India?", answer: "B.Sc Microbiology has excellent scope in India with growing demand in pharmaceutical industries, healthcare sector, food processing, biotechnology companies, and research institutions. The expansion of diagnostic labs, vaccine manufacturing units, and increasing focus on food safety has created numerous job opportunities." },
        { question: "What is the average salary for B.Sc Microbiology freshers?", answer: "The starting salary for B.Sc Microbiology freshers typically ranges from ₹2.5 to ₹4.5 lakhs per annum depending on the sector and company. Quality Control Analysts in pharma companies may start at ₹3-4 lakhs, while clinical lab positions offer ₹2.5-3.5 lakhs. With experience and additional certifications, salaries can increase significantly." },
      ]} />
      {children}
    </>
  );
}
