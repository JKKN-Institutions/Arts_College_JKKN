// "Get Brochure on WhatsApp" - lead option 4 (2026-11-05), placed beside every "Download Brochure" link.
// The PDF download stays as it is. This link goes to the admission WhatsApp number, so the call gate
// (src/components/lead/EnquiryModal.tsx) catches the tap: the 3-box form, then WhatsApp in the same tap with
// "brochure and admission details venum" (data-gate-topic, lib/call-gate.ts), so the counsellor knows to
// send the brochure. A visitor who already enquired goes straight to WhatsApp with the href's own text.

import { BROCHURE_WHATSAPP_HREF } from "@/lib/call-gate"

export default function BrochureWhatsAppLink({
  className,
  label = "Get Brochure on WhatsApp",
}: {
  className: string
  /** Follows the PDF link's own word ("Prospectus" on /admissions). */
  label?: string
}) {
  return (
    <a href={BROCHURE_WHATSAPP_HREF} data-gate-topic="brochure" target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  )
}
