import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Botany',
  description: 'Department of Botany at JKKN College offers comprehensive programs in plant biology with modern laboratories and research facilities.',
};

export default function BotanyDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Botany
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Botany at JKKN College of Arts and Science offers comprehensive programs in plant biology, ecology, and biotechnology. Our curriculum combines theoretical knowledge with extensive practical training in modern laboratories and botanical gardens.
              </p>
              <p className="text-justify">
                With experienced faculty and well-equipped facilities, we provide students with hands-on experience in plant physiology, genetics, taxonomy, and conservation. Our graduates pursue careers in research, agriculture, environmental conservation, and biotechnology.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Botany (UG)</li>
                <li>M.Sc. Botany (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
