import Link from 'next/link';

// Rebuilt 2026-10-01 (GL6-375). The previous 212-word page claimed "dedicated security labs,
// industry-certified tools, expert faculty" and CTF competitions with no source. Every fact here
// is also on the B.Sc CS (Cyber Security) programme page or /fee-structure. No faculty are listed
// because no sourced faculty list exists for this department.
const labs = [
  'Programming in C Lab (Semester I)',
  'Data Structures and Algorithms Lab (Semester II)',
  'Java Programming Lab (Semester III)',
  'Cyber Security Lab (Semester IV)',
  'RDBMS using Oracle Lab (Semester V)',
  'Ethical Hacking Lab (Semester VI)',
];

export default function CyberSecuritySFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Cyber Security (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Department of Cyber Security (Self Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Computer Science (Cyber Security) programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers Programming in C and Data Structures in the first year; Java, Web Designing, PHP, and Tools and Techniques for Cyber Security in the second; and Relational Database Management Systems, Essentials of Cyber Security, Ethical Hacking and Cyber Security, and Network Security in the final year, with a project with viva voce and a summer internship or industrial training. It is a B.Sc degree, not a B.E. or B.Tech.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-cs-cyber-security" className="text-brand-green underline">B.Sc Computer Science (Cyber Security), Self-Finance</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination with any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations). Maths is not compulsory.</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹32,000 (management quota); government quota as per Government norms</td></tr>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Admission</h2>
            <p className="text-base md:text-lg text-gray-700">
              <Link href="/admissions/bsc-cs-cyber-security-self-finance" className="text-brand-green underline">B.Sc Cyber Security admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-cyber-security-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Cyber Security colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
