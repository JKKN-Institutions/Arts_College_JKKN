// Plan Step 4 (10,300-lead plan, Arts tab, 2026-11-02): the admission facts each /admissions/<course> page
// shows - sanctioned seats, eligibility and dates - each from an official source, with the day it was read.
// User's choices 2026-11-02: update the same pages (no new URLs), all 38 programmes, TN DCE course-wise seats
// with a source label (never a total - the NIRF and DCE totals disagree), eligibility from the regulation
// with the unsourced "50% / 45% / 40%" lines removed, 2027-28 dates "not announced yet" with a last-checked
// day (decision DEC-04), no new FAQ, and the "2026-27" title year kept until January 2027.
//
// Before changing FACTS_CHECKED, open every source below again and compare.

/** The day every source in this file was last read. Shown on the page next to the seats and the dates. */
export const FACTS_CHECKED = "2 Nov 2026";

// ── Seats ─────────────────────────────────────────────────────────────────────────────────────────
// TN Directorate of Collegiate Education, college code 2180001, "Sanction Strength" per course:
//   https://tndce.tn.gov.in/Home/course_details/2180001/1 (UG), .../2 (PG), .../4 (Ph.D)
// Read 2026-10-29 and again 2026-11-02, identical both times. The page prints no date of its own.
// Left out on purpose, so their pages ask the parent to call the admissions office:
//   - B.Sc Clinical Laboratory Technology: DCE shows 0 - the office has to confirm the current order
//   - M.Sc Computer Science (Aided), M.Sc Physics (Aided), M.Sc CS (Data Analytics): not on the DCE list
//   - Ph.D Chemistry: DCE lists it as Self Financing (6), this site as Aided - the office has to confirm
//   - the 3 proposed programmes (awaiting Periyar University approval)
// MCA 15 is also the AICTE Extension of Approval 2025-26 intake (F.No. Southern/1-44638793967/2025/EOA).
const DCE = `TN DCE sanctioned strength, checked ${FACTS_CHECKED}`;

export const SANCTIONED_SEATS: Readonly<Record<string, { seats: number; source: string }>> = {
  "aided/ug/ba-english": { seats: 60, source: DCE },
  "aided/ug/ba-history": { seats: 60, source: DCE },
  "aided/ug/bcom": { seats: 60, source: DCE },
  "aided/ug/bsc-chemistry": { seats: 40, source: DCE },
  "aided/ug/bsc-maths": { seats: 60, source: DCE },
  "aided/ug/bsc-zoology": { seats: 40, source: DCE },
  "aided/pg/ma-history": { seats: 36, source: DCE },
  "aided/pg/mca": { seats: 15, source: `AICTE 2025-26 and TN DCE, checked ${FACTS_CHECKED}` },
  "aided/pg/mcom": { seats: 36, source: DCE },
  "aided/pg/msc-chemistry": { seats: 30, source: DCE },
  "aided/pg/msc-zoology": { seats: 30, source: DCE },
  "aided/phd/tamil": { seats: 4, source: DCE },
  "aided/phd/zoology": { seats: 32, source: DCE },
  "self-finance/ug/ba-english": { seats: 120, source: DCE },
  "self-finance/ug/bba": { seats: 60, source: DCE },
  "self-finance/ug/bca": { seats: 40, source: DCE },
  "self-finance/ug/bcom-accounting-finance": { seats: 60, source: DCE },
  "self-finance/ug/bcom-banking-insurance": { seats: 60, source: DCE },
  "self-finance/ug/bcom-ca": { seats: 180, source: DCE },
  "self-finance/ug/bsc-ai-ds": { seats: 40, source: DCE },
  "self-finance/ug/bsc-computer-science": { seats: 120, source: DCE },
  "self-finance/ug/bsc-cs-cyber-security": { seats: 40, source: DCE },
  "self-finance/ug/bsc-microbiology": { seats: 40, source: DCE },
  "self-finance/ug/bsc-physics": { seats: 40, source: DCE },
  "self-finance/ug/bsc-textile-fashion-designing": { seats: 80, source: DCE },
  "self-finance/ug/bsc-visual-communication": { seats: 40, source: DCE },
  "self-finance/pg/ma-english": { seats: 36, source: DCE },
  "self-finance/pg/mcom": { seats: 36, source: DCE },
  "self-finance/pg/msc-computer-science": { seats: 30, source: DCE },
  "self-finance/pg/msc-mathematics": { seats: 36, source: DCE },
};

// ── Eligibility ───────────────────────────────────────────────────────────────────────────────────
// Periyar University, "Eligibility condition for admission to UG / PG programmes for the academic year
// 2026-2027" (affiliated colleges), linked from https://www.periyaruniversity.ac.in/Eligi.php:
//   UG: https://www.periyaruniversity.ac.in/Documents/2026/CDC/ug.pdf
//   PG: https://www.periyaruniversity.ac.in/Documents/2026/CDC/pg.pdf
// Ph.D: Periyar University Ph.D. Regulations 2024 (candidates joining on or after 01.07.2024), section 2.1:
//   https://www.periyaruniversity.ac.in/Research/files/regulation/Ph.D.-r-2024.pdf
// Read 2026-11-02. The college is autonomous from 2024-25 but publishes no admission regulation of its
// own, so the affiliating university's list is the official rule. Neither list sets a minimum percentage
// for any programme here except MCA (50%, 45% reserved) and Ph.D. (55%, 50% for the listed categories).
// Programmes with an eligibility block in admission-content.ts keep theirs - those were checked against
// the same 2026-27 list on 2026-11-02. B.Sc Visual Communication (AI) is not on the list, so it gets the
// level fallback below.
const MERIT = "Merit-based admission; community reservation as per Tamil Nadu Government norms";
const PU = "(Periyar University eligibility, 2026-27)";

const BA_ANY_PLUS_TWO = [
  `Pass in the Higher Secondary (+2) examination ${PU}`,
  "Any +2 group - no particular subject is required",
  MERIT,
];

const BCOM_GROUP = [
  "Pass in the Higher Secondary (+2) examination",
  `Commerce and Accountancy, or any one of Commerce, Accountancy, Mathematics, Business Mathematics, Statistics, Computer Science, Corporate Secretaryship, Information Technology, Computer Applications or Computer Technology ${PU}`,
  "Students who did not study Commerce or Accountancy attend a bridge course of at least 15 days",
  MERIT,
];

const COMPUTING_GROUP = [
  "Pass in the Higher Secondary (+2) examination",
  `Mathematics as one of the subjects, or Computer Science, Computer Applications, Information Technology, Computer Technology, Business Mathematics or Statistics ${PU}`,
  "Students who did not study Mathematics attend a bridge course in Mathematics of at least 15 days",
  MERIT,
];

const MSC_COMPUTING = [
  `B.Sc Computer Science, BCA, B.Sc Computer Technology, Information Science, Information Technology, Data Analytics, Data Science, CS (AI & ML), CS (AI & DS), Cyber Security, Internet of Things or Digital and Cyber Forensic Science ${PU}`,
  "Or a degree of another university accepted by the Periyar University Syndicate as equivalent",
  MERIT,
];

const MCOM_LIST = [
  `B.Com, B.Com (CA), B.Com (Accounting & Finance), B.Com (Banking & Insurance), B.Com (Corporate Secretaryship), B.Com (Financial Marketing Analytics), B.Com (Artificial Intelligence), BBA, BBM, BCS or another degree on the Periyar University list ${PU}`,
  "BCA is not on the M.Com list",
  MERIT,
];

const TFD = [
  `Pass in any Higher Secondary (+2) course, academic or vocational - State Board, CBSE, ICSE or equivalent ${PU}`,
  "Diploma holders: a three-year Fashion, Costume, Textile or Apparel diploma qualifies for direct second-year admission",
  MERIT,
];

export const ELIGIBILITY_2026_27: Readonly<Record<string, readonly string[]>> = {
  // UG - ug.pdf rows 3 and 6 (one cell: "A pass in +2 examinations.")
  "aided/ug/ba-english": BA_ANY_PLUS_TWO,
  "aided/ug/ba-history": BA_ANY_PLUS_TWO,
  "self-finance/ug/ba-english": BA_ANY_PLUS_TWO,
  // ug.pdf row 12 - B.Com and the related commerce programmes
  "aided/ug/bcom": BCOM_GROUP,
  "self-finance/ug/bcom-accounting-finance": BCOM_GROUP,
  "self-finance/ug/bcom-banking-insurance": BCOM_GROUP,
  "self-finance/ug/bcom-ca": BCOM_GROUP,
  // ug.pdf row 15
  "self-finance/ug/bba": [
    `Pass in the Higher Secondary (+2) examination ${PU}`,
    "Any +2 group; preference is given to the Commerce and Accountancy streams",
    MERIT,
  ],
  // ug.pdf row 19 - B.Sc Computer Science / BCA / Cyber Security / AI & DS
  "self-finance/ug/bca": COMPUTING_GROUP,
  // ug.pdf row 35
  "aided/ug/bsc-chemistry": [
    "Pass in the Higher Secondary (+2) examination",
    `Chemistry and Physics, plus any one of Mathematics, Botany, Zoology or Biology ${PU}`,
    "Tamil Nadu Higher Secondary Board or an examination accepted as equivalent",
    MERIT,
  ],
  // ug.pdf row 34
  "aided/ug/bsc-maths": [
    "Pass in the Higher Secondary (+2) examination",
    `Mathematics, Statistics or Business Mathematics as one of the subjects ${PU}`,
    "Tamil Nadu Higher Secondary Board or an examination accepted as equivalent",
    MERIT,
  ],
  // ug.pdf row 21
  "aided/ug/bsc-zoology": [
    "Pass in the Higher Secondary (+2) examination, academic or vocational stream",
    `Biology (Botany / Zoology / Chemistry) in the +2 ${PU}`,
    "Tamil Nadu Higher Secondary Board or an examination accepted as equivalent",
    MERIT,
  ],
  // ug.pdf row 36 - listed with B.Sc Biochemistry
  "self-finance/ug/bsc-clinical-lab-technology": [
    "Pass in the Higher Secondary (+2) examination",
    `Chemistry and Biology, or Chemistry, Botany and Zoology, or Biochemistry and Chemistry ${PU}`,
    "Vocational Agriculture and Nursing groups also qualify",
    MERIT,
  ],
  // ug.pdf row 29 names the AI variant too
  "self-finance/ug/bsc-textile-fashion-designing-ai": TFD,

  // PG - pg.pdf row 2
  "self-finance/pg/ma-english": [
    `B.A. English or B.Lit., or any degree with English as the Part II language ${PU}`,
    MERIT,
  ],
  // pg.pdf row 4 (one cell with Economics, Political Science, Public Administration and MBA)
  "aided/pg/ma-history": [
    `Any Bachelor's degree of Periyar University, or of another university accepted by its Syndicate as equivalent ${PU}`,
    "No particular UG subject is required",
    MERIT,
  ],
  // pg.pdf row 9
  "aided/pg/mcom": MCOM_LIST,
  "self-finance/pg/mcom": MCOM_LIST,
  // pg.pdf row 17 - M.Sc Computer Science / Data Science / Computer Science - Data Analytics
  "aided/pg/msc-computer-science": MSC_COMPUTING,
  "self-finance/pg/msc-computer-science": MSC_COMPUTING,
  "self-finance/pg/msc-cs-data-analytics": MSC_COMPUTING,
  // pg.pdf row 18 - the only PG rule here with a percentage
  "aided/pg/mca": [
    "Any Bachelor's degree (B.E., B.Tech, B.Sc, B.Com, B.A., B.Voc, BCA and others), preferably with Mathematics at +2 or degree level",
    `At least 50% marks in the qualifying examination - 45% for reserved categories ${PU}`,
    MERIT,
  ],
  // pg.pdf row 22
  "self-finance/pg/msc-mathematics": [
    `B.Sc Mathematics, B.Sc Mathematics (Computer Applications) or B.Sc B.Ed Mathematics (integrated) ${PU}`,
    "Or a degree of another university accepted by the Periyar University Syndicate as equivalent",
    MERIT,
  ],
  // pg.pdf row 25
  "aided/pg/msc-physics": [
    `B.Sc with Physics as the main subject, B.Sc Applied Physics, B.Sc Physics (Vocational) or B.Sc B.Ed Physics (integrated) ${PU}`,
    "Or a degree of another university accepted by the Periyar University Syndicate as equivalent",
    MERIT,
  ],
  // pg.pdf row 30
  "aided/pg/msc-chemistry": [
    `B.Sc Chemistry or B.Sc B.Ed Chemistry (integrated) ${PU}`,
    "Or a degree of another university accepted by the Periyar University Syndicate as equivalent",
    MERIT,
  ],
  // pg.pdf row 34
  "aided/pg/msc-zoology": [
    `B.Sc Zoology, Animal Science, or another degree related to Zoology or Life Sciences approved by the Periyar University Syndicate ${PU}`,
    "B.Sc B.Ed Zoology (integrated) also qualifies",
    MERIT,
  ],
};

/** Ph.D. - every Ph.D. here follows the same Periyar University regulation (sections 2.1.2, 2.1.5, 2.2). */
export const PHD_ELIGIBILITY: readonly string[] = [
  "A Master's degree with at least 55% marks - 50% for SC / ST / OBC (non-creamy layer) / differently abled - or grade 'B' on the UGC 7-point scale (Periyar University Ph.D. Regulations 2024)",
  "A pass in NET (UGC / CSIR) or the Periyar University Common Entrance Test; Ph.D. holders may apply directly",
  "Full-time or part-time registration under a recognised supervisor",
];

/** Used only where no official rule names the programme - never a percentage. */
export const ELIGIBILITY_FALLBACK = {
  UG: [
    "Pass in the Higher Secondary (+2) examination",
    "Confirm the required +2 subjects with the admissions office",
    MERIT,
  ],
  PG: [
    "A Bachelor's degree from a recognised university",
    "Confirm the required UG subjects with the admissions office",
    MERIT,
  ],
  PhD: PHD_ELIGIBILITY,
} as const;

// ── Dates ─────────────────────────────────────────────────────────────────────────────────────────
// 2027-28 UG / PG dates are not announced (DEC-04, 2026-08-04: "TBA with a last-checked date"). Never a
// guessed date. Ph.D. sessions are fixed by the regulation (section 2: "July and December sessions");
// a Periyar CET cycle was running on 2026-11-02, so no "not announced" line is shown for Ph.D.
export const DATES_DEFAULT = [
  { label: "Applications 2027-28", date: `Not announced yet (last checked ${FACTS_CHECKED})` },
  { label: "Merit List & Counselling", date: "Notified to applicants" },
  { label: "Classes Begin", date: "As per the university academic calendar" },
] as const;

export const DATES_PHD = [
  { label: "Admission sessions", date: "July and December (Periyar University Ph.D. Regulations 2024)" },
  { label: "Entrance", date: "NET (UGC / CSIR) or the Periyar University Common Entrance Test" },
  { label: "Current session dates", date: "As notified by Periyar University - ask the admissions office" },
] as const;
