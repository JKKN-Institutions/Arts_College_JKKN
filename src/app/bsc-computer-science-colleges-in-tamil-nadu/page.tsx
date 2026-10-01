import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-363, 2026-10-01. "bsc computer science colleges in tamilnadu" and its "best college"
// variants drew 0 impressions in 16 months: the site had no page that answers a list
// question. Every row below is sourced and dated:
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands)
//   List      - university.careers360.com/colleges/list-of-bsc-in-computer-science-degree-colleges-in-tamil-nadu
//               (670 colleges, 14 pages, read 2026-10-01). Collegedunia has no B.Sc CS list URL.
//   JKKN      - /fee-structure (fee), Periyar University B.Sc CS regulations 2021-22 (eligibility)
// Only exact name matches between NIRF and Careers360 are used; no row claims JKKN is ranked.

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-computer-science-colleges-in-tamil-nadu";

export const metadata: Metadata = {
  title: "B.Sc Computer Science Colleges in Tamil Nadu 2026 - NIRF List, Namakkal and Erode",
  description:
    "B.Sc Computer Science colleges in Tamil Nadu: NIRF 2025 ranked colleges offering the course, the Namakkal and Erode district options, eligibility (including without Maths), admission routes and fees.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Computer Science Colleges in Tamil Nadu 2026",
    description:
      "NIRF 2025 ranked colleges, Namakkal and Erode district options, eligibility and admission routes for B.Sc Computer Science in Tamil Nadu.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };

// NIRF 2025 top-100 Tamil Nadu colleges that appear on Careers360's Tamil Nadu B.Sc CS list.
const stateRows: Row[] = [
  { college: "PSGR Krishnammal College for Women", city: "Coimbatore", nirf: "9" },
  { college: "PSG College of Arts and Science", city: "Coimbatore", nirf: "10" },
  { college: "Loyola College", city: "Chennai", nirf: "14" },
  { college: "Madras Christian College", city: "Chennai", nirf: "16" },
  { college: "V.O. Chidambaram College", city: "Thoothukudi", nirf: "22" },
  { college: "St. Joseph's College", city: "Tiruchirappalli", nirf: "25" },
  { college: "Dhanalakshmi Srinivasan College of Arts and Science for Women", city: "Perambalur", nirf: "40" },
  { college: "Bishop Heber College", city: "Tiruchirappalli", nirf: "46" },
  { college: "St. Xavier's College", city: "Palayamkottai", nirf: "48" },
  { college: "Sri Krishna Arts and Science College", city: "Coimbatore", nirf: "50" },
  { college: "Holy Cross College", city: "Tiruchirappalli", nirf: "52" },
  { college: "The American College", city: "Madurai", nirf: "59" },
  { college: "Nesamony Memorial Christian College", city: "Marthandam", nirf: "63" },
  { college: "Ethiraj College for Women", city: "Chennai", nirf: "64" },
  { college: "Dr. N.G.P. Arts and Science College", city: "Coimbatore", nirf: "66" },
  { college: "Government Arts College", city: "Coimbatore", nirf: "67" },
  { college: "Government Arts College", city: "Kumbakonam", nirf: "71" },
  { college: "Ayya Nadar Janaki Ammal College", city: "Sivakasi", nirf: "72" },
  { college: "Sri Ramakrishna College of Arts and Science", city: "Coimbatore", nirf: "76" },
  { college: "Alagappa Government Arts College", city: "Karaikudi", nirf: "76" },
  { college: "Rajah Serfoji Government College", city: "Thanjavur", nirf: "79" },
  { college: "Jamal Mohamed College", city: "Tiruchirappalli", nirf: "84" },
  { college: "A.P.C. Mahalaxmi College for Women", city: "Thoothukudi", nirf: "88" },
  { college: "D.G. Vaishnav College", city: "Chennai", nirf: "91" },
  { college: "Fatima College", city: "Madurai", nirf: "100" },
];

// Careers360 Tamil Nadu B.Sc CS list, colleges in Namakkal district towns, alphabetical (its order).
const namakkalRows: Row[] = [
  { college: "Anbu College of Arts and Science College", city: "Namakkal", nirf: "\u2014" },
  { college: "Arignar Anna Government Arts College", city: "Namakkal", nirf: "\u2014" },
  { college: "Excel College for Commerce and Science", city: "Komarapalayam", nirf: "\u2014" },
  { college: "Gandhi College of Arts and Science for Women", city: "Namakkal", nirf: "\u2014" },
  { college: "Government Arts and Science College", city: "Komarapalayam", nirf: "\u2014" },
  { college: "JKKN College of Arts and Science (JKK Nattraja), Autonomous", city: "Komarapalayam", nirf: "\u2014" },
  { college: "Kandaswami Kandar's College", city: "Velur", nirf: "\u2014" },
  { college: "Kavitha's College of Arts and Science", city: "Namakkal", nirf: "\u2014" },
  { college: "KS Rangasamy College of Arts and Science", city: "Tiruchengode", nirf: "201-300" },
  { college: "KSR College of Arts and Science for Women", city: "Tiruchengode", nirf: "\u2014" },
  { college: "Mahendra Arts and Science College", city: "Namakkal", nirf: "\u2014" },
  { college: "Muthayammal College of Arts and Science", city: "Namakkal", nirf: "201-300" },
  { college: "Muthayammal Memorial College of Arts and Science", city: "Namakkal", nirf: "\u2014" },
  { college: "Namakkal Kavignar Ramalingam Government Arts College for Women", city: "Namakkal", nirf: "\u2014" },
  { college: "Pavai Arts and Science College for Women", city: "Namakkal", nirf: "\u2014" },
  { college: "PGP College of Arts and Science", city: "Namakkal", nirf: "\u2014" },
  { college: "Selvamm Arts and Science College", city: "Namakkal", nirf: "\u2014" },
  { college: "Sengunthar Arts and Science College", city: "Namakkal", nirf: "\u2014" },
  { college: "SSM College of Arts and Science", city: "Namakkal", nirf: "\u2014" },
  { college: "Subramaniam Arts and Science College", city: "Namakkal", nirf: "\u2014" },
  { college: "Thiruvalluvar Government Arts College", city: "Rasipuram", nirf: "151-200" },
  { college: "Vidyaa Vikas College of Arts and Science", city: "Tiruchengode", nirf: "\u2014" },
  { college: "Vivekananda College of Arts and Sciences", city: "Tiruchengode", nirf: "\u2014" },
  { college: "Vivekanandha College for Women", city: "Namakkal", nirf: "\u2014" },
  { college: "Vivekanandha College of Arts and Sciences for Women", city: "Namakkal", nirf: "201-300" },
];

// Careers360 Tamil Nadu B.Sc CS list, colleges in Erode district towns, alphabetical (its order).
const erodeRows: Row[] = [
  { college: "Adharsh Vidhyalaya Arts and Science College for Women", city: "Erode", nirf: "\u2014" },
  { college: "Bharathidasan College of Arts and Science", city: "Erode", nirf: "\u2014" },
  { college: "Dr RANM Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Erode Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Gobi Arts and Science College", city: "Gobichettipalayam", nirf: "\u2014" },
  { college: "Government Arts And Science College", city: "Sathyamangalam", nirf: "\u2014" },
  { college: "Hindusthan College of Science and Commerce", city: "Perundurai", nirf: "\u2014" },
  { college: "Kaamadhenu Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Kongu Arts and Science College", city: "Nanjanapuram", nirf: "201-300" },
  { college: "Kongu Engineering College", city: "Erode", nirf: "\u2014" },
  { college: "Maharaja Co-Education Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Nandha Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Navarasam Arts and Science College for Women", city: "Erode", nirf: "\u2014" },
  { college: "Palanisamy College of Arts", city: "Erode", nirf: "\u2014" },
  { college: "PKR Arts College For Women", city: "Erode", nirf: "\u2014" },
  { college: "RD National College of Arts and Science", city: "Erode", nirf: "\u2014" },
  { college: "Shree Venkateshwara Arts and Science Co-Education College", city: "Erode", nirf: "\u2014" },
  { college: "Sree Amman Arts and Science College", city: "Erode", nirf: "\u2014" },
  { college: "Sri Vasavi College", city: "Erode", nirf: "\u2014" },
  { college: "Vellalar College For Women", city: "Thindal", nirf: "151-200" },
  { college: "VET Institute of Arts and Science", city: "Erode", nirf: "\u2014" },
];

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer B.Sc Computer Science?",
    answer:
      "No government list counts them. Careers360, a private listing site, listed 670 colleges in Tamil Nadu for B.Sc Computer Science when this page was checked on 1 October 2026. Of those, 25 are in Namakkal district towns and 21 in Erode district towns.",
  },
  {
    question: "Which is the best college for B.Sc Computer Science in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for B.Sc Computer Science. The Government of India's NIRF 2025 College ranking ranks whole colleges. Among the colleges on Careers360's B.Sc Computer Science list, the highest-ranked in Tamil Nadu are PSGR Krishnammal College for Women (9) and PSG College of Arts and Science (10) in Coimbatore, and Loyola College (14) and Madras Christian College (16) in Chennai. Fee, distance, seat type and hostel matter as much for most families.",
  },
  {
    question: "What is the eligibility for B.Sc Computer Science in Tamil Nadu?",
    answer:
      "At colleges affiliated to Periyar University, Salem, the B.Sc Computer Science regulations require a pass in the Higher Secondary (+2) examination with any one of Mathematics, Business Mathematics, Computer Science or Statistics. Colleges under other universities follow their own university's regulation, so check the college you apply to.",
  },
  {
    question: "Can I do B.Sc Computer Science without Maths?",
    answer:
      "At Periyar University colleges, yes, if your +2 included Computer Science, Statistics or Business Mathematics. Mathematics is one of four accepted subjects, not a compulsory one.",
  },
  {
    question: "How do I get a B.Sc Computer Science seat in a government college in Tamil Nadu?",
    answer:
      "Government arts and science colleges in Tamil Nadu admit students through the state's online TNGASA application. Aided and self-financing seats in private colleges are filled by each college through its own application.",
  },
  {
    question: "Which colleges in Namakkal district offer B.Sc Computer Science?",
    answer:
      "Careers360's list has 25 colleges in Namakkal district towns, including K.S. Rangasamy College of Arts and Science, Vivekanandha College of Arts and Sciences for Women, Muthayammal College of Arts and Science, Thiruvalluvar Government Arts College in Rasipuram, Government Arts and Science College Komarapalayam and JKKN College of Arts and Science. The full list is in the table on this page.",
  },
  {
    question: "What does B.Sc Computer Science cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 34,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
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
            <tr key={r.college + r.city} className="border-b border-gray-100">
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

export default function BscComputerScienceCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIRF 2025 ranked Tamil Nadu colleges on Careers360's B.Sc Computer Science list",
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
          { name: "B.Sc Computer Science Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 1 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Computer Science Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Careers360 listed 670 colleges in Tamil Nadu for B.Sc Computer Science on 1 October 2026. This guide lists the NIRF 2025 ranked colleges among them, the colleges in Namakkal and Erode districts, and the eligibility, admission routes and fees a family needs to compare them.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Computer Science at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹34,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> +2 pass with any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: Python, Data Structures, Microprocessors, Web Designing, Java, PHP, Software Engineering, DBMS, Computer Networks and .NET, each core subject with a lab; final-year project and internship. M.Sc Computer Science and MCA on the same campus.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-computer-science" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-computer-science-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-computer-science-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">How to read &quot;best&quot; for B.Sc Computer Science</h2>
          <p className="text-gray-700 leading-relaxed">
            No official body ranks colleges for B.Sc Computer Science alone. The Government of India&apos;s National Institutional Ranking Framework (NIRF) ranks whole colleges, using teaching, research, graduation outcomes, outreach and perception. It publishes ranks 1 to 100 and then bands of 101-150, 151-200 and 201-300. A college&apos;s NIRF rank says nothing specific about its computer science department, so use it alongside fee, distance, seat type and hostel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">NIRF 2025 top-100 colleges offering B.Sc Computer Science in Tamil Nadu</h2>
          <p className="text-gray-700 mb-4">
            The 25 Tamil Nadu colleges in the NIRF 2025 College top 100 that also appear on Careers360&apos;s Tamil Nadu B.Sc Computer Science list. Some ranked colleges, such as Presidency College, Stella Maris College and Thiagarajar College, are not on that list; check with them directly.
          </p>
          <NirfTable rows={stateRows} caption="Sources: NIRF 2025 College ranking (nirfindia.org); Careers360 B.Sc Computer Science Tamil Nadu list, read 1 Oct 2026." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Computer Science colleges in Namakkal district</h2>
          <p className="text-gray-700 mb-4">
            The 25 colleges on Careers360&apos;s Tamil Nadu B.Sc Computer Science list located in Namakkal district towns (Namakkal, Komarapalayam, Tiruchengode, Rasipuram, Velur), alphabetical. &quot;—&quot; means the college is not in the NIRF 2025 College ranking (top 100 or the 101-300 bands).
          </p>
          <NirfTable rows={namakkalRows} caption="Sources: Careers360 B.Sc Computer Science Tamil Nadu list, read 1 Oct 2026; NIRF 2025 College ranking." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Computer Science colleges in Erode district</h2>
          <p className="text-gray-700 mb-4">
            The 21 colleges on Careers360&apos;s Tamil Nadu B.Sc Computer Science list located in Erode district towns, alphabetical. &quot;—&quot; means not in the NIRF 2025 College ranking.
          </p>
          <NirfTable rows={erodeRows} caption="Sources: Careers360 B.Sc Computer Science Tamil Nadu list, read 1 Oct 2026; NIRF 2025 College ranking." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> at Periyar University colleges, a +2 pass with any one of Mathematics, Business Mathematics, Computer Science or Statistics; other universities publish their own regulation.</li>
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
          Lists change every year. Confirm seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College list: careers360.com, read 1 October 2026. See also our{" "}
          <Link href="/bsc-physics-colleges-in-tamil-nadu" className="text-brand-green underline">guide to B.Sc Physics colleges in Tamil Nadu</Link> and our{" "}
          <Link href="/bsc-cyber-security-colleges-in-tamil-nadu" className="text-brand-green underline">guide to B.Sc Cyber Security colleges in Tamil Nadu</Link>.
        </p>
      </div>
    </main>
  );
}
