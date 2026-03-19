import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "BCA — Computer Applications",
  description:
    "Study BCA at JKKN College of Arts and Science (Autonomous). 3-year UG programme with modern labs, IT placements near Erode, Tamil Nadu.",
  keywords: [
    "BCA",
    "BCA college near Erode",
    "computer applications degree Tamil Nadu",
    "BCA Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
  },
  openGraph: {
    title: "BCA — Computer Applications | JKKN Arts & Science",
    description:
      "Study BCA at JKKN College of Arts and Science (Autonomous). 3-year UG programme with modern labs, IT placements near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Computer Applications"
        description="Study BCA at JKKN College of Arts and Science (Autonomous). 3-year programme in computer applications with modern labs and IT placements near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bca"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "BCA",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What programming languages will I learn in BCA?", answer: "You'll learn C, C++, Java, Python, JavaScript, and modern frameworks like React, Node.js, and React Native. The curriculum covers both fundamental and advanced programming concepts." },
        { question: "What are the career prospects after BCA?", answer: "BCA graduates can work as Software Developers, Web Developers, Mobile App Developers, Data Analysts, Cloud Engineers, DevOps Engineers, Database Administrators, and System Analysts. Average starting packages range from ₹3.5 to 6 LPA." },
        { question: "Does the programme include cloud computing and modern technologies?", answer: "Yes! The curriculum includes AWS, Azure, Cloud Computing, DevOps, Docker, Kubernetes, Machine Learning, AI, Blockchain, and Full Stack Development (MERN Stack)." },
        { question: "Are there internship opportunities?", answer: "Yes, internships are integrated into the programme in Semester VI. Students work on live industry projects and gain hands-on experience with leading tech companies and startups." },
        { question: "What certifications can I pursue alongside BCA?", answer: "We support preparation for AWS Certified Cloud Practitioner, Azure Fundamentals, Oracle Java SE Certification, MongoDB Certified Developer, and Google Cloud certifications through dedicated training." },
        { question: "Is there placement support?", answer: "Yes, we have a dedicated placement cell with 90%+ placement record. Top recruiters include TCS, Infosys, Wipro, Cognizant, Accenture, and various startups and product-based companies." },
        { question: "Can Commerce or Arts students join BCA?", answer: "Yes! BCA is open to students from Science (PCM/PCB/Computer Science), Commerce, Arts, and Diploma holders. Mathematics in 10+2 is preferred but not mandatory at JKKN." },
        { question: "What is the difference between BCA and B.Sc Computer Science?", answer: "BCA focuses more on application development, programming, and software engineering, while B.Sc CS has a stronger theoretical foundation. BCA is more industry-oriented with practical training." },
        { question: "Will I learn mobile app development?", answer: "Yes! The curriculum includes Android development, React Native, and Flutter for building cross-platform mobile applications." },
        { question: "Are there hackathons and coding competitions?", answer: "Yes, students regularly participate in national hackathons, coding competitions, and tech fests. We also organize internal hackathons and project showcases." },
      ]} />
      {children}
    </>
  );
}
