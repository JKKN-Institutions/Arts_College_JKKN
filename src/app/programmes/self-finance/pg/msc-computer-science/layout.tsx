import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "M.Sc Computer Science",
  description:
    "Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode.",
  keywords: [
    "MSc Computer Science",
    "MSc CS college near Erode",
    "computer science PG Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
  },
  openGraph: {
    title: "M.Sc Computer Science | JKKN Arts & Science",
    description:
      "Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Computer Science"
        description="Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/msc-computer-science"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          {
            name: "Self-Finance",
            url: "https://cas.jkkn.ac.in/programmes/self-finance",
          },
          {
            name: "PG",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg",
          },
          {
            name: "M.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-computer-science",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Sc Computer Science programme?", answer: "The M.Sc Computer Science programme is a 2-year full-time postgraduate degree comprising four semesters with practical laboratory sessions, project work, and industry internship. Each academic year consists of two semesters, with comprehensive examinations conducted at the end of each semester. The programme follows a credit-based system with continuous assessment and semester-end evaluations." },
        { question: "What are the career opportunities after M.Sc Computer Science?", answer: "Graduates can pursue diverse careers as Software Developers, Data Scientists, Machine Learning Engineers, Cloud Architects, Cybersecurity Analysts, AI Researchers, Database Administrators, System Architects, and DevOps Engineers. Additionally, graduates can pursue Ph.D. programmes at prestigious institutions, work in research organizations, or join academia as faculty members." },
        { question: "What is the eligibility criteria for M.Sc Computer Science admission?", answer: "Candidates must have completed Bachelor's degree (B.Sc Computer Science, BCA, B.Sc IT, B.E/B.Tech in CS/IT, or equivalent) from a recognized university with minimum 50% aggregate marks. Basic knowledge of programming, mathematics, and computer science fundamentals is required. Some institutions may conduct entrance tests or interviews for admission." },
        { question: "What is the fee structure for M.Sc Computer Science?", answer: "The fee structure varies based on the category of admission. Please contact the admission office for the current academic year's detailed fee structure. The college offers various scholarship opportunities for meritorious students and those from economically weaker sections. Government scholarships and educational loans are also facilitated through the institution." },
        { question: "Does the programme include practical projects and internships?", answer: "Yes, the programme includes extensive practical components including laboratory sessions in every semester, mini-projects, a major dissertation project, and a mandatory industry internship. Learners work on real-world projects involving AI/ML, data science, cloud computing, and software development. The department maintains partnerships with leading tech companies for internship placements." },
        { question: "What specializations are available in the M.Sc Computer Science programme?", answer: "The programme offers elective courses allowing specialization in areas including Artificial Intelligence and Machine Learning, Data Science and Big Data Analytics, Cloud Computing and DevOps, Cybersecurity and Information Security, Internet of Things (IoT), Blockchain Technology, Natural Language Processing, and Computer Vision. Learners can choose electives based on their career interests." },
        { question: "Are there research opportunities in the M.Sc Computer Science programme?", answer: "Yes, the programme emphasizes research and innovation. Learners undertake a research-oriented dissertation in the final semester, have opportunities to publish papers in conferences and journals, participate in hackathons and coding competitions, and collaborate with faculty on ongoing research projects. The department encourages learners to pursue Ph.D. programmes after completion." },
        { question: "What is the placement support provided by the college?", answer: "Our dedicated Placement Cell actively supports learners through campus recruitment drives with top tech companies, technical interview preparation, resume building workshops, soft skills training, and industry interaction sessions. We have partnerships with leading IT companies, startups, and multinational corporations. The placement rate for M.Sc Computer Science graduates consistently exceeds 90% with excellent salary packages." },
      ]} />
      {children}
    </>
  );
}
