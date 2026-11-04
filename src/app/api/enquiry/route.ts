// POST /api/enquiry - the same Arts & Science enquiry submit, reachable with fetch().
//
// WHY A ROUTE AND NOT ONLY THE SERVER ACTION. The Call / WhatsApp gate (lib/call-gate.ts) must open
// the dialer or WhatsApp in the SAME tap that sends the lead: a browser lets a page open another app
// only during a user's tap, and waiting for the CRM's answer first can outlast that window. So the
// gate sends the form with fetch(..., { keepalive: true }) - which a server action cannot be called
// with - and opens the app at once; keepalive lets the request finish even if the page goes away.
//
// It runs the SAME code as the form's server action (submitArtsEnquiry): same validation, same
// CRM payload, same 409 handling. Nothing new is decided here. Ported from the Dental site
// (2026-11-03) on 2026-11-04. The city / contact form has its own twin: /api/city-enquiry.

import { submitArtsEnquiry } from "@/app/actions/arts-enquiry"

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ success: false, error: "Bad request." }, { status: 400 })
  }
  const result = await submitArtsEnquiry(null, formData)
  return Response.json(result, { status: result.success ? 200 : 422 })
}
