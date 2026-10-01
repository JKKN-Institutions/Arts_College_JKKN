import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-379, 2026-10-01. None of the 15 textile / fashion Tamil Nadu keywords had a single GSC impression
// in 16 months, and the site had no page that answers a list question. Every row below is sourced and dated:
//   List      - design.careers360.com Fashion Design colleges in Tamil Nadu: 162 entries on 4 pages (incl. NIFT Delhi and Mumbai),
//               read 2026-10-01. Careers360 lists institutions for fashion design at any level, so the
//               course at a given college may be a B.Sc, B.Des, B.Tech or a diploma.
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands); exact or
//               Sri/Shri-only name matches. Two matches where NIRF names the town and Careers360 a
//               locality of it: Vellalar College for Women (Thindal, Erode) and Kongu Arts and Science
//               College (Nanjanapuram, Erode). "—" means not found in the College ranking under that name.
//   JKKN      - /fee-structure (fee), Periyar University B.Sc Textile and Fashion Designing regulations 2023-24
// No row claims JKKN is ranked or "best".

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-fashion-designing-colleges-in-tamil-nadu";
const REGULATION_URL =
  "https://www.periyaruniversity.ac.in/Documents/2026/syllabus/nanmudh/23-24even/B.Sc.%20TEXTILE%20AND%20FASHION%20DESIGNING.pdf";

export const metadata: Metadata = {
  title: "B.Sc Fashion Designing Colleges in Tamil Nadu 2026 - List, NIRF Ranks",
  description:
    "B.Sc Fashion Designing colleges in Tamil Nadu: NIRF 2025-ranked colleges on the fashion design list, the Namakkal, Erode and Salem options, eligibility (any +2 group), fees, and B.Sc vs B.Des vs B.Tech Fashion Technology.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Fashion Designing Colleges in Tamil Nadu 2026",
    description:
      "Fashion design colleges in Tamil Nadu with NIRF 2025 ranks, Kongu-region options, eligibility and the B.Sc vs B.Des vs B.Tech difference.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };
type KonguRow = Row & { district: string };

// Institutions on Careers360's Tamil Nadu fashion design list that are in the NIRF 2025 College ranking.
const rankedRows: Row[] = [
  { college: "PSGR Krishnammal College for Women", city: "Coimbatore", nirf: "9" },
  { college: "PSG College of Arts and Science", city: "Coimbatore", nirf: "10" },
  { college: "Dhanalakshmi Srinivasan College of Arts and Science for Women", city: "Perambalur", nirf: "40" },
  { college: "Sri Krishna Arts and Science College", city: "Coimbatore", nirf: "50" },
  { college: "Holy Cross College", city: "Tiruchirappalli", nirf: "52" },
  { college: "Jamal Mohamed College", city: "Tiruchirappalli", nirf: "84" },
  { college: "Fatima College", city: "Madurai", nirf: "100" },
  { college: "Hindusthan College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Kongunadu Arts and Science College", city: "Coimbatore", nirf: "101-150" },
  { college: "Lady Doak College", city: "Madurai", nirf: "101-150" },
  { college: "Nehru Arts and Science College", city: "Coimbatore", nirf: "101-150" },
  { college: "Rathinam College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Women's Christian College", city: "Nagercoil", nirf: "101-150" },
  { college: "Bon Secours College for Women", city: "Thanjavur", nirf: "151-200" },
  { college: "Cauvery College for Women", city: "Annamalai Nagar", nirf: "151-200" },
  { college: "Vellalar College For Women", city: "Thindal", nirf: "151-200" },
  { college: "Chikkanna Government Arts College", city: "Tirupur", nirf: "201-300" },
  { college: "Hajee Karutha Rowther Howdia College", city: "Uthamapalayam", nirf: "201-300" },
  { college: "Justice Basheer Ahmed Sayeed College for Women", city: "Chennai", nirf: "201-300" },
  { college: "Kongu Arts and Science College", city: "Nanjanapuram", nirf: "201-300" },
  { college: "KPR College of Arts Science and Research", city: "Coimbatore", nirf: "201-300" },
  { college: "Vivekanandha College of Arts and Sciences for Women", city: "Namakkal", nirf: "201-300" },
];

// Institutions on the same list in Namakkal, Erode and Salem districts (JKKN shown separately).
const konguRows: KonguRow[] = [
  { college: "Excel College for Commerce and Science", city: "Komarapalayam", district: "Namakkal", nirf: "—" },
  { college: "KSR College of Arts and Science for Women", city: "Tiruchengode", district: "Namakkal", nirf: "—" },
  { college: "SSM College of Arts and Science", city: "Namakkal", district: "Namakkal", nirf: "—" },
  { college: "Vivekananda College of Arts and Sciences", city: "Tiruchengode", district: "Namakkal", nirf: "—" },
  { college: "Vivekanandha College for Women", city: "Namakkal", district: "Namakkal", nirf: "—" },
  { college: "Vivekanandha College of Arts and Sciences for Women", city: "Namakkal", district: "Namakkal", nirf: "201-300" },
  { college: "Bannari Amman Institute of Technology", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Bharathidasan College of Arts and Science", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Erode Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Kaamadhenu Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Kongu Arts and Science College", city: "Nanjanapuram", district: "Erode", nirf: "201-300" },
  { college: "Nandha Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Palanisamy College of Arts", city: "Erode", district: "Erode", nirf: "—" },
  { college: "RD National College of Arts and Science", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Sree Amman Arts and Science College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Sri Vasavi College", city: "Erode", district: "Erode", nirf: "—" },
  { college: "VET Institute of Arts and Science", city: "Erode", district: "Erode", nirf: "—" },
  { college: "Vellalar College For Women", city: "Thindal", district: "Erode", nirf: "151-200" },
  { college: "Bharathiyar Arts and Science College for Women", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Kailash Women's College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Salem Sowdeswari College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Sona College of Technology", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Sri Kailash Women's College", city: "Salem", district: "Salem", nirf: "—" },
  { college: "Vivekanandha Arts and Science College for Women", city: "Salem", district: "Salem", nirf: "—" },
];

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer fashion designing?",
    answer:
      "No government list counts them. Careers360, a private listing site, had 162 entries on its Tamil Nadu fashion design list when this page was checked on 1 October 2026. That count mixes B.Sc, B.Des, B.Tech and diploma courses and includes a few NIFT campuses outside the state, so the number of Tamil Nadu colleges offering a B.Sc is smaller.",
  },
  {
    question: "What is the eligibility for B.Sc Fashion Designing in Tamil Nadu?",
    answer:
      "At colleges affiliated to Periyar University, Salem, the B.Sc Textile and Fashion Designing regulation asks for a pass in any Higher Secondary course, academic or vocational, so students from any group can apply, and a three-year Fashion, Costume, Textile or Apparel diploma qualifies for direct second-year admission. Colleges under other universities follow their own regulation, so check the college you apply to.",
  },
  {
    question: "Which is the best college for fashion designing in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for fashion designing. The Government of India's NIRF 2025 College ranking ranks whole colleges; among the institutions on Careers360's Tamil Nadu fashion design list, the highest-ranked are PSGR Krishnammal College for Women, Coimbatore (9), PSG College of Arts and Science, Coimbatore (10), Dhanalakshmi Srinivasan College of Arts and Science for Women, Perambalur (40). NIFT Chennai is a separate national institute that admits through its own entrance test. Fee, distance, seat type and hostel matter as much for most families.",
  },
  {
    question: "What is the difference between B.Sc Fashion Designing, B.Des and B.Tech Fashion Technology?",
    answer:
      "B.Sc Fashion Designing, offered under names such as B.Sc Textile and Fashion Designing or B.Sc Costume Design and Fashion, is a three-year arts and science degree admitted on +2 marks. NIFT's B.Des is a four-year design degree admitted through NIFT's entrance test. B.Tech Fashion Technology and B.Tech Textile Technology are four-year engineering degrees admitted through TNEA counselling at engineering colleges.",
  },
  {
    question: "Which colleges near Namakkal, Erode and Salem offer fashion designing?",
    answer:
      "Careers360's Tamil Nadu fashion design list includes 6 institutions in Namakkal district, 12 in Erode district and 6 in Salem district besides JKKN; the NIRF 2025-ranked ones among them are Vivekanandha College of Arts and Sciences for Women, Namakkal (201-300); Kongu Arts and Science College, Nanjanapuram (201-300); Vellalar College For Women, Thindal (151-200). JKKN College of Arts and Science at Komarapalayam, Namakkal district, is also on the list and offers B.Sc Textile and Fashion Designing.",
  },
  {
    question: "What does B.Sc Textile and Fashion Designing cost at JKKN College of Arts and Science?",
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

export default function BscFashionDesigningCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIRF 2025-ranked colleges on Careers360's Tamil Nadu fashion design list",
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
          { name: "B.Sc Fashion Designing Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 1 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Fashion Designing Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Careers360&apos;s Tamil Nadu fashion design list had 162 entries on 1 October 2026. This guide shows the NIRF 2025-ranked colleges on that list, the options around Namakkal, Erode and Salem, the eligibility (any +2 group), fees, and how a B.Sc in fashion designing differs from a NIFT B.Des and a B.Tech in Fashion or Textile Technology.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Textile and Fashion Designing at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹32,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> a pass in any +2 course, academic or vocational; a three-year Fashion, Costume, Textile or Apparel diploma qualifies for direct second-year admission (<a href={REGULATION_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: Fiber and Yarn Science, Woven Fabric Science, Textile Wet Processing and Finishing, children&apos;s, women&apos;s and men&apos;s apparel practicals, Apparel Costing and Merchandising, Textile Testing and Quality Control, and CAD in Garment Designing; final-year internship project and fashion portfolio.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-textile-fashion-designing" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-textile-fashion-designing-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-fashion-designing-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc, B.Des or B.Tech? Three different fashion courses</h2>
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
                <tr className="border-b border-gray-100"><td className="p-3">B.Sc Fashion Designing (for example B.Sc Textile and Fashion Designing, B.Sc Costume Design and Fashion)</td><td className="p-3">3 years</td><td className="p-3">+2 marks, at each college</td><td className="p-3">Arts and science colleges</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">B.Des (Fashion Design)</td><td className="p-3">4 years</td><td className="p-3">NIFT entrance test</td><td className="p-3">NIFT Chennai and other national institutes</td></tr>
                <tr><td className="p-3">B.Tech Fashion Technology / B.Tech Textile Technology</td><td className="p-3">4 years</td><td className="p-3">TNEA counselling</td><td className="p-3">Engineering colleges</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Searches for &quot;fashion technology colleges&quot; and &quot;textile technology colleges&quot; mostly lead to the B.Tech, an engineering degree. This page covers the B.Sc. JKKN College of Arts and Science offers the B.Sc; it does not offer a B.Tech or a B.Des.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">NIRF-ranked colleges on the Tamil Nadu fashion design list</h2>
          <p className="text-gray-700 mb-4">
            The 22 institutions on Careers360&apos;s Tamil Nadu fashion design list (162 in all) that appear in the NIRF 2025 College ranking, highest rank first. NIRF ranks whole colleges, not the fashion department, and the fashion course at each may be a B.Sc, B.Des or diploma.
          </p>
          <RankTable rows={rankedRows} caption="Sources: Careers360 Fashion Design colleges in Tamil Nadu, read 1 Oct 2026; NIRF 2025 College ranking (nirfindia.org)." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Namakkal, Erode and Salem options</h2>
          <p className="text-gray-700 mb-4">
            From the same list, the institutions in Namakkal, Erode and Salem districts, in the location Careers360 gives. JKKN College of Arts and Science, Komarapalayam (Namakkal district) is also on the list and is described above.
          </p>
          <RankTable rows={konguRows} district caption="Source: Careers360 Fashion Design colleges in Tamil Nadu, read 1 Oct 2026; NIRF 2025." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> at Periyar University colleges, a pass in any +2 course; a three-year Fashion, Costume, Textile or Apparel diploma can join the second year. Other universities publish their own regulation.</li>
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
