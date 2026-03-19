import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Geography',
  description: 'Department of Geography at JKKN College offers comprehensive programs in physical and human geography with focus on environmental studies and GIS.',
};

export default function GeographyDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Geography
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Geography at JKKN College of Arts and Science offers comprehensive programs covering physical geography, human geography, and environmental studies. Our curriculum integrates traditional geographical concepts with modern tools like GIS and remote sensing.
              </p>
              <p className="text-justify">
                With experienced faculty and well-equipped facilities, we prepare students for careers in environmental management, urban planning, cartography, and geographical research. Our focus on fieldwork and practical training ensures students develop real-world skills.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.A. Geography (UG)</li>
                <li>M.A. Geography (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
