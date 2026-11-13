// DEP-109 (2026-11-13, user: "enaku intha 77 pages ku form venum romba careful ah pannu"): the same
// white TopEnquiryCard the /admissions and /fee-structure pages carry, as a section of its own for
// the pages that had no form on the page - /programmes, /departments, /admissions/courses,
// /scholarships, /placements. Only the header "Enquire Now" popup was there before.
// sourcePage tells the forms apart in GA4 (source_page) and in the CRM tag (cas-<sourcePage>).

import TopEnquiryCard from "@/components/lead/TopEnquiryCard"

type Props = {
  sourcePage: string
  heading?: string
  /** Pre-selected CRM programme id - only where the CRM name is unambiguous (top-enquiry.ts). */
  defaultProgrammeId?: string
  /** "Looking for an aided programme? Call ..." under the form (the CRM has no aided rows, DEP-60). */
  aidedNote?: boolean
  className?: string
}

export default function EnquirySection({ className = "", ...card }: Props) {
  return (
    <section aria-label="Admission enquiry" id="enquiry" className={`px-4 py-10 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-xl">
        <TopEnquiryCard {...card} />
      </div>
    </section>
  )
}
