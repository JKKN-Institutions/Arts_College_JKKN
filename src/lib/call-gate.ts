// Call / WhatsApp form gate - ported 2026-11-04 from the Dental site (live there since 2026-11-03,
// tested by the user on a phone), user's choice: the same behaviour on every JKKN college site.
//
// WHY. Every Call and WhatsApp button for admissions points at ONE number, +91 93458 55001, and a
// tap on it left no trace in the CRM: GA4 counted the tap (phone_click / whatsapp_click) but a tap
// carries no phone number, so no call or chat could be tied to a website visit. With the gate, a
// tap opens the 3-box enquiry form first; its button ("Call Counsellor" / "Chat on WhatsApp")
// sends the lead to the CRM AND opens the dialer / WhatsApp in the same tap. So every gated
// contact has a CRM "website" lead created a moment before it.
//
// NOT GATED (user's choices on Dental, applied here). The form forces a CRM programme, so a page
// about a course the CRM cannot record must stay direct - a form there would file the parent under a
// wrong course (the Dental DSA precedent; lib/top-enquiry.ts, DEP-60). The CRM's "JKKN College of
// Arts and Science (Self)" holds 21 programmes (lib/arts-programmes.ts): no aided programme, no
// Ph.D, no plain B.Com, no B.Com Accounting & Finance or Banking & Insurance, no B.A. Tamil. So:
//   - careers pages (job seekers, not parents)
//   - every aided department and aided programme page (that also covers the 3 Ph.D pages and the
//     aided B.Com), and the /admissions/<slug> page of every aided programme
//   - B.Com Accounting & Finance and B.Com Banking & Insurance (programme + admission pages)
//   - the self-financing Tamil department (its only programme, B.A. Tamil, is not in the CRM)
// Any number other than 93458 55001 never matches, so it stays direct (library 99655 22229, the
// old aided line 99433 53353 ...).
//
// Plain module: no React, no server code - the modal, the forms and the tests all import it.

import { ARTS_PROGRAMMES } from "@/lib/arts-programmes"
import { PRESELECT_BY_SLUG, SELF_FINANCE_NOT_IN_CRM } from "@/lib/top-enquiry"

export type GateIntent = "call" | "whatsapp"

export const GATE_PHONE = "+919345855001"
export const GATE_PHONE_DISPLAY = "+91 93458 55001"
const GATE_DIGITS = "9345855001"

/** Paths (and everything below them) where a tap must reach the number directly. */
const UNGATED_PATH_PREFIXES = [
  "/careers",
  "/departments/aided",
  "/departments/self-finance/tamil",
  "/programmes/aided",
  "/programmes/self-finance/ug/bcom-accounting-finance",
  "/programmes/self-finance/ug/bcom-banking-insurance",
]

const normalise = (pathname: string) => pathname.toLowerCase().replace(/\/+$/, "") || "/"

/** The staff panel: no gate, no plain-number taps (a click there edits, it does not call). */
export function isAdminPath(pathname: string): boolean {
  const p = normalise(pathname)
  return p === "/admin" || p.startsWith("/admin/")
}

export function isUngatedPath(pathname: string): boolean {
  const p = normalise(pathname)
  if (UNGATED_PATH_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`))) return true
  // /admissions/<slug>: the same rule as the page itself (crmCanRecord in lib/top-enquiry.ts) - an
  // aided programme, or a self-financing one the CRM has no row for, shows a Call / WhatsApp card
  // instead of the form, and that card must dial directly.
  const admission = p.match(/^\/admissions\/([^/]+)$/)
  if (admission) return admission[1].endsWith("-aided") || SELF_FINANCE_NOT_IN_CRM.has(admission[1])
  return false
}

/**
 * Which gate a link belongs to, or null for any other link.
 * tel: links match when their digits end in the admission number (so "tel:+91 93458 55001",
 * "tel:9345855001" and "tel: +91 93458 55001" all count, and other numbers do not).
 * WhatsApp links match wa.me/<number> and api.whatsapp.com/send?phone=<number>.
 */
export function gateIntentForHref(rawHref: string): GateIntent | null {
  const href = rawHref.trim().toLowerCase()
  if (href.startsWith("tel:")) {
    const digits = href.slice(4).replace(/\D/g, "")
    return digits.endsWith(GATE_DIGITS) ? "call" : null
  }
  const wa = href.match(/^https?:\/\/(?:wa\.me\/(\d+)|(?:api|web)\.whatsapp\.com\/send\/?\?(?:.*&)?phone=(\d+))/)
  if (wa) {
    const digits = wa[1] ?? wa[2] ?? ""
    return digits.endsWith(GATE_DIGITS) ? "whatsapp" : null
  }
  return null
}

/** Short page tag for the CRM source and the WhatsApp reference, e.g. "-contact" or "-home". */
export function pageTag(pathname: string): string {
  return pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
}

const preselect = (slug: string): string | undefined =>
  Object.prototype.hasOwnProperty.call(PRESELECT_BY_SLUG, slug) ? PRESELECT_BY_SLUG[slug] : undefined

// The B.Sc landing pages, each about ONE programme. Same ids as PRESELECT_BY_SLUG - the user's
// "clear names only" rule (2026-11-02) - so the Computer Science page (the CRM names COMPUTER
// SCIENCE twice, UG and PG unmarked) opens on "Select a Programme".
const LANDING_SLUG: Readonly<Record<string, string>> = {
  "/bsc-ai-data-science-colleges-in-tamil-nadu": "bsc-ai-ds-self-finance",
  "/bsc-cyber-security-colleges-in-tamil-nadu": "bsc-cs-cyber-security-self-finance",
  "/bsc-fashion-designing-colleges-in-tamil-nadu": "bsc-textile-fashion-designing-self-finance",
  "/bsc-microbiology-colleges-in-tamil-nadu": "bsc-microbiology-self-finance",
  "/bsc-physics-colleges-in-tamil-nadu": "bsc-physics-self-finance",
  "/bsc-visual-communication-colleges-in-tamil-nadu": "bsc-visual-communication-self-finance",
}

/**
 * Pre-selects the course on a one-programme page, so the Microbiology page opens on Microbiology.
 * Only the ids lib/top-enquiry.ts already pre-selects; every other page opens on "Select a Programme".
 */
export function programmeForPath(pathname: string): string | undefined {
  const p = normalise(pathname)
  const admission = p.match(/^\/admissions\/([^/]+)$/)
  if (admission) return preselect(admission[1])
  const programme = p.match(/^\/programmes\/self-finance\/(?:ug|pg)\/([^/]+)$/)
  if (programme) return preselect(`${programme[1]}-self-finance`)
  return Object.prototype.hasOwnProperty.call(LANDING_SLUG, p) ? preselect(LANDING_SLUG[p]) : undefined
}

/** "BCA" or "B.Sc Computer Science (Cyber Security)" - the course as the form lists it. */
function courseShort(programmeId: string): string {
  const label = ARTS_PROGRAMMES.find((x) => x.id === programmeId)?.label ?? ""
  if (!label) return "UG / PG course"
  // "BCA — Bachelor of Computer Applications" -> "BCA". The bracket stays: "(AI)" or "(Cyber
  // Security)" IS the course here, unlike the Pharmacy labels.
  return label.split(" — ")[0].trim()
}

/**
 * WhatsApp link with the course and a page reference typed into the box.
 * No name and no phone in it, ever: a link like this can end up in analytics or logs.
 */
// Lead option 4 (2026-11-05): a WhatsApp link can ask for something specific with data-gate-topic.
// Only "brochure" today: the WhatsApp text then says so, and the CRM source tag reads wa-gate-brochure-<page>,
// so the counsellor knows to send the brochure. Any other value is ignored.
export type GateTopic = "brochure"

export function gateTopicFor(value: string | null | undefined): GateTopic | undefined {
  return value === "brochure" ? "brochure" : undefined
}

export function whatsappGateUrl(programmeId: string, pathname: string, topic?: GateTopic): string {
  const ref = pageTag(pathname).replace(/^-/, "").replace(/[^a-z0-9-]/gi, "").slice(0, 30) || "home"
  const ask = topic === "brochure" ? "brochure and admission details" : "admission details"
  const text = `Hi, ${courseShort(programmeId)} ${ask} venum. Ref: WEB-ARTS-${ref}`
  return `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`
}

/** href of a brochure WhatsApp link. The gate replaces it with its own text; it is used as it is only when
 *  the gate steps aside (a visitor who already enquired on this browser). */
export const BROCHURE_WHATSAPP_HREF = `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Hi, Arts and Science brochure venum. Ref: WEB-ARTS-brochure",
)}`

export const telGateUrl = `tel:${GATE_PHONE}`

// Plain-text numbers. The site prints the number as plain text in many places (contact cards, FAQ
// answers, page copy); iPhone used to turn those into dial links of its own, outside the gate. The
// layout switches that off, and EnquiryModal reads a tap on such a number with numberAtOffset().
// Indian mobiles only, as a visitor reads them: "+91 93458 55001", "93458 55001", "9345855001",
// "+91-9345855001".
const PLAIN_MOBILE = /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/g

/** The 10-digit mobile number that a character offset of a text falls inside, or null. */
export function numberAtOffset(text: string, offset: number): string | null {
  for (const m of text.matchAll(PLAIN_MOBILE)) {
    const start = m.index ?? 0
    if (offset >= start && offset <= start + m[0].length) return m[0].replace(/\D/g, "").slice(-10)
  }
  return null
}

/** True for the admission number - the one number the gate applies to. */
export function isGateNumber(digits: string): boolean {
  return digits === GATE_DIGITS
}

export function telUrlFor(digits: string): string {
  return `tel:+91${digits}`
}
