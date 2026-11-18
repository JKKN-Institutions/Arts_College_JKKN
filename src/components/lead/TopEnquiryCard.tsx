// Plan Step 3 (10,300-lead plan, Arts tab, 2026-11-02): the enquiry form HIGH on the pages
// parents land on - homepage (phones), /admissions, /admissions/<course>, /fee-structure.
// Measured live before this, 375 px: homepage inline form 23.5 screens down, no form at all on
// /admissions/<course> or /fee-structure.
//
// One white card, the same look and heading as the homepage desktop hero card (mockup #7, the
// user's pick 2026-10-22), so every "top" form reads the same. The forms lower on each page stay.
// sourcePage tells the forms apart in GA4 (source_page) and in the CRM tag (cas-<sourcePage>).

import ArtsEnquiryForm from "@/components/lead/ArtsEnquiryForm"

type Props = {
  sourcePage: string
  heading?: string
  /** Pre-selected CRM programme id - only where the CRM name is unambiguous (top-enquiry.ts). */
  defaultProgrammeId?: string
  /** A line under the form for pages that serve aided programmes too (the CRM has none yet). */
  aidedNote?: boolean
  /**
   * A self-financing course that also has aided seats (top-enquiry.ts, ALSO_HAS_AIDED_SEATS): one line
   * under the form naming the course. User's choice 2026-11-18 - one page per course, SF details only.
   */
  aidedSeatsFor?: string
  className?: string
}

export default function TopEnquiryCard({
  sourcePage,
  heading = "Get UG / PG course fee and admission details",
  defaultProgrammeId,
  aidedNote = false,
  aidedSeatsFor,
  className = "",
}: Props) {
  return (
    <div
      className={`w-full rounded-[20px] bg-white border border-gray-100 shadow-[0_12px_32px_rgba(3,40,22,0.16)] p-5 sm:p-6 ${className}`}
    >
      <h2 className="mb-4 text-xl font-bold text-[#032816] leading-snug">{heading}</h2>
      <ArtsEnquiryForm sourcePage={sourcePage} defaultProgrammeId={defaultProgrammeId} compact bare />
      {aidedNote && (
        <p className="mt-4 text-sm text-gray-600">
          Looking for an aided programme? Call{" "}
          {/* data-no-gate (2026-11-04): the CRM has no aided programme, so this call must not
              open the Call / WhatsApp course form (lib/call-gate.ts) - it dials directly. */}
          <a href="tel:+919345855001" data-no-gate className="font-semibold text-[#0b6d41] underline">
            +91 93458 55001
          </a>
        </p>
      )}
      {aidedSeatsFor && (
        <p className="mt-4 text-sm text-gray-600">
          {aidedSeatsFor} also has Aided seats. For an aided seat, call{" "}
          {/* data-no-gate: the CRM has no aided row, so this call dials directly (lib/call-gate.ts). */}
          <a href="tel:+919345855001" data-no-gate className="font-semibold text-[#0b6d41] underline">
            +91 93458 55001
          </a>
        </p>
      )}
    </div>
  )
}
