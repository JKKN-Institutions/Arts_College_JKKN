import type { Metadata } from 'next';
import Link from 'next/link';

// Rebuilt 2026-10-01 (GL6-379). The previous 213-word page claimed "modern design studios, garment
// manufacturing labs, and industry collaborations" and "textile technology" programmes with no source.
// Every fact here is also on the B.Sc Textile and Fashion Designing programme page or /fee-structure.
export const metadata: Metadata = {
  title: 'Department of Textile and Fashion Designing (SF)',
  description: 'Department of Textile and Fashion Designing (Self Finance), JKKN College of Arts and Science, Komarapalayam: B.Sc Textile and Fashion Designing, a three-year fashion design degree of Periyar University. Rs 32,000 a year (MQ, 2026-27).',
};

const practicals = [
  'Basic Apparel Designing Practical (Semester I)',
  'Fiber to Fabric Science Practical (Semester II)',
  "Children's Apparel and Textile Wet Processing Practicals (Semester III)",
  "Women's Apparel Practical (Semester IV)",
  "Surface Embellishment and Fashion Accessories, and Men's Apparel Practicals (Semester V)",
  'CAD in Garment Designing Practical and Fashion Portfolio Presentation (Semester VI)',
];

const faculty = [
  { name: 'Mr. G. Arulkumar', role: 'Head of Department', qualification: 'M.Sc., PGDCA' },
  { name: 'Mrs. R. Sindhupriyadharshini', role: 'Assistant Professor', qualification: 'M.Sc.' },
  { name: 'Mrs. Keerthika', role: 'Assistant Professor', qualification: 'M.Sc. (T&FD)' },
];

export default function TextileFashionDesigningSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Textile and Fashion Designing (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Department of Textile and Fashion Designing (Self Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Textile and Fashion Designing (B.Sc TFD) programme, a fashion design degree in the arts and science stream. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations.
              </p>
              <p>
                The syllabus covers Fiber and Yarn Science, Woven Fabric Science and basic apparel designing in the first year; Textile Wet Processing, Textile Finishing, children&apos;s and women&apos;s apparel and the Fashion Designing course in the second; and Apparel Costing and Merchandising, Knitting and Non-woven, men&apos;s apparel, Textile Testing and Quality Control and CAD in Garment Designing in the final year, with an internship project and a fashion portfolio presentation. It is a B.Sc degree, not a B.Tech in Fashion or Textile Technology.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-textile-fashion-designing" className="text-brand-green underline">B.Sc Textile and Fashion Designing, Self-Finance</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in any Higher Secondary (+2) course, academic or vocational, of the State Board, CBSE, ICSE or an equivalent examination (Periyar University regulations). Any group can apply.</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Diploma holders</th><td className="p-3">A pass in a three-year Diploma in a Fashion, Costume, Textile or Apparel course qualifies for direct second-year admission under the regulation; contact the admissions office for seat availability.</td></tr>
                  <tr><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹32,000 (management quota); government quota as per Government norms</td></tr>
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
              <Link href="/admissions/bsc-textile-fashion-designing-self-finance" className="text-brand-green underline">B.Sc Textile and Fashion Designing admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-fashion-designing-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Fashion Designing colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
