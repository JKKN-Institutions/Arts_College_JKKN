import { describe, expect, it } from "vitest"
import { getAllProgrammes } from "@/data/programme-metadata"
import { FACTS_CHECKED, SANCTIONED_SEATS } from "@/data/admission-facts"
import { getAdmissionContent } from "./admission-defaults"

// Plan Step 4 (2026-11-02): seats, eligibility and dates on /admissions/<course> come from an official
// source or say plainly that none is published.
const all = getAllProgrammes()
const content = all.map(({ path, info }) => ({ path, info, c: getAdmissionContent(path, info) }))

describe("admission facts", () => {
  it("gives a seat number only for a real programme, never a proposed one", () => {
    const paths = new Set(all.map((p) => p.path))
    for (const key of Object.keys(SANCTIONED_SEATS)) expect(paths.has(key), key).toBe(true)
    for (const { info, c } of content.filter((x) => x.info.proposed)) {
      expect(c.intakeSeats, info.slug).toBeNull()
    }
  })

  it("keeps the courses TN DCE does not list (or lists as 0 / another category) without a number", () => {
    for (const path of [
      "self-finance/ug/bsc-clinical-lab-technology",
      "aided/pg/msc-computer-science",
      "aided/pg/msc-physics",
      "self-finance/pg/msc-cs-data-analytics",
      "aided/phd/chemistry",
    ]) {
      expect(SANCTIONED_SEATS[path], path).toBeUndefined()
    }
  })

  it("names the source and the day under every seat number", () => {
    for (const { info, c } of content) {
      if (c.intakeSeats === null) continue
      expect(c.intakeSeats, info.slug).toBeGreaterThan(0)
      expect(c.intakeNote, info.slug).toContain(FACTS_CHECKED)
    }
  })

  it("prints no percentage except where the official rule sets one (MCA, Ph.D.)", () => {
    for (const { path, info, c } of content) {
      const text = [...c.eligibilityCriteria, ...c.faq.map((f) => f.answer)].join(" ")
      if (path === "aided/pg/mca" || info.level === "PhD") continue
      expect(text, info.slug).not.toMatch(/\d+\s?%/)
    }
  })

  it("ties every eligibility list to its source, or sends the parent to the admissions office", () => {
    for (const { info, c } of content) {
      const text = c.eligibilityCriteria.join(" ")
      expect(
        /Periyar University|admissions office/.test(text),
        `${info.slug}: ${text}`,
      ).toBe(true)
    }
  })

  it("never shows a guessed 2027-28 date", () => {
    for (const { info, c } of content) {
      if (info.proposed || info.level === "PhD") continue
      expect(c.applicationDeadline, info.slug).toBe("Not announced yet")
      expect(c.importantDates[0].date, info.slug).toContain(FACTS_CHECKED)
    }
  })
})
