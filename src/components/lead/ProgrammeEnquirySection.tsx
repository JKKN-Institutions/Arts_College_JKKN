// DEP-109 (2026-11-13, user: "enaku intha 77 pages ku form venum romba careful ah pannu"): the card
// high on every /programmes/<category>/<level>/<course> page, right under the quick-info cards.
// Before this the 38 programme pages had no form on the page - only the "Apply for Admission"
// links (which open the header popup) at the very bottom.
//
// Same rule as /admissions/<course> (top-enquiry.ts, 2026-11-02):
// - the CRM can record the course  -> the enquiry form, pre-selected only where the CRM name is
//   unambiguous (PRESELECT_BY_SLUG);
// - the CRM has no row for it (aided, B.Com A&F, B.Com B&I - DEP-60) -> the Call / WhatsApp card,
//   so no lead is filed under a wrong self-financing course.
// A proposed programme (awaiting Periyar University approval) is never pre-selected and its heading
// reads "Register your interest", the words of its own approval-pending banner - never "admission".
//
// Props are written into each page by hand (not looked up from programme-metadata.ts) so the
// 650-line metadata file stays out of these client pages' bundles.

import TopEnquiryCard from "@/components/lead/TopEnquiryCard"
import CallWhatsAppCard from "@/components/lead/CallWhatsAppCard"
import { crmCanRecord, PRESELECT_BY_SLUG } from "@/lib/top-enquiry"

type Props = {
  /** The /admissions/<slug> slug, e.g. "bsc-ai-ds-self-finance" (programme-metadata.ts). */
  slug: string
  /** Short programme name, e.g. "B.Sc. CS (AI & Data Science)". */
  name: string
  category: "Aided" | "Self-Finance"
  proposed?: boolean
}

export default function ProgrammeEnquirySection({ slug, name, category, proposed = false }: Props) {
  const canRecord = crmCanRecord({ slug, category })
  return (
    <section aria-label="Admission enquiry" id="enquiry" className="bg-white px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-xl">
        {canRecord ? (
          <TopEnquiryCard
            sourcePage={`programme-${slug}`}
            heading={proposed ? `Register your interest in ${name}` : `Get ${name} fee and admission details`}
            defaultProgrammeId={proposed ? undefined : PRESELECT_BY_SLUG[slug]}
          />
        ) : (
          <CallWhatsAppCard programmeName={category === "Aided" ? `${name} (Aided)` : name} />
        )}
      </div>
    </section>
  )
}
