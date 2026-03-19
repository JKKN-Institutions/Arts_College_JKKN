import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Chemistry",
  description:
    "Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu.",
  keywords: [
    "PhD Chemistry",
    "PhD Chemistry college near Erode",
    "doctoral chemistry Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
  },
  openGraph: {
    title: "Ph.D. Chemistry | JKKN Arts & Science",
    description:
      "Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Chemistry"
        description="Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/chemistry"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Chemistry",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/chemistry",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the Ph.D Chemistry programme?", answer: "The Ph.D Chemistry programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years depending on research complexity, publication requirements, and thesis completion. Extensions may be granted as per UGC regulations in exceptional cases." },
        { question: "What is the eligibility criteria for Ph.D Chemistry admission?", answer: "Candidates must have completed M.Sc./M.Phil in Chemistry or related discipline (Biochemistry, Industrial Chemistry, Pharmaceutical Chemistry) from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET/GATE or pass the university entrance examination followed by a personal interview." },
        { question: "Is UGC NET/GATE mandatory for Ph.D Chemistry admission?", answer: "UGC NET/SLET/GATE qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET/GATE must qualify the university-conducted entrance test followed by an interview for admission. GATE qualified candidates may also be eligible for CSIR/UGC fellowships providing monthly stipend." },
        { question: "What research areas are available for Ph.D in Chemistry?", answer: "Research areas include Organic Synthesis and Natural Products Chemistry, Inorganic Coordination Chemistry, Physical and Theoretical Chemistry, Analytical and Environmental Chemistry, Nanochemistry and Materials Science, Green and Sustainable Chemistry, Medicinal Chemistry and Drug Design, Polymer Chemistry, and Computational Chemistry." },
        { question: "What are the publication requirements for Ph.D Chemistry?", answer: "Research scholars must publish a minimum of 2 research papers in UGC-approved or Scopus/Web of Science indexed journals during their doctoral programme. At least one publication should be in a peer-reviewed international journal. Publication requirements must be fulfilled before submission of the doctoral thesis for evaluation." },
        { question: "What career prospects exist after Ph.D in Chemistry?", answer: "Ph.D Chemistry graduates can pursue careers as University Professors, Research Scientists in CSIR/DRDO/ISRO labs, R&D Managers in pharmaceutical and chemical industries, Quality Control Directors, Patent Scientists, Environmental Consultants, Forensic Chemists, and Product Development Scientists. They can also pursue postdoctoral research positions in India and abroad." },
        { question: "Is there financial support available for Ph.D scholars?", answer: "Yes, UGC NET/GATE qualified scholars are eligible for Junior Research Fellowship (JRF) with a monthly stipend of Rs. 31,000 for the first two years, which increases to Rs. 35,000 as Senior Research Fellowship (SRF) for the remaining period. The fellowship also includes an annual contingency grant for research expenses." },
        { question: "What is the course work requirement for Ph.D Chemistry?", answer: "All Ph.D scholars must complete a mandatory course work in the first year consisting of Research Methodology, Advanced Chemistry topics, Computer Applications in Chemistry, and soft skills development. The course work must be completed with a minimum grade before proceeding to the comprehensive examination and full-time research." },
      ]} />
      {children}
    </>
  );
}
