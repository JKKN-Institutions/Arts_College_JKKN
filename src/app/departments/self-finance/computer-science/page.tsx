import Link from 'next/link';

// Rebuilt 2026-10-01 (GL6-363). The previous page was 191 words and Google had left it
// "Discovered - currently not indexed". Every fact here is also on the B.Sc Computer
// Science programme page or /fee-structure; faculty are the six listed on that page.
const faculty = [
  { name: 'Dr. N. Chandrakala', designation: 'Head of Department', qualification: 'M.Sc., M.Phil., Ph.D.' },
  { name: 'Mrs. P. Priyanka', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed.' },
  { name: 'Mrs. P. Kowsalya', designation: 'Assistant Professor', qualification: 'M.C.A.' },
  { name: 'Mrs. A. Vennila', designation: 'Assistant Professor', qualification: 'M.C.A.' },
  { name: 'Mr. R. Pugalendhi', designation: 'Assistant Professor', qualification: 'M.Sc.' },
  { name: 'Mrs. D. Savietha', designation: 'Assistant Professor', qualification: 'M.Sc. (CS)' },
];

const labs = [
  'Python Programming Lab (Semester I)',
  'Data Structures and Algorithms Lab (Semester II)',
  'Microprocessor and Microcontroller Lab (Semester III)',
  'Java Programming Lab (Semester IV)',
  'Database Management System Lab (Semester V)',
  '.NET Programming Lab (Semester VI)',
];

export default function ComputerScienceSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Computer Science (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Self Finance Department of Computer Science at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Computer Science programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers Python Programming and Data Structures and Algorithms in the first year; Microprocessor and Microcontroller, Web Designing, Java Programming and PHP Programming in the second; and Software Engineering, Database Management Systems, Computer Networks and .NET Programming in the final year, with a project with viva voce and an internship or industrial training.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-computer-science" className="text-brand-green underline">B.Sc Computer Science (Self-Finance)</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination with any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations)</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹34,000 (management quota); government quota as per Government norms</td></tr>
                  <tr><th className="p-3 font-semibold">Postgraduate route</th><td className="p-3"><Link href="/programmes/aided/pg/msc-computer-science" className="text-brand-green underline">M.Sc Computer Science (Aided)</Link>, <Link href="/programmes/self-finance/pg/msc-computer-science" className="text-brand-green underline">M.Sc Computer Science (Self-Finance)</Link> and <Link href="/programmes/aided/pg/mca" className="text-brand-green underline">MCA (Aided)</Link> on the same campus</td></tr>
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
            <ul className="grid sm:grid-cols-3 gap-4">
              {faculty.map((f) => (
                <li key={f.name} className="bg-white rounded-lg p-4">
                  <p className="font-bold text-brand-green">{f.name}</p>
                  <p className="text-sm text-gray-700">{f.designation}</p>
                  <p className="text-xs text-gray-600">{f.qualification}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Admission</h2>
            <p className="text-base md:text-lg text-gray-700">
              <Link href="/admissions/bsc-computer-science-self-finance" className="text-brand-green underline">B.Sc Computer Science admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-computer-science-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Computer Science colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
