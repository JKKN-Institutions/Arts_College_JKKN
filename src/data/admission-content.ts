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
  // Eligibility from the Periyar University B.Sc Computer Science OBE regulations, 2021-22
  // onwards (periyaruniversity.ac.in/Documents/2021/syllabus/2021/Affiliated/ug/B.Sc. COMPUTER SCIENCE.pdf):
  // +2 with Mathematics OR Business Mathematics OR Computer Science OR Statistics. GL6-363.
  "self-finance/ug/bsc-computer-science": {
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations)",
      "Academic or vocational stream; Tamil Nadu board or an equivalent examination",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Mathematics is not compulsory if the +2 had Computer Science, Statistics or Business Mathematics",
      "Science and Commerce groups with one of those subjects both qualify",
      "Logical thinking helps in programming courses",
      "Interest in lab work - each core subject has a practical",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Python, Java, PHP, .NET and DBMS with a lab for each core subject",
      "M.Sc Computer Science and MCA available on the same campus",
    ],
    curriculumHighlights: [
      "Year 1: Python Programming; Data Structures and Algorithms",
      "Year 2: Microprocessor and Microcontroller; Web Designing; Java Programming; PHP Programming",
      "Year 3: Software Engineering; Database Management Systems; Computer Networks; .NET Programming",
      "A practical lab for each core subject",
      "Project with viva voce in the final year",
      "Internship or industrial training",
    ],
    faq: [
      {
        question: "Can I do B.Sc Computer Science without Maths?",
        answer:
          "Yes, if your +2 included Computer Science, Statistics or Business Mathematics. The Periyar University regulation accepts any one of Mathematics, Business Mathematics, Computer Science or Statistics.",
      },
      {
        question: "What is the B.Sc Computer Science fee for 2026-27?",
        answer:
          "Rs 34,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },
  // Eligibility from the Periyar University B.Sc Physics regulations, 2023-24 onwards
  // (periyaruniversity.ac.in/Documents/2023/CDC/Affiliated/ug/B.Sc PHYSICS  .pdf):
  // "passed the Higher Secondary examination with Mathematics, Physics and Chemistry".
  // The regulation states no minimum percentage, so none is published here.
  "self-finance/ug/bsc-physics": {
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Mathematics, Physics and Chemistry as subjects (Periyar University regulations)",
      "Tamil Nadu State Board or an examination accepted as equivalent",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "+2 Mathematics-Physics-Chemistry-Biology or Mathematics-Physics-Chemistry-Computer Science group",
      "Commerce and Arts streams are not eligible for B.Sc Physics",
      "Comfort with mathematics helps in every semester",
      "Interest in laboratory work - there is a practical course each semester",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Six core physics practicals, an internship or field visit, and a final-year project",
      "Aided M.Sc Physics available on the same campus",
    ],
    curriculumHighlights: [
      "Semesters I-II: Properties of Matter and Sound; Heat, Thermodynamics and Statistical Physics",
      "Semesters III-IV: General and Classical Mechanics; Optics and Spectroscopy; Electronic Devices",
      "Semester V: Atomic Physics and Lasers; Relativity and Quantum Mechanics; Electricity and Magnetism",
      "Semester VI: Nuclear and Particle Physics; Solid State Physics; Digital Electronics and Microprocessor 8085",
      "A core practical course in every semester",
      "Internship or field visit (Semester V) and a project (Semester VI)",
    ],
    faq: [
      {
        question: "Can a Commerce or Arts +2 student join B.Sc Physics?",
        answer:
          "No. The Periyar University B.Sc Physics regulations require a pass in the Higher Secondary examination with Mathematics, Physics and Chemistry. Commerce and Arts stream students can look at the college's other UG programmes.",
      },
      {
        question: "What is the B.Sc Physics fee for 2026-27?",
        answer:
          "Rs 25,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },
  "self-finance/ug/bcom-ai": {
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval" },
    ],
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

  "self-finance/ug/bsc-textile-fashion-designing-ai": {
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval" },
    ],
    highlights: [
      "Proposed programme — currently awaiting official approval from Periyar University",
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Register your interest via the Contact page; admissions open only after approval",
    ],
    faq: [
      {
        question: "Is B.Sc. Textile and Fashion Designing (AI) approved?",
        answer:
          "This is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will keep you informed.",
      },
    ],
  },

  "self-finance/ug/bsc-visual-communication-ai": {
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
