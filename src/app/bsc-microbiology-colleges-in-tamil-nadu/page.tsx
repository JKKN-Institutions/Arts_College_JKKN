import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-384, 2026-10-02. The 5 microbiology Tamil Nadu keywords had 0-1 GSC impressions in 16 months and the
// site had no page that answers a list question. Every row below is sourced and dated:
//   List      - collegedunia.com/bsc/microbiology/tamil-nadu-colleges: 138 colleges, of which the 30 served on
//               first load are listed (page 2 is disallowed by its robots.txt), read 2026-10-02
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands); exact name matches.
//               Kamaraj College is listed in Tuticorin by Collegedunia and in Thoothukudi by NIRF (same town).
//               "—" means not found in the NIRF 2025 College ranking under that name
//   JKKN      - /fee-structure (fee), Periyar University B.Sc Microbiology regulations 2023-24
// No row claims JKKN is ranked or "best".

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-microbiology-colleges-in-tamil-nadu";
const REGULATION_URL =
  "https://www.periyaruniversity.ac.in/Documents/2023/CDC/Affiliated/ug/B.Sc.%20Microbiology.pdf";

export const metadata: Metadata = {
  title: "B.Sc Microbiology Colleges in Tamil Nadu 2026 - List, NIRF Ranks, Eligibility",
  description:
    "B.Sc Microbiology colleges in Tamil Nadu: the colleges listed for the course with their NIRF 2025 ranks, the Namakkal, Erode and Salem options, eligibility (any one biology subject, no NEET), fees and the difference from medical microbiology.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Microbiology Colleges in Tamil Nadu 2026",
    description:
      "Colleges offering B.Sc Microbiology in Tamil Nadu with NIRF 2025 ranks, Kongu-region options, eligibility and fees.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };

// Collegedunia's Tamil Nadu B.Sc Microbiology list, first 30 of 138, in its own order.
const listRows: Row[] = [
  { college: "Madras Christian College", city: "Chennai", nirf: "16" },
  { college: "PSG College of Arts and Science", city: "Coimbatore", nirf: "10" },
  { college: "The American College", city: "Madurai", nirf: "59" },
  { college: "Dhanalakshmi Srinivasan College of Arts and Science for Women", city: "Perambalur", nirf: "40" },
  { college: "Jamal Mohamed College", city: "Tiruchirappalli", nirf: "84" },
  { college: "Ethiraj College for Women", city: "Chennai", nirf: "64" },
  { college: "Ayya Nadar Janaki Ammal College", city: "Sivakasi", nirf: "72" },
  { college: "Dr. N.G.P. Arts and Science College", city: "Coimbatore", nirf: "66" },
  { college: "Sri Krishna Arts and Science College", city: "Coimbatore", nirf: "50" },
  { college: "Thiagarajar College", city: "Madurai", nirf: "20" },
  { college: "National College", city: "Tiruchirappalli", nirf: "101-150" },
  { college: "Scott Christian College", city: "Nagercoil", nirf: "101-150" },
  { college: "Madura College", city: "Madurai", nirf: "101-150" },
  { college: "Sadakathullah Appa College, Palayamkottai", city: "Tirunelveli", nirf: "101-150" },
  { college: "Hindusthan College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Sri Ramakrishna College of Arts & Science For Women", city: "Coimbatore", nirf: "201-300" },
  { college: "Rathinam Group Of Institutions", city: "Coimbatore", nirf: "—" },
  { college: "Kamaraj College", city: "Tuticorin", nirf: "101-150" },
  { college: "Virudhunagar Hindu Nadar's Senthikumara Nadar College", city: "Virudhunagar", nirf: "101-150" },
  { college: "Nehru Group of Institutions", city: "Coimbatore", nirf: "—" },
  { college: "Justice Basheer Ahmed Sayeed College For Women", city: "Chennai", nirf: "201-300" },
  { college: "Prince Shri Venkateshwara Arts and Science College, Gowrivakkam", city: "Chennai", nirf: "101-150" },
  { college: "SRM Arts and Science College", city: "Kanchipuram", nirf: "—" },
  { college: "Vels Institute of Science, Technology & Advanced Studies", city: "Chennai", nirf: "—" },
  { college: "V.V. Vanniaperumal College for Women", city: "Virudhunagar", nirf: "201-300" },
  { college: "Shri Nehru Maha Vidyalaya College of Arts and Science", city: "Coimbatore", nirf: "151-200" },
  { college: "AVC College (Autonomous)", city: "Mayiladuthurai", nirf: "—" },
  { college: "KSR College of Arts and Science College (Autonomous)", city: "Namakkal", nirf: "—" },
  { college: "Auxilium College", city: "Vellore", nirf: "201-300" },
  { college: "Cauvery College for Women", city: "Tiruchirappalli", nirf: "151-200" },
];

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer B.Sc Microbiology?",
    answer:
      "No government list counts them. Collegedunia, a private listing site, listed 138 colleges in Tamil Nadu for B.Sc Microbiology when this page was checked on 2 October 2026; the 30 it shows first are in the table on this page.",
  },
  {
    question: "What is the eligibility for B.Sc Microbiology in Tamil Nadu?",
    answer:
      "At colleges affiliated to Periyar University, Salem, the B.Sc Microbiology regulation asks for a pass in the Higher Secondary (+2) examination in any one of Botany, Zoology or Biology, in the academic or vocational stream, with no minimum percentage. Colleges under other universities follow their own regulation, so check the college you apply to.",
  },
  {
    question: "Is NEET needed for B.Sc Microbiology?",
    answer:
      "No. B.Sc Microbiology in arts and science colleges is admitted on +2 marks, either by each college or through TNGASA for government colleges. NEET is for medical courses such as MBBS and BDS.",
  },
  {
    question: "Which is the best college for B.Sc Microbiology in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for B.Sc Microbiology. The Government of India's NIRF 2025 College ranking ranks whole colleges; among the colleges Collegedunia lists first for the course, the highest-ranked are PSG College of Arts and Science, Coimbatore (10), Madras Christian College, Chennai (16), Thiagarajar College, Madurai (20). Fee, distance, seat type and hostel matter as much for most families.",
  },
  {
    question: "Which colleges near Namakkal, Erode and Salem offer B.Sc Microbiology?",
    answer:
      "Among the 30 colleges Collegedunia shows first for B.Sc Microbiology in Tamil Nadu, KSR College of Arts and Science at Tiruchengode, Namakkal district, is the only one in Namakkal, Erode or Salem district. JKKN College of Arts and Science at Komarapalayam, Namakkal district, also offers the course.",
  },
  {
    question: "What does B.Sc Microbiology cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 34,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
  },
];

export default function BscMicrobiologyCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges listed for B.Sc Microbiology in Tamil Nadu (Collegedunia, first 30 of 138)",
    numberOfItems: listRows.length,
    itemListElement: listRows.map((r, i) => ({
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
          { name: "B.Sc Microbiology Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 2 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Microbiology Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Collegedunia listed 138 colleges in Tamil Nadu for B.Sc Microbiology on 2 October 2026. This guide shows the colleges it lists first with their NIRF 2025 ranks, the options around Namakkal, Erode and Salem, the eligibility (any one biology subject, no NEET), fees, and how the B.Sc differs from medical microbiology.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Microbiology at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹34,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> +2 pass in any one of Botany, Zoology or Biology, academic or vocational; no minimum percentage (<a href={REGULATION_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green underline">Periyar University regulations</a>).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: microbiology fundamentals, microbial physiology, molecular biology and genetics, immunology, bacteriology, virology, recombinant DNA technology, and environmental, agricultural, food and pharmaceutical microbiology, with a practical in every core subject, a project and an internship.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-microbiology" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-microbiology-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-microbiology-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Microbiology or medical microbiology?</h2>
          <p className="text-gray-700 leading-relaxed">
            B.Sc Microbiology is a three-year arts and science degree admitted on +2 marks, covering microbes in medicine, food, agriculture, industry and the environment. Medical microbiology is taught in medical and allied health institutions with a clinical focus, under different eligibility and admission rules. This page covers the arts and science B.Sc.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Colleges listed for B.Sc Microbiology in Tamil Nadu</h2>
          <p className="text-gray-700 mb-4">
            The 30 colleges Collegedunia shows first (of 138) for B.Sc Microbiology in Tamil Nadu, in its order, with each college&apos;s NIRF 2025 College rank. NIRF ranks whole colleges, not the microbiology department. &quot;—&quot; means not found in the NIRF 2025 College ranking under that name.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base bg-white rounded-lg">
              <caption className="text-left text-sm text-gray-600 mb-2">Sources: Collegedunia B.Sc Microbiology Tamil Nadu list, read 2 Oct 2026; NIRF 2025 College ranking (nirfindia.org).</caption>
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="p-3">College</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">NIRF 2025 College rank</th>
                </tr>
              </thead>
              <tbody>
                {listRows.map((r) => (
                  <tr key={r.college + r.city} className="border-b border-gray-100">
                    <td className="p-3">{r.college}</td>
                    <td className="p-3">{r.city}</td>
                    <td className="p-3">{r.nirf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> at Periyar University colleges, a +2 pass in any one of Botany, Zoology or Biology; no minimum percentage. Other universities publish their own regulation.</li>
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
          Lists change every year. Confirm seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College list: collegedunia.com, read 2 October 2026.
        </p>
      </div>
    </main>
  );
}
