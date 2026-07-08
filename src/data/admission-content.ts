import type { AdmissionFAQ } from "@/lib/admission-defaults";

/**
 * Course-specific admission overrides — sparse by design.
 * Any field omitted falls back to defaults derived in
 * src/lib/admission-defaults.ts. Add entries only when a course
 * has something unique to say.
 *
 * Keyed by programme path (e.g., "self-finance/ug/bcom-ai"), NOT slug.
 */
export interface AdmissionOverride {
  intakeSeats?: number;
  eligibilityCriteria?: string[];
  recommendedBackground?: string[];
  documents?: string[];
  faq?: AdmissionFAQ[];
  applicationDeadline?: string;
  careers?: string[];
  curriculumHighlights?: string[];
  highlights?: string[];
  importantDates?: { label: string; date: string }[];
  scholarshipNote?: string;
}

export const admissionOverrides: Record<string, AdmissionOverride> = {
  "self-finance/ug/bcom-ai": {
    intakeSeats: 60,
    eligibilityCriteria: [
      "Pass in Higher Secondary (10+2) from a recognized board",
      "Open to Commerce, Science, and Arts streams",
      "Minimum 50% aggregate marks (general category)",
      "45% for OBC, 40% for SC/ST as per government norms",
    ],
    recommendedBackground: [
      "Any +2 stream is welcome — no programming background required",
      "Basic comfort with mathematics is helpful",
      "Curiosity about technology, finance, and business",
      "Willingness to learn Python, SQL, Power BI from scratch",
    ],
    careers: [
      "AI Financial Analyst",
      "Business Intelligence Analyst",
      "FinTech Associate",
      "RPA Developer (Finance Automation)",
      "Risk & Fraud Analytics Executive",
      "Algorithmic Trading Associate",
      "AI Audit Consultant",
      "Data Analyst (Commerce-Tech)",
    ],
    curriculumHighlights: [
      "Financial Accounting + Python for Business",
      "Fundamentals of AI and Machine Learning",
      "Business Analytics with Power BI / Tableau",
      "Algorithmic Trading & Financial Modelling",
      "AI in Fraud Detection & Risk Analytics",
      "Robotic Process Automation (RPA) for Finance",
      "Two structured industry internships",
      "Capstone project blending Commerce + AI",
    ],
    highlights: [
      "First-of-its-kind Commerce + AI hybrid learning framework",
      "Hands-on tooling: Python, SQL, Power BI, Tally, RPA",
      "Two industry internships (Analytics + FinTech)",
      "Future-ready for MBA Analytics, M.Sc. Data Science, CA + Analytics",
    ],
    faq: [
      {
        question:
          "Do I need a programming or science background to apply for B.Com (AI)?",
        answer:
          "No. The programme is open to students from any stream (Commerce, Science, or Arts) with 50% aggregate in 10+2. Programming, Python, and AI concepts are taught from the basics — no prior coding experience is required.",
      },
      {
        question: "What tools and technologies will I learn?",
        answer:
          "Hands-on training in Python, SQL, Excel (advanced), Power BI, Tableau, Tally, machine learning libraries (scikit-learn, TensorFlow basics), RPA tools (UiPath / Automation Anywhere basics), and AI-powered accounting platforms.",
      },
      {
        question: "Is B.Com (AI) approved by the university?",
        answer:
          "B.Com (AI) is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will notify you as soon as applications open.",
      },
    ],
  },

  "self-finance/ug/bsc-ai-ds": {
    intakeSeats: 60,
    careers: [
      "AI Engineer / Junior ML Engineer",
      "Data Scientist Trainee",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Python / Backend Developer",
      "AI Research Assistant",
      "MLOps Trainee",
      "Computer Vision / NLP Associate",
    ],
    curriculumHighlights: [
      "Python Programming, Statistics for Data Science",
      "Machine Learning Foundations and Deep Learning",
      "Natural Language Processing and Computer Vision",
      "Data Engineering, SQL, Big Data fundamentals",
      "AI Ethics, Responsible AI",
      "Cloud platforms (AWS / GCP basics)",
      "Capstone AI project with real-world dataset",
    ],
    highlights: [
      "Industry-aligned AI & Data Science learning framework",
      "Hands-on tooling: Python, TensorFlow, PyTorch, SQL, Power BI",
      "Internship with AI / analytics firms",
      "Career pathway into MS Data Science, MBA Analytics",
    ],
  },

  "self-finance/ug/bsc-cs-cyber-security": {
    intakeSeats: 60,
    careers: [
      "Cyber Security Analyst (entry-level)",
      "SOC Analyst (Tier 1)",
      "Penetration Tester / Ethical Hacker (junior)",
      "Network Security Trainee",
      "Information Security Auditor (junior)",
      "Cloud Security Associate",
      "Threat Intelligence Analyst",
      "GRC (Governance, Risk & Compliance) Trainee",
    ],
    curriculumHighlights: [
      "Networking and Operating Systems fundamentals",
      "Ethical Hacking and Penetration Testing labs",
      "Cryptography and Secure Coding",
      "Cyber Law, Forensics, and Incident Response",
      "Cloud Security and DevSecOps basics",
      "Industry certifications mapping (CompTIA Security+, CEH)",
    ],
    highlights: [
      "Specialised cyber security learning framework within a CS degree",
      "Hands-on labs for ethical hacking and penetration testing",
      "Industry certifications mapping",
      "Career-ready for SOC, GRC, and security analyst roles",
    ],
  },

  "self-finance/ug/bsc-visual-communication-ai": {
    intakeSeats: 40,
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval, 2026-27 cycle" },
    ],
    faq: [
      {
        question: "Is B.Sc. Visual Communication (AI) approved?",
        answer:
          "This is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will keep you informed.",
      },
    ],
  },
};
