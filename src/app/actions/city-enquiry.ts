// DRAFT — DEP-34. Target path in the Arts repo: src/app/actions/city-enquiry.ts
// NOT DEPLOYED. Nothing in this file has run against production.
//
// WHY A SERVER ACTION AND NOT A fetch() IN THE COMPONENT.
// Measured 2026-08-11: an OPTIONS preflight to the CRM submit endpoint sent with
// Origin: https://cas.jkkn.ac.in answers 204 with "Allow: OPTIONS, POST" and carries
// NO Access-Control-Allow-Origin header. A browser will therefore block a direct
// cross-origin POST from the college site. Server-to-server has no CORS check, so the
// submit has to leave from the server. This is not a style preference — the browser
// version cannot work.
//
// The endpoint is public (no key, no auth) so nothing secret lives in this file.

'use server'

// Plain data lives OUTSIDE this file on purpose: a 'use server' module may only
// export async functions. Keeping the programme array here made the build strip it
// and /contact died with `j.map is not a function` (measured 2026-08-16).
import { ARTS_INSTITUTION_ID, VALID_PROGRAMME_IDS } from '@/lib/arts-programmes'

const CRM_SLUG = 'jkkn-admission-2026'
const CRM_SUBMIT = `https://www.jkkn.ai/api/public/forms/${CRM_SLUG}/submit`


export type CityEnquiryState = {
  success: boolean
  message?: string
  error?: string
  // echoed back so the client can fire the GA4 event with no PII in it
  tracking?: { city: string; programme_id: string }
  fieldErrors?: Partial<Record<'name' | 'phone' | 'programme', string>>
}

// The parent repo validates with zod. Arts does NOT have zod in package.json
// (checked 2026-08-11) and this fix is not the place to add a dependency, so the
// same three rules are written out by hand.
function validate(name: string, phone: string, programme: string) {
  const fieldErrors: CityEnquiryState['fieldErrors'] = {}
  if (name.trim().length < 2) fieldErrors.name = 'Please enter your full name.'
  if (!/^\d{10}$/.test(phone.trim()))
    fieldErrors.phone = 'Please enter a 10-digit mobile number, digits only.'
  if (!VALID_PROGRAMME_IDS.has(programme))
    fieldErrors.programme = 'Please choose a programme.'
  return fieldErrors
}

export async function submitCityEnquiry(
  _prevState: CityEnquiryState | null,
  formData: FormData
): Promise<CityEnquiryState> {
  const name = String(formData.get('name') ?? '')
  const phone = String(formData.get('phone') ?? '').replace(/\D/g, '')
  const city = String(formData.get('city') ?? '')
  const programme = String(formData.get('programme') ?? '')
  const question = String(formData.get('question') ?? '')
  // Honeypot. The CRM expects this key and treats a non-empty value as a bot.
  // It is rendered off-screen, never shown to a human.
  const honeypot = String(formData.get('company_website') ?? '')

  const fieldErrors = validate(name, phone, programme)
  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: 'Please fix the highlighted fields.', fieldErrors }
  }

  const payload = {
    formData: {
      first_name: name.trim(),
      phone,
      // `district` is the CRM's own field for where the enquirer is from. The city
      // page already knows it, so the parent never types it.
      district: city,
      institution_program: {
        institution_id: ARTS_INSTITUTION_ID,
        program_id: programme,
      },
    },
    honeypot,
    sessionId: crypto.randomUUID(),
    // Tag the source so these leads are separable from jkkn.ai's own traffic inside
    // the CRM. Without this they are indistinguishable and the row cannot be proved.
    utmSource: 'cas.jkkn.ac.in',
    utmMedium: 'city-page-form',
    utmCampaign: `city-${city.toLowerCase()}`,
    campaignLinkId: null,
    referrerUrl: question ? `question: ${question.slice(0, 300)}` : '',
  }

  try {
    const res = await fetch(CRM_SUBMIT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // A parent staring at a spinner is a lost lead. Fail loudly and fast.
      signal: AbortSignal.timeout(15_000),
      cache: 'no-store',
    })

    if (res.status === 409) {
      // Measured in the CRM's own client bundle: 409 means this phone number has
      // already applied. That is not a failure for the parent - they are in the
      // system - so it must not read like an error.
      return {
        success: true,
        message:
          'You have already enquired with this number. Our admission team will call you — no need to submit again.',
        tracking: { city, programme_id: programme },
      }
    }

    if (!res.ok) {
      const body = await res.json().catch(() => null)
      console.error('[city-enquiry] CRM rejected submit', res.status, body)
      return {
        success: false,
        error:
          'We could not submit your enquiry just now. Please call +91-9345855001 or message us on WhatsApp.',
      }
    }

    return {
      success: true,
      message:
        'Thank you. Our admission team will contact you within 24 hours on WhatsApp or by phone.',
      tracking: { city, programme_id: programme },
    }
  } catch (err) {
    console.error('[city-enquiry] network/timeout reaching CRM', err)
    return {
      success: false,
      error:
        'We could not reach our admission system. Please call +91-9345855001 or message us on WhatsApp.',
    }
  }
}
