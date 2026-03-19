import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Business Administration (BBA) (SF)',
  description: 'Department of Business Administration (BBA) at JKKN College offers comprehensive programs in management and entrepreneurship.',
};

export default function BusinessAdministrationSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Business Administration (BBA) (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Business Administration (Self Finance) at JKKN College of Arts and Science offers comprehensive BBA programs that develop management, leadership, and entrepreneurial skills. Our curriculum covers all aspects of business including marketing, finance, human resources, and operations management.
              </p>
              <p className="text-justify">
                With experienced faculty, case-study based learning, and industry interactions, we prepare students for successful careers in corporate management, consulting, and entrepreneurship. Our emphasis on practical skills, communication, and leadership ensures graduates are ready to excel in the business world.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>BBA (Bachelor of Business Administration) (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
