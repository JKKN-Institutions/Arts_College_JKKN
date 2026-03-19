import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of History',
  description: 'Department of History at JKKN College offers comprehensive programs in historical studies with focus on research, analysis, and cultural understanding.',
};

export default function HistoryDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of History
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of History at JKKN College of Arts and Science offers comprehensive programs that explore human civilization, cultural heritage, and historical developments. Our curriculum emphasizes critical analysis, research methodology, and contextual understanding of historical events.
              </p>
              <p className="text-justify">
                With dedicated faculty and extensive resources, we encourage students to develop research skills, analytical thinking, and a deep appreciation for history. Our graduates pursue careers in education, research, civil services, archaeology, and cultural preservation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.A. History (UG)</li>
                <li>M.A. History (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
