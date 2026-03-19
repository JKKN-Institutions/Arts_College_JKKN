import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Artificial Intelligence and Data Science",
  description:
    "Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode.",
  keywords: [
    "BSc AI Data Science",
    "BSc AIDS college near Erode",
    "artificial intelligence degree Tamil Nadu",
    "data science Namakkal",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
  },
  openGraph: {
    title: "B.Sc AI & Data Science | JKKN Arts & Science",
    description:
      "Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Artificial Intelligence and Data Science"
        description="Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-ai-ds"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. AI & Data Science",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-ai-ds",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration and structure of the B.Sc AI & Data Science programme?", answer: "The B.Sc Artificial Intelligence and Data Science programme is a 3-year full-time undergraduate degree comprising six semesters. Each year includes two semesters with a combination of core AI/ML subjects, programming labs, practical projects, and skill-based electives. The final semester includes an industry capstone project for real-world implementation experience." },
        { question: "What are the higher education options after B.Sc AI & Data Science?", answer: "After completing B.Sc AI & Data Science, Learners can pursue M.Sc in Data Science, M.Tech in AI/ML, MCA, M.Sc in Computer Science, or specialized programmes in Machine Learning and Deep Learning. Additional options include MBA in Business Analytics, integrated Ph.D programmes in Computer Science, or professional courses in cloud computing and cybersecurity. Many Learners also pursue international masters programmes at top universities." },
        { question: "Do I need prior coding experience to join this programme?", answer: "No prior coding experience is required. The programme starts with foundational programming courses in Python, teaching Learners from scratch. However, having studied Computer Science in 12th grade or having basic programming knowledge can be beneficial. The curriculum is designed to take Learners from beginner to advanced level in programming and AI/ML concepts through structured learning." },
        { question: "What is the expected salary for B.Sc AI & Data Science graduates?", answer: "Entry-level positions for B.Sc AI & Data Science graduates typically offer packages ranging from ₹4 to ₹8 lakhs per annum depending on skills and company. Positions at top tech companies, product startups, and data science roles often offer ₹6-12 lakhs for freshers. With experience and specialization, salaries can increase significantly, with senior AI/ML roles commanding ₹15-40 lakhs per annum. Graduates with strong portfolios and certifications often receive premium offers." },
        { question: "What programming languages and tools will I learn?", answer: "The programme covers Python (primary language), R for statistical computing, Java for enterprise applications, and SQL for databases. You'll learn AI/ML frameworks including TensorFlow, PyTorch, Scikit-learn, Keras, and OpenCV. Big data tools like Apache Spark, Hadoop, and visualization tools like Tableau and Power BI are also covered. Cloud platforms (AWS, Azure, GCP) and version control (Git) are integral parts of the curriculum." },
        { question: "Are there internship and placement opportunities?", answer: "Yes, the programme includes mandatory internship components where Learners work with IT companies, startups, and research organizations. Our dedicated placement cell has tie-ups with 100+ companies including TCS, Infosys, Wipro, Cognizant, Accenture, Tech Mahindra, HCL, and numerous AI startups. We also facilitate participation in campus recruitment drives, hackathons, and industry networking events to maximize placement opportunities." },
        { question: "What makes B.Sc AI & Data Science different from B.Sc Computer Science?", answer: "While B.Sc Computer Science provides broad computing knowledge, B.Sc AI & Data Science is specifically designed for the AI and data science domain. Our curriculum has 70% focus on AI/ML, deep learning, data analytics, and related technologies. You'll work extensively with neural networks, NLP, computer vision, and big data tools that are not typically covered in depth in general CS programmes. The programme prepares you specifically for the booming AI industry with specialized skills and projects." },
      ]} />
      {children}
    </>
  );
}
