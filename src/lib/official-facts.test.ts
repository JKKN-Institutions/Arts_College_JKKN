import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { KEY_CODES, KEY_FACTS, KEY_FACTS_SUMMARY, SRC } from "@/data/official-facts"

// Plan Step 6 (GEO, 2026-11-03): the key facts on the homepage, /about and /approvals come from
// src/data/official-facts.ts; llms.txt repeats them as plain text. These tests keep the copies in step.
const root = process.cwd()
const read = (rel: string) => readFileSync(join(root, rel), "utf-8")

describe("official key facts", () => {
  it("gives every fact and code at least one source with a real link", () => {
    for (const f of KEY_FACTS) {
      expect(f.sources.length, f.label).toBeGreaterThan(0)
      for (const s of f.sources) expect(s.href, f.label).toMatch(/^(https:\/\/|\/)/)
    }
    for (const c of KEY_CODES) expect(c.source.href, c.label).toMatch(/^(https:\/\/|\/)/)
  })

  it("keeps the regulator values the /approvals page and the NIRF data file carry", () => {
    const byLabel = Object.fromEntries(KEY_FACTS.map((f) => [f.label, f.value]))
    expect(byLabel["Established"]).toBe("1974")
    expect(byLabel["NAAC"]).toBe("Grade B, CGPA 2.37")
    expect(byLabel["Status"]).toBe("Autonomous, 2024-25 to 2028-29")
    expect(byLabel["Students"]).toBe("1,685")
    expect(byLabel["Faculty"]).toBe("121, of whom 52 hold a Ph.D")
    expect(SRC.ugcAuto.href).toContain("8688705_List-of-Autonomous-Colleges.pdf")
  })

  it("has a quotable one-sentence summary of 40-55 words", () => {
    const words = KEY_FACTS_SUMMARY.split(/\s+/).filter(Boolean).length
    expect(words).toBeGreaterThanOrEqual(40)
    expect(words).toBeLessThanOrEqual(55)
  })

  it("says the same thing in llms.txt", () => {
    const llms = read("public/llms.txt")
    for (const s of ["Grade B (CGPA 2.37)", "2024-25 to 2028-29", "Section 2(f) and 12(B)", "1,685", "121 on roll, 52 with a Ph.D.", "C-9494", "2180001"]) {
      expect(llms, s).toContain(s)
    }
    expect(llms).not.toContain("Accreditation: NAAC Accredited\r\n")
    expect(llms).not.toContain("Accreditation: NAAC Accredited\n")
  })

  it("no longer says 34 programmes anywhere in the shared layout", () => {
    expect(read("src/app/layout.tsx")).not.toContain("34 Programmes")
  })
})
