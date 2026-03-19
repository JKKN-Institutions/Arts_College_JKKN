import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Zoology',
  description: 'Department of Zoology at JKKN College offers comprehensive programs in animal biology with modern laboratories and research facilities.',
};

export default function ZoologyDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Zoology
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Zoology at JKKN College of Arts and Science offers comprehensive programs in animal biology, ecology, and biodiversity. Our curriculum combines theoretical knowledge with extensive practical training in modern laboratories.
              </p>
              <p className="text-justify">
                With experienced faculty and well-equipped facilities, we provide students with hands-on experience in animal physiology, genetics, ecology, and conservation biology. Our graduates pursue careers in research, wildlife conservation, biotechnology, and education.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Zoology (UG)</li>
                <li>M.Sc. Zoology (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
