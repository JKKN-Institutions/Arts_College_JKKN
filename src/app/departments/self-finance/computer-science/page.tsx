import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Computer Science (SF)',
  description: 'Department of Computer Science (Self Finance) at JKKN College offers industry-aligned programs in computing and software development.',
};

export default function ComputerScienceSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Computer Science (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of Computer Science at JKKN College of Arts and Science offers cutting-edge programs aligned with industry requirements. Our curriculum covers software development, data structures, algorithms, and emerging technologies.
              </p>
              <p className="text-justify">
                With modern computer labs, industry-experienced faculty, and project-based learning, we prepare students for successful careers in IT companies, startups, and technology services. Our emphasis on practical skills and industry certifications ensures high employability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Computer Science (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
