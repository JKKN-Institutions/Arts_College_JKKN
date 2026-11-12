import { describe, expect, it } from "vitest"
import { toTenDigitMobile } from "./phone-autofill"

// Sample numbers are fake.
describe("toTenDigitMobile", () => {
  const cases: [string, string][] = [
    ["+91 70000 00001", "7000000001"],
    ["+917000000001", "7000000001"],
    ["917000000001", "7000000001"],
    ["070000 00001", "7000000001"],
    ["07000000001", "7000000001"],
    ["70000-00001", "7000000001"],
    ["7000000001", "7000000001"],
    ["70000", "70000"],
    ["", ""],
    ["9170000000", "9170000000"],
  ]
  for (const [input, expected] of cases) {
    it(`${JSON.stringify(input)} -> ${expected}`, () => expect(toTenDigitMobile(input)).toBe(expected))
  }

  it("what Chrome autofills passes the box pattern", () => {
    expect(/^[6-9][0-9]{9}$/.test(toTenDigitMobile("07000000001"))).toBe(true)
  })
})
