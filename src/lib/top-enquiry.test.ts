import { describe, expect, it } from "vitest"
import { getAllProgrammes } from "@/data/programme-metadata"
import { VALID_PROGRAMME_IDS } from "./arts-programmes"
import { ALSO_HAS_AIDED_SEATS, crmCanRecord, PRESELECT_BY_SLUG } from "./top-enquiry"

// Plan Step 3 (2026-11-02): which admissions page gets a form, and which course it pre-selects.
const all = getAllProgrammes().map((p) => p.info)

describe("top enquiry rules", () => {
  it("never puts a form on an aided page - the CRM has no aided programme yet (DEP-60)", () => {
    const aided = all.filter((p) => p.category === "Aided")
    expect(aided.length).toBe(11)
    for (const p of aided) expect(crmCanRecord(p)).toBe(false)
  })

  it("keeps ONE page for the 3 courses that run Aided and Self-Finance - the SF page (2026-11-18)", () => {
    expect([...ALSO_HAS_AIDED_SEATS].sort()).toEqual(["ba-english-self-finance", "bsc-maths-self-finance", "mcom-self-finance"])
    for (const slug of ALSO_HAS_AIDED_SEATS) {
      const sf = all.find((p) => p.slug === slug)
      expect(sf?.category, slug).toBe("Self-Finance")
      expect(crmCanRecord(sf!)).toBe(true)
      // no second (aided) page for the same course
      expect(all.find((p) => p.slug === slug.replace(/-self-finance$/, "-aided")), slug).toBeUndefined()
      // the CRM names are ambiguous (ENGLISH / MATHEMATICS twice, COMMERCE) - never pre-select
      expect(PRESELECT_BY_SLUG[slug]).toBeUndefined()
    }
  })

  it("keeps the two B.Com programmes the CRM lacks on the call card", () => {
    expect(crmCanRecord({ slug: "bcom-accounting-finance-self-finance", category: "Self-Finance" })).toBe(false)
    expect(crmCanRecord({ slug: "bcom-banking-insurance-self-finance", category: "Self-Finance" })).toBe(false)
    expect(crmCanRecord({ slug: "bsc-cs-cyber-security-self-finance", category: "Self-Finance" })).toBe(true)
  })

  it("pre-selects only ids the form can send, on real self-financing pages", () => {
    for (const [slug, id] of Object.entries(PRESELECT_BY_SLUG)) {
      expect(VALID_PROGRAMME_IDS.has(id)).toBe(true)
      const page = all.find((p) => p.slug === slug)
      expect(page, slug).toBeDefined()
      expect(page?.category).toBe("Self-Finance")
      expect(crmCanRecord(page!)).toBe(true)
    }
  })

  it("never pre-selects a proposed programme", () => {
    for (const p of all.filter((x) => x.proposed)) expect(PRESELECT_BY_SLUG[p.slug]).toBeUndefined()
  })

  it("never pre-selects one CRM row on two pages", () => {
    const ids = Object.values(PRESELECT_BY_SLUG)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
