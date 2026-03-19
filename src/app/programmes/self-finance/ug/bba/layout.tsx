import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Business Administration",
  description:
    "Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu.",
  keywords: [
    "BBA",
    "BBA college near Erode",
    "business administration Tamil Nadu",
    "BBA Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
  },
  openGraph: {
    title: "BBA — Business Admin | JKKN Arts & Science",
    description:
      "Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Business Administration"
        description="Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bba"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "BBA",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the BBA programme?", answer: "The BBA (Bachelor of Business Administration) programme is a 3-year full-time undergraduate degree comprising six semesters with practical projects, internships, and industry exposure." },
        { question: "What are the career opportunities after BBA?", answer: "BBA graduates can pursue careers in corporate management, marketing, finance, banking, human resources, entrepreneurship, business consulting, retail management, supply chain management, and can also pursue higher studies like MBA, CA, CMA, and other professional courses." },
        { question: "What is the eligibility criteria for BBA admission?", answer: "Candidates must have completed Higher Secondary (10+2) from any recognized board with a minimum of 50% aggregate marks. Students from any stream (Science, Commerce, or Arts) can apply for BBA admission." },
        { question: "Is BBA better than B.Com for a management career?", answer: "BBA offers a broader management-focused curriculum covering all business functions, making it ideal for those aiming for general management roles or entrepreneurship. B.Com is more focused on accounting and commerce. BBA provides better exposure to marketing, HR, and strategic management from the undergraduate level." },
        { question: "What is the average salary after completing BBA?", answer: "Entry-level positions for BBA graduates typically offer packages ranging from ₹3 to ₹6 lakhs per annum depending on the role and company. With experience and an MBA, salaries can significantly increase to ₹10-25 lakhs per annum in senior management positions." },
        { question: "Are internships part of the BBA programme?", answer: "Yes, internships are mandatory in the BBA programme. Students complete a summer internship project after the fourth semester and a final project in the sixth semester. The college has tie-ups with leading companies across various industries to provide quality internship opportunities." },
      ]} />
      {children}
    </>
  );
}
