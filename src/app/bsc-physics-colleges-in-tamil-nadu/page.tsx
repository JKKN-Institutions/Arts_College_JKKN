import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-356, 2026-09-30. "bsc physics colleges in tamilnadu" and its "best college"
// variants drew 0 impressions in 16 months because the site had no page that answers
// a list question. Every row below is sourced and dated:
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands)
//   Lists     - collegedunia.com/bsc/physics/{tamil-nadu,namakkal,salem}-colleges, read 2026-09-30
//   JKKN      - /fee-structure (fee), Periyar University B.Sc Physics regulations (eligibility)
// No row claims JKKN is ranked or "best". Re-check both sources before editing a row.

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-physics-colleges-in-tamil-nadu";

export const metadata: Metadata = {
  title: "B.Sc Physics Colleges in Tamil Nadu 2026 - NIRF List, Namakkal and Salem",
  description:
    "B.Sc Physics colleges in Tamil Nadu: the NIRF 2025 ranked colleges, the colleges offering B.Sc Physics in Namakkal and Salem districts, eligibility, admission routes and fees.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Physics Colleges in Tamil Nadu 2026",
    description:
      "NIRF 2025 ranked colleges, Namakkal and Salem district options, eligibility and admission routes for B.Sc Physics in Tamil Nadu.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };

// Collegedunia's top 30 for "B.Sc Physics colleges in Tamil Nadu" (of 337 listed),
// re-ordered by the official NIRF 2025 College rank.
const stateRows: Row[] = [
  { college: "PSGR Krishnammal College for Women", city: "Coimbatore", nirf: "9" },
  { college: "PSG College of Arts and Science", city: "Coimbatore", nirf: "10" },
  { college: "Loyola College", city: "Chennai", nirf: "14" },
  { college: "Presidency College", city: "Chennai", nirf: "15" },
  { college: "Madras Christian College", city: "Chennai", nirf: "16" },
  { college: "Thiagarajar College", city: "Madurai", nirf: "20" },
  { college: "V.O. Chidambaram College", city: "Thoothukudi", nirf: "22" },
  { college: "St. Joseph's College", city: "Tiruchirappalli", nirf: "25" },
  { college: "Dhanalakshmi Srinivasan College of Arts and Science for Women", city: "Perambalur", nirf: "40" },
  { college: "Stella Maris College", city: "Chennai", nirf: "41" },
  { college: "Bishop Heber College", city: "Tiruchirappalli", nirf: "46" },
  { college: "St. Xavier's College", city: "Palayamkottai", nirf: "48" },
  { college: "Holy Cross College", city: "Tiruchirappalli", nirf: "52" },
  { college: "The American College", city: "Madurai", nirf: "59" },
  { college: "Nesamony Memorial Christian College", city: "Marthandam", nirf: "63" },
  { college: "Ethiraj College for Women", city: "Chennai", nirf: "64" },
  { college: "Dr. N.G.P. Arts and Science College", city: "Coimbatore", nirf: "66" },
  { college: "Government Arts College (Autonomous)", city: "Coimbatore", nirf: "67" },
  { college: "Ayya Nadar Janaki Ammal College", city: "Sivakasi", nirf: "72" },
  { college: "Sri Ramakrishna College of Arts and Science", city: "Coimbatore", nirf: "76" },
  { college: "Rajah Serfoji Government College", city: "Thanjavur", nirf: "79" },
  { college: "Jamal Mohamed College", city: "Tiruchirappalli", nirf: "84" },
  { college: "Fatima College", city: "Madurai", nirf: "100" },
  { college: "Women's Christian College", city: "Chennai", nirf: "101-150" },
  { college: "Kongunadu Arts and Science College", city: "Coimbatore", nirf: "101-150" },
  { college: "National College", city: "Tiruchirappalli", nirf: "101-150" },
  { college: "Lady Doak College", city: "Madurai", nirf: "101-150" },
  { college: "Scott Christian College", city: "Nagercoil", nirf: "101-150" },
  { college: "Guru Nanak College", city: "Chennai", nirf: "101-150" },
  { college: "The Madura College", city: "Madurai", nirf: "101-150" },
];

// Collegedunia "B.Sc Physics colleges in Namakkal" (14 listed), in its own order.
const namakkalRows: Row[] = [
  { college: "K.S. Rangasamy College of Arts and Science (Autonomous)", city: "Namakkal district", nirf: "201-300" },
  { college: "Vivekanandha College of Arts and Sciences for Women", city: "Namakkal district", nirf: "201-300" },
  { college: "Mahendra Arts and Science College", city: "Namakkal district", nirf: "—" },
  { college: "Selvam Arts and Science College", city: "Namakkal district", nirf: "—" },
  { college: "Sengunthar Arts and Science College", city: "Namakkal district", nirf: "—" },
  { college: "Muthayammal College of Arts and Science", city: "Namakkal district", nirf: "201-300" },
  { college: "PGP College of Arts and Science", city: "Namakkal district", nirf: "—" },
  { college: "Excel Group of Institutions", city: "Namakkal district", nirf: "—" },
  { college: "Kandaswami Kandar's College", city: "Namakkal district", nirf: "—" },
  { college: "JKKN College of Arts and Science (Autonomous)", city: "Komarapalayam, Namakkal district", nirf: "—" },
  { college: "Namakkal Kavignar Ramalingam Government Arts College for Women", city: "Namakkal district", nirf: "—" },
  { college: "Pavai Arts and Science College for Women", city: "Namakkal district", nirf: "—" },
  { college: "Kavitha's College of Arts and Science", city: "Namakkal district", nirf: "—" },
  { college: "Excel College for Commerce and Science", city: "Namakkal district", nirf: "—" },
];

// Collegedunia "B.Sc Physics colleges in Salem" (14 listed), in its own order.
const salemRows: Row[] = [
  { college: "Sri Sarada College for Women (Autonomous)", city: "Salem district", nirf: "81" },
  { college: "Government Arts College for Women", city: "Salem district", nirf: "151-200" },
  { college: "Bharathiyar Arts and Science College for Women", city: "Salem district", nirf: "—" },
  { college: "Padmavani Arts and Science College for Women", city: "Salem district", nirf: "—" },
  { college: "AVS College of Arts and Science", city: "Salem district", nirf: "—" },
  { college: "Shri Sakthikailassh Women's College", city: "Salem district", nirf: "—" },
  { college: "Kailash Women's College", city: "Salem district", nirf: "—" },
  { college: "Government Arts College", city: "Salem district", nirf: "101-150" },
  { college: "Sri Ganesh College", city: "Salem district", nirf: "—" },
  { college: "Sona College of Arts and Science", city: "Salem district", nirf: "—" },
  { college: "Salem Sowdeswari College", city: "Salem district", nirf: "—" },
  { college: "Jairam Arts and Science College", city: "Salem district", nirf: "—" },
  { college: "Sri Balamurugan College of Arts and Science", city: "Salem district", nirf: "—" },
  { college: "Vivekanandha Arts and Science College for Women", city: "Salem district", nirf: "—" },
];

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer B.Sc Physics?",
    answer:
      "No government list counts them. Collegedunia, a private listing site, listed 337 colleges in Tamil Nadu for B.Sc Physics when this page was checked on 30 September 2026. Its Namakkal district list has 14 colleges and its Salem district list has 14.",
  },
  {
    question: "Which is the best college for B.Sc Physics in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for B.Sc Physics. The Government of India's NIRF 2025 College ranking ranks whole colleges. The highest-ranked Tamil Nadu colleges on it are PSGR Krishnammal College for Women (9) and PSG College of Arts and Science (10) in Coimbatore, and Loyola College (14), Presidency College (15) and Madras Christian College (16) in Chennai. Fee, distance, aided or self-finance seats and hostel matter as much for most families.",
  },
  {
    question: "What is the eligibility for B.Sc Physics in Tamil Nadu?",
    answer:
      "At colleges affiliated to Periyar University, Salem, the B.Sc Physics regulations require a pass in the Higher Secondary (+2) examination with Mathematics, Physics and Chemistry. Colleges affiliated to other universities follow their own university's regulation, which is usually similar. Commerce and Arts stream students are not eligible.",
  },
  {
    question: "How do I get a B.Sc Physics seat in a government college in Tamil Nadu?",
    answer:
      "Government arts and science colleges in Tamil Nadu admit students through the state's online TNGASA application. Aided and self-financing seats in private colleges are filled by each college through its own application.",
  },
  {
    question: "Which colleges in Namakkal district offer B.Sc Physics?",
    answer:
      "Collegedunia's Namakkal district list includes K.S. Rangasamy College of Arts and Science, Vivekanandha College of Arts and Sciences for Women, Mahendra, Selvam, Sengunthar, Muthayammal, PGP, Kandaswami Kandar's, JKKN College of Arts and Science, Namakkal Kavignar Ramalingam Government Arts College for Women, Pavai, Kavitha's and two Excel colleges.",
  },
  {
    question: "What does B.Sc Physics cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 25,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
  },
  {
    question: "What can I do after B.Sc Physics?",
    answer:
      "The usual routes are an M.Sc in Physics or a related subject, entrance examinations such as IIT-JAM and JEST, teaching after a B.Ed, government recruitment through TNPSC, SSC and UPSC, and technical roles in electronics, instrumentation and data analysis.",
  },
];

function NirfTable({ rows, caption }: { rows: Row[]; caption: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm md:text-base bg-white rounded-lg">
        <caption className="text-left text-sm text-gray-600 mb-2">{caption}</caption>
        <thead>
          <tr className="bg-brand-green text-white">
            <th className="p-3">College</th>
            <th className="p-3">Location</th>
            <th className="p-3">NIRF 2025 College rank</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.college} className="border-b border-gray-100">
              <td className="p-3">{r.college}</td>
              <td className="p-3">{r.city}</td>
              <td className="p-3">{r.nirf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BscPhysicsCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIRF 2025 ranked Tamil Nadu colleges on Collegedunia's B.Sc Physics list",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: stateRows.length,
    itemListElement: stateRows.map((r, i) => ({
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
          { name: "B.Sc Physics Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 30 September 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Physics Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tamil Nadu has more than 300 colleges offering B.Sc Physics; Collegedunia listed 337 on 30 September 2026. This guide lists the NIRF 2025 ranked colleges among them, the colleges offering B.Sc Physics in Namakkal and Salem districts, and the eligibility, admission routes and fees a family needs to compare them.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Physics at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹25,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> +2 pass with Mathematics, Physics and Chemistry (Periyar University regulations).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters, a core practical every semester, internship or field visit in Semester V, project in Semester VI. Aided M.Sc Physics on the same campus.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-physics" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-physics-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-physics-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">How to read "best" for B.Sc Physics</h2>
          <p className="text-gray-700 leading-relaxed">
            No official body ranks colleges for B.Sc Physics alone. The Government of India&apos;s National Institutional Ranking Framework (NIRF) ranks whole colleges, using teaching, research, graduation outcomes, outreach and perception. It publishes ranks 1 to 100 and then bands of 101-150, 151-200 and 201-300. A college&apos;s NIRF rank says nothing specific about its physics department, so use it alongside fee, distance, seat type and hostel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">NIRF 2025 ranked colleges offering B.Sc Physics in Tamil Nadu</h2>
          <p className="text-gray-700 mb-4">
            The first 30 colleges on Collegedunia&apos;s Tamil Nadu B.Sc Physics list, ordered by their NIRF 2025 College rank. All 30 are NIRF ranked.
          </p>
          <NirfTable rows={stateRows} caption="Sources: NIRF 2025 College ranking (nirfindia.org); Collegedunia B.Sc Physics Tamil Nadu list, read 30 Sep 2026." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Physics colleges in Namakkal district</h2>
          <p className="text-gray-700 mb-4">
            All 14 colleges on Collegedunia&apos;s Namakkal district B.Sc Physics list, in that list&apos;s order. &quot;—&quot; means the college is not in the NIRF 2025 College ranking (top 100 or the 101-300 bands).
          </p>
          <NirfTable rows={namakkalRows} caption="Sources: Collegedunia B.Sc Physics Namakkal list, read 30 Sep 2026; NIRF 2025 College ranking." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Physics colleges in Salem district</h2>
          <p className="text-gray-700 mb-4">
            All 14 colleges on Collegedunia&apos;s Salem district B.Sc Physics list, in that list&apos;s order. &quot;—&quot; means not in the NIRF 2025 College ranking.
          </p>
          <NirfTable rows={salemRows} caption="Sources: Collegedunia B.Sc Physics Salem list, read 30 Sep 2026; NIRF 2025 College ranking." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> a +2 pass with Mathematics, Physics and Chemistry at colleges under Periyar University; other universities publish their own regulation.</li>
            <li><strong>Government colleges:</strong> apply through the Tamil Nadu government&apos;s online TNGASA admission.</li>
            <li><strong>Aided and self-financing seats:</strong> apply to each college directly; fees differ by college and seat type, so compare each college&apos;s published fee table.</li>
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
          Lists change every year. Confirm seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College lists: collegedunia.com, read 30 September 2026.
        </p>
      </div>
    </main>
  );
}
