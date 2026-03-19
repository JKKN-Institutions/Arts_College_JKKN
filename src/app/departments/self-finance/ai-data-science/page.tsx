import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Artificial Intelligence and Data Science (SF)',
  description: 'Department of AI and Data Science (Self Finance) at JKKN College offers cutting-edge programs in artificial intelligence and data analytics.',
};

export default function AIDataScienceSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Artificial Intelligence and Data Science (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Artificial Intelligence and Data Science (Self Finance) at JKKN College of Arts and Science offers cutting-edge programs in AI, machine learning, deep learning, and data analytics. Our curriculum is designed to meet the growing demand for AI and data science professionals.
              </p>
              <p className="text-justify">
                With modern computing labs, industry-standard tools, and experienced faculty, we provide comprehensive training in AI algorithms, data analysis, predictive modeling, and intelligent systems. Our students work on real-world projects and gain hands-on experience with latest technologies, preparing them for high-demand careers in AI and data science.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Artificial Intelligence and Data Science (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
