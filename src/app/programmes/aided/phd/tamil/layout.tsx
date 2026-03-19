import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Doctor of Philosophy in Tamil",
  description:
    "Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu.",
  keywords: [
    "PhD Tamil",
    "PhD Tamil college near Erode",
    "doctoral Tamil literature",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
  },
  openGraph: {
    title: "Ph.D. Tamil | JKKN Arts & Science",
    description:
      "Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Philosophy in Tamil"
        description="Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu."
        duration="P5Y"
        educationalLevel="PhD"
        category="Aided"
        url="/programmes/aided/phd/tamil"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PhD", url: "https://cas.jkkn.ac.in/programmes/aided/phd" },
          {
            name: "Ph.D. Tamil",
            url: "https://cas.jkkn.ac.in/programmes/aided/phd/tamil",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the Ph.D Tamil programme?", answer: "The Ph.D Tamil programme is a minimum 3-year and maximum 5-year doctoral research programme. Full-time scholars typically complete in 3-4 years, while part-time scholars may take 4-5 years. The programme includes coursework (6 months), research work (2-3 years), and thesis submission with viva voce examination." },
        { question: "What are the career opportunities after Ph.D in Tamil?", answer: "Ph.D Tamil graduates can pursue careers as University Professors, Research Scientists, Tamil Linguists, Academic Authors, Government Tamil Officers, Translation Experts, Cultural Consultants, Publishing Directors, and Policy Researchers in language development. They can work in universities, research institutions, government language departments, and cultural organizations." },
        { question: "What is the eligibility criteria for Ph.D Tamil admission?", answer: "Candidates must have completed M.A./M.Phil in Tamil or related discipline from a recognized university with minimum 55% aggregate marks (50% for reserved categories). Candidates must also qualify UGC NET/SLET or pass the university entrance examination followed by a research aptitude interview and synopsis presentation." },
        { question: "What research areas are available in Ph.D Tamil?", answer: "Research areas include Classical Tamil Literature (Sangam Literature), Modern Tamil Literature, Tamil Linguistics and Grammar, Comparative Dravidian Studies, Tamil Folk Literature, Tamil Translation Studies, Tamil Media and Digital Humanities, Tamil Diaspora Studies, Tamil Epigraphy and Manuscripts, and Tamil Cultural Studies." },
        { question: "Is UGC NET mandatory for Ph.D Tamil admission?", answer: "UGC NET/SLET qualified candidates are given preference and may be exempted from the entrance examination. Candidates without NET/SLET must qualify the university-conducted entrance test followed by an interview for admission. NET/JRF holders are also eligible for fellowships." },
        { question: "What is the coursework component of the Ph.D programme?", answer: "The coursework is mandatory for all Ph.D scholars and typically lasts 6 months. It includes Research Methodology, Advanced Tamil Literature, Tamil Linguistics, Computer Applications in Tamil Research, Research Ethics, and Dissertation Planning. Successful completion of coursework is required before progressing to the research phase." },
        { question: "Are there fellowship opportunities for Ph.D scholars?", answer: "Yes, UGC NET-JRF qualified scholars are eligible for Junior Research Fellowship (JRF) which provides monthly stipend for 5 years (2 years JRF + 3 years SRF). The college also assists scholars in applying for various research grants, project fellowships, and scholarships from UGC, ICSSR, and other funding agencies." },
        { question: "What is the publication requirement for Ph.D degree?", answer: "As per UGC norms, scholars are required to publish at least one research paper in a UGC-CARE listed journal before thesis submission. Additionally, presentation of research papers in national/international conferences and participation in seminars is encouraged. The department provides guidance and support for publication processes." },
      ]} />
      {children}
    </>
  );
}
