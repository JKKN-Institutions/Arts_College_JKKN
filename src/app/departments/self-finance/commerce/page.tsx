import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Commerce (SF)',
  description: 'Department of Commerce (Self Finance) at JKKN College offers specialized programs in business, accounting, and finance.',
};

export default function CommerceSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Commerce (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of Commerce at JKKN College of Arts and Science offers specialized programs in accounting, finance, banking, and business management. Our curriculum is designed to meet the evolving needs of the business world.
              </p>
              <p className="text-justify">
                With industry-experienced faculty and modern teaching methods, we prepare students for professional certifications and careers in banking, finance, taxation, and corporate sectors. Our focus on practical training ensures students develop job-ready skills.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Com (SF)</li>
                <li>B.Com Computer Applications (SF)</li>
                <li>B.Com Banking and Insurance (SF)</li>
                <li>B.Com Accounting and Finance (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
