import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Chemistry',
  description: 'Department of Chemistry at JKKN College offers comprehensive programs in chemical sciences with advanced laboratories and research facilities.',
};

export default function ChemistryDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Chemistry
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Chemistry at JKKN College of Arts and Science provides comprehensive education in chemical sciences. Our programs cover organic, inorganic, physical, and analytical chemistry with extensive laboratory practice.
              </p>
              <p className="text-justify">
                With state-of-the-art laboratories, modern instrumentation, and experienced faculty, we prepare students for careers in research, pharmaceuticals, chemical industries, and education. Our curriculum emphasizes both theoretical understanding and practical skills.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Chemistry (UG)</li>
                <li>M.Sc. Chemistry (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
