import { describe, expect, it } from "vitest"
import { ARTS_PROGRAMMES, programmeLabel } from "./arts-programmes"

// GA4's "program" dimension (2026-11-02) must carry a readable name, never the CRM uuid.
describe("programmeLabel", () => {
  it("turns a CRM programme id into its label", () => {
    const first = ARTS_PROGRAMMES[0]
    expect(programmeLabel(first.id)).toBe(first.label)
  })

  it("never returns a uuid for an unknown or missing id", () => {
    expect(programmeLabel("00000000-0000-0000-0000-000000000000")).toBe("not_selected")
    expect(programmeLabel(undefined)).toBe("not_selected")
    expect(programmeLabel("")).toBe("not_selected")
  })

  it("has a distinct label for every id, so two programmes never read the same in GA4", () => {
    const labels = ARTS_PROGRAMMES.map((p) => p.label)
    expect(new Set(labels).size).toBe(labels.length)
  })
})
