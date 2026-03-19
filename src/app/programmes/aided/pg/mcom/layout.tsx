import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Commerce",
  description:
    "Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu.",
  keywords: [
    "MCom",
    "MCom college near Erode",
    "master of commerce Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
  },
  openGraph: {
    title: "M.Com — Commerce | JKKN Arts & Science",
    description:
      "Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Commerce"
        description="Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/mcom"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Com",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/mcom",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Com programme?", answer: "The M.Com (Master of Commerce) programme is a 2-year full-time postgraduate degree comprising four semesters. Each academic year consists of two semesters, with examinations conducted at the end of each semester. The programme follows the Choice Based Credit System (CBCS) pattern as prescribed by the UGC." },
        { question: "Who is eligible for M.Com admission?", answer: "Candidates must have completed a Bachelor's degree (B.Com/BBA/BBM) from a recognized university with a minimum of 50% aggregate marks (45% for reserved categories). Candidates with B.Com with Accounting specialization, BBA with Finance major, or those who have completed CA/CMA Foundation are preferred." },
        { question: "What career opportunities are available after M.Com?", answer: "M.Com graduates have diverse career opportunities including Finance Manager, Investment Analyst, Tax Consultant, Management Consultant, Corporate Strategist, Research Analyst, and academic positions as University Professor. Graduates can also pursue professional certifications like CA, CMA, CFA, or doctoral programmes like Ph.D." },
        { question: "Can I pursue Ph.D. after M.Com?", answer: "Yes, M.Com graduates are eligible to pursue Ph.D. in Commerce, Management, or related fields. We also provide UGC NET coaching to help learners qualify for research fellowships and Assistant Professor positions. Many of our alumni have successfully pursued doctoral programmes at premier institutions." },
        { question: "What is the average salary after M.Com?", answer: "The average starting salary for M.Com graduates ranges from Rs. 5-9 LPA depending on the role and organization. With experience and professional certifications, salaries can increase significantly. Senior positions like Finance Manager (Rs. 8-15 LPA), Management Consultant (Rs. 10-18 LPA), and CFO (Rs. 20-50 LPA) offer premium packages." },
        { question: "Is dissertation/project mandatory in M.Com?", answer: "Yes, the M.Com programme includes mandatory components: Summer Internship/Field Study in Semester III and a comprehensive Dissertation/Project Work in Semester IV. These practical components provide hands-on experience and help develop research and analytical skills essential for advanced commerce careers." },
        { question: "Are internships part of the M.Com programme?", answer: "Yes, a mandatory summer internship/field study is included in Semester III. Learners gain practical experience with leading companies, banks, financial institutions, or research organizations. The department assists in securing quality internship placements and monitors the learning outcomes throughout the internship period." },
      ]} />
      {children}
    </>
  );
}
