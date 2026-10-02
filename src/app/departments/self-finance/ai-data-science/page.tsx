import type { Metadata } from 'next';
import Link from 'next/link';

// Rebuilt 2026-10-02 (GL6-383). The previous page claimed expert faculty, research and placements with no
// source. Faculty confirmed by the college 2026-10-02; every other fact is on the programme page or /fee-structure.
export const metadata: Metadata = {
  title: 'Department of AI and Data Science (SF)',
  description: 'Department of Artificial Intelligence and Data Science (Self Finance), JKKN College of Arts and Science, Komarapalayam: B.Sc Computer Science (AI & DS), a three-year Periyar University degree. Rs 34,000 a year (MQ, 2026-27).',
};

const labs = [
  'Computer Programming Lab (Semester I)',
  'Python Programming Lab (Semester II)',
  'Internet Programming Lab (Semester III)',
  'Database Programming Lab and Statistical Practical (Semester IV)',
  'Data Science Lab (Semester V)',
  'UiPath Automation Lab (Semester VI)',
];

const faculty = [
  { name: 'Mrs. S. Priyanga', role: 'Head of Department', qualification: 'M.C.A., M.Phil.' },
  { name: 'Ms. K. Epshiba', role: 'Assistant Professor', qualification: 'M.Sc.' },
  { name: 'Dr. A. Kamalaveni', role: 'Assistant Professor', qualification: 'MCA, M.Ed., M.Phil., Ph.D., M.Sc., NET, SET' },
  { name: 'Ms. P. Subashini', role: 'Assistant Professor', qualification: 'MCA' },
];

export default function AIDataScienceSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Artificial Intelligence and Data Science (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Department of Artificial Intelligence and Data Science (Self Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Computer Science (Artificial Intelligence and Data Science) programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers programming, Data Structures, Python and mathematics electives in the first year; Foundation of Artificial Intelligence, Fundamentals of Data Science, statistics, web designing, PHP and database programming in the second; and Database Design and Management, a Data Science Lab, Ethics of Artificial Intelligence, Natural Language Processing and Robotic Process Automation in the final year, with a project with viva voce and a summer internship. It is a B.Sc in the arts and science stream, not a B.Tech in AI &amp; DS.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-ai-ds" className="text-brand-green underline">B.Sc Computer Science (AI &amp; DS), Self-Finance</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination; confirm the required +2 subjects with the admissions office.</td></tr>
                  <tr><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹34,000 (management quota); government quota as per Government norms</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Practical Labs</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700">
              {labs.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Faculty</h2>
            <ul className="space-y-2 text-base md:text-lg text-gray-700">
              {faculty.map((f) => (
                <li key={f.name}><strong>{f.name}</strong>, {f.role}, {f.qualification}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Admission</h2>
            <p className="text-base md:text-lg text-gray-700">
              <Link href="/admissions/bsc-ai-ds-self-finance" className="text-brand-green underline">B.Sc AI &amp; DS admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-ai-data-science-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc AI &amp; Data Science colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
