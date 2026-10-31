// Server action behind the Arts & Science homepage enquiry form (2026-10-16).
// Same shape as the Dental / Pharmacy / Nursing / AHS / Education actions (DEP-34). The city pages keep
// their own city-enquiry.ts; this one tags by page (utm_campaign cas-<sourcePage>) instead of by city.
//
// WHY A SERVER ACTION AND NOT A fetch() IN THE COMPONENT.
// An OPTIONS preflight to the CRM submit endpoint, sent with a college-site Origin, answers 204
// with "Allow: OPTIONS, POST" and carries NO Access-Control-Allow-Origin header — measured
// 2026-08-11 and re-confirmed 2026-08-16. A browser therefore blocks a direct cross-origin POST
// from this site. Server-to-server has no CORS check, so the submit has to leave from the server.
// The in-component fetch() version cannot be made to work without a change on jkkn.ai.
//
// The endpoint is public — no key, no auth — so nothing secret lives in this file.
//
// This file exports ONLY an async function and an erased type. Programme data lives in
// @/lib/arts-programmes because a 'use server' module may not export plain values.

"use server"

import {
  ARTS_INSTITUTION_ID,
  VALID_PROGRAMME_IDS,
} from "@/lib/arts-programmes"
import { crmCampaign } from "@/lib/campaign-tags"

const CRM_SLUG = "jkkn-admission-2026"
const CRM_SUBMIT = `https://www.jkkn.ai/api/public/forms/${CRM_SLUG}/submit`

export type ArtsEnquiryState = {
  success: boolean
  message?: string
  error?: string
  // echoed back so the client can fire the GA4 event with no PII in it
  tracking?: { source_page: string; programme_id: string }
  fieldErrors?: Partial<Record<"name" | "phone" | "programme", string>>
}

// This repo has no zod (checked 2026-08-16) and a lead form is not the place to add a
// dependency, so the three rules are written out by hand.
function validate(name: string, phone: string, programme: string) {
  const fieldErrors: ArtsEnquiryState["fieldErrors"] = {}
  if (name.trim().length < 2) fieldErrors.name = "Please enter your full name."
  if (!/^[6-9]\d{9}$/.test(phone.trim()))
    fieldErrors.phone = "Please enter a valid 10-digit mobile number (it starts with 6, 7, 8 or 9)."
  if (!VALID_PROGRAMME_IDS.has(programme))
    fieldErrors.programme = "Please choose a programme."
  return fieldErrors
}

export async function submitArtsEnquiry(
  _prevState: ArtsEnquiryState | null,
  formData: FormData
): Promise<ArtsEnquiryState> {
  const name = String(formData.get("name") ?? "")
  const phone = String(formData.get("phone") ?? "").replace(/\D/g, "")
  const district = String(formData.get("district") ?? "")
  const sourcePage = String(formData.get("source_page") ?? "")
  const programme = String(formData.get("programme") ?? "")
  const question = String(formData.get("question") ?? "")
  // Honeypot. The CRM expects this key and treats a non-empty value as a bot.
  // Rendered off-screen, never shown to a human.
  const honeypot = String(formData.get("company_website") ?? "")

  const fieldErrors = validate(name, phone, programme)
  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: "Please fix the highlighted fields.", fieldErrors }
  }

  const payload = {
    formData: {
      first_name: name.trim(),
      phone,
      district,
      institution_program: {
        institution_id: ARTS_INSTITUTION_ID,
        program_id: programme,
      },
    },
    honeypot,
    sessionId: crypto.randomUUID(),
    // Tag the source so these leads are separable from jkkn.ai's own traffic inside the CRM.
    // Without this they are indistinguishable and the row cannot be proved to be ours.
    // The visitor's own campaign tags win when they brought some (lib/campaign-tags.ts, 2026-10-31).
    ...crmCampaign(formData, {
      utmSource: "cas.jkkn.ac.in",
      utmMedium: "site-form",
      utmCampaign: sourcePage ? `cas-${sourcePage}` : "cas-site",
    }),
    campaignLinkId: null,
    referrerUrl: question ? `question: ${question.slice(0, 300)}` : "",
  }

  try {
    const res = await fetch(CRM_SUBMIT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // A parent staring at a spinner is a lost lead. Fail loudly and fast.
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    })

    if (res.status === 409) {
      // 409 means this phone has already applied. That is not a failure for the parent —
      // they are in the system — so it must not read like an error.
      return {
        success: true,
        message:
          "You have already enquired with this number. Our admission team will call you — no need to submit again.",
        tracking: { source_page: sourcePage, programme_id: programme },
      }
    }

    if (!res.ok) {
      const body = await res.json().catch(() => null)
      console.error("[arts-enquiry] CRM rejected submit", res.status, body)
      return {
        success: false,
        error:
          "We could not submit your enquiry just now. Please call +91-9345855001 or message us on WhatsApp.",
      }
    }

    return {
      success: true,
      message:
        "Thank you. Our admission team will contact you within 24 hours on WhatsApp or by phone.",
      tracking: { source_page: sourcePage, programme_id: programme },
    }
  } catch (err) {
    console.error("[arts-enquiry] network/timeout reaching CRM", err)
    return {
      success: false,
      error:
        "We could not reach our admission system. Please call +91-9345855001 or message us on WhatsApp.",
    }
  }
}
