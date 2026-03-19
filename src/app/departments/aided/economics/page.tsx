import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Economics',
  description: 'Department of Economics at JKKN College offers comprehensive programs in economic theory, policy analysis, and quantitative methods.',
};

export default function EconomicsDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Economics
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Economics at JKKN College of Arts and Science provides comprehensive education in economic theory, policy analysis, and quantitative methods. Our programs develop analytical and critical thinking skills essential for understanding complex economic issues.
              </p>
              <p className="text-justify">
                With experienced faculty and a rigorous curriculum, we prepare students for careers in banking, finance, policy analysis, research, and academia. Our focus on both microeconomics and macroeconomics ensures a well-rounded understanding of economic principles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.A. Economics (UG)</li>
                <li>M.A. Economics (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
