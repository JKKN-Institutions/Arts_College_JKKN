import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Arts in History",
  description:
    "Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu.",
  keywords: [
    "MA History",
    "MA History college near Erode",
    "postgraduate history Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
  },
  openGraph: {
    title: "M.A. History | JKKN Arts & Science",
    description:
      "Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Arts in History"
        description="Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/ma-history"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.A. History",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/ma-history",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the MA History programme?", answer: "The MA History programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes core papers in Indian and World History, specialization electives, research methodology, and a mandatory dissertation project in the final semester." },
        { question: "Can I pursue PhD after completing MA History?", answer: "Yes, MA History graduates are eligible to pursue M.Phil and PhD programmes in History, Ancient Indian Culture, Archaeology, and related fields. Our programme provides strong research training that prepares learners for doctoral studies at universities across India and abroad. We also offer NET/SET coaching to help learners qualify for research fellowships." },
        { question: "What are the career prospects after MA History?", answer: "Graduates can pursue careers as historians, research scholars, museum curators, archivists, civil services officers, lecturers, archaeology consultants, heritage managers, and documentary filmmakers. The programme also prepares learners for competitive examinations like UPSC, NET, and SET." },
        { question: "Does the MA History programme include fieldwork?", answer: "Yes, the programme includes mandatory field visits to historical sites, museums, archives, and archaeological excavation sites as part of experiential learning. These field studies provide hands-on experience in historical research, artifact analysis, and heritage documentation." },
        { question: "What research opportunities are available in the programme?", answer: "Learners engage in extensive research through the dissertation project in the final semester. Additionally, they have access to research libraries, archival resources, and opportunities to participate in faculty-led research projects, seminars, and conferences." },
        { question: "Can I specialize in a particular period or theme in history?", answer: "Yes, the programme offers elective papers in the final semester allowing learners to specialize in areas such as ancient history, medieval studies, modern history, cultural history, economic history, or gender studies based on their research interests." },
      ]} />
      {children}
    </>
  );
}
