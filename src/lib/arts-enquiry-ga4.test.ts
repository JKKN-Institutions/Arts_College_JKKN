// DEP-100 (2026-11-13): the server action tells GA4 only what the CRM really did with the lead.
// The CRM and GA4 are both faked here - no request leaves this machine and no lead is written.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const scheduled: Array<() => unknown> = []
vi.mock("next/server", () => ({ after: (task: () => unknown) => scheduled.push(task) }))
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (k: string) => (k === "_ga" ? { value: "GA1.1.111.222" } : undefined) }),
}))

import { submitArtsEnquiry } from "@/app/actions/arts-enquiry"
import { VALID_PROGRAMME_IDS, programmeLabel } from "@/lib/arts-programmes"

const PROGRAMME = [...VALID_PROGRAMME_IDS][0]
const MP = "https://www.google-analytics.com/mp/collect"

function form(extra: Record<string, string> = {}) {
  const fd = new FormData()
  fd.set("name", "Test Parent")
  fd.set("phone", "9000000001")
  fd.set("programme", PROGRAMME)
  fd.set("source_page", "bds")
  fd.set("company_website", "")
  for (const [k, v] of Object.entries(extra)) fd.set(k, v)
  return fd
}

function fakeNetwork(crmStatus: number) {
  const calls: Array<{ url: string; body: unknown }> = []
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url: String(url), body: init?.body ? JSON.parse(String(init.body)) : null })
      if (String(url).startsWith(MP)) return new Response(null, { status: 204 })
      return new Response(JSON.stringify({ ok: crmStatus < 300 }), { status: crmStatus })
    })
  )
  return calls
}

async function runScheduled() {
  while (scheduled.length) await scheduled.shift()!()
}

beforeEach(() => {
  scheduled.length = 0
  vi.stubEnv("GA4_MP_API_SECRET", "test-secret")
  vi.stubEnv("ENQUIRY_DRY_RUN", "")
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe("submitArtsEnquiry -> GA4 server event", () => {
  it("a new CRM lead (200) sends lead_crm_accepted, after the answer", async () => {
    const calls = fakeNetwork(200)
    const result = await submitArtsEnquiry(null, form())
    expect(result.success).toBe(true)
    expect(result.tracking?.duplicate).toBeUndefined()
    // Nothing has gone to GA4 yet: the event waits for after(), i.e. for the response to be sent.
    expect(calls.filter((c) => c.url.startsWith(MP))).toHaveLength(0)
    await runScheduled()
    const mp = calls.filter((c) => c.url.startsWith(MP))
    expect(mp).toHaveLength(1)
    const body = mp[0].body as { client_id: string; events: Array<{ name: string; params: Record<string, unknown> }> }
    expect(body.client_id).toBe("111.222")
    expect(body.events[0].name).toBe("lead_crm_accepted")
    expect(body.events[0].params).toMatchObject({ form_name: "arts_enquiry", source_page: "bds", program: programmeLabel(PROGRAMME) })
    // No name and no phone ever reach GA4.
    expect(JSON.stringify(body)).not.toContain("9000000001")
    expect(JSON.stringify(body)).not.toContain("Test Parent")
  })

  it("a phone already in the CRM (409) sends lead_crm_duplicate", async () => {
    const calls = fakeNetwork(409)
    const result = await submitArtsEnquiry(null, form())
    expect(result.success).toBe(true)
    expect(result.tracking?.duplicate).toBe(true)
    await runScheduled()
    const mp = calls.filter((c) => c.url.startsWith(MP))
    expect(mp).toHaveLength(1)
    expect((mp[0].body as { events: Array<{ name: string }> }).events[0].name).toBe("lead_crm_duplicate")
  })

  it("a filled honeypot (a bot) sends nothing to GA4", async () => {
    const calls = fakeNetwork(200)
    await submitArtsEnquiry(null, form({ company_website: "Test Company" }))
    await runScheduled()
    expect(calls.filter((c) => c.url.startsWith(MP))).toHaveLength(0)
  })

  it("a CRM refusal sends nothing to GA4 and the parent still gets the error", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    const calls = fakeNetwork(500)
    const result = await submitArtsEnquiry(null, form())
    expect(result.success).toBe(false)
    await runScheduled()
    expect(calls.filter((c) => c.url.startsWith(MP))).toHaveLength(0)
  })

  it("without the secret the submit is exactly as before: no GA4 call at all", async () => {
    vi.stubEnv("GA4_MP_API_SECRET", "")
    const calls = fakeNetwork(200)
    const result = await submitArtsEnquiry(null, form())
    expect(result.success).toBe(true)
    await runScheduled()
    expect(calls.filter((c) => c.url.startsWith(MP))).toHaveLength(0)
    expect(calls).toHaveLength(1) // the CRM submit only
  })

  it("the CRM still gets the lead when GA4 is down", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {})
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) => {
        if (String(url).startsWith(MP)) throw new Error("GA4 down")
        return new Response("{}", { status: 200 })
      })
    )
    const result = await submitArtsEnquiry(null, form())
    expect(result.success).toBe(true)
    await expect(runScheduled()).resolves.toBeUndefined()
  })
})

import { submitCityEnquiry } from "@/app/actions/city-enquiry"

describe("submitCityEnquiry -> GA4 server event", () => {
  function cityForm(extra: Record<string, string> = {}) {
    const fd = form(extra)
    fd.set("city", "erode")
    return fd
  }
  it("a new CRM lead (200) sends lead_crm_accepted with the city", async () => {
    const calls = fakeNetwork(200)
    const result = await submitCityEnquiry(null, cityForm())
    expect(result.success).toBe(true)
    await runScheduled()
    const mp = calls.filter((c) => c.url.startsWith(MP))
    expect(mp).toHaveLength(1)
    const body = mp[0].body as { events: Array<{ name: string; params: Record<string, unknown> }> }
    expect(body.events[0].name).toBe("lead_crm_accepted")
    expect(body.events[0].params).toMatchObject({ form_name: "city_enquiry", program: programmeLabel(PROGRAMME) })
    expect(JSON.stringify(body)).not.toContain("9000000001")
  })
  it("a 409 sends lead_crm_duplicate; a honeypot sends nothing", async () => {
    const calls = fakeNetwork(409)
    await submitCityEnquiry(null, cityForm())
    await submitCityEnquiry(null, cityForm({ company_website: "Test Company" }))
    await runScheduled()
    const mp = calls.filter((c) => c.url.startsWith(MP))
    expect(mp).toHaveLength(1)
    expect((mp[0].body as { events: Array<{ name: string }> }).events[0].name).toBe("lead_crm_duplicate")
  })
})
