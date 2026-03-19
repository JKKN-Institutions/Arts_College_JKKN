import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Tamil',
  description: 'Department of Tamil at JKKN College offers comprehensive programs in Tamil language and literature with experienced faculty and modern teaching methods.',
};

export default function TamilDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Tamil
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Tamil at JKKN College of Arts and Science is dedicated to preserving and promoting the rich heritage of Tamil language and literature. Our department offers comprehensive programs that combine traditional wisdom with modern pedagogical approaches.
              </p>
              <p className="text-justify">
                With experienced faculty members and state-of-the-art facilities, we strive to provide our students with a deep understanding of Tamil literature, linguistics, and culture. Our curriculum is designed to develop critical thinking, analytical skills, and a profound appreciation for Tamil heritage.
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
                  To be a center of excellence in Tamil studies, fostering research, innovation, and cultural preservation while preparing students for successful careers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Mission</h3>
                <p className="text-justify">
                  To provide quality education in Tamil language and literature, encourage research and publication, and contribute to the preservation and development of Tamil culture.
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
                <li>B.A. Tamil (UG)</li>
                <li>M.A. Tamil (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
