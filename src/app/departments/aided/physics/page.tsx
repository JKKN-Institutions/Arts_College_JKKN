import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Physics',
  description: 'Department of Physics at JKKN College offers comprehensive programs in physics with advanced laboratories and research facilities.',
};

export default function PhysicsDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Physics
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Physics at JKKN College of Arts and Science provides comprehensive education in classical and modern physics. Our programs combine theoretical knowledge with extensive practical training in well-equipped laboratories.
              </p>
              <p className="text-justify">
                With experienced faculty and state-of-the-art facilities, we offer courses covering mechanics, thermodynamics, electromagnetism, quantum physics, and applied physics. Our students are prepared for careers in research, education, technology, and various scientific fields.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Physics (UG)</li>
                <li>M.Sc. Physics (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
