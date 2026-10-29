import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// Every value on this page is copied as printed from the official source named
// under it, read on 29 October 2026. Course-wise sanctioned seats are left out on
// purpose: the TN DCE course list differs from our programme pages on six rows,
// so seats wait for the college office's current sanction order.

const DESCRIPTION =
  "UGC 2(f) & 12(B) recognition, autonomous status, Periyar University affiliation, NAAC Grade B and AICTE MCA approval of JKKN CAS, each with its official source.";

export const metadata: Metadata = {
  title: "Approvals & Official Data",
  description: DESCRIPTION,
  alternates: { canonical: "https://cas.jkkn.ac.in/approvals" },
  openGraph: {
    title: "Approvals & Official Data | JKKN Arts & Science",
    description: DESCRIPTION,
    url: "https://cas.jkkn.ac.in/approvals",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const CHECKED_ON = "29 October 2026";

type Source = { label: string; href: string; date: string };
type Fact = { id: string; title: string; value: string; detail: string; sources: Source[] };

const SRC = {
  ugc2f: {
    label: "UGC, List of colleges under Section 2(f) & 12(B)",
    href: "https://www.ugc.gov.in/colleges",
    date: `checked on ${CHECKED_ON} (the list prints no date)`,
  },
  ugcAuto: {
    label: "UGC, List of Approved Autonomous Colleges",
    href: "https://www.ugc.gov.in/pdfnews/8688705_List-of-Autonomous-Colleges.pdf",
    date: "as on 28 February 2026",
  },
  periyar: {
    label: "Periyar University, Affiliated Colleges",
    href: "https://www.periyaruniversity.ac.in/Affiliated_Colleges.php",
    date: `checked on ${CHECKED_ON}`,
  },
  naacList: {
    label: "NAAC, Institutions having valid accreditation",
    href: "https://naac.gov.in/images/docs/ACCREDITATION_STATUS/Institutions_accredited_by_NAAC_having_valid_accreditation-as_on_14082025_1.xlsx",
    date: "as on 14 August 2025",
  },
  naacTransition: {
    label: "NAAC, Extension of validity for Transition Autonomous Colleges",
    href: "https://naac.gov.in/images/docs/notification/Autonomous_Transition_Website_06082025.pdf",
    date: "updated 22 July 2025",
  },
  aicte: {
    label: "AICTE, Extension of Approval 2025-26 (copy of the letter)",
    href: "/documents/committees/28-LOA_EOA_merged_2026.pdf",
    date: "dated 3 January 2025",
  },
  nirf: {
    label: "NIRF, India Rankings 2025 - participating institutions (College)",
    href: "https://www.nirfindia.org/Rankings/2025/CollegeRankingALL.html",
    date: `checked on ${CHECKED_ON}`,
  },
  dce: {
    label: "Directorate of Collegiate Education, Tamil Nadu, course details",
    href: "https://tndce.tn.gov.in/Home/course_details/2180001/1",
    date: `checked on ${CHECKED_ON}`,
  },
} satisfies Record<string, Source>;

const FACTS: Fact[] = [
  {
    id: "ugc",
    title: "UGC recognition",
    value: "Section 2(f) and 12(B)",
    detail:
      "J.K.K. Nataraja College of Arts & Science, Komarapalayam, Namakkal district, was established in 1974. It is recognised by the University Grants Commission under Section 2(f) and 12(B) of the UGC Act.",
    sources: [SRC.ugc2f],
  },
  {
    id: "autonomous",
    title: "Autonomous status",
    value: "2024-25 to 2028-29",
    detail:
      "The college is an autonomous college. UGC's list of approved autonomous colleges shows autonomy conferred with effect from 2024-25 and valid for 2024-25 to 2028-29.",
    sources: [SRC.ugcAuto],
  },
  {
    id: "affiliation",
    title: "Affiliating university",
    value: "Periyar University, Salem",
    detail:
      "The college is affiliated to Periyar University, Salem, and is listed on the university's own affiliated-colleges page. The UGC, NAAC and AICTE records name the same university.",
    sources: [SRC.periyar, SRC.ugc2f],
  },
  {
    id: "naac",
    title: "NAAC accreditation",
    value: "Grade B (CGPA 2.37)",
    detail:
      "Accredited by NAAC with Grade B and a CGPA of 2.37 in the first cycle, declared on 9 August 2019. NAAC's list of Transition Autonomous Colleges extends the validity of this accreditation up to 31 December 2029.",
    sources: [SRC.naacList, SRC.naacTransition],
  },
  {
    id: "aicte",
    title: "AICTE approval (MCA)",
    value: "Intake 15 (2025-26)",
    detail:
      "AICTE's Extension of Approval for 2025-26 (F.No. Southern/1-44638793967/2025/EOA, dated 3 January 2025) approved the Master of Computer Applications (MCA) programme with an intake of 15.",
    sources: [SRC.aicte],
  },
  {
    id: "nirf",
    title: "NIRF",
    value: "Data submitted to NIRF 2025",
    detail:
      "The college submitted its data to NIRF 2025. NIRF's list of participating institutions in the College category includes it, with Institute ID IR-C-C-9494. The submitted data files are on our NIRF page.",
    sources: [SRC.nirf],
  },
];

const CODES: { label: string; value: string; source: Source }[] = [
  { label: "AISHE code", value: "C-9494 (as printed on NAAC's list)", source: SRC.naacList },
  { label: "NAAC Track ID", value: "TNCOGN101741", source: SRC.naacList },
  { label: "AICTE Permanent ID", value: "1-3764617561", source: SRC.aicte },
  { label: "NIRF Institute ID", value: "IR-C-C-9494", source: SRC.nirf },
  { label: "TN DCE college code", value: "2180001", source: SRC.dce },
];

const FAQS: { question: string; alsoAsked: string; answer: string }[] = [
  {
    question: "Is JKKN College of Arts and Science autonomous?",
    alsoAsked: "JKKN arts college autonomous ah?",
    answer:
      "Yes. UGC's list of approved autonomous colleges, as on 28 February 2026, lists J.K.K. Nataraja College of Arts & Science under Periyar University, Salem. Autonomy was conferred with effect from 2024-25 and is valid for 2024-25 to 2028-29, as per UGC's records.",
  },
  {
    question: "What is the NAAC grade of JKKN College of Arts and Science?",
    alsoAsked: "JKKN arts and science NAAC grade enna?",
    answer:
      "JKKN College of Arts and Science is accredited by NAAC with Grade B and a CGPA of 2.37 in its first cycle, declared on 9 August 2019. NAAC's list of Transition Autonomous Colleges extends the validity of this accreditation up to 31 December 2029.",
  },
  {
    question: "Is JKKN College of Arts and Science recognised by UGC?",
    alsoAsked: "JKKN arts college UGC recognised ah?",
    answer:
      "Yes. UGC's list of colleges under Section 2(f) and 12(B) shows J.K.K. Nataraja College of Arts & Science, Komarapalayam, Namakkal district, affiliated to Periyar University, Salem, established in 1974, with the status '2(f) & 12B', which means it is recognised under both sections of the UGC Act.",
  },
  {
    question: "Which university is JKKN College of Arts and Science affiliated to?",
    alsoAsked: "JKKN arts college entha university la affiliated?",
    answer:
      "JKKN College of Arts and Science is affiliated to Periyar University, Salem. Periyar University's own affiliated-colleges page lists the college at Natarajapuram, Komarapalayam - 638 183, and the UGC, NAAC and AICTE records also name Periyar University as its affiliating university.",
  },
  {
    question: "Is the MCA at JKKN College of Arts and Science approved by AICTE?",
    alsoAsked: "JKKN la MCA ku AICTE approval iruka?",
    answer:
      "AICTE's Extension of Approval for 2025-26 (F.No. Southern/1-44638793967/2025/EOA, dated 3 January 2025) approved the Master of Computer Applications at J.K.K. Nataraja College of Arts and Science with an intake of 15 seats, affiliated to Periyar University, Salem. The 2025-26 letter is the latest AICTE approval checked for this page.",
  },
];

function SourceLine({ sources }: { sources: Source[] }) {
  return (
    <p className="mt-3 text-xs text-gray-500 leading-relaxed">
      Source:{" "}
      {sources.map((src, i) => (
        <span key={src.href}>
          {i > 0 && "; "}
          <a
            href={src.href}
            className="underline underline-offset-2 break-words"
            rel="noopener noreferrer"
            target="_blank"
          >
            {src.label}
          </a>
          , {src.date}
        </span>
      ))}
      .
    </p>
  );
}

export default function ApprovalsPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Approvals & Official Data", url: "https://cas.jkkn.ac.in/approvals" },
        ]}
      />
      <FAQSchema faqs={FAQS.map(({ question, answer }) => ({ question, answer }))} />

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Official records
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            Approvals &amp; Official Data
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-700 max-w-3xl text-base md:text-lg leading-relaxed">
            JKKN College of Arts and Science (J.K.K. Nataraja College of Arts &amp; Science),
            Komarapalayam, is recognised by UGC under Section 2(f) and 12(B), autonomous from
            2024-25 to 2028-29, affiliated to Periyar University, Salem, and accredited by NAAC
            with Grade B (CGPA 2.37), valid up to 31 December 2029.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Each value below is copied from the official source named under it, last checked on{" "}
            {CHECKED_ON}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FACTS.map((fact) => (
            <section
              key={fact.id}
              id={fact.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 min-w-0"
            >
              <h2 className="text-lg font-semibold text-[#0b6d41]">{fact.title}</h2>
              <p className="mt-1 text-xl md:text-2xl font-bold text-gray-900">{fact.value}</p>
              <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {fact.detail}
              </p>
              <SourceLine sources={fact.sources} />
            </section>
          ))}
        </div>

        <section className="mt-10 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
          <h2 className="text-lg font-semibold text-[#0b6d41] mb-4">Official codes</h2>
          <dl className="divide-y divide-gray-100">
            {CODES.map((code) => (
              <div key={code.label} className="py-3 flex flex-col sm:flex-row sm:gap-6">
                <dt className="sm:w-48 shrink-0 text-sm font-medium text-gray-600">{code.label}</dt>
                <dd className="text-sm md:text-base text-gray-900 min-w-0">
                  {code.value}
                  <span className="block text-xs text-gray-500 mt-1">
                    Source:{" "}
                    <a
                      href={code.source.href}
                      className="underline underline-offset-2 break-words"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {code.source.label}
                    </a>
                    , {code.source.date}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#0b6d41] mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-1 text-xs text-gray-500">Also asked: {faq.alsoAsked}</p>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-gray-600">
          Related:{" "}
          <Link href="/iqac/naac" className="underline underline-offset-2 text-[#0b6d41]">
            NAAC
          </Link>
          {" · "}
          <Link href="/nirf" className="underline underline-offset-2 text-[#0b6d41]">
            NIRF data
          </Link>
          {" · "}
          <Link href="/about/our-institution" className="underline underline-offset-2 text-[#0b6d41]">
            Our institution
          </Link>
        </p>
      </div>
    </div>
  );
}
