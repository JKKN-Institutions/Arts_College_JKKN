import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce",
  description:
    "Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode.",
  keywords: [
    "BCom",
    "BCom college near Erode",
    "commerce degree Namakkal",
    "aided BCom Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
  },
  openGraph: {
    title: "B.Com — Commerce | JKKN Arts & Science",
    description:
      "Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce"
        description="Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Aided"
        url="/programmes/aided/ug/bcom"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/aided/ug" },
          {
            name: "B.Com",
            url: "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Com programme?", answer: "The B.Com (Bachelor of Commerce) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with examinations at the end of each semester. The programme provides comprehensive knowledge in commerce, accounting, finance, taxation, and business management." },
        { question: "What are the career opportunities after B.Com?", answer: "B.Com graduates have diverse career opportunities including Chartered Accountant, Company Secretary, Cost Accountant, Financial Analyst, Bank Officer, Tax Consultant, Auditor, Business Analyst, and various positions in corporate finance. They can also pursue government jobs through competitive exams like SSC, UPSC, and Bank PO examinations. Top sectors hiring B.Com graduates include Banking, Insurance, IT, Consulting, E-Commerce, and Manufacturing." },
        { question: "Can Science or Arts students pursue B.Com?", answer: "Yes, students from any stream (Commerce, Science, or Arts) who have completed their Higher Secondary (10+2) from a recognized board are eligible to pursue B.Com. While Commerce stream students may have an advantage in foundational subjects like accountancy, students from other streams receive additional support to bridge any knowledge gaps in the first year." },
        { question: "What professional courses can I pursue after B.Com?", answer: "After B.Com, you can pursue several prestigious professional qualifications including CA (Chartered Accountancy) from ICAI, CMA (Cost and Management Accountancy) from ICMAI, CS (Company Secretary) from ICSI, CFA (Chartered Financial Analyst), MBA, M.Com, CFP (Certified Financial Planner), and ACCA. Our department provides foundation coaching support for CA and CMA courses integrated with the regular curriculum." },
        { question: "Is there practical training included in the B.Com programme?", answer: "Yes, our B.Com programme includes extensive practical training. This includes hands-on experience with accounting software like Tally Prime and SAP, practical sessions in taxation and GST filing, a mandatory internship in the fifth semester with CA firms, banks, or corporate finance departments, and project work in the final semester. We also have a finance lab with stock market simulation for investment analysis practice." },
        { question: "What makes this B.Com programme different from others?", answer: "Our B.Com programme stands out due to its industry-aligned curriculum, integrated CA/CMA foundation coaching, state-of-the-art computer and finance labs, experienced Learning Facilitators with industry expertise, strong placement cell with 95% placement record, and partnerships with leading CA firms, banks, and corporates for internships. We also offer specializations in Accounting & Finance, Taxation, Banking & Insurance, and Business Analytics." },
        { question: "What is the fee structure for the B.Com programme?", answer: "The fee structure for our B.Com programme is competitive and affordable. The annual tuition fee is structured to be accessible to students from all backgrounds. Scholarships are available for meritorious students and those from economically weaker sections. For detailed fee information and scholarship details, please contact the admission office or download the fee brochure from our website." },
        { question: "Are internships mandatory in the B.Com programme?", answer: "Yes, internships are a mandatory component of the programme. Students undergo practical training in the fifth semester, typically lasting 4-6 weeks. Our placement cell assists in securing internships with reputed CA firms, banks, corporate finance departments, and other financial institutions. This hands-on experience provides valuable industry exposure and often leads to placement opportunities." },
      ]} />
      {children}
    </>
  );
}
