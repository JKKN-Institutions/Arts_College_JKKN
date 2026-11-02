// Plan Step 3 (2026-11-02): the card high on an /admissions/<course> page whose programme the CRM
// cannot record yet - every aided programme, B.Com Accounting & Finance, B.Com Banking & Insurance
// (top-enquiry.ts, DEP-60). A form there would file the parent under a wrong self-financing
// course, so the parent reaches the admission office directly (user's choice 2026-11-02).
// No new tracking code: ConversionTracking already counts tel: as phone_click and wa.me as
// whatsapp_click on every page. The WhatsApp text names the course only - no personal data.

import { MessageCircle, Phone } from "lucide-react"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

type Props = {
  programmeName: string
  className?: string
}

export default function CallWhatsAppCard({ programmeName, className = "" }: Props) {
  const text = encodeURIComponent(
    `Hi, I would like admission details for ${programmeName} at JKKN College of Arts and Science.`
  )
  return (
    <div
      className={`w-full rounded-[20px] bg-white border border-gray-100 shadow-[0_12px_32px_rgba(3,40,22,0.16)] p-5 sm:p-6 ${className}`}
    >
      <h2 className="mb-2 text-xl font-bold text-[#032816] leading-snug">
        Ask about {programmeName} admission
      </h2>
      <p className="mb-4 text-sm sm:text-base text-gray-700">
        Talk to the admission office directly for fees, eligibility and seats.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${ADMISSION_PHONE}`}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0b6d41] px-5 py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-[#095c37]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {ADMISSION_PHONE_DISPLAY}
        </a>
        {/* Dark text: white on WhatsApp green is 1.98:1, below the 4.5:1 text minimum. */}
        <a
          href={`https://wa.me/${ADMISSION_PHONE.slice(1)}?text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm sm:text-base font-semibold text-[#032816]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
