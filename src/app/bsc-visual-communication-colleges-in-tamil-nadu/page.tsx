import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-380, 2026-10-02. None of the 9 Viscom Tamil Nadu keywords had a single GSC impression in 16 months,
// and the site had no page that answers a list question. Every row below is sourced and dated:
//   List      - careers360.com/media-journalism/colleges/list-of-visual-communication-colleges-in-tamil-nadu:
//               159 colleges on 4 pages, read 2026-10-01.
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands); exact or
//               Sri/Shri-only name matches. One match where NIRF names the town and Careers360 the district:
//               Ayya Nadar Janaki Ammal College (Sivakasi, Virudhunagar district). "—" = not in the College ranking.
//   JKKN      - /fee-structure (fee), Periyar University B.Sc Visual Communication regulations (2021-22)
// No row claims JKKN is ranked or "best".

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-visual-communication-colleges-in-tamil-nadu";
const REGULATION_URL =
  "https://www.periyaruniversity.ac.in/Documents/2021/syllabus/2021/Affiliated/ug1/B.Sc.%20Visual%20Communication.pdf";

export const metadata: Metadata = {
  title: "B.Sc Visual Communication (Viscom) Colleges in Tamil Nadu 2026 - NIRF Ranks",
  description:
    "Viscom colleges in Tamil Nadu: NIRF 2025-ranked colleges on the B.Sc Visual Communication list, the Namakkal, Erode and Salem options, eligibility (any +2 group, no minimum percentage at Periyar University colleges) and fees.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Visual Communication (Viscom) Colleges in Tamil Nadu 2026",
    description:
      "Visual Communication colleges in Tamil Nadu with NIRF 2025 ranks, Kongu-region options, eligibility and fees.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };
type KonguRow = Row & { district: string };

// Colleges on Careers360's Tamil Nadu Visual Communication list that are in the NIRF 2025 College ranking.
const rankedRows: Row[] = [
  { college: "PSG College of Arts and Science", city: "Coimbatore", nirf: "10" },
  { college: "Loyola College", city: "Chennai", nirf: "14" },
  { college: "Madras Christian College", city: "Chennai", nirf: "16" },
  { college: "St Joseph's College", city: "Tiruchirappalli", nirf: "25" },
  { college: "St Xavier's College", city: "Palayamkottai", nirf: "48" },
  { college: "Holy Cross College", city: "Tiruchirappalli", nirf: "52" },
  { college: "The American College", city: "Madurai", nirf: "59" },
  { college: "Ethiraj College for Women", city: "Chennai", nirf: "64" },
  { college: "Ayya Nadar Janaki Ammal College", city: "Virudhunagar", nirf: "72" },
  { college: "Jamal Mohamed College", city: "Tiruchirappalli", nirf: "84" },
  { college: "Fatima College", city: "Madurai", nirf: "100" },
  { college: "Guru Nanak College", city: "Chennai", nirf: "101-150" },
  { college: "Hindusthan College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Kamaraj College", city: "Thoothukudi", nirf: "101-150" },
  { college: "Kumaraguru College of Liberal Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "MOP Vaishnav College for Women", city: "Chennai", nirf: "101-150" },
  { college: "Nehru Arts and Science College", city: "Coimbatore", nirf: "101-150" },
  { college: "Rathinam College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Scott Christian College", city: "Nagercoil", nirf: "101-150" },
  { college: "Women's Christian College", city: "Chennai", nirf: "101-150" },
  { college: "Auxilium College", city: "Vellore", nirf: "201-300" },
  { college: "Shri Shankarlal Sundarbai Shasun Jain College for Women", city: "Chennai", nirf: "201-300" },
];

// Colleges on the same list in Namakkal, Erode and Salem districts (JKKN shown separately).
const konguRows: KonguRow[] = [
  { college: "Excel College for Commerce and Science", city: "Komarapalayam", district: "Namakkal", nirf: "—" },
  { college: "KS Rangasamy College of Arts and Science", city: "Tiruchengode", district: "Namakkal", nirf: "—" },
  { college: "SSM College of Arts and Science", city: "Namakkal", district: "Namakkal", nirf: "—" },
  { college: "Erode Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Government Arts And Science College", city: "Sathyamangalam", district: "Erode", nirf: "—" },
  { college: "Palanisamy College of Arts", city: "Erode", district: "Erode", nirf: "—" },
  { college: "RD National College of Arts and Science", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Sree Amman Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "AVS Arts and Science College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "AVS College of Arts and Science", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Sona College of Arts and Science", city: "Salem", district: "Salem", nirf: "—" },
];

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer Visual Communication?",
    answer:
      "No government list counts them. Careers360, a private listing site, listed 159 colleges in Tamil Nadu for Visual Communication when this page was checked on 1 October 2026. Other listing sites give different counts.",
  },
  {
    question: "Which is the best college for Viscom in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for Visual Communication. The Government of India's NIRF 2025 College ranking ranks whole colleges; among the colleges on Careers360's Tamil Nadu Visual Communication list, the highest-ranked are PSG College of Arts and Science, Coimbatore (10), Loyola College, Chennai (14), Madras Christian College, Chennai (16). Fee, distance, seat type and hostel matter as much for most families.",
  },
  {
    question: "What is the eligibility for B.Sc Visual Communication in Tamil Nadu?",
    answer:
      "At colleges affiliated to Periyar University, Salem, the B.Sc Visual Communication regulation asks for a pass in the Higher Secondary (+2) examination or an equivalent, or a 10+3 year Diploma, with no minimum percentage and no particular subject, so students from any group can apply. Colleges under other universities follow their own regulation, so check the college you apply to.",
  },
  {
    question: "Is Viscom an arts or a science course?",
    answer:
      "B.Sc Visual Communication is a three-year Bachelor of Science degree offered in arts and science colleges. Students from Science, Commerce, Arts and vocational groups can apply.",
  },
  {
    question: "Which colleges near Namakkal, Erode and Salem offer Visual Communication?",
    answer:
      "Careers360's Tamil Nadu Visual Communication list includes 3 colleges in Namakkal district, 5 in Erode district and 3 in Salem district besides JKKN; none of them is in the NIRF 2025 College ranking under its listed name. JKKN College of Arts and Science at Komarapalayam, Namakkal district, is also on the list and offers B.Sc Visual Communication.",
  },
  {
    question: "What does B.Sc Visual Communication cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 32,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
  },
];

function RankTable({ rows, caption, district }: { rows: (Row | KonguRow)[]; caption: string; district?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm md:text-base bg-white rounded-lg">
        <caption className="text-left text-sm text-gray-600 mb-2">{caption}</caption>
        <thead>
          <tr className="bg-brand-green text-white">
            <th className="p-3">College</th>
            <th className="p-3">Location</th>
            {district && <th className="p-3">District</th>}
            <th className="p-3">NIRF 2025 College rank</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.college + r.city} className="border-b border-gray-100">
              <td className="p-3">{r.college}</td>
              <td className="p-3">{r.city}</td>
              {district && <td className="p-3">{(r as KonguRow).district}</td>}
              <td className="p-3">{r.nirf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BscVisualCommunicationCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIRF 2025-ranked colleges on Careers360's Tamil Nadu Visual Communication list",
    numberOfItems: rankedRows.length,
    itemListElement: rankedRows.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.college}, ${r.city}`,
    })),
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "B.Sc Visual Communication Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 2 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Visual Communication (Viscom) Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Careers360 listed 159 colleges in Tamil Nadu for Visual Communication on 1 October 2026. This guide shows the NIRF 2025-ranked colleges on that list, the Viscom options around Namakkal, Erode and Salem, the eligibility (any +2 group) and fees.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Visual Communication at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹32,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> a pass in +2 or an equivalent, or a 10+3 year Diploma; no minimum percentage and no subject rule (<a href={REGULATION_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: graphic design, photography and videography, image and audio-visual editing, 2D and 3D modelling, animation and visual effects, advertising, user experience design, immersive and extended reality media, short film making, an internship and a capstone project. The department has a photography studio and an editing lab.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-visual-communication" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-visual-communication-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-visual-communication-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">NIRF-ranked Visual Communication colleges in Tamil Nadu</h2>
          <p className="text-gray-700 mb-4">
            The 22 colleges on Careers360&apos;s Tamil Nadu Visual Communication list (159 in all) that appear in the NIRF 2025 College ranking, highest rank first. NIRF ranks whole colleges, not the Visual Communication department.
          </p>
          <RankTable rows={rankedRows} caption="Sources: Careers360 Visual Communication colleges in Tamil Nadu, read 1 Oct 2026; NIRF 2025 College ranking (nirfindia.org)." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Namakkal, Erode and Salem options</h2>
          <p className="text-gray-700 mb-4">
            From the same list, the colleges in Namakkal, Erode and Salem districts, in the location Careers360 gives. JKKN College of Arts and Science, Komarapalayam (Namakkal district) is also on the list and is described above.
          </p>
          <RankTable rows={konguRows} district caption="Source: Careers360 Visual Communication colleges in Tamil Nadu, read 1 Oct 2026; NIRF 2025." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> at Periyar University colleges, a pass in +2 or an equivalent, or a 10+3 year Diploma; no minimum percentage. Other universities publish their own regulation.</li>
            <li><strong>Government colleges:</strong> apply through the Tamil Nadu government&apos;s online TNGASA admission.</li>
            <li><strong>Aided and self-financing seats:</strong> apply to each college directly and compare each college&apos;s published fee table.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-brand-green mb-2">{f.question}</h3>
                <p className="text-gray-700 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-sm text-gray-600">
          Lists change every year. Confirm courses, seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College list: careers360.com, read 1 October 2026.
        </p>
      </div>
    </main>
  );
}
