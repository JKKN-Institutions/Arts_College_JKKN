import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "M.Sc CS — Data Analytics",
  description:
    "Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu.",
  keywords: [
    "MSc Data Analytics",
    "MSc CS Data Analytics college near Erode",
    "data analytics degree Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
  },
  openGraph: {
    title: "M.Sc CS — Data Analytics | JKKN Arts & Science",
    description:
      "Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Computer Science with Data Analytics"
        description="Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu."
        duration="P2Y"
        educationalLevel="PG"
        category="Self-Finance"
        url="/programmes/self-finance/pg/msc-cs-data-analytics"
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
            name: "M.Sc. CS (Data Analytics)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/pg/msc-cs-data-analytics",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the M.Sc Computer Science (Data Analytics) programme?", answer: "The M.Sc Computer Science (Data Analytics) programme is a 2-year full-time postgraduate degree comprising four semesters with extensive practical laboratory sessions, industry projects, and dissertation work." },
        { question: "What are the career opportunities after M.Sc Computer Science Data Analytics?", answer: "Graduates can pursue careers as Data Scientists, Machine Learning Engineers, Business Intelligence Analysts, Data Engineers, AI Specialists, Research Scientists, Analytics Consultants, and Big Data Architects in IT companies, startups, financial institutions, healthcare, e-commerce, and research organizations." },
        { question: "What is the eligibility criteria for M.Sc Computer Science Data Analytics admission?", answer: "Candidates must have completed a Bachelor's degree in Computer Science, Information Technology, BCA, B.Sc Mathematics, Statistics, or related discipline from a recognized university with minimum 55% aggregate marks (50% for reserved categories)." },
        { question: "What programming languages are taught in this programme?", answer: "The programme covers Python, R, SQL, Java, Scala, and exposure to cloud platforms like AWS, Azure, and Google Cloud. Learners also gain proficiency in data science libraries including NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch." },
        { question: "What is the average salary for M.Sc Data Analytics graduates?", answer: "Entry-level Data Analyst positions typically offer packages ranging from Rs. 4.5 to Rs. 8 lakhs per annum. With specialization in Machine Learning or AI, packages can range from Rs. 8-15 lakhs. Senior data scientists and ML engineers can command Rs. 15-35+ lakhs per annum depending on skills and experience." },
        { question: "Does the programme include internships?", answer: "Yes, the programme includes a mandatory industry internship in Semester IV. Learners gain hands-on experience working on real-world data science projects at leading companies, startups, or research organizations. The department assists in securing internship placements." },
        { question: "What kind of projects do learners work on?", answer: "Learners work on diverse projects including predictive analytics, machine learning model development, natural language processing, computer vision applications, recommendation systems, time series forecasting, and big data analytics using real-world datasets from various domains." },
        { question: "Is this programme suitable for non-computer science graduates?", answer: "Yes, graduates from B.Sc Mathematics, Statistics, Physics, and related quantitative disciplines with strong mathematical and analytical skills are eligible. However, basic programming knowledge is beneficial. The programme includes foundational courses to bring all Learners to the same level." },
      ]} />
      {children}
    </>
  );
}
