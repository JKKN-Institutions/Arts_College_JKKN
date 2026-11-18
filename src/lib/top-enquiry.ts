// Plan Step 3 (10,300-lead plan, Arts tab, 2026-11-02): which /admissions/<slug> page gets the
// enquiry form high on the page, and which one gets a Call / WhatsApp card instead.
//
// WHY A PAGE MAY NOT GET THE FORM. The form posts to the jkkn.ai CRM form, and the CRM can only
// file a lead under a programme it holds. Read live 2026-11-02 (GET jkkn-admission-2026): no
// "(Aided)" institution and no row for any aided programme, B.Com Accounting & Finance or
// B.Com Banking & Insurance. A form on those pages would file the parent under a wrong
// Self-financing course, so they get the admission office's phone instead (user's choice
// 2026-11-02). Asked of the CRM team the same day - task DEP-60. When the CRM adds them, give
// them ids in arts-programmes.ts and drop them from this rule.
//
// WHY ONLY SOME COURSES ARE PRE-SELECTED (user's choice 2026-11-02: "clear names only"). The CRM
// names ENGLISH, COMPUTER SCIENCE and MATHEMATICS twice each with no UG / PG mark, and
// COMMERCE, BUSINESS ADMINISTRATION and COMPUTER APPLICATION(S) are ambiguous. Those pages show
// the dropdown empty and the parent picks. Every id below was matched to a CRM name that can
// mean one course only, live 2026-11-02. Proposed programmes (awaiting Periyar approval) are
// never pre-selected, so a pre-filled form never reads as "admission open" for them.

export const PRESELECT_BY_SLUG: Readonly<Record<string, string>> = {
  // COMPUTER SCIENCE (ARTIFICIAL INTELLIGENCE & DATA SCIENCE)
  "bsc-ai-ds-self-finance": "1188ad3b-c941-465e-af42-9dca3fe33170",
  // COMPUTER SCIENCE (CYBER SECURITY)
  "bsc-cs-cyber-security-self-finance": "83488831-7b75-48df-9754-1ab9e204166f",
  // MICROBIOLOGY
  "bsc-microbiology-self-finance": "1b42a105-e03c-461f-bc30-8252596235dd",
  // PHYSICS (the CRM holds no aided M.Sc Physics, so this row is the self-financing B.Sc)
  "bsc-physics-self-finance": "02e487e8-18fd-4f10-b267-3ae258dd9102",
  // TEXTILE AND FASHION DESIGNING
  "bsc-textile-fashion-designing-self-finance": "0d37fe49-31eb-4735-a48f-0ccf31d0e784",
  // VISUAL COMMUNICATION
  "bsc-visual-communication-self-finance": "57f4bbab-a828-4075-90e1-bf05f3d9d912",
  // COMPUTER SCIENCE (DATA ANALYTICS)
  "msc-cs-data-analytics-self-finance": "9aab244b-1101-4777-803f-e5cf653cceae",
  // B.Sc. CLINICAL LABORATORY TECHNOLOGY
  "bsc-clinical-lab-technology-self-finance": "82f62c0c-e4da-4be7-a703-c8cf7b8b3b39",
}

/** Self-financing programmes the CRM has no row for (DEP-60). */
export const SELF_FINANCE_NOT_IN_CRM: ReadonlySet<string> = new Set([
  "bcom-accounting-finance-self-finance",
  "bcom-banking-insurance-self-finance",
])

/**
 * Aided programmes that ALSO run as self-financing, so the CRM already holds a row for the course
 * (user's choice 2026-11-18: "crm form already erukuna apdiye vitru" + "intha moonu pages kum form
 * potru"). Their aided pages get the form; the lead is filed under the CRM's self-financing row
 * (ENGLISH e1478844 / MATHEMATICS b7b7f940 / COMMERCE 40633012, read live 2026-11-18), and its
 * utm_campaign "cas-programme-<slug>" / "cas-course-<slug>" ends in "-aided", which tells the
 * counsellor which stream the parent read about. The other 11 aided programmes have no CRM row at
 * all, so they keep the Call / WhatsApp card (DEP-60).
 */
export const AIDED_FILED_UNDER_SELF_FINANCE_ROW: ReadonlySet<string> = new Set([
  "ba-english-aided",
  "bsc-maths-aided",
  "mcom-aided",
])

type CourseRef = { slug: string; category: "Aided" | "Self-Finance" }

/** True when a lead for this programme can land in the CRM under the right course. */
export function crmCanRecord(course: CourseRef): boolean {
  if (course.category === "Aided") return AIDED_FILED_UNDER_SELF_FINANCE_ROW.has(course.slug)
  return !SELF_FINANCE_NOT_IN_CRM.has(course.slug)
}
