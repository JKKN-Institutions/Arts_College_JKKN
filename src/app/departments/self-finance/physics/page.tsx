import Link from 'next/link';

// Rebuilt 2026-09-30 (GL6-356). The previous page was ~100 words and Google had
// left it "Discovered - currently not indexed". Every fact here is also on the
// B.Sc Physics programme page or /fee-structure.
const faculty = [
  { name: 'Dr. N. Latha', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D., B.Ed.' },
  { name: 'Mr. K. Dinesh', designation: 'Assistant Professor', qualification: 'M.Sc., B.Ed., PGDCA., D.Yoga., (PhD)' },
  { name: 'Mr. V. Yasodharan', designation: 'Assistant Professor', qualification: 'M.Sc., B.Ed., PGDCA., D.Yoga.' },
];

const practicals = [
  'Properties of Matter experiments (Semester I)',
  'Heat, Oscillations, Waves and Sound experiments (Semester II)',
  'Electricity experiments (Semester III)',
  'Light experiments (Semester IV)',
  'General experiments (Semester V)',
  'Electronics experiments (Semester VI)',
];

export default function PhysicsSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Physics (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Self Finance Department of Physics at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Physics programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers mechanics, properties of matter, heat and thermodynamics, optics and spectroscopy, electricity and magnetism, atomic physics and lasers, relativity and quantum mechanics, nuclear and particle physics, solid state physics, and digital electronics with the 8085 microprocessor, with a practical course in every semester, an internship or field visit in Semester V and a project in Semester VI.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-physics" className="text-brand-green underline">B.Sc Physics (Self-Finance)</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination with Mathematics, Physics and Chemistry (Periyar University regulations)</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹25,000 (management quota); government quota as per Government norms</td></tr>
                  <tr><th className="p-3 font-semibold">Postgraduate route</th><td className="p-3"><Link href="/programmes/aided/pg/msc-physics" className="text-brand-green underline">M.Sc Physics (Aided)</Link> on the same campus</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Practical Courses</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700">
              {practicals.map((p) => <li key={p}>{p}</li>)}
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
              <Link href="/admissions/bsc-physics-self-finance" className="text-brand-green underline">B.Sc Physics admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-physics-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Physics colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
