import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Mathematics (SF)',
  description: 'Department of Mathematics (Self Finance) at JKKN College offers comprehensive programs in mathematical sciences with practical applications.',
};

export default function MathematicsSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Mathematics (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of Mathematics at JKKN College of Arts and Science offers rigorous programs in pure and applied mathematics. Our curriculum emphasizes problem-solving, analytical thinking, and mathematical modeling relevant to modern industries.
              </p>
              <p className="text-justify">
                With qualified faculty and comprehensive teaching approach, we prepare students for careers in data science, actuarial science, banking, research, and education. Our focus on computational mathematics ensures graduates are ready for technology-driven fields.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Mathematics (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
