import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { afterEach, describe, expect, it, vi } from "vitest"
import {
  GA4_MEASUREMENT_ID,
  buildMpBody,
  clientIdFromGaCookie,
  freshClientId,
  sendServerLeadEvent,
} from "@/lib/ga4-server-event"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe("clientIdFromGaCookie", () => {
  it("takes the client id out of gtag's _ga cookie", () => {
    expect(clientIdFromGaCookie("GA1.1.1234567890.1700000000")).toBe("1234567890.1700000000")
    expect(clientIdFromGaCookie(" GA1.2.55.66 ")).toBe("55.66")
  })
  it("returns null for a missing or foreign value", () => {
    expect(clientIdFromGaCookie(undefined)).toBeNull()
    expect(clientIdFromGaCookie("")).toBeNull()
    expect(clientIdFromGaCookie("abc")).toBeNull()
    expect(clientIdFromGaCookie("GS1.1.1700000000.1.1.1700000000.0.0.0")).toBeNull()
  })
})

describe("freshClientId", () => {
  it("has gtag's <random>.<seconds> shape", () => {
    expect(freshClientId(1_700_000_000_000, 0.5)).toBe("1073741823.1700000000")
    expect(freshClientId()).toMatch(/^\d+\.\d+$/)
  })
})

describe("buildMpBody", () => {
  it("drops empty params, cuts values to 100 characters and adds engagement time", () => {
    const body = buildMpBody("1.2", "lead_crm_accepted", {
      form_name: "arts_enquiry",
      source_page: "x".repeat(150),
      programme: "",
    })
    expect(body.client_id).toBe("1.2")
    expect(body.events).toHaveLength(1)
    expect(body.events[0].name).toBe("lead_crm_accepted")
    expect(body.events[0].params).toEqual({
      form_name: "arts_enquiry",
      source_page: "x".repeat(100),
      engagement_time_msec: 1,
    })
  })
})

describe("sendServerLeadEvent", () => {
  const params = { form_name: "arts_enquiry", source_page: "bds", programme: "p1" }

  it("does nothing at all without the API secret", async () => {
    vi.stubEnv("GA4_MP_API_SECRET", "")
    const fetchImpl = vi.fn()
    const r = await sendServerLeadEvent({ name: "lead_crm_accepted", params, fetchImpl })
    expect(r).toBe("not_configured")
    expect(fetchImpl).not.toHaveBeenCalled()
  })

  it("posts one event to the Measurement Protocol with the site's measurement id", async () => {
    vi.stubEnv("GA4_MP_API_SECRET", "test-secret")
    const fetchImpl = vi.fn(async () => new Response(null, { status: 204 }))
    const r = await sendServerLeadEvent({
      name: "lead_crm_duplicate",
      params,
      gaCookie: "GA1.1.111.222",
      fetchImpl: fetchImpl as unknown as typeof fetch,
    })
    expect(r).toBe("sent")
    expect(fetchImpl).toHaveBeenCalledTimes(1)
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=test-secret`
    )
    expect(init.method).toBe("POST")
    const body = JSON.parse(String(init.body))
    expect(body.client_id).toBe("111.222")
    expect(body.events[0].name).toBe("lead_crm_duplicate")
    // No PII can ride along: only the three keys the caller gave, plus engagement time.
    expect(Object.keys(body.events[0].params).sort()).toEqual(
      ["engagement_time_msec", "form_name", "programme", "source_page"]
    )
  })

  it("never throws: a network error or a refusal is just 'failed'", async () => {
    vi.stubEnv("GA4_MP_API_SECRET", "test-secret")
    vi.spyOn(console, "warn").mockImplementation(() => {})
    const boom = vi.fn(async () => {
      throw new Error("offline")
    })
    await expect(
      sendServerLeadEvent({ name: "lead_crm_accepted", params, fetchImpl: boom as unknown as typeof fetch })
    ).resolves.toBe("failed")
    const refused = vi.fn(async () => new Response(null, { status: 500 }))
    await expect(
      sendServerLeadEvent({ name: "lead_crm_accepted", params, fetchImpl: refused as unknown as typeof fetch })
    ).resolves.toBe("failed")
  })

  it("never writes the secret into a log line", async () => {
    vi.stubEnv("GA4_MP_API_SECRET", "test-secret")
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    const refused = vi.fn(async () => new Response(null, { status: 500 }))
    await sendServerLeadEvent({ name: "lead_crm_accepted", params, fetchImpl: refused as unknown as typeof fetch })
    expect(JSON.stringify(warn.mock.calls)).not.toContain("test-secret")
  })
})

describe("measurement id", () => {
  it("is the same id the page's GA tag uses (GoogleAnalytics.tsx)", () => {
    const ga = readFileSync(fileURLToPath(new URL("../components/analytics/GoogleAnalytics.tsx", import.meta.url)), "utf8")
    expect(ga).toContain('process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-QW6LQV7XE5"')
    expect(GA4_MEASUREMENT_ID).toBe(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-QW6LQV7XE5")
  })
})
