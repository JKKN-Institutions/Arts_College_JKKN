// POST /api/city-enquiry - the city / contact-page enquiry submit (CityEnquiryForm), reachable with
// fetch(). Same reason as /api/enquiry: the Call / WhatsApp buttons send the lead with a keepalive
// fetch and open the dialer / WhatsApp in the same tap, and a server action cannot be called that way.
//
// It runs the SAME code as the form's server action (submitCityEnquiry): same validation, same CRM
// payload (district = the page's city, utm_medium city-page-form), same 409 handling. A separate
// route rather than a switch inside /api/enquiry, so each route maps to exactly one server action
// and neither can change the other's CRM tags. 2026-11-04.

import { submitCityEnquiry } from "@/app/actions/city-enquiry"

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ success: false, error: "Bad request." }, { status: 400 })
  }
  const result = await submitCityEnquiry(null, formData)
  return Response.json(result, { status: result.success ? 200 : 422 })
}
