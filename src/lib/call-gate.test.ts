import { describe, expect, it } from "vitest"
import {
  BROCHURE_WHATSAPP_HREF,
  gateIntentForHref,
  gateTopicFor,
  isAdminPath,
  isGateNumber,
  isUngatedPath,
  numberAtOffset,
  pageTag,
  programmeForPath,
  telUrlFor,
  whatsappGateUrl,
} from "@/lib/call-gate"
import { VALID_PROGRAMME_IDS } from "@/lib/arts-programmes"

const BCA = "f0f0b814-5e8c-41db-900b-a6fa1e9e5bd6"
const AI_DS = "1188ad3b-c941-465e-af42-9dca3fe33170"
const CYBER = "83488831-7b75-48df-9754-1ab9e204166f"
const MICRO = "1b42a105-e03c-461f-bc30-8252596235dd"
const TFD = "0d37fe49-31eb-4735-a48f-0ccf31d0e784"
const MSC_DA = "9aab244b-1101-4777-803f-e5cf653cceae"
const MCOM = "40633012-400b-4b3b-94b7-f2b33dc4d39e"

describe("numberAtOffset (plain-text numbers)", () => {
  const text = "For admission call +91 93458 55001 or the library on +91 9965522229 today."
  it("finds the number a tap lands on, in any of its written forms", () => {
    expect(numberAtOffset(text, text.indexOf("93458 55001") + 3)).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("+91"))).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("9965522229") + 2)).toBe("9965522229")
    expect(numberAtOffset("Call +91-9345855001 now", 9)).toBe("9345855001")
    expect(numberAtOffset("Aided: 99433 53353", 10)).toBe("9943353353")
  })
  it("returns null off the number, and for years or short numbers", () => {
    expect(numberAtOffset(text, 2)).toBeNull()
    expect(numberAtOffset("Since 1974, 35 programmes", 7)).toBeNull()
  })
  it("only the admission number is gated", () => {
    expect(isGateNumber("9345855001")).toBe(true)
    expect(isGateNumber("9943353353")).toBe(false)
    expect(isGateNumber("9965522229")).toBe(false)
    expect(telUrlFor("9965522229")).toBe("tel:+919965522229")
  })
})

describe("gateIntentForHref", () => {
  it("gates every way the site writes the admission number", () => {
    expect(gateIntentForHref("tel:+919345855001")).toBe("call")
    expect(gateIntentForHref("tel:9345855001")).toBe("call")
    expect(gateIntentForHref("tel:+91 93458 55001")).toBe("call")
    expect(gateIntentForHref("https://wa.me/919345855001")).toBe("whatsapp")
    expect(gateIntentForHref("https://wa.me/919345855001?text=Hi%2C%20BCA")).toBe("whatsapp")
    expect(gateIntentForHref("https://api.whatsapp.com/send?phone=919345855001&text=hi")).toBe("whatsapp")
  })

  it("leaves every other number and link alone", () => {
    expect(gateIntentForHref("tel:+919943353353")).toBeNull() // old aided line
    expect(gateIntentForHref("https://wa.me/919943353353")).toBeNull()
    expect(gateIntentForHref("tel:+91 9965522229")).toBeNull() // library
    expect(gateIntentForHref("https://www.jkkn.ai/apply/jkkn-admission-2026")).toBeNull()
    expect(gateIntentForHref("mailto:cas@jkkn.ac.in")).toBeNull()
    expect(gateIntentForHref("/contact")).toBeNull()
  })
})

describe("isUngatedPath", () => {
  it("keeps careers, aided, Ph.D and non-CRM course pages direct", () => {
    expect(isUngatedPath("/careers")).toBe(true)
    expect(isUngatedPath("/careers/1b810e2e-dbc5-4a0b-bae3-fd7c76bfe241")).toBe(true)
    expect(isUngatedPath("/departments/aided/chemistry")).toBe(true)
    expect(isUngatedPath("/departments/aided/commerce/")).toBe(true)
    expect(isUngatedPath("/departments/self-finance/tamil")).toBe(true)
    expect(isUngatedPath("/programmes/aided/ug/bcom")).toBe(true)
    expect(isUngatedPath("/programmes/aided/phd/zoology")).toBe(true)
    expect(isUngatedPath("/programmes/self-finance/ug/bcom-accounting-finance")).toBe(true)
    expect(isUngatedPath("/programmes/self-finance/ug/bcom-banking-insurance")).toBe(true)
    expect(isUngatedPath("/admissions/bcom-aided")).toBe(true)
    expect(isUngatedPath("/admissions/phd-tamil-aided")).toBe(true)
    expect(isUngatedPath("/admissions/bcom-accounting-finance-self-finance")).toBe(true)
    expect(isUngatedPath("/admissions/bcom-banking-insurance-self-finance")).toBe(true)
  })
  it("gates the CRM programmes and every general page", () => {
    expect(isUngatedPath("/")).toBe(false)
    expect(isUngatedPath("/contact")).toBe(false)
    expect(isUngatedPath("/admissions")).toBe(false)
    expect(isUngatedPath("/admissions/courses")).toBe(false)
    expect(isUngatedPath("/admissions/bca-self-finance")).toBe(false)
    expect(isUngatedPath("/admissions/bcom-ca-self-finance")).toBe(false)
    expect(isUngatedPath("/programmes/self-finance/ug/bcom-ca")).toBe(false)
    expect(isUngatedPath("/departments/self-finance/commerce")).toBe(false)
    expect(isUngatedPath("/departments/self-finance/tamil-nadu-day")).toBe(false)
    expect(isUngatedPath("/careers-fair-2026")).toBe(false)
  })
  it("knows the staff panel", () => {
    expect(isAdminPath("/admin")).toBe(true)
    expect(isAdminPath("/admin/blog/edit/1")).toBe(true)
    expect(isAdminPath("/administration")).toBe(false)
  })
})

describe("programmeForPath", () => {
  it("pre-selects only the clear one-programme pages", () => {
    expect(programmeForPath("/admissions/bsc-ai-ds-self-finance")).toBe(AI_DS)
    expect(programmeForPath("/admissions/msc-cs-data-analytics-self-finance/")).toBe(MSC_DA)
    expect(programmeForPath("/programmes/self-finance/ug/bsc-microbiology")).toBe(MICRO)
    expect(programmeForPath("/programmes/self-finance/pg/msc-cs-data-analytics")).toBe(MSC_DA)
    expect(programmeForPath("/bsc-cyber-security-colleges-in-tamil-nadu")).toBe(CYBER)
    expect(programmeForPath("/bsc-fashion-designing-colleges-in-tamil-nadu")).toBe(TFD)
  })
  it("leaves the dropdown empty where the CRM name is ambiguous or the page is general", () => {
    expect(programmeForPath("/admissions/bca-self-finance")).toBeUndefined()
    expect(programmeForPath("/programmes/self-finance/ug/bsc-computer-science")).toBeUndefined()
    expect(programmeForPath("/bsc-computer-science-colleges-in-tamil-nadu")).toBeUndefined()
    expect(programmeForPath("/admissions/constructor")).toBeUndefined()
    expect(programmeForPath("/contact")).toBeUndefined()
    expect(programmeForPath("/")).toBeUndefined()
  })
  it("every pre-selected id is a live CRM programme id", () => {
    for (const path of [
      "/admissions/bsc-ai-ds-self-finance",
      "/programmes/self-finance/ug/bsc-visual-communication",
      "/bsc-physics-colleges-in-tamil-nadu",
      "/bsc-ai-data-science-colleges-in-tamil-nadu",
      "/bsc-microbiology-colleges-in-tamil-nadu",
      "/bsc-visual-communication-colleges-in-tamil-nadu",
    ]) {
      expect(VALID_PROGRAMME_IDS.has(programmeForPath(path) ?? "")).toBe(true)
    }
  })
})

describe("brochure topic (lead option 4, 2026-11-05)", () => {
  it("only the word brochure is a topic", () => {
    expect(gateTopicFor("brochure")).toBe("brochure")
    expect(gateTopicFor("Brochure")).toBeUndefined()
    expect(gateTopicFor("fees")).toBeUndefined()
    expect(gateTopicFor(null)).toBeUndefined()
  })
  it("asks for the brochure in the WhatsApp text, still with course + page ref only", () => {
    const url = whatsappGateUrl(BCA, "/programmes/self-finance/ug/bca", "brochure")
    const text = decodeURIComponent(url.split("?text=")[1])
    expect(text.startsWith("Hi, BCA brochure and admission details venum. Ref: WEB-ARTS-")).toBe(true)
  })
  it("leaves the text unchanged without a topic", () => {
    expect(decodeURIComponent(whatsappGateUrl(BCA, "/contact", undefined).split("?text=")[1])).toBe("Hi, BCA admission details venum. Ref: WEB-ARTS-contact")
  })
  it("the brochure link itself is a gated WhatsApp link", () => {
    expect(gateIntentForHref(BROCHURE_WHATSAPP_HREF)).toBe("whatsapp")
    expect(decodeURIComponent(BROCHURE_WHATSAPP_HREF.split("?text=")[1])).toBe("Hi, Arts and Science brochure venum. Ref: WEB-ARTS-brochure")
  })
})

describe("whatsappGateUrl", () => {
  it("types the course and a page reference, never a name or phone", () => {
    const url = whatsappGateUrl(BCA, "/contact")
    expect(url.startsWith("https://wa.me/919345855001?text=")).toBe(true)
    expect(decodeURIComponent(url.split("?text=")[1])).toBe("Hi, BCA admission details venum. Ref: WEB-ARTS-contact")
    const mcom = whatsappGateUrl(MCOM, "/")
    expect(decodeURIComponent(mcom.split("?text=")[1])).toBe("Hi, M.Com admission details venum. Ref: WEB-ARTS-home")
    const ai = whatsappGateUrl(AI_DS, "/admissions/bsc-ai-ds-self-finance")
    expect(decodeURIComponent(ai.split("?text=")[1])).toBe(
      "Hi, B.Sc Computer Science (AI & Data Science) admission details venum. Ref: WEB-ARTS-admissions-bsc-ai-ds-self-fina"
    )
  })

  it("keeps the page tag short", () => {
    expect(pageTag("/")).toBe("-home")
    expect(pageTag("/admissions/courses/")).toBe("-admissions-courses")
  })
})
