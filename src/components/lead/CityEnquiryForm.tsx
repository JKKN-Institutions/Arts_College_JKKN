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

'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitCityEnquiry, type CityEnquiryState } from '@/app/actions/city-enquiry'
import { ARTS_PROGRAMMES } from '@/lib/arts-programmes'

const ADMISSION_PHONE = '+919345855001'
const ADMISSION_PHONE_DISPLAY = '+91 93458 55001'

type Props = {
  /** Display name of the city this page targets, e.g. "Namakkal". */
  city: string
}

export default function CityEnquiryForm({ city }: Props) {
  const [state, formAction, isPending] = useActionState<CityEnquiryState | null, FormData>(
    submitCityEnquiry,
    null
  )
  const fired = useRef(false)

  // GA4. Fires once, only on a CRM-accepted submit.
  // NO PII, and that is not a style preference: name and phone are collected by this
  // form and deliberately never leave the page. Only city, programme and path go to
  // GA4 — the same rule the 2026-08-08 DEP-14 component was written under.
  useEffect(() => {
    if (!state?.success || fired.current) return
    fired.current = true
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'lead_form_submit', {
        form_name: 'city_enquiry',
        city,
        programme: state.tracking?.programme_id ?? 'not_selected',
        destination: 'crm', // was "whatsapp" while the form went nowhere
        page_path: window.location.pathname,
      })
    }
  }, [state, city])

  // A form that silently fails looks identical to a form nobody used - both read 0.
  // This event is what tells the two apart.
  useEffect(() => {
    if (!state || state.success || !state.error) return
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'lead_form_error', {
        form_name: 'city_enquiry',
        city,
        page_path: window.location.pathname,
      })
    }
  }, [state, city])

  if (state?.success) {
    return (
      <div className="space-y-4 text-center" role="status" aria-live="polite">
        <p className="text-white text-lg font-semibold">{state.message}</p>
        <p className="text-white/70 text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  const inputCls =
    'w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60'

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="city" value={city} />

      {/* Honeypot. Off-screen, not display:none - a real browser autofill will not
          reach it and a bot will. Never remove: the CRM scores it. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-name" className="block text-white text-sm font-medium mb-1.5">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="enq-name"
            type="text"
            name="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className="text-red-200 text-xs mt-1">{err.name}</p>}
        </div>
        <div>
          <label htmlFor="enq-phone" className="block text-white text-sm font-medium mb-1.5">
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="enq-phone"
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className="text-red-200 text-xs mt-1">{err.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="enq-programme" className="block text-white text-sm font-medium mb-1.5">
          Programme Interested In <span aria-hidden="true">*</span>
        </label>
        <select
          id="enq-programme"
          name="programme"
          required
          defaultValue=""
          aria-invalid={!!err?.programme}
          className={`${inputCls} appearance-none`}
        >
          <option value="" disabled className="text-gray-800 bg-white">
            Select a Programme
          </option>
          {ARTS_PROGRAMMES.map((p) => (
            <option key={p.id} value={p.id} className="text-gray-800 bg-white">
              {p.label}
            </option>
          ))}
        </select>
        {err?.programme && <p className="text-red-200 text-xs mt-1">{err.programme}</p>}
      </div>

      <div>
        <label htmlFor="enq-question" className="block text-white text-sm font-medium mb-1.5">
          Any Questions?{' '}
          <span className="font-normal opacity-70">(optional)</span>
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

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base transition-colors"
      >
        {isPending ? 'Submitting…' : 'Submit Enquiry — Get a Call Back'}
      </button>

      {state && !state.success && state.error && (
        <p className="text-red-200 text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <p className="text-center text-white/70 text-sm">
        Or call us directly:{' '}
        <a href={`tel:${ADMISSION_PHONE}`} className="text-white underline">
          {ADMISSION_PHONE_DISPLAY}
        </a>{' '}
        •{' '}
        <a
          href={`https://wa.me/${ADMISSION_PHONE.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}
