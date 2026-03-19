import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Physics (SF)',
  description: 'Department of Physics (Self Finance) at JKKN College offers comprehensive programs with advanced laboratories and research opportunities.',
};

export default function PhysicsSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Physics (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of Physics at JKKN College of Arts and Science offers comprehensive programs in physics with emphasis on both theoretical understanding and practical applications. Our curriculum covers classical physics, modern physics, and applied physics.
              </p>
              <p className="text-justify">
                With well-equipped laboratories and experienced faculty, we provide students with hands-on training in experimental physics and research methodologies. Our graduates pursue careers in research, technology, education, and various scientific fields.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Physics (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
