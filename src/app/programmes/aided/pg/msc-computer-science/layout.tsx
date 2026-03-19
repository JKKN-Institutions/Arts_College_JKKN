import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Master of Science in Computer Science",
  description:
    "Study M.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). Aided programme with modern tech infrastructure and IT placements near Erode.",
  keywords: [
    "MSc Computer Science",
    "MSc CS college near Erode",
    "computer science postgraduate Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-computer-science",
  },
  openGraph: {
    title: "M.Sc Computer Science | JKKN Arts & Science",
    description:
      "Study M.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). Aided programme with modern tech infrastructure and IT placements near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Science in Computer Science"
        description="Study M.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). Aided programme with modern tech infrastructure and IT placements near Erode."
        duration="P2Y"
        educationalLevel="PG"
        category="Aided"
        url="/programmes/aided/pg/msc-computer-science"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Aided", url: "https://cas.jkkn.ac.in/programmes/aided" },
          { name: "PG", url: "https://cas.jkkn.ac.in/programmes/aided/pg" },
          {
            name: "M.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/aided/pg/msc-computer-science",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the M.Sc Computer Science (Data Analytics) programme?", answer: "The M.Sc Computer Science (Data Analytics) programme is a 2-year full-time postgraduate degree comprising four semesters. The first three semesters focus on coursework combining theoretical concepts with practical lab sessions, while the fourth semester is dedicated to industry internship and dissertation work. Each semester includes core subjects, practical labs, and elective courses." },
        { question: "What are the higher education options after M.Sc Data Analytics?", answer: "After completing M.Sc Computer Science (Data Analytics), Learners can pursue Ph.D. in Computer Science, Artificial Intelligence, Machine Learning, or Data Science from prestigious universities globally. Additional options include specialized MBA programmes in Business Analytics, post-doctoral research positions, and executive education programmes from institutions like IIMs, ISB, and international universities." },
        { question: "What programming languages and tools are covered in the curriculum?", answer: "The programme provides comprehensive training in Python (primary language), R, SQL, and exposure to Scala. Learners gain proficiency in libraries like NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch, and Keras. Big data tools include Hadoop, Spark, and Kafka. Visualization tools covered include Tableau, Power BI, and D3.js. Cloud platforms AWS, Azure, and GCP are integrated throughout the curriculum." },
        { question: "Is prior coding experience required for this programme?", answer: "While prior programming experience is beneficial, it is not mandatory. The programme begins with foundational courses in Python and data structures. However, candidates should have strong mathematical aptitude, particularly in statistics and linear algebra. A background in computer science, mathematics, or statistics is highly recommended. Bridge courses are available for Learners from non-CS backgrounds." },
        { question: "What is the placement scenario for M.Sc Data Analytics graduates?", answer: "Our M.Sc Data Analytics programme boasts a 95%+ placement record. Entry-level packages range from Rs. 4.5 to Rs. 8 lakhs per annum for Data Analyst roles. Machine Learning Engineers and Data Scientists command packages of Rs. 8-15 lakhs. Top performers have secured positions at companies like TCS, Infosys, Wipro, Accenture, and tech startups with packages exceeding Rs. 12 lakhs. The highest package recorded was Rs. 18 LPA." },
        { question: "Are industry certifications included in the programme?", answer: "Yes, the programme includes preparation for industry-recognized certifications at no additional cost. Learners are trained for AWS Certified Data Analytics, Microsoft Azure Data Scientist Associate, Google Cloud Professional Data Engineer, and Tableau Desktop Specialist certifications. The department conducts mock exams and provides study materials to ensure Learners are well-prepared for these valuable certifications." },
        { question: "How does the internship programme work?", answer: "The mandatory industry internship in the fourth semester spans 4-6 months. The placement cell facilitates internships at partner companies including IT majors, consulting firms, and data-driven startups. Learners work on real business problems, applying their data science skills under industry mentor guidance. Many internships convert to pre-placement offers (PPOs), giving Learners a head start in their careers." },
      ]} />
      {children}
    </>
  );
}
