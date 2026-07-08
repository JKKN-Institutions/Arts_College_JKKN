import type { ProgrammeInfo } from "@/data/programme-metadata";
import { admissionOverrides, type AdmissionOverride } from "@/data/admission-content";

export interface AdmissionFAQ {
  question: string;
  answer: string;
}

export interface AdmissionContent {
  intakeSeats: number;
  eligibilityCriteria: string[];
  recommendedBackground: string[];
  documents: string[];
  feesGQ: string;
  feesMQ: number | null;
  faq: AdmissionFAQ[];
  applicationDeadline: string;
  careers: string[];
  curriculumHighlights: string[];
  highlights: string[];
  importantDates: { label: string; date: string }[];
  scholarshipNote: string;
}

// ─────────────────────────────────────────────────────────────────────────
// Per-programme Self-Finance MQ annual fees (₹)
// Mirrors the fee table in src/app/admissions/page.tsx
// ─────────────────────────────────────────────────────────────────────────
const SELF_FINANCE_FEES: Record<string, number> = {
  "self-finance/ug/ba-english": 24500,
  "self-finance/ug/bba": 25500,
  "self-finance/ug/bca": 33000,
  "self-finance/ug/bcom-accounting-finance": 34000,
  "self-finance/ug/bcom-banking-insurance": 34000,
  "self-finance/ug/bcom-ca": 34000,
  "self-finance/ug/bcom-ai": 34000,
  "self-finance/ug/bsc-ai-ds": 34000,
  "self-finance/ug/bsc-computer-science": 34000,
  "self-finance/ug/bsc-cs-cyber-security": 32000,
  "self-finance/ug/bsc-microbiology": 34000,
  "self-finance/ug/bsc-physics": 25000,
  "self-finance/ug/bsc-textile-fashion-designing": 32000,
  "self-finance/ug/bsc-textile-fashion-designing-ai": 34000,
  "self-finance/ug/bsc-visual-communication": 32000,
  "self-finance/ug/bsc-visual-communication-ai": 34000,
  "self-finance/pg/ma-english": 20000,
  "self-finance/pg/mcom": 24000,
  "self-finance/pg/msc-computer-science": 25000,
  "self-finance/pg/msc-cs-data-analytics": 21000,
  "self-finance/pg/msc-mathematics": 20000,
};

// ─────────────────────────────────────────────────────────────────────────
// Default intake seats by level — used when override doesn't specify
// ─────────────────────────────────────────────────────────────────────────
const DEFAULT_SEATS: Record<ProgrammeInfo["level"], number> = {
  UG: 60,
  PG: 40,
  PhD: 10,
};

// ─────────────────────────────────────────────────────────────────────────
// Level-based defaults
// ─────────────────────────────────────────────────────────────────────────
const LEVEL_DEFAULTS: Record<
  ProgrammeInfo["level"],
  {
    eligibility: string[];
    background: string[];
    documents: string[];
    faq: AdmissionFAQ[];
  }
> = {
  UG: {
    eligibility: [
      "Pass in Higher Secondary (10+2) from a recognized board",
      "Minimum 50% aggregate marks (general category)",
      "45% for OBC, 40% for SC/ST as per government norms",
      "Subject prerequisites depend on the chosen programme",
    ],
    background: [
      "Any +2 stream — Science, Commerce or Arts (programme-specific)",
      "Basic command of English helps in coursework",
      "No prior college experience needed",
      "Interest in the chosen discipline matters most",
    ],
    documents: [
      "10th Mark Sheet and Certificate",
      "12th / HSC Mark Sheet and Certificate",
      "Transfer Certificate (TC)",
      "Community Certificate",
      "Aadhaar Card (photocopy)",
      "4 Passport-Size Photographs",
      "Migration Certificate (if applicable)",
      "Income Certificate (for scholarships)",
    ],
    faq: [
      {
        question: "What is the eligibility for this UG programme?",
        answer:
          "Candidates must have passed the Higher Secondary Examination (10+2) from a recognized board with a minimum of 50% aggregate (45% for OBC and 40% for SC/ST as per government norms). Subject-specific prerequisites may apply for science and commerce streams.",
      },
      {
        question: "How do I apply?",
        answer:
          "You can apply online at admission.jkkn.ac.in or visit the campus in person. Fill the application form, upload the required documents, and pay the application fee. Our admissions team will guide you through every step.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Yes — merit-based scholarships for academic toppers, plus all government scholarships including BC/MBC/SC/ST scholarships and first-generation graduate support. Submit your income certificate during admission for eligibility review.",
      },
    ],
  },
  PG: {
    eligibility: [
      "Bachelor's degree in a relevant discipline from a recognized university",
      "Minimum 50% aggregate marks at UG level (general category)",
      "45% for OBC, 40% for SC/ST as per government norms",
      "Relevant subject background as per programme requirements",
    ],
    background: [
      "Bachelor's degree in the relevant or allied discipline",
      "Familiarity with foundational concepts of the subject",
      "Research aptitude is advantageous",
      "Open to working professionals (full-time mode)",
    ],
    documents: [
      "10th Mark Sheet and Certificate",
      "12th / HSC Mark Sheet and Certificate",
      "UG Provisional/Degree Certificate",
      "UG Consolidated Mark Sheet",
      "Transfer Certificate (TC)",
      "Community Certificate",
      "Aadhaar Card (photocopy)",
      "4 Passport-Size Photographs",
      "Migration Certificate (if from another university)",
      "Income Certificate (for scholarships)",
    ],
    faq: [
      {
        question: "What is the eligibility for this PG programme?",
        answer:
          "Candidates must hold a relevant Bachelor's degree from a recognized university with a minimum of 50% aggregate (45% for OBC and 40% for SC/ST as per government norms). Subject-specific prerequisites apply for science and computing streams.",
      },
      {
        question: "Are working professionals eligible?",
        answer:
          "Yes, working professionals can apply for full-time PG programmes provided they can attend classes regularly. Some programmes may have weekend or evening adjustments — contact the admissions office for details.",
      },
      {
        question: "Are scholarships available for PG?",
        answer:
          "Yes — merit-based scholarships for top scorers at UG level, government scholarships for eligible categories, and need-based fee concessions. Submit your income certificate during admission for the scholarship review.",
      },
    ],
  },
  PhD: {
    eligibility: [
      "Master's degree in the relevant discipline with minimum 55% (50% for SC/ST)",
      "Qualifying score in NET/SET/JRF or university entrance test",
      "Research proposal aligned with the department's areas of focus",
      "Interview with the department research committee",
    ],
    background: [
      "Strong subject foundation at PG level",
      "Demonstrated research aptitude (project work, publications)",
      "Open to candidates from allied disciplines with consent",
      "Part-time and full-time options available",
    ],
    documents: [
      "10th, 12th, UG and PG Mark Sheets and Certificates",
      "NET/SET/JRF score card (if applicable)",
      "Research Proposal / Synopsis",
      "Statement of Purpose",
      "No-Objection Certificate (for working candidates)",
      "Aadhaar Card (photocopy)",
      "4 Passport-Size Photographs",
      "Community Certificate (if applicable)",
    ],
    faq: [
      {
        question: "What is the eligibility for the Ph.D. programme?",
        answer:
          "Candidates must hold a Master's degree in the relevant discipline with a minimum of 55% marks (50% for SC/ST) and a qualifying score in NET/SET/JRF or the university entrance examination. A research proposal and an interview with the research committee are required.",
      },
      {
        question: "Can I pursue Ph.D. part-time alongside my job?",
        answer:
          "Yes — part-time Ph.D. enrolment is available for working professionals, subject to coursework attendance and a No-Objection Certificate from the employer. The minimum and maximum duration may differ from full-time enrolment.",
      },
      {
        question: "How long does the Ph.D. take?",
        answer:
          "Typically 3 to 5 years for full-time, 4 to 6 years for part-time. Duration depends on coursework completion, research progress, and thesis submission timelines defined by the affiliating university.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// Level-based career stubs
// ─────────────────────────────────────────────────────────────────────────
const LEVEL_CAREERS: Record<ProgrammeInfo["level"], string[]> = {
  UG: [
    "Higher Studies (PG / Professional Courses)",
    "Government & Private Sector Jobs",
    "Entrepreneurship / Family Business",
    "Industry-Specific Roles in the chosen discipline",
    "Civil Services & Competitive Exam Prep",
    "Internships and graduate trainee programmes",
  ],
  PG: [
    "Specialist / Senior Roles in industry",
    "Research & Teaching positions",
    "Civil Services and Group A/B exams",
    "Doctoral Research (Ph.D.)",
    "Consulting and Domain Expert roles",
    "Senior positions in Banking, IT, Education sectors",
  ],
  PhD: [
    "Faculty Positions in Universities and Colleges",
    "Research Scientist at R&D institutions",
    "Post-Doctoral Research Fellowships",
    "Industry R&D Leadership",
    "Policy Advisor / Subject Expert roles",
    "Independent Research Consultancy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────
// Default important dates for 2026-27 admission cycle
// ─────────────────────────────────────────────────────────────────────────
const DEFAULT_IMPORTANT_DATES = [
  { label: "Applications Open", date: "March 2026" },
  { label: "Last Date to Apply", date: "June 2026" },
  { label: "Merit List Announcement", date: "Late June 2026" },
  { label: "Counselling & Document Verification", date: "Early July 2026" },
  { label: "Classes Begin", date: "August 2026" },
];

// ─────────────────────────────────────────────────────────────────────────
// Build the merged admission content for a programme
// ─────────────────────────────────────────────────────────────────────────
export function getAdmissionContent(
  programmePath: string,
  programme: ProgrammeInfo
): AdmissionContent {
  const override: AdmissionOverride | undefined = admissionOverrides[programmePath];
  const levelDefaults = LEVEL_DEFAULTS[programme.level];

  const feesMQ =
    programme.category === "Self-Finance"
      ? SELF_FINANCE_FEES[programmePath] ?? null
      : null;

  const feesGQ =
    programme.category === "Aided"
      ? "As per Government Norms"
      : "As per Government Norms (GQ seats)";

  return {
    intakeSeats: override?.intakeSeats ?? DEFAULT_SEATS[programme.level],
    eligibilityCriteria: override?.eligibilityCriteria ?? levelDefaults.eligibility,
    recommendedBackground:
      override?.recommendedBackground ?? levelDefaults.background,
    documents: override?.documents ?? levelDefaults.documents,
    feesGQ,
    feesMQ,
    faq: [
      ...(override?.faq ?? []),
      ...levelDefaults.faq,
    ],
    applicationDeadline: override?.applicationDeadline ?? "June 2026",
    careers: override?.careers ?? LEVEL_CAREERS[programme.level],
    curriculumHighlights:
      override?.curriculumHighlights ??
      [
        "Foundation courses aligned with the affiliating university syllabus",
        "Skill-based electives and lab work",
        "Soft-skills, communication and aptitude training",
        "Internships / mini-projects in the final year",
        "Industry guest lectures and seminars",
        "Capstone project for hands-on application",
      ],
    highlights:
      override?.highlights ??
      [
        "Affiliated to Periyar University, Salem",
        "NAAC-accredited autonomous institution",
        "Experienced senior learners with PhDs and industry exposure",
        "Strong placement support and recruiter network",
      ],
    importantDates: override?.importantDates ?? DEFAULT_IMPORTANT_DATES,
    scholarshipNote:
      override?.scholarshipNote ??
      "Merit-based scholarships for academic toppers. All government scholarships (BC/MBC/SC/ST, first-generation graduate) supported. Submit income certificate during admission for review.",
  };
}
