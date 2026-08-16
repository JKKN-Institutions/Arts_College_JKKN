// DEP-34 — the CRM programme list for JKKN College of Arts and Science (Self).
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. When this array
// lived in `src/app/actions/city-enquiry.ts` the build stripped it, and `/contact`
// failed to prerender with `TypeError: j.map is not a function` — tsc passed, the
// build did not. Measured 2026-08-16. Keep plain data out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026
// on 2026-08-16: all 21 ids below still exist, and they are exactly the 21 rows the
// CRM holds for this institution — nothing missing, nothing extra.
// Re-check before each deploy: a dead program_id is a lead that never lands.

export const ARTS_INSTITUTION_ID = 'b0b8a724-7c65-4f07-8047-2a38e8100ad5'

export type ArtsProgramme = { id: string; label: string }

// NOTE — SIX OF THESE LABELS ARE UNCONFIRMED, and that is deliberate, not sloppy.
// The CRM API exposes only {id, name, institution_id} — no degree level, no course
// code. Three names appear twice, byte-identical (ENGLISH, COMPUTER SCIENCE,
// MATHEMATICS), and nothing in the API says which row is UG and which is PG. Three
// more are ambiguous on their own (COMMERCE = B.Com or M.Com, BUSINESS ADMINISTRATION
// = BBA or MBA, COMPUTER APPLICATION vs COMPUTER APPLICATIONS differ by one letter).
// The UG/PG split below is therefore an ASSUMPTION carried over from the 2026-08-11
// draft. Confirm with the CRM admin before this goes live — M.Com alone is 3,135
// impressions over 90 days, 54% of all programme-query demand on this site, so
// getting COMMERCE wrong misfiles the largest segment we have.
export const ARTS_PROGRAMMES: ReadonlyArray<ArtsProgramme> = [
  { id: 'f0f0b814-5e8c-41db-900b-a6fa1e9e5bd6', label: 'BCA — Bachelor of Computer Applications' },
  { id: '4b530214-20be-472b-9bbf-93d18c37063f', label: 'BBA — Bachelor of Business Administration' },
  { id: '9fbaa8df-ee4d-4061-bd8b-58e6607e6a0d', label: 'B.Sc Computer Science' },
  { id: '1188ad3b-c941-465e-af42-9dca3fe33170', label: 'B.Sc Computer Science (AI & Data Science)' },
  { id: '83488831-7b75-48df-9754-1ab9e204166f', label: 'B.Sc Computer Science (Cyber Security)' },
  { id: 'b7b7f940-2429-485b-b029-17023a03cd5f', label: 'B.Sc Mathematics' },
  { id: '1b42a105-e03c-461f-bc30-8252596235dd', label: 'B.Sc Microbiology' },
  { id: '02e487e8-18fd-4f10-b267-3ae258dd9102', label: 'B.Sc Physics' },
  { id: '0d37fe49-31eb-4735-a48f-0ccf31d0e784', label: 'B.Sc Textile & Fashion Designing' },
  { id: '57f4bbab-a828-4075-90e1-bf05f3d9d912', label: 'B.Sc Visual Communication' },
  { id: '17a7bbe7-de09-496c-bb67-2136b3969820', label: 'Textile & Fashion Designing (AI)' },
  { id: '2cae5d16-b7fb-4914-8ea8-d6abd2b852a4', label: 'Visual Communication (AI)' },
  { id: 'c93ab236-dfa4-45ad-92b9-a53159fd8868', label: 'B.Com (AI)' },
  { id: '8c6b4cf9-a5b8-42b1-9a43-b6417dc6fe21', label: 'B.Com Computer Application' },
  { id: 'e1478844-5b9e-4ec7-82fb-e721043020eb', label: 'B.A. English' },
  { id: '82f62c0c-e4da-4be7-a703-c8cf7b8b3b39', label: 'Clinical and Lab Technology' },
  { id: '40633012-400b-4b3b-94b7-f2b33dc4d39e', label: 'M.Com — Master of Commerce' },
  { id: '98d9ff39-49a6-401d-998f-a5ffd90f169b', label: 'M.A. English' },
  { id: 'ac31957e-1d42-4cd1-8d10-7716d84cbb6b', label: 'M.Sc Computer Science' },
  { id: '9aab244b-1101-4777-803f-e5cf653cceae', label: 'M.Sc Computer Science (Data Analytics)' },
  { id: '1a7b5ae4-7cf1-46c1-b1e9-e44ced8fd848', label: 'M.Sc Mathematics' },
]

export const VALID_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  ARTS_PROGRAMMES.map((p) => p.id)
)
