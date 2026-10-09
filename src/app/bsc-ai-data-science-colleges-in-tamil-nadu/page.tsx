import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-383, 2026-10-02. "artificial intelligence colleges in tamilnadu" is answered by Google and AI engines with
// B.E./B.Tech engineering colleges (TNEA). This guide is for families looking for the arts and science B.Sc.
//   List      - engineering.careers360.com/colleges/list-of-artificial-intelligence-colleges-in-tamil-nadu:
//               136 institutions on 3 pages, engineering and arts and science together, read 2026-10-02.
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands); exact name matches. One
//               match where NIRF names the town and Careers360 the locality: Vellalar College for Women (Thindal, Erode).
//   Kongu     - the arts and science colleges on that list in Namakkal, Erode and Salem districts, picked by hand.
//   JKKN      - /fee-structure (fee); Periyar B.Sc Computer Science (AI & DS) syllabus 2023-24 (name).
// No row claims JKKN is ranked or "best", and no row claims a listed college runs the B.Sc AI & DS specifically.

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-ai-data-science-colleges-in-tamil-nadu";

export const metadata: Metadata = {
  title: "B.Sc AI & Data Science Colleges in Tamil Nadu 2026 - B.Sc vs B.Tech AI",
  description:
    "Artificial intelligence courses in Tamil Nadu arts and science colleges: B.Sc AI & DS vs B.Tech AI & DS, NIRF 2025-ranked arts and science colleges listed for AI, the Namakkal, Erode and Salem options, and fees.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc AI & Data Science Colleges in Tamil Nadu 2026",
    description:
      "B.Sc AI & DS vs B.Tech AI & DS, NIRF-ranked arts and science colleges listed for AI, Kongu-region options and fees.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };
type KonguRow = Row & { district: string };

// Arts and science colleges on Careers360's Tamil Nadu artificial intelligence list that are in the NIRF 2025 College ranking.
const rankedRows: Row[] = [
  { college: "PSGR Krishnammal College for Women", city: "Coimbatore", nirf: "9" },
  { college: "St Joseph's College", city: "Tiruchirappalli", nirf: "25" },
  { college: "St Xavier's College", city: "Palayamkottai", nirf: "48" },
  { college: "Nehru Memorial College", city: "Puthanampatti", nirf: "101-150" },
  { college: "Prince Shri Venkateshwara Arts and Science College", city: "Chennai", nirf: "101-150" },
  { college: "Anna Adarsh College for Women", city: "Chennai", nirf: "151-200" },
  { college: "Vellalar College For Women", city: "Thindal", nirf: "151-200" },
  { college: "Muthayammal College of Arts and Science", city: "Namakkal", nirf: "201-300" },
];

// Arts and science colleges on the same list in Namakkal, Erode and Salem districts (JKKN shown separately).
const konguRows: KonguRow[] = [
  { college: "KS Rangasamy College of Arts and Science", city: "Tiruchengode", district: "Namakkal", nirf: "—" },
  { college: "Mahendra Arts and Science College", city: "Namakkal", district: "Namakkal", nirf: "—" },
  { college: "Muthayammal College of Arts and Science", city: "Namakkal", district: "Namakkal", nirf: "201-300" },
  { college: "PGP College of Arts and Science", city: "Namakkal", district: "Namakkal", nirf: "—" },
  { college: "Shree Venkateshwara Arts and Science Co-Education College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "VET Institute of Arts and Science", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Vellalar College For Women", city: "Thindal", district: "Erode", nirf: "151-200" },
  { college: "AVS Arts and Science College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Bharathiyar Arts and Science College for Women", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Jairam Arts and Science College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Sona College of Arts and Science", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Vinayaka Mission's Kirupananda Variyar Arts and Science College", city: "Salem", district: "Salem", nirf: "—" },
];

const faqs = [
  {
    question: "Which colleges in Tamil Nadu offer an artificial intelligence course?",
    answer:
      "Two kinds. Engineering colleges offer the four-year B.E. or B.Tech in Artificial Intelligence and Data Science or AI and Machine Learning, admitted through TNEA counselling. Arts and science colleges offer the three-year B.Sc, often named B.Sc Computer Science (Artificial Intelligence and Data Science), admitted on +2 marks. Careers360 listed 136 institutions in Tamil Nadu for artificial intelligence on 2 October 2026, both kinds together.",
  },
  {
    question: "Is B.Sc AI & DS the same as B.Tech AI & DS?",
    answer:
      "No. The B.Sc is a three-year arts and science degree admitted on +2 marks at each college. The B.Tech is a four-year engineering degree admitted through TNEA counselling at engineering colleges. They differ in length, admission route, eligibility and fees.",
  },
  {
    question: "Which is the best arts and science college for artificial intelligence in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for B.Sc AI & DS. The Government of India's NIRF 2025 College ranking ranks whole colleges; among the arts and science colleges on Careers360's Tamil Nadu artificial intelligence list, the highest-ranked are PSGR Krishnammal College for Women, Coimbatore (9), St Joseph's College, Tiruchirappalli (25), St Xavier's College, Palayamkottai (48). Check that the college runs the B.Sc AI & DS itself, and compare fee, distance and seat type.",
  },
  {
    question: "Which arts and science colleges near Namakkal, Erode and Salem are listed for artificial intelligence?",
    answer:
      "Careers360's Tamil Nadu artificial intelligence list includes 4 arts and science colleges in Namakkal district, 3 in Erode district and 5 in Salem district besides JKKN; the NIRF 2025-ranked ones among them are Muthayammal College of Arts and Science, Namakkal (201-300); Vellalar College For Women, Thindal (151-200). JKKN College of Arts and Science at Komarapalayam, Namakkal district, is also on the list and offers B.Sc Computer Science (AI & DS).",
  },
  {
    question: "What does B.Sc AI & DS cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 34,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
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

export default function BscAiDataScienceCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIRF 2025-ranked arts and science colleges on Careers360's Tamil Nadu artificial intelligence list",
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
          { name: "B.Sc AI & Data Science Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 2 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc AI &amp; Data Science Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Searches for &quot;artificial intelligence colleges in Tamil Nadu&quot; mostly lead to engineering colleges and the four-year B.Tech. This guide is for students who want the three-year arts and science B.Sc: how it differs from the B.Tech, the NIRF 2025-ranked arts and science colleges listed for artificial intelligence, the options around Namakkal, Erode and Salem, and fees.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc or B.Tech? Two different artificial intelligence courses</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base bg-white rounded-lg">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="p-3">Course</th>
                  <th className="p-3">Length</th>
                  <th className="p-3">Admission</th>
                  <th className="p-3">Where</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">B.Sc Computer Science (AI &amp; DS) / B.Sc AI &amp; DS</td><td className="p-3">3 years</td><td className="p-3">+2 marks, at each college</td><td className="p-3">Arts and science colleges</td></tr>
                <tr><td className="p-3">B.E. / B.Tech AI &amp; DS or AI &amp; ML</td><td className="p-3">4 years</td><td className="p-3">TNEA counselling</td><td className="p-3">Engineering colleges</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            JKKN College of Arts and Science offers the B.Sc. This page covers the B.Sc; for the B.Tech, see the TNEA list of engineering colleges.
          </p>
        </section>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Computer Science (AI &amp; DS) at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹34,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> a pass in +2; confirm the required +2 subjects with the admissions office.</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: programming, Data Structures, Python, Foundation of Artificial Intelligence, Fundamentals of Data Science, statistics, databases, a Data Science Lab, Ethics of AI, Natural Language Processing, Robotic Process Automation, a project and a summer internship.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-ai-ds" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-ai-ds-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-ai-data-science-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">NIRF-ranked arts and science colleges listed for artificial intelligence</h2>
          <p className="text-gray-700 mb-4">
            The 8 arts and science colleges on Careers360&apos;s Tamil Nadu artificial intelligence list (136 institutions in all, engineering included) that appear in the NIRF 2025 College ranking, highest rank first. NIRF ranks whole colleges, not the AI department; confirm with each college that it runs the B.Sc AI &amp; DS.
          </p>
          <RankTable rows={rankedRows} caption="Sources: Careers360 artificial intelligence colleges in Tamil Nadu, read 2 Oct 2026; NIRF 2025 College ranking (nirfindia.org)." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Namakkal, Erode and Salem arts and science options</h2>
          <p className="text-gray-700 mb-4">
            From the same list, the arts and science colleges in Namakkal, Erode and Salem districts, in the location Careers360 gives. JKKN College of Arts and Science, Komarapalayam (Namakkal district) is also on the list and is described above.
          </p>
          <RankTable rows={konguRows} district caption="Source: Careers360 artificial intelligence colleges in Tamil Nadu, read 2 Oct 2026; NIRF 2025." />
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
          Lists change every year. Confirm courses, seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College list: careers360.com, read 2 October 2026.
        </p>
      </div>
    </main>
  );
}
