import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Microbiology (SF)',
  description: 'Department of Microbiology (Self Finance) at JKKN College offers specialized programs in microbial sciences with modern laboratory facilities.',
};

export default function MicrobiologySFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Microbiology (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Microbiology (Self Finance) at JKKN College of Arts and Science offers specialized programs in microbial sciences, covering bacteriology, virology, immunology, and industrial microbiology. Our curriculum combines theoretical knowledge with extensive practical training.
              </p>
              <p className="text-justify">
                With modern microbiology laboratories, advanced equipment, and experienced faculty, we prepare students for careers in pharmaceuticals, biotechnology, food industries, clinical laboratories, and research. Our emphasis on hands-on training ensures graduates are well-equipped for professional success.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Microbiology (SF)</li>
                <li>M.Sc. Microbiology (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
