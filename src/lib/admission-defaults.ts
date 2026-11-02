import type { ProgrammeInfo } from "@/data/programme-metadata";
import { admissionOverrides, type AdmissionOverride } from "@/data/admission-content";
import {
  DATES_DEFAULT,
  DATES_PHD,
  ELIGIBILITY_2026_27,
  ELIGIBILITY_FALLBACK,
  FACTS_CHECKED,
  SANCTIONED_SEATS,
} from "@/data/admission-facts";

export interface AdmissionFAQ {
  question: string;
  answer: string;
}

export interface AdmissionContent {
  intakeSeats: number | null;
  /** Source of the seat number, or what to do when no official number is published. */
  intakeNote: string;
  eligibilityCriteria: string[];
  recommendedBackground: string[];
  documents: string[];
  feesGQ: string;
  feesMQ: number | null;
  faq: AdmissionFAQ[];
  applicationDeadline: string;
  applicationDeadlineNote: string;
  /** Third card in the seats block: how a seat is decided. */
  admissionBasis: { title: string; note: string };
  datesIntro: string;
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
  "self-finance/ug/bsc-clinical-lab-technology": 32000,
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
// Sanctioned seats, eligibility and dates live in src/data/admission-facts.ts (plan Step 4,
// 2026-11-02), each with its official source and the day it was read. Until then only MCA
// (AICTE 15) had a number and every other page read "Contact Admissions".
// ─────────────────────────────────────────────────────────────────────────

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
    eligibility: [...ELIGIBILITY_FALLBACK.UG],
    background: [
      // Was "Any +2 stream — Science, Commerce or Arts" on EVERY UG admission page until
      // 2026-09-30, which told Commerce students they could join B.Sc Physics. Subject
      // rules are programme-specific; state them in an admission-content override.
      "Required +2 subjects differ by programme — see the programme page or ask the admissions office",
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
        question: "How do I apply?",
        answer:
          "You can apply online at jkkn.ai/apply/jkkn-admission-2026 or visit the campus in person. Fill the application form, upload the required documents, and pay the application fee. Our admissions team will guide you through every step.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Yes — merit-based scholarships for academic toppers, plus all government scholarships including BC/MBC/SC/ST scholarships and first-generation graduate support. Submit your income certificate during admission for eligibility review.",
      },
    ],
  },
  PG: {
    eligibility: [...ELIGIBILITY_FALLBACK.PG],
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
    eligibility: [...ELIGIBILITY_FALLBACK.PhD],
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
// Important dates: DATES_DEFAULT / DATES_PHD in src/data/admission-facts.ts. A dated milestone
// is published only when official; 2027-28 reads "not announced yet" with a last-checked day.
// ─────────────────────────────────────────────────────────────────────────

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

  const seats = programme.proposed ? undefined : SANCTIONED_SEATS[programmePath];
  const isPhd = programme.level === "PhD";

  return {
    intakeSeats: seats?.seats ?? null,
    intakeNote: seats
      ? seats.source
      : programme.proposed
        ? "Proposed programme - awaiting university approval"
        : "Ask the admissions office for the current sanctioned seats",
    eligibilityCriteria: [
      ...(override?.eligibilityCriteria ?? ELIGIBILITY_2026_27[programmePath] ?? levelDefaults.eligibility),
    ],
    recommendedBackground:
      override?.recommendedBackground ?? levelDefaults.background,
    documents: override?.documents ?? levelDefaults.documents,
    feesGQ,
    feesMQ,
    faq: [...(override?.faq ?? []), ...levelDefaults.faq],
    applicationDeadline:
      override?.applicationDeadline ?? (isPhd ? "July / December" : "Not announced yet"),
    applicationDeadlineNote: programme.proposed
      ? "Admissions open only after university approval"
      : isPhd
        ? "Periyar University Ph.D. sessions"
        : `2027-28 dates - last checked ${FACTS_CHECKED}`,
    admissionBasis: isPhd
      ? { title: "Entrance", note: "NET (UGC / CSIR) or Periyar University CET" }
      : { title: "Merit", note: "Marks + Counselling" },
    datesIntro: programme.proposed
      ? "Programme status and next steps"
      : isPhd
        ? "Ph.D. admission sessions"
        : "2027-28 admission cycle - dates are added here when officially announced",
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
        "NAAC accredited (B) autonomous institution",
        "Experienced senior learners with PhDs and industry exposure",
        "Strong placement support and recruiter network",
      ],
    importantDates: [...(override?.importantDates ?? (isPhd ? DATES_PHD : DATES_DEFAULT))],
    scholarshipNote:
      override?.scholarshipNote ??
      "Merit-based scholarships for academic toppers. All government scholarships (BC/MBC/SC/ST, first-generation graduate) supported. Submit income certificate during admission for review.",
  };
}
