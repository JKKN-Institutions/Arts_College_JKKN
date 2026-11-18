import { describe, expect, it } from "vitest"
import { getAllProgrammes } from "@/data/programme-metadata"
import { VALID_PROGRAMME_IDS } from "./arts-programmes"
import { AIDED_FILED_UNDER_SELF_FINANCE_ROW, crmCanRecord, PRESELECT_BY_SLUG } from "./top-enquiry"

// Plan Step 3 (2026-11-02): which admissions page gets a form, and which course it pre-selects.
const all = getAllProgrammes().map((p) => p.info)

describe("top enquiry rules", () => {
  it("puts no form on an aided page whose course the CRM lacks altogether (DEP-60)", () => {
    const aided = all.filter((p) => p.category === "Aided" && !AIDED_FILED_UNDER_SELF_FINANCE_ROW.has(p.slug))
    expect(aided.length).toBe(11)
    for (const p of aided) expect(crmCanRecord(p)).toBe(false)
  })

  it("gives the form to exactly the 3 aided courses that also run as self-financing (2026-11-18)", () => {
    expect([...AIDED_FILED_UNDER_SELF_FINANCE_ROW].sort()).toEqual(["ba-english-aided", "bsc-maths-aided", "mcom-aided"])
    for (const slug of AIDED_FILED_UNDER_SELF_FINANCE_ROW) {
      const aided = all.find((p) => p.slug === slug)
      expect(aided?.category, slug).toBe("Aided")
      expect(crmCanRecord(aided!)).toBe(true)
      // the self-financing twin exists and is recordable, so the CRM row is real
      const twin = all.find((p) => p.slug === slug.replace(/-aided$/, "-self-finance"))
      expect(twin?.category, slug).toBe("Self-Finance")
      expect(crmCanRecord(twin!)).toBe(true)
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
