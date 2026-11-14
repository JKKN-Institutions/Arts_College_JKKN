// Arts & Science homepage enquiry form (2026-10-16) - the DEP-34 form shape the other five college sites run,
// built from the Dental component. Posts server-side into the same jkkn.ai form (jkkn-admission-2026).
//
// PII rule, and it is not a style preference: name and phone are collected here and NEVER sent to
// GA4. Only the source page, the programme name and the path leave this component.
//
// LOOK — mockup #7 "What Happens Next", the user's pick of 10 on 2026-10-22, live on Dental first
// (PR #18) and ported here with the same Dental colours. The old see-through card sat on green with
// white labels; now the form is a white card of its own. The three-step strip answers the parent's
// first doubt ("what happens after I give my number?") and the trust line answers the second ("is
// this college genuine?"). Fields, labels and the CRM payload are unchanged.
//
// CALL / WHATSAPP (2026-11-04, ported from the Dental site where the user tested it live): the old
// "Get a Call Back" button ended on a "Thank you, 24 hours" screen. Now every form shows two
// buttons, "Call Counsellor" and "Chat on WhatsApp"; ONE tap sends the lead (keepalive POST to
// /api/enquiry, the same server code) and opens the dialer / WhatsApp (components/lead/GateSubmit).
// Inside a Call / WhatsApp gate (lib/call-gate.ts) only the matching button shows. The server action
// stays as the no-JS path.

"use client"

import { useActionState, useEffect, useId, useRef } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"
import { submitArtsEnquiry, type ArtsEnquiryState } from "@/app/actions/arts-enquiry"
import CampaignFields from "@/components/lead/CampaignFields"
import { GateButtons, GateOpenedPanel, gateSteps, useGateSubmit } from "@/components/lead/GateSubmit"
import { ARTS_PROGRAMMES, programmeLabel } from "@/lib/arts-programmes"
import { sendGaEvent } from "@/lib/ga-event"
import { ENQUIRY_DONE_KEY, writeStore } from "@/lib/enquiry-store"
import { toTenDigitMobile } from "@/lib/phone-autofill"
import type { GateIntent, GateTopic } from "@/lib/call-gate"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

// Trust line, also read by CityEnquiryForm. Proof first (user's rule 2026-10-22): each item comes
// from an official document, not from the site's own copy.
// - Periyar University: the affiliating university in naac.gov.in "Institutions with valid
//   accreditation as on 14-08-2025" (Colleges sheet, track TNCOGN101741), and in the NAAC IIQA,
//   cycle 1 (public/documents/iqac/iiqa/cycle-1.pdf).
// - 1974: "Date of establishment 19/07/1974" in that IIQA and in the cycle-1 SSR, page 9
//   (public/documents/iqac/ssr/cycle-1-2013-2018.pdf). The group's 1952 is not this college's year.
// - No NAAC item, by the user's choice 2026-10-22: the same NAAC list shows cycle 1, grade B, CGPA
//   2.37 (validity extended to 31-12-2029), and the user chose to leave NAAC out of this line.
export const TRUST = ["Affiliated to Periyar University", "Since 1974"]

type Props = {
  /** Which page this instance sits on, e.g. "bds". Tags the lead in the CRM. */
  sourcePage: string
  /** Pre-selected programme id. Optional. */
  defaultProgrammeId?: string
  /** Heading above the fields. */
  heading?: string
  /** 3 boxes only (name, mobile, programme) — for the homepage popup and cards. District and
   *  the question box are optional in the CRM form, so a compact lead is still a complete lead. */
  compact?: boolean
  /** No white card of its own — for a host that already is the white card (homepage hero, popup). */
  bare?: boolean
  /** Call / WhatsApp gate (lib/call-gate.ts): ONE button, "Call Counsellor" or "Chat on WhatsApp".
   *  Left out (every page form and the Enquire Now popup): TWO buttons, "Call Counsellor" +
   *  "Chat on WhatsApp". Either way ONE tap sends the lead and opens the app. */
  gate?: GateIntent
  /** What a WhatsApp gate was opened for (lib/call-gate.ts GateTopic), e.g. the brochure. */
  topic?: GateTopic
}

export default function ArtsEnquiryForm({
  sourcePage,
  defaultProgrammeId,
  heading = "Call or WhatsApp our admission team",
  compact = false,
  bare = false,
  gate,
  topic,
}: Props) {
  // Unique per instance: the homepage can show this form twice (hero card + popup).
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`
  const [state, formAction, isPending] = useActionState<ArtsEnquiryState | null, FormData>(
    submitArtsEnquiry,
    null
  )
  const fired = useRef(false)

  // Fires once, only on a CRM-accepted submit — not on click, not before the round trip.
  // (No-JS path only since 2026-11-04: with JavaScript the buttons go through useGateSubmit below.)
  useEffect(() => {
    if (!state?.success || fired.current) return
    fired.current = true
    writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
    // 2026-11-02 (plan Step 2). A 409 (phone already applied) is not a new CRM lead, so it gets its own
    // event and lead_form_submit counts new leads only. "program" (not "programme") is the event-scoped
    // custom dimension registered on GA4 371004015 - the old "programme" param read "(not set)" on all 6
    // submits of 2026-10-24..30. sendGaEvent waits up to 10 s for gtag instead of dropping the event.
    sendGaEvent(state.tracking?.duplicate ? "lead_form_duplicate" : "lead_form_submit", {
      form_name: "arts_enquiry",
      source_page: sourcePage,
      program: programmeLabel(state.tracking?.programme_id),
      destination: "crm",
      page_path: window.location.pathname,
    })
  }, [state, sourcePage])

  // A form that silently fails and a form nobody used both read 0. This is what separates them.
  useEffect(() => {
    if (!state || state.success || !state.error) return
    sendGaEvent("lead_form_error", {
      form_name: "arts_enquiry",
      source_page: sourcePage,
      page_path: window.location.pathname,
    })
  }, [state, sourcePage])

  // Same-tap Call / WhatsApp submit. The GA4 lead events keep the 2026-11-02 shape above (same names,
  // same params, "program" label, a 409 as lead_form_duplicate), so they stay one series.
  const gateSubmit = useGateSubmit({
    endpoint: "/api/enquiry",
    gate,
    topic,
    gaParams: { source_page: sourcePage },
    onAccepted: (answer) => {
      sendGaEvent(answer.tracking?.duplicate ? "lead_form_duplicate" : "lead_form_submit", {
        form_name: "arts_enquiry",
        source_page: sourcePage,
        program: programmeLabel(answer.tracking?.programme_id),
        destination: "crm",
        page_path: window.location.pathname,
      })
    },
    onFailed: (refused) => {
      sendGaEvent(refused ? "lead_form_error" : "lead_form_unconfirmed", {
        form_name: "arts_enquiry",
        source_page: sourcePage,
        page_path: window.location.pathname,
      })
    },
  })

  const surface = bare
    ? ""
    : "bg-white rounded-[20px] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-4 sm:p-6"

  if (gateSubmit.phase.step === "opened") {
    return (
      <GateOpenedPanel
        intent={gateSubmit.phase.intent}
        result={gateSubmit.phase.result}
        surface={surface}
        onRetry={gateSubmit.retry}
      />
    )
  }

  if (state?.success) {
    return (
      <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
        <p className="text-[#032816] text-lg font-semibold">{state.message}</p>
        <p className="text-[#4b5563] text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-[#0b6d41] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          {/* Dark text: white on WhatsApp green is 1.98:1, below the 4.5:1 text minimum. */}
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-[#032816] px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  // 16 px text in every box: below 16 px, iPhone Safari zooms the page on focus (the full form
  // used 14 px). Border #75867e is 3.84:1 on white and the hint text #5f6b66 is 5.55:1 — the
  // WCAG minimums are 3:1 for a box edge and 4.5:1 for text.
  const inputCls =
    "w-full bg-white border-[1.5px] border-[#75867e] rounded-xl px-4 py-3 text-base text-[#1f2a24] placeholder:text-[#5f6b66] focus:outline-none focus:border-[#0b6d41] focus:ring-[3px] focus:ring-[#0b6d41]/20"
  const labelCls = "block text-[#032816] text-sm font-semibold mb-1.5"
  const errCls = "text-[#b42318] text-xs mt-1"
  const steps = gateSteps(gate, compact ? "Fill 3 details" : "Fill your details")

  return (
    <form
      action={formAction}
      onSubmit={gateSubmit.onSubmit}
      onInput={gateSubmit.onInput}
      className={`${surface} space-y-4 text-left`}
    >
      <input type="hidden" name="source_page" value={sourcePage} />
      <CampaignFields />

      {/* Honeypot. Off-screen rather than display:none so a bot still fills it. Never remove: the
          CRM scores this field. autoComplete is a made-up token ON PURPOSE - measured 2026-11-12
          on Chrome 156: with "off", Chrome read "company_website" as Company name and filled a
          parent's saved company into it, which would mark a real lead as a bot. Chrome does not
          fill a field whose token it does not recognise. Do not change it back to "off". */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="hp-ignore"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <h2 className="sr-only">
        {gate === "call"
          ? "Call our admission counsellor"
          : gate === "whatsapp"
            ? "Chat with us on WhatsApp"
            : heading}
      </h2>

      <ol aria-label="What happens next" className="grid grid-cols-3 gap-1.5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="rounded-xl bg-[#f1f7f3] px-1.5 py-2.5 text-center text-xs font-semibold leading-tight text-[#032816]"
          >
            <span
              aria-hidden="true"
              className="mx-auto mb-1.5 grid h-6 w-6 place-items-center rounded-full bg-[#ffde59] text-xs font-bold"
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("name")} className={labelCls}>
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("name")}
            type="text"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className={errCls}>{err.name}</p>}
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelCls}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("phone")}
            type="tel"
            name="phone"
            autoComplete="tel-national"
            onInput={(e) => {
              const box = e.currentTarget
              const tenDigits = toTenDigitMobile(box.value)
              if (tenDigits !== box.value) box.value = tenDigits
            }}
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            title="10-digit mobile number starting with 6, 7, 8 or 9"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className={errCls}>{err.phone}</p>}
        </div>
      </div>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("programme")} className={labelCls}>
            Programme Interested In <span aria-hidden="true">*</span>
          </label>
          {/* appearance-none hides the native arrow, so draw one: without it the box does not
              read as a dropdown. */}
          <div className="relative">
            <select
              id={fid("programme")}
              name="programme"
              required
              defaultValue={defaultProgrammeId ?? ""}
              aria-invalid={!!err?.programme}
              className={`${inputCls} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a Programme
              </option>
              {ARTS_PROGRAMMES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4b5563]"
            />
          </div>
          {err?.programme && <p className={errCls}>{err.programme}</p>}
        </div>
        {!compact && (
        <div>
          <label htmlFor={fid("district")} className={labelCls}>
            Your District <span className="font-normal text-[#4b5563]">(optional)</span>
          </label>
          <input
            id={fid("district")}
            type="text"
            name="district"
            placeholder="e.g., Namakkal"
            className={inputCls}
          />
        </div>
        )}
      </div>

      {!compact && (
      <div>
        <label htmlFor={fid("question")} className={labelCls}>
          Any Questions? <span className="font-normal text-[#4b5563]">(optional)</span>
        </label>
        <textarea
          id={fid("question")}
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for BDS?"
          className={`${inputCls} resize-none`}
        />
      </div>
      )}

      {/* One tap = lead + app. Two buttons on every page form and the Enquire Now popup (the old
          "Get a Call Back" ended on a 24-hour thank-you screen); one inside a Call / WhatsApp gate.
          The "Or call us directly" links went with it (2026-11-04): the form is the way in. */}
      <GateButtons gate={gate} disabled={isPending} onChoose={gateSubmit.choose} />

      {state && !state.success && state.error && (
        <p className="text-[#b42318] text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <ul
        aria-label="Recognition"
        className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5 text-[12.5px] font-semibold text-[#032816]"
      >
        {TRUST.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#0b6d41]" />
            {t}
          </li>
        ))}
      </ul>

      {compact && (
        <p className="text-center text-[#5f6b66] text-xs">
          By submitting, you agree to be contacted by our admission team.
        </p>
      )}
    </form>
  )
}
