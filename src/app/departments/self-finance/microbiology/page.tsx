import type { Metadata } from 'next';
import Link from 'next/link';

// Rebuilt 2026-10-02 (GL6-384). The previous 238-word page made general claims with no source. Faculty names
// were confirmed by the college 2026-10-02; every other fact is on the programme page or /fee-structure.
export const metadata: Metadata = {
  title: 'Department of Microbiology (SF)',
  description: 'Department of Microbiology (Self Finance), JKKN College of Arts and Science, Komarapalayam: B.Sc Microbiology, a three-year Periyar University degree. +2 with any one of Botany, Zoology or Biology. Rs 34,000 a year (MQ, 2026-27).',
};

const practicals = [
  'Fundamentals of Microbiology Practicals (Semester I)',
  'Microbial Physiology and Metabolism Practicals (Semester II)',
  'Molecular Biology and Microbial Genetics Practicals (Semester III)',
  'Immunology and Immunotechnology Practicals (Semester IV)',
  'Core Practical V - bacteriology, mycology, virology and parasitology (Semester V)',
  'Core Practical VI - environmental, agricultural, food and dairy microbiology (Semester VI)',
];

const faculty = [
  { name: 'Dr. D. Hemalatha', role: 'Head of Department', qualification: 'Ph.D., Microbial Genetics' },
  { name: 'S. Kayathri', role: 'Assistant Professor', qualification: 'M.Sc., B.Ed., M.Phil., Life Science' },
  { name: 'S. Kamali', role: 'Assistant Professor', qualification: 'M.Sc., Biochemistry' },
];

export default function MicrobiologySFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Microbiology (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Department of Microbiology (Self Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Microbiology programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers Fundamentals of Microbiology, Microbial Physiology and Metabolism, biochemistry and bioinstrumentation in the first year; Molecular Biology and Microbial Genetics, Immunology and Immunotechnology, clinical laboratory technology and food processing in the second; and Bacteriology and Mycology, Virology and Parasitology, Recombinant DNA Technology and environmental, agricultural, food, dairy and pharmaceutical microbiology in the final year, with a project with viva voce and an internship or industrial visit. It is an arts and science B.Sc, admitted on the +2 pass with no entrance test.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-microbiology" className="text-brand-green underline">B.Sc Microbiology, Self-Finance</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination in any one of Botany, Zoology or Biology, academic or vocational stream (Periyar University regulations). No minimum percentage; Chemistry is not required.</td></tr>
                  <tr><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹34,000 (management quota); government quota as per Government norms</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Practical Courses</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700">
              {practicals.map((l) => <li key={l}>{l}</li>)}
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
              <Link href="/admissions/bsc-microbiology-self-finance" className="text-brand-green underline">B.Sc Microbiology admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-microbiology-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Microbiology colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
