import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Computer Applications",
  description:
    "Study MCA at JKKN College of Arts and Science (Autonomous). Aided programme with modern computer labs, industry projects, and IT placements near Erode, Tamil Nadu.",
  keywords: [
    "MCA",
    "MCA college near Erode",
    "master of computer applications Tamil Nadu",
    "MCA Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/mca",
  },
  openGraph: {
    title: "MCA — Computer Applications | JKKN Arts & Science",
    description:
      "Study MCA at JKKN College of Arts and Science (Autonomous). Aided programme with modern computer labs, industry projects, and IT placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/mca",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Computer Applications"
        description="Study MCA at JKKN College of Arts and Science (Autonomous). Aided programme with modern computer labs, industry projects, and IT placements near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/mca"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "MCA",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/mca",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the MCA programme?", answer: "The MCA programme is a 2-year full-time postgraduate degree comprising four semesters. The curriculum includes advanced coursework in the first three semesters, followed by a mandatory industry internship 15days and research dissertation in the final semester. This structure ensures comprehensive theoretical knowledge along with practical industry experience." },
        { question: "What is the eligibility for MCA admission?", answer: "Candidates must have completed BCA, B.Sc Computer Science, B.Sc Information Technology, B.E./B.Tech, or any bachelor's degree from a recognized university with Mathematics at 10+2 or graduation level. Minimum aggregate marks of 50% (45% for reserved categories) are required. Candidates with relevant programming experience are given preference during the selection process." },
        { question: "How is MCA different from BCA?", answer: "MCA is a postgraduate programme offering advanced specializations, research opportunities, and deeper technical expertise. While BCA provides foundational computer application knowledge, MCA focuses on advanced topics like AI/ML, cloud architecture, and software engineering. MCA graduates typically command 40-60% higher salaries, qualify for senior technical and managerial positions, and can pursue doctoral studies or research careers." },
        { question: "What are the career prospects after MCA?", answer: "MCA graduates have excellent career prospects with opportunities as Software Architects, AI/ML Engineers, Data Scientists, Cloud Solutions Architects, Technical Project Managers, and Cybersecurity Analysts. Average starting packages range from 6-10 LPA, with top performers receiving 15-25 LPA offers from leading product companies. Graduates can also pursue higher education (Ph.D.) or start technology ventures." },
        { question: "Is industry internship mandatory in MCA?", answer: "Yes, a mandatory 15days industry internship is an integral part of our MCA programme. The internship provides hands-on experience in real-world projects, industry exposure, and networking opportunities. Many Learners receive pre-placement offers from their internship companies. The placement cell assists in securing internships with leading IT companies, startups, and research organizations." },
        { question: "Can I pursue MCA without computer science background?", answer: "Yes, candidates from non-computer science backgrounds can pursue MCA if they have studied Mathematics at 10+2 or graduation level. The programme includes foundational courses in the first semester to bring all Learners to a common level. However, candidates with prior programming knowledge or IT-related qualifications may find the initial transition smoother. Bridge courses and additional support are provided for Learners who need extra preparation." },
      ]} />
      {children}
    </>
  );
}
