// Official facts about the college, each tied to the source it was copied from.
// One file feeds the /approvals page, the homepage key-facts box and the /about facts
// table, so a fact cannot drift between pages. public/llms.txt repeats the same values
// as plain text; src/lib/official-facts.test.ts fails the build if they stop matching.
//
// Regulator values were read on 29 October 2026 (/approvals). The key-facts box was
// added on 3 November 2026 (plan Step 6, GEO): every value below was re-checked that
// day, and the student / faculty figures were counted from the NIRF 2025 college data
// PDF on this site (UG 1,438 + PG 247 = 1,685 students; 121 faculty currently working,
// 52 of them with a Ph.D).

export type Source = { label: string; href: string; date: string };

export const APPROVALS_CHECKED_ON = "29 October 2026";
export const KEY_FACTS_CHECKED_ON = "3 November 2026";

export const SRC = {
  ugc2f: {
    label: "UGC, List of colleges under Section 2(f) & 12(B)",
    href: "https://www.ugc.gov.in/colleges",
    date: `checked on ${APPROVALS_CHECKED_ON} (the list prints no date)`,
  },
  ugcAuto: {
    label: "UGC, List of Approved Autonomous Colleges",
    href: "https://www.ugc.gov.in/pdfnews/8688705_List-of-Autonomous-Colleges.pdf",
    date: "as on 28 February 2026",
  },
  periyar: {
    label: "Periyar University, Affiliated Colleges",
    href: "https://www.periyaruniversity.ac.in/Affiliated_Colleges.php",
    date: `checked on ${APPROVALS_CHECKED_ON}`,
  },
  naacList: {
    label: "NAAC, Institutions having valid accreditation",
    href: "https://naac.gov.in/images/docs/ACCREDITATION_STATUS/Institutions_accredited_by_NAAC_having_valid_accreditation-as_on_14082025_1.xlsx",
    date: "as on 14 August 2025",
  },
  naacTransition: {
    label: "NAAC, Extension of validity for Transition Autonomous Colleges",
    href: "https://naac.gov.in/images/docs/notification/Autonomous_Transition_Website_06082025.pdf",
    date: "updated 22 July 2025",
  },
  aicte: {
    label: "AICTE, Extension of Approval 2025-26 (copy of the letter)",
    href: "/documents/committees/28-LOA_EOA_merged_2026.pdf",
    date: "dated 3 January 2025",
  },
  nirf: {
    label: "NIRF, India Rankings 2025 - participating institutions (College)",
    href: "https://www.nirfindia.org/Rankings/2025/CollegeRankingALL.html",
    date: `checked on ${APPROVALS_CHECKED_ON}`,
  },
  dce: {
    label: "Directorate of Collegiate Education, Tamil Nadu, course details",
    href: "https://tndce.tn.gov.in/Home/course_details/2180001/1",
    date: `checked on ${APPROVALS_CHECKED_ON}`,
  },
  // The college's own documents and pages (used where no regulator prints the value).
  nirfData: {
    label: "NIRF 2025 data submitted by the college (PDF)",
    href: "/documents/nirf/NIRF-2025-COLLEGE.pdf",
    date: "academic year 2023-24",
  },
  ourInstitution: {
    label: "Our Institution",
    href: "/about/our-institution",
    date: `checked on ${KEY_FACTS_CHECKED_ON}`,
  },
  contact: {
    label: "Contact",
    href: "/contact",
    date: `checked on ${KEY_FACTS_CHECKED_ON}`,
  },
} satisfies Record<string, Source>;

export type KeyFact = { label: string; value: string; note?: string; sources: Source[] };

export const KEY_FACTS: KeyFact[] = [
  {
    label: "Established",
    value: "1974",
    note: "Part of J.K.K. Nattraja Educational Institutions, a group founded in 1952",
    sources: [SRC.ugc2f],
  },
  {
    label: "Status",
    value: "Autonomous, 2024-25 to 2028-29",
    note: "Autonomy conferred by UGC with effect from 2024-25",
    sources: [SRC.ugcAuto],
  },
  {
    label: "Affiliated to",
    value: "Periyar University, Salem",
    sources: [SRC.periyar],
  },
  {
    label: "UGC recognition",
    value: "Section 2(f) and 12(B)",
    sources: [SRC.ugc2f],
  },
  {
    label: "NAAC",
    value: "Grade B, CGPA 2.37",
    note: "First cycle, declared 9 August 2019; valid up to 31 December 2029",
    sources: [SRC.naacList, SRC.naacTransition],
  },
  {
    label: "Programmes",
    value: "35: 20 UG, 12 PG, 3 Ph.D",
    sources: [SRC.ourInstitution],
  },
  {
    label: "Students",
    value: "1,685",
    note: "UG 1,438 + PG 247",
    sources: [SRC.nirfData],
  },
  {
    label: "Faculty",
    value: "121, of whom 52 hold a Ph.D",
    sources: [SRC.nirfData],
  },
  {
    label: "Location",
    value: "Komarapalayam, Namakkal district, Tamil Nadu 638183",
    note: "On NH-544, the Salem - Coimbatore highway",
    sources: [SRC.contact],
  },
];

export const KEY_CODES: { label: string; value: string; source: Source }[] = [
  { label: "AISHE code", value: "C-9494 (as printed on NAAC's list)", source: SRC.naacList },
  { label: "NAAC Track ID", value: "TNCOGN101741", source: SRC.naacList },
  { label: "NIRF Institute ID", value: "IR-C-C-9494", source: SRC.nirf },
  { label: "TN DCE college code", value: "2180001", source: SRC.dce },
];

// One quotable sentence that answers "what is JKKN College of Arts and Science?".
export const KEY_FACTS_SUMMARY =
  "JKKN College of Arts and Science (J.K.K. Nataraja College of Arts & Science) in Komarapalayam, Namakkal district, Tamil Nadu, was established in 1974. It is an autonomous college from 2024-25 to 2028-29, affiliated to Periyar University, Salem, recognised by UGC under Section 2(f) and 12(B), and accredited by NAAC with Grade B (CGPA 2.37).";
