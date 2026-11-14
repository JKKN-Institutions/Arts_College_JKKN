// DRAFT — DEP-34. Target path in the Arts repo: src/components/lead/CityEnquiryForm.tsx
// NOT DEPLOYED. Nothing in this file has run against production.
//
// This ONE file replaces all five of CoimbatoreContactForm / ErodeContactForm /
// NamakkalContactForm / SalemContactForm / TiruppurContactForm. Those five are
// byte-different only in the city string (verified by sha256 on 2026-08-11: five
// distinct hashes, 149 identical lines each). Five copies is five places to forget.
//
// THREE DEFECTS IN THE OLD FILES THAT ARE FIXED HERE, all measured 2026-08-11:
//  1. The old handler never posted anywhere. It called window.open on a wa.me link,
//     so a submitted enquiry existed only inside somebody's WhatsApp thread and never
//     reached the CRM. Goal 2 counts CRM leads, so those leads were uncountable.
//  2. The old files sent WhatsApp to +91 9943353353. The live Arts site shows
//     +91 9345855001 in 20 places and 9943353353 in none. Wiring the old files in
//     as-is would have routed every enquiry to a number the site never advertises.
//  3. The old visible fallback text read the literal "+91-XXXXXXXXXX" while the href
//     carried a real number. A parent reads the X's.
//
// AND ONE THAT MATTERS FOR DEP-14: the old code fired lead_form_submit BEFORE the
// handoff and regardless of outcome, so it counted intent, not submission. Here it
// fires only after the CRM has accepted the lead.
//
// LOOK — mockup #7 "What Happens Next" (user's pick 2026-10-22), the same white card, 3-step
// strip, trust line and Dental colours as ArtsEnquiryForm, so the contact page and the homepage
// show one form. The action (city-enquiry.ts), fields and GA4 events are unchanged.
//
// CALL / WHATSAPP (2026-11-04, same change as ArtsEnquiryForm): two buttons, "Call Counsellor" and
// "Chat on WhatsApp"; ONE tap sends the lead (keepalive POST to /api/city-enquiry, the same server
// code as submitCityEnquiry) and opens the dialer / WhatsApp (components/lead/GateSubmit). The
// server action stays as the no-JS path. A CRM-accepted lead is now remembered on this browser
// (enquiry-store), like the homepage form, so the Call / WhatsApp gate does not stop that parent again.

'use client'

import { useActionState, useEffect, useRef } from 'react'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { submitCityEnquiry, type CityEnquiryState } from '@/app/actions/city-enquiry'
import CampaignFields from '@/components/lead/CampaignFields'
import { TRUST } from '@/components/lead/ArtsEnquiryForm'
import { GateButtons, GateOpenedPanel, gateSteps, useGateSubmit } from '@/components/lead/GateSubmit'
import { ARTS_PROGRAMMES, programmeLabel } from '@/lib/arts-programmes'
import { sendGaEvent } from '@/lib/ga-event'
import { toTenDigitMobile } from '@/lib/phone-autofill'

const ADMISSION_PHONE = '+919345855001'
const ADMISSION_PHONE_DISPLAY = '+91 93458 55001'

// Full form, so step 1 is "Fill your details" (the compact form says "Fill 3 details").
const STEPS = gateSteps(undefined, 'Fill your details')

type Props = {
  /** Display name of the city this page targets, e.g. "Namakkal". */
  city: string
  /** No white card of its own — for a host that already is the white card. */
  bare?: boolean
}

export default function CityEnquiryForm({ city, bare = false }: Props) {
  const [state, formAction, isPending] = useActionState<CityEnquiryState | null, FormData>(
    submitCityEnquiry,
    null
  )
  const fired = useRef(false)

  // GA4. Fires once, only on a CRM-accepted submit.
  // NO PII, and that is not a style preference: name and phone are collected by this
  // form and deliberately never leave the page. Only city, programme and path go to
  // GA4 — the same rule the 2026-08-08 DEP-14 component was written under.
  // (No-JS path only since 2026-11-04: with JavaScript the buttons go through useGateSubmit below.)
  useEffect(() => {
    if (!state?.success || fired.current) return
    fired.current = true
    // 2026-11-02 (plan Step 2). A 409 (phone already applied) is not a new CRM lead, so it gets its own
    // event and lead_form_submit counts new leads only. "program" (not "programme") is the event-scoped
    // custom dimension registered on GA4 371004015 - the old "programme" param read "(not set)".
    // sendGaEvent waits up to 10 s for gtag instead of dropping the event.
    sendGaEvent(state.tracking?.duplicate ? 'lead_form_duplicate' : 'lead_form_submit', {
      form_name: 'city_enquiry',
      city,
      program: programmeLabel(state.tracking?.programme_id),
      destination: 'crm', // was "whatsapp" while the form went nowhere
      page_path: window.location.pathname,
    })
  }, [state, city])

  // A form that silently fails looks identical to a form nobody used - both read 0.
  // This event is what tells the two apart.
  useEffect(() => {
    if (!state || state.success || !state.error) return
    sendGaEvent('lead_form_error', {
      form_name: 'city_enquiry',
      city,
      page_path: window.location.pathname,
    })
  }, [state, city])

  // Same-tap Call / WhatsApp submit; the GA4 lead events keep the shape above (one series).
  const gateSubmit = useGateSubmit({
    endpoint: '/api/city-enquiry',
    gaParams: { source_page: `city-${city.toLowerCase()}`, city },
    onAccepted: (answer) => {
      sendGaEvent(answer.tracking?.duplicate ? 'lead_form_duplicate' : 'lead_form_submit', {
        form_name: 'city_enquiry',
        city,
        program: programmeLabel(answer.tracking?.programme_id),
        destination: 'crm',
        page_path: window.location.pathname,
      })
    },
    onFailed: (refused) => {
      sendGaEvent(refused ? 'lead_form_error' : 'lead_form_unconfirmed', {
        form_name: 'city_enquiry',
        city,
        page_path: window.location.pathname,
      })
    },
  })

  const surface = bare
    ? ''
    : 'bg-white rounded-[20px] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-4 sm:p-6'

  if (gateSubmit.phase.step === 'opened') {
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
            href={`https://wa.me/${ADMISSION_PHONE.replace('+', '')}`}
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
  // 16 px text in every box (was 14 px): below 16 px, iPhone Safari zooms the page on focus.
  // Border #75867e is 3.84:1 on white, hint text #5f6b66 is 5.55:1.
  const inputCls =
    'w-full bg-white border-[1.5px] border-[#75867e] rounded-xl px-4 py-3 text-base text-[#1f2a24] placeholder:text-[#5f6b66] focus:outline-none focus:border-[#0b6d41] focus:ring-[3px] focus:ring-[#0b6d41]/20'
  const labelCls = 'block text-[#032816] text-sm font-semibold mb-1.5'
  const errCls = 'text-[#b42318] text-xs mt-1'

  return (
    <form
      action={formAction}
      onSubmit={gateSubmit.onSubmit}
      onInput={gateSubmit.onInput}
      className={`${surface} space-y-4 text-left`}
    >
      <input type="hidden" name="city" value={city} />
      <CampaignFields />

      {/* Honeypot. Off-screen, not display:none, so a bot still fills it. Never remove: the CRM
          scores it. autoComplete is a made-up token ON PURPOSE - measured 2026-11-12 on Chrome
          156 (/contact): with "off", Chrome read it as Company name and filled a parent's saved
          company into it, marking a real lead as a bot. Chrome does not fill a field whose token
          it does not recognise. Do not change it back to "off". */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="hp-ignore"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <ol aria-label="What happens next" className="grid grid-cols-3 gap-1.5">
        {STEPS.map((step, i) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-name" className={labelCls}>
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="enq-name"
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
          <label htmlFor="enq-phone" className={labelCls}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="enq-phone"
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

      <div>
        <label htmlFor="enq-programme" className={labelCls}>
          Programme Interested In <span aria-hidden="true">*</span>
        </label>
        {/* appearance-none hides the native arrow, so draw one: without it the box does not
            read as a dropdown. */}
        <div className="relative">
          <select
            id="enq-programme"
            name="programme"
            required
            defaultValue=""
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

      <div>
        <label htmlFor="enq-question" className={labelCls}>
          Any Questions?{' '}
          <span className="font-normal text-[#4b5563]">(optional)</span>
        </label>
        <textarea
          id="enq-question"
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for B.Sc Computer Science?"
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* One tap = lead + app (2026-11-04). The "Or call us directly" links went with the old
          "Get a Call Back" button: the form is the way in. */}
      <GateButtons disabled={isPending} onChoose={gateSubmit.choose} />

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
    </form>
  )
}
