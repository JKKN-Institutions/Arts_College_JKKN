import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Computer Science",
  description:
    "Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu.",
  keywords: [
    "BSc Computer Science",
    "BSc CS college near Erode",
    "computer science degree Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
  },
  openGraph: {
    title: "B.Sc Computer Science | JKKN Arts & Science",
    description:
      "Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science"
        description="Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-computer-science"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Computer Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-computer-science",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Computer Science programme?", answer: "The B.Sc Computer Science programme is a 3-year full-time undergraduate degree comprising six semesters. Each semester includes theoretical coursework, practical laboratory sessions, and project work. The programme follows a progressive curriculum that builds foundational skills in the first year, advances to specialized topics in the second year, and focuses on emerging technologies and capstone projects in the final year." },
        { question: "What are the career opportunities after B.Sc Computer Science?", answer: "Graduates can pursue diverse careers in software development, web development, data science, artificial intelligence, cybersecurity, cloud computing, IT consulting, database administration, and mobile app development. They can work in top tech companies like TCS, Infosys, Wipro, Cognizant, startups, government IT departments, and research institutions. Career roles include Software Engineer, Data Analyst, AI/ML Engineer, Cloud Architect, Cybersecurity Analyst, and Full-Stack Developer." },
        { question: "What is the eligibility criteria for B.Sc Computer Science admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Mathematics as a compulsory subject. The minimum aggregate marks requirement is typically 50% for general category and 45% for reserved categories. Candidates from Science stream with Physics, Chemistry, Mathematics (PCM) or those with Computer Science as a subject are preferred. Commerce students with Mathematics can also apply." },
        { question: "What is the expected salary for B.Sc Computer Science graduates?", answer: "Entry-level positions for B.Sc Computer Science graduates typically offer packages ranging from ₹3 to ₹6 lakhs per annum depending on the company, role, and skills. Positions in product-based companies, data science, AI/ML, and cloud computing often offer higher packages ranging from ₹6 to ₹12 lakhs. With experience and additional certifications, salaries can increase significantly, with senior positions commanding ₹15-25 lakhs per annum or more." },
        { question: "Can I pursue higher studies after B.Sc Computer Science?", answer: "Yes, graduates have multiple higher education pathways. Popular options include M.Sc in Computer Science, MCA (Master of Computer Applications), MBA in IT Management, M.Tech in specialized areas, and MS programs abroad. Learners can also pursue specialized master's programs in Data Science, Artificial Intelligence, Cybersecurity, or Cloud Computing. The department provides guidance for competitive exams like GATE, CAT, GRE, and university entrance tests." },
        { question: "Does the college provide placement assistance?", answer: "Yes, our dedicated Placement Cell actively supports learners through campus recruitment drives, technical training workshops, resume building sessions, mock interviews, and coding competitions. We have partnerships with leading IT companies including TCS, Infosys, Wipro, Cognizant, and numerous startups. The placement rate for B.Sc Computer Science graduates has consistently been above 95% with competitive packages." },
        { question: "What programming languages will I learn in this programme?", answer: "The programme covers multiple programming languages including C, C++, Java, Python, JavaScript, and SQL. You will also learn modern frameworks and technologies like React, Angular, Node.js, Django, Spring Boot, Android development, and cloud platforms (AWS, Azure). The curriculum is regularly updated to include emerging technologies and industry-relevant tools." },
        { question: "Are internships mandatory in the B.Sc Computer Science programme?", answer: "Yes, the programme includes a mandatory internship component or project work in the final year. Learners gain practical industry experience through internships at IT companies, startups, research labs, or by working on real-world software development projects. The department assists in securing internship placements with reputed organizations and provides guidance throughout the internship period." },
      ]} />
      {children}
    </>
  );
}
