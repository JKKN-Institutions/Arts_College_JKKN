import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Commerce',
  description: 'Department of Commerce at JKKN College offers comprehensive programs in business and commerce with focus on accounting, finance, and management.',
};

export default function CommerceDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Commerce
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Commerce at JKKN College of Arts and Science offers comprehensive programs that prepare students for successful careers in business, accounting, finance, and management. Our curriculum combines theoretical knowledge with practical skills development.
              </p>
              <p className="text-justify">
                With experienced faculty members and modern teaching methodologies, we focus on developing analytical, decision-making, and entrepreneurial skills. Our students are well-prepared for professional certifications like CA, CMA, CS, and careers in banking, finance, and corporate sectors.
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
                  To be a premier department in commerce education, producing competent professionals and entrepreneurs who contribute to economic development.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Mission</h3>
                <p className="text-justify">
                  To provide quality commerce education, develop business acumen, and prepare students for professional excellence in the dynamic business environment.
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
                <li>B.Com (UG)</li>
                <li>M.Com (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
