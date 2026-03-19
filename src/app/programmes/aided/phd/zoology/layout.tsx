import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Zoology",
  description:
    "Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu.",
  keywords: [
    "PhD Zoology",
    "PhD Zoology college near Erode",
    "doctoral zoology Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
  },
  openGraph: {
    title: "Ph.D. Zoology | JKKN Arts & Science",
    description:
      "Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Zoology"
        description="Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/zoology"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Zoology",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/zoology",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the Ph.D Zoology programme?", answer: "The Ph.D Zoology programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years." },
        { question: "What are the career opportunities after Ph.D in Zoology?", answer: "Ph.D Zoology graduates can pursue careers as University Professors, Research Scientists, Wildlife Biologists, Conservation Officers, Pharmaceutical Researchers, Environmental Consultants, Forensic Scientists, Government Scientists, and Science Officers in international organizations." },
        { question: "What is the eligibility criteria for Ph.D Zoology admission?", answer: "Candidates must have completed M.Sc./M.Phil in Zoology or related life science discipline from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET/GATE or pass the university entrance examination." },
        { question: "What research areas are available in Ph.D Zoology?", answer: "Research areas include Animal Physiology and Biochemistry, Molecular Biology and Genetics, Ecology and Environmental Biology, Entomology and Pest Management, Immunology and Toxicology, Marine and Freshwater Biology, Wildlife Conservation, Cell Biology and Histology, Parasitology, and Evolutionary Biology." },
        { question: "Is UGC NET mandatory for Ph.D Zoology admission?", answer: "UGC NET/SLET/GATE qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET/GATE must qualify the university-conducted entrance test followed by an interview for admission." },
        { question: "What publications are required for Ph.D completion?", answer: "Scholars must publish a minimum of 2 research papers in UGC-CARE or Scopus-indexed journals. Additionally, presenting papers at national/international conferences and attending workshops/FDPs is mandatory for programme completion." },
        { question: "Are research scholarships available for Ph.D scholars?", answer: "Yes, eligible scholars can apply for UGC NET-JRF, CSIR-JRF, DBT-JRF, ICMR-JRF, and other government fellowships. The institution also provides fee concessions and supports scholars in securing external funding for research projects." },
        { question: "Can I pursue Ph.D part-time while working?", answer: "Yes, working professionals can enroll in part-time Ph.D programmes with NOC from their employer. Part-time scholars are required to maintain regular contact with their research supervisor and attend coursework, seminars, and review meetings as per university regulations." },
      ]} />
      {children}
    </>
  );
}
