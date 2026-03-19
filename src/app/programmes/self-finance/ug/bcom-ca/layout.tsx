import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Commerce with Computer Applications",
  description:
    "Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu.",
  keywords: [
    "BCom CA",
    "BCom Computer Applications",
    "BCom CA college near Erode",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
  },
  openGraph: {
    title: "B.Com — Computer Applications | JKKN Arts & Science",
    description:
      "Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Commerce with Computer Applications"
        description="Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bcom-ca"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Com (Computer Applications)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bcom-ca",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the difference between B.Com CA and regular B.Com?", answer: "B.Com CA integrates computer applications with commerce education, providing specialized training in accounting software, database management, and business analytics alongside traditional commerce subjects. This makes graduates more employable in the digital economy." },
        { question: "Can I pursue CA after B.Com CA?", answer: "Yes, absolutely! B.Com CA graduates can register for CA (Chartered Accountant) course. The strong foundation in accounting and finance provided by this programme helps in clearing CA examinations. Many of our students successfully pursue CA alongside or after graduation." },
        { question: "What accounting software will I learn during the programme?", answer: "Students receive hands-on training in Tally ERP, SAP, Microsoft Excel (advanced), QuickBooks, and other industry-standard accounting and business intelligence tools. We also cover emerging technologies in fintech and digital accounting." },
        { question: "Are internships mandatory in this programme?", answer: "Yes, students must complete a mandatory internship during the final year. The college has tie-ups with accounting firms, banks, corporate houses, and financial institutions to provide quality internship opportunities. This practical exposure is crucial for career readiness." },
        { question: "What are the placement opportunities after B.Com CA?", answer: "Our placement cell actively works with accounting firms, banks, insurance companies, IT firms, and corporate organizations. Graduates are placed in roles such as Accountant, Tax Consultant, Financial Analyst, Business Analyst, MIS Executive, and Audit Assistant with competitive salary packages." },
        { question: "Is mathematics mandatory for admission to B.Com CA?", answer: "While not strictly mandatory, having Mathematics or Accountancy at +2 level is preferred as it provides a strong foundation. However, students from other streams can also apply if they meet the minimum eligibility criteria and are willing to put in extra effort." },
      ]} />
      {children}
    </>
  );
}
