import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Tamil (SF)',
  description: 'Department of Tamil (Self Finance) at JKKN College offers comprehensive programs in Tamil language and literature with modern teaching methods.',
};

export default function TamilSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Tamil (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of Tamil at JKKN College of Arts and Science offers specialized programs in Tamil language, literature, and cultural studies. Our curriculum blends traditional scholarship with contemporary approaches to Tamil studies.
              </p>
              <p className="text-justify">
                With dedicated faculty and modern teaching facilities, we provide quality education that prepares students for careers in education, media, translation, and cultural preservation. Our emphasis on practical skills and research ensures students are well-equipped for professional success.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.A. Tamil (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
