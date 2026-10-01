import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

// GL6-375, 2026-10-01. The cyber security keyword family lost all its impressions after the
// 2026-02-05 relaunch (the old department URL was 404 until 2026-05-19) and the site had no page
// that answers a list question. Every row below is sourced and dated:
//   List      - collegedunia.com/bsc/cyber-security/tamil-nadu-colleges: 41 colleges, of which the 22
//               served on first load are listed (page 2 is disallowed by its robots.txt), read 2026-10-01
//   NIRF 2025 - nirfindia.org/Rankings/2025/CollegeRanking.html (+150, 200, 300 bands); exact or
//               Sri/Shri-only name matches; "—" means not found in the College ranking under that name
//   JKKN      - /fee-structure (fee), Periyar University B.Sc CS (Cyber Security) regulations 2023-24
// No row claims JKKN is ranked or "best".

const PAGE_URL = "https://cas.jkkn.ac.in/bsc-cyber-security-colleges-in-tamil-nadu";

export const metadata: Metadata = {
  title: "B.Sc Cyber Security Colleges in Tamil Nadu 2026 - List, NIRF Ranks, Eligibility",
  description:
    "B.Sc Cyber Security colleges in Tamil Nadu: the colleges listed for the course with their NIRF 2025 ranks, the Namakkal, Erode and Salem options, eligibility (Maths not compulsory), fees and the B.Sc vs B.E. difference.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "B.Sc Cyber Security Colleges in Tamil Nadu 2026",
    description:
      "Colleges offering B.Sc Cyber Security in Tamil Nadu with NIRF 2025 ranks, Kongu-region options, eligibility and the B.Sc vs B.E. difference.",
    url: PAGE_URL,
    siteName: "JKKN College of Arts and Science",
    type: "article",
  },
};

type Row = { college: string; city: string; nirf: string };

// Collegedunia's Tamil Nadu B.Sc Cyber Security list, first 22 of 41, in its own order.
const listRows: Row[] = [
  { college: "Ethiraj College for Women", city: "Chennai", nirf: "64" },
  { college: "Dr. N.G.P. Arts and Science College", city: "Coimbatore", nirf: "66" },
  { college: "Sri Ramakrishna College of Arts and Science", city: "Coimbatore", nirf: "76" },
  { college: "Hindusthan College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Rathinam Group of Institutions", city: "Coimbatore", nirf: "—" },
  { college: "Dr. SNS Rajalakshmi College of Arts and Science", city: "Coimbatore", nirf: "101-150" },
  { college: "Nehru Group of Institutions", city: "Coimbatore", nirf: "—" },
  { college: "Shri Nehru Maha Vidyalaya College of Arts and Science", city: "Coimbatore", nirf: "151-200" },
  { college: "Vellalar College for Women", city: "Erode", nirf: "151-200" },
  { college: "Sree Saraswathi Thyagaraja College", city: "Pollachi", nirf: "—" },
  { college: "Vivekanandha College of Arts and Sciences for Women, Elayampalayam", city: "Namakkal", nirf: "201-300" },
  { college: "KG College of Arts and Science", city: "Coimbatore", nirf: "—" },
  { college: "Sree Narayana Guru College", city: "Coimbatore", nirf: "—" },
  { college: "CMS Group of Institutions", city: "Coimbatore", nirf: "—" },
  { college: "PSG College of Technology", city: "Coimbatore", nirf: "—" },
  { college: "AJK College of Arts and Science", city: "Coimbatore", nirf: "—" },
  { college: "Nadar Mahajana Sangam S Vellaichamy Nadar College", city: "Madurai", nirf: "—" },
  { college: "Muthayammal College of Arts and Science", city: "Namakkal", nirf: "201-300" },
  { college: "Shri Sakthikailassh Women's College", city: "Salem", nirf: "—" },
  { college: "Theivanai Ammal College for Women", city: "Viluppuram", nirf: "—" },
  { college: "KPR College of Arts Science and Research", city: "Coimbatore", nirf: "201-300" },
  { college: "Rev. Jacob Memorial Christian College", city: "Dindigul", nirf: "—" },
];

const konguRows = listRows.filter((r) => ["Namakkal", "Erode", "Salem"].includes(r.city));

const faqs = [
  {
    question: "How many colleges in Tamil Nadu offer B.Sc Cyber Security?",
    answer:
      "No government list counts them. Collegedunia, a private listing site, listed 41 colleges in Tamil Nadu for B.Sc Cyber Security when this page was checked on 1 October 2026; the 22 it shows first are in the table on this page. It is a much smaller field than B.Sc Computer Science.",
  },
  {
    question: "Is Maths compulsory for B.Sc Cyber Security?",
    answer:
      "Not at colleges affiliated to Periyar University, Salem. Its B.Sc Computer Science (Cyber Security) regulation accepts a +2 pass with any one of Mathematics, Business Mathematics, Computer Science or Statistics. Colleges under other universities follow their own regulation, so check the college you apply to.",
  },
  {
    question: "Which is the best college for B.Sc Cyber Security in Tamil Nadu?",
    answer:
      "There is no official subject-wise ranking for B.Sc Cyber Security. The Government of India's NIRF 2025 College ranking ranks whole colleges; among the colleges Collegedunia lists for the course, the highest-ranked are Ethiraj College for Women, Chennai (64), Dr. N.G.P. Arts and Science College, Coimbatore (66) and Sri Ramakrishna College of Arts and Science, Coimbatore (76). Fee, distance, seat type and hostel matter as much for most families.",
  },
  {
    question: "What is the difference between B.Sc Cyber Security and B.E. CSE (Cyber Security)?",
    answer:
      "B.Sc Cyber Security is a three-year arts and science degree, admitted on +2 marks by each college or through TNGASA for government colleges. B.E. or B.Tech CSE (Cyber Security) is a four-year engineering degree, admitted through TNEA counselling and offered by engineering colleges. They are different courses with different eligibility and fees.",
  },
  {
    question: "Which colleges near Namakkal, Erode and Salem offer B.Sc Cyber Security?",
    answer:
      "Among the colleges Collegedunia shows first for B.Sc Cyber Security in Tamil Nadu are Vellalar College for Women in Erode, Vivekanandha College of Arts and Sciences for Women and Muthayammal College of Arts and Science in Namakkal district, and Shri Sakthikailassh Women's College in Salem. JKKN College of Arts and Science at Komarapalayam, Namakkal district, also offers the course.",
  },
  {
    question: "What does B.Sc Cyber Security cost at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 32,000 under the management quota. Government quota seats follow Government norms. The programme is three years and six semesters, and the degree is awarded by Periyar University.",
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

export default function BscCyberSecurityCollegesTamilNaduPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges listed for B.Sc Cyber Security in Tamil Nadu (Collegedunia, first 22 of 41)",
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
          { name: "B.Sc Cyber Security Colleges in Tamil Nadu", url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <header>
          <p className="text-sm text-gray-600 mb-2">Updated 1 October 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            B.Sc Cyber Security Colleges in Tamil Nadu 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Collegedunia listed 41 colleges in Tamil Nadu for B.Sc Cyber Security on 1 October 2026. This guide shows the colleges it lists first with their NIRF 2025 ranks, the options around Namakkal, Erode and Salem, the eligibility (Maths is not compulsory), fees, and how the B.Sc differs from a B.E. in Cyber Security.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc Cyber Security at JKKN College of Arts and Science, Komarapalayam</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Where:</strong> NH-544 (Salem to Coimbatore highway), Komarapalayam, Namakkal district, between Salem and Erode.</li>
            <li><strong>Status:</strong> autonomous college, affiliated to Periyar University, Salem; NAAC accredited.</li>
            <li><strong>Fee 2026-27:</strong> ₹32,000 a year (management quota); government quota as per Government norms.</li>
            <li><strong>Eligibility:</strong> +2 pass with any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations).</li>
            <li><strong>Course:</strong> 3 years, 6 semesters: C, Data Structures, Java, Web Designing, PHP, Tools and Techniques for Cyber Security with a Cyber Security Lab, RDBMS, Essentials of Cyber Security, Ethical Hacking with a lab, and Network Security; final-year project and internship.</li>
          </ul>
          <p className="mt-4 flex flex-wrap gap-4">
            <Link href="/programmes/self-finance/ug/bsc-cs-cyber-security" className="text-brand-green font-semibold underline">Programme details and syllabus</Link>
            <Link href="/admissions/bsc-cs-cyber-security-self-finance" className="text-brand-green font-semibold underline">Admission 2026-27</Link>
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=cas.jkkn.ac.in&utm_medium=organic&utm_campaign=bsc-cyber-security-colleges-in-tamil-nadu" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold underline">Apply online</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">B.Sc or B.E.? Two different cyber security courses</h2>
          <p className="text-gray-700 leading-relaxed">
            Searches for &quot;cyber security colleges&quot; mix two courses. B.Sc Computer Science (Cyber Security) is a three-year arts and science degree, admitted on +2 marks. B.E. or B.Tech CSE (Cyber Security) is a four-year engineering degree, admitted through TNEA counselling at engineering colleges. This page covers the B.Sc. JKKN College of Arts and Science offers the B.Sc; it does not offer a B.E. in Cyber Security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Colleges listed for B.Sc Cyber Security in Tamil Nadu</h2>
          <p className="text-gray-700 mb-4">
            The 22 colleges Collegedunia shows first (of 41) for B.Sc Cyber Security in Tamil Nadu, in its order, with each college&apos;s NIRF 2025 College rank. NIRF ranks whole colleges, not the cyber security department. &quot;—&quot; means not found in the NIRF 2025 College ranking under that name.
          </p>
          <NirfTable rows={listRows} caption="Sources: Collegedunia B.Sc Cyber Security Tamil Nadu list, read 1 Oct 2026; NIRF 2025 College ranking (nirfindia.org)." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Namakkal, Erode and Salem options</h2>
          <p className="text-gray-700 mb-4">
            From the same list, the colleges in Namakkal, Erode and Salem districts. JKKN College of Arts and Science, Komarapalayam (Namakkal district) also offers the course; it is not among the 22 Collegedunia shows first.
          </p>
          <NirfTable rows={konguRows} caption="Source: Collegedunia B.Sc Cyber Security Tamil Nadu list, read 1 Oct 2026; NIRF 2025." />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-green mb-3">Eligibility, admission routes and fees</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eligibility:</strong> at Periyar University colleges, a +2 pass with any one of Mathematics, Business Mathematics, Computer Science or Statistics; other universities publish their own regulation.</li>
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
          Lists change every year. Confirm seats and fees with each college before applying. Rankings: nirfindia.org, NIRF 2025. College list: collegedunia.com, read 1 October 2026. See also our{" "}
          <Link href="/bsc-computer-science-colleges-in-tamil-nadu" className="text-brand-green underline">guide to B.Sc Computer Science colleges in Tamil Nadu</Link>.
        </p>
      </div>
    </main>
  );
}
