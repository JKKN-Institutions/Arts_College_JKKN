import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Commerce",
  description:
    "Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu.",
  keywords: [
    "MCom self finance",
    "MCom college near Erode",
    "postgraduate commerce Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
  },
  openGraph: {
    title: "M.Com — Commerce | JKKN Arts & Science",
    description:
      "Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Commerce"
        description="Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/mcom"
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
            name: "M.Com",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/mcom",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Com programme?", answer: "The M.Com (Master of Commerce) programme is a 2-year full-time postgraduate degree comprising four semesters. The programme provides advanced knowledge in commerce, accounting, finance, and business research methodology, preparing graduates for senior management positions and academic careers." },
        { question: "Who is eligible for M.Com admission?", answer: "Candidates with a Bachelor's degree in Commerce (B.Com), Business Administration (BBA), Business Management (BBM), or equivalent from a recognized university are eligible. The minimum aggregate marks requirement is typically 50% (45% for reserved categories). Learners with B.Com (CA), B.Com (Honours), or related degrees are also eligible." },
        { question: "What career opportunities are available after M.Com?", answer: "M.Com graduates have diverse career options including Finance Manager, Investment Analyst, University Professor, Management Consultant, Chief Financial Officer (CFO), Tax Consultant, Research Analyst, and Corporate Strategist. Graduates can work in sectors like investment banking, consulting firms, academia, corporate finance, and research institutions with higher salary packages compared to undergraduate degree holders." },
        { question: "Can I pursue Ph.D. after M.Com?", answer: "Yes, M.Com is an excellent foundation for pursuing a Ph.D. in Commerce, Accounting, Finance, or related fields. After clearing the UGC NET examination, you become eligible for the position of Assistant Professor in colleges and universities. Many M.Com graduates pursue doctoral research in specialized areas like taxation, financial management, or business analytics." },
        { question: "What is the average salary after M.Com?", answer: "M.Com graduates typically command higher salaries than B.Com graduates. The average starting package ranges from Rs. 5-7 LPA for entry-level positions. With experience and additional certifications like CA, CFA, or CMA, professionals can earn Rs. 10-20 LPA or more. Senior roles like CFO and Finance Directors in large corporations can command packages exceeding Rs. 50 LPA." },
        { question: "Is dissertation/project mandatory in M.Com?", answer: "Yes, the programme includes a mandatory dissertation or project work in the final semester. Learners conduct research under the guidance of experienced Learning Facilitators on topics related to commerce, accounting, finance, or business management. This research component develops critical thinking, analytical skills, and prepares Learners for advanced academic pursuits or research-oriented careers." },
      ]} />
      {children}
    </>
  );
}
