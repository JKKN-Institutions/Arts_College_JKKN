import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce in Accounting and Finance",
  description:
    "Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode.",
  keywords: [
    "BCom Accounting Finance",
    "BCom AF college near Erode",
    "accounting degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
  },
  openGraph: {
    title: "B.Com — Accounting & Finance | JKKN Arts & Science",
    description:
      "Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce in Accounting and Finance"
        description="Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-accounting-finance"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Accounting & Finance)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-accounting-finance",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the difference between B.Com and B.Com Accounting and Finance?", answer: "B.Com Accounting and Finance is a specialized commerce programme with deeper focus on financial accounting, corporate finance, taxation, and auditing compared to general B.Com. It includes advanced subjects like Financial Statement Analysis, Investment Management, and Strategic Financial Management, providing stronger foundation for CA/CMA and finance careers." },
        { question: "Can I pursue CA after B.Com Accounting and Finance?", answer: "Yes, B.Com Accounting and Finance graduates are well-prepared for CA (Chartered Accountancy). The programme curriculum aligns with CA Foundation syllabus, and our department provides additional coaching support. Graduates can directly appear for CA Intermediate after completing their degree, with exemptions available for certain papers." },
        { question: "What software training is provided during the programme?", answer: "The programme includes hands-on training in Tally Prime (with GST), Advanced Microsoft Excel, SAP FICO basics, financial modeling using Excel, and data analysis tools. Learners also get exposure to e-filing portals for Income Tax and GST returns, making them industry-ready from day one." },
        { question: "What is the average placement package for graduates?", answer: "Entry-level positions for B.Com Accounting and Finance graduates typically offer packages ranging from ₹3 to ₹5 lakhs per annum depending on the sector and role. Positions in Big 4 firms, investment banks, and top corporates offer higher packages. With CA/CMA qualification and experience, salaries can range from ₹10-25 lakhs per annum." },
        { question: "Is internship mandatory in the programme?", answer: "Yes, the programme includes mandatory internship during the final year. The department facilitates internship placements with CA firms, corporate finance departments, banks, and financial institutions. This provides practical exposure to real-world accounting and finance operations, enhancing employability." },
        { question: "What competitive exams can I prepare for alongside the degree?", answer: "Learners can simultaneously prepare for CA Foundation, CMA Foundation, CFA Level 1, banking examinations (IBPS, SBI PO), RBI Grade B, SSC CGL, and UPSC. The department provides guidance and study materials for these examinations through its dedicated coaching center." },
        { question: "What are the higher education options after this programme?", answer: "Graduates can pursue M.Com, MBA (Finance), M.Phil, Ph.D. in Commerce, or specialized programmes like Master in Financial Management (MFM). Professional qualifications include CA, CMA, CFA, ACCA, CFP, and CAIA. Many graduates also pursue dual specializations combining finance with analytics or fintech." },
        { question: "Are scholarships available for this programme?", answer: "Yes, multiple scholarship options are available including merit scholarships for top performers (covering up to 50% tuition), government scholarships for SC/ST/OBC categories, financial aid for economically weaker sections, and sports quota benefits. The college also has tie-ups with various scholarship foundations for deserving learners." },
      ]} />
      {children}
    </>
  );
}
