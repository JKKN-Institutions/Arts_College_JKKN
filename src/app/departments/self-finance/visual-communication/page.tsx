import type { Metadata } from 'next';
import Link from 'next/link';

// Rebuilt 2026-10-02 (GL6-380). The previous 199-word page claimed "industry-standard equipment",
// "journalism" and "collaborations with media organizations" with no source. The photography studio
// and editing lab were confirmed by the college on 2026-10-02; no equipment list is claimed.
export const metadata: Metadata = {
  title: 'Department of Visual Communication (SF)',
  description: 'Department of Visual Communication (Self Finance), JKKN College of Arts and Science, Komarapalayam: B.Sc Visual Communication (Viscom), a three-year Periyar University degree. Rs 32,000 a year (MQ, 2026-27).',
};

const practicals = [
  'Graphic Design & Aesthetics and Digital Drawing and Painting (Semester I)',
  'Photography & Videography and Image Editing and Colour Management (Semester II)',
  'Audio & Visual Editing and 2D & 3D Modelling (Semester III)',
  'Animation and Character Design and Compositing and Visual Effects (Semester IV)',
  'Short Film Making, 3D Environment Design and Internship (Semester V)',
  'Extended Reality Design and Capstone Project (Semester VI)',
];

export default function VisualCommunicationSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Visual Communication (Self Finance)
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">About the Department</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                The Department of Visual Communication (Self Finance) at JKKN College of Arts and Science (Autonomous), Komarapalayam, Namakkal district, Tamil Nadu, runs the three-year B.Sc Visual Communication (B.Sc Viscom) programme. The college is affiliated to Periyar University, Salem, and as an autonomous institution sets its own syllabus and examinations. The department has a photography studio and an editing lab for its practical courses.
              </p>
              <p>
                The syllabus covers human communication, graphic design, digital drawing, storytelling, photography and videography, publication design and image editing in the first year; multimedia, audio and visual editing, 2D and 3D modelling, film appreciation, animation and visual effects in the second; and advertising and brand communication, user experience design, 3D environment design, immersive and extended reality media, short film making, media entrepreneurship, an internship and a capstone project in the final year. It is a B.Sc degree in the arts and science stream.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Programme Offered</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 bg-white rounded-lg">
                <tbody>
                  <tr className="border-b"><th className="p-3 font-semibold">Programme</th><td className="p-3"><Link href="/programmes/self-finance/ug/bsc-visual-communication" className="text-brand-green underline">B.Sc Visual Communication, Self-Finance</Link></td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Duration</th><td className="p-3">3 years, 6 semesters, full-time</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Eligibility</th><td className="p-3">Pass in the Higher Secondary (+2) examination or an equivalent, or a 10+3 year Diploma (Periyar University regulations). No minimum percentage and no subject rule; any group can apply.</td></tr>
                  <tr className="border-b"><th className="p-3 font-semibold">Annual fee 2026-27</th><td className="p-3">₹32,000 (management quota); government quota as per Government norms</td></tr>
                  <tr><th className="p-3 font-semibold">Head of Department</th><td className="p-3">Mr. B. Baranidharan, M.Sc. (EM)</td></tr>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Admission</h2>
            <p className="text-base md:text-lg text-gray-700">
              <Link href="/admissions/bsc-visual-communication-self-finance" className="text-brand-green underline">B.Sc Visual Communication admission 2026-27</Link>
              {' · '}
              <Link href="/fee-structure" className="text-brand-green underline">Fee structure</Link>
              {' · '}
              <Link href="/bsc-visual-communication-colleges-in-tamil-nadu" className="text-brand-green underline">B.Sc Visual Communication colleges in Tamil Nadu</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
