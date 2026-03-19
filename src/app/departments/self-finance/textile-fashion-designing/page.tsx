import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Textile and Fashion Designing (SF)',
  description: 'Department of Textile and Fashion Designing (Self Finance) at JKKN College offers creative programs in fashion design and textile technology.',
};

export default function TextileFashionDesigningSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Textile and Fashion Designing (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Textile and Fashion Designing (Self Finance) at JKKN College of Arts and Science offers creative and technical programs in fashion design, garment technology, and textile science. Our curriculum blends creativity with technical skills and business acumen.
              </p>
              <p className="text-justify">
                With modern design studios, garment manufacturing labs, and industry collaborations, we prepare students for careers in fashion design, textile technology, merchandising, and apparel production. Our emphasis on practical training and industry exposure ensures graduates are ready for the fashion and textile industries.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Textile and Fashion Designing (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
