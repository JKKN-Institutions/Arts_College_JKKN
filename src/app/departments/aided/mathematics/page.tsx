import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Mathematics',
  description: 'Department of Mathematics at JKKN College offers comprehensive programs in pure and applied mathematics with focus on analytical and problem-solving skills.',
};

export default function MathematicsDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Mathematics
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Mathematics at JKKN College of Arts and Science provides a strong foundation in both pure and applied mathematics. Our programs are designed to develop analytical thinking, problem-solving abilities, and mathematical reasoning skills essential for success in various fields.
              </p>
              <p className="text-justify">
                With experienced faculty and modern teaching methods, we offer a comprehensive curriculum that covers algebra, calculus, statistics, and advanced mathematical topics. Our students are prepared for careers in education, research, data science, and various industries.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Vision & Mission
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Vision</h3>
                <p className="text-justify">
                  To be a center of excellence in mathematics education, fostering analytical thinking and preparing students for advanced studies and professional careers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Mission</h3>
                <p className="text-justify">
                  To provide quality education in mathematics, develop problem-solving skills, and encourage research and innovation in mathematical sciences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Mathematics (UG)</li>
                <li>M.Sc. Mathematics (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
