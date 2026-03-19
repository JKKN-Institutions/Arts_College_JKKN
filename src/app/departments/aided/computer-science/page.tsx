import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Computer Science',
  description: 'Department of Computer Science at JKKN College offers comprehensive programs in computing with focus on programming, algorithms, and emerging technologies.',
};

export default function ComputerScienceDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Computer Science
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Computer Science at JKKN College of Arts and Science is at the forefront of technology education. Our programs provide a solid foundation in computer science fundamentals, programming, algorithms, and emerging technologies.
              </p>
              <p className="text-justify">
                With state-of-the-art computer labs, experienced faculty, and industry-aligned curriculum, we prepare students for successful careers in software development, data science, cybersecurity, and IT services. Our focus on practical learning ensures students are industry-ready upon graduation.
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
                  To be a leading department in computer science education, producing skilled professionals who contribute to technological advancement and innovation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Mission</h3>
                <p className="text-justify">
                  To provide quality education in computer science, foster innovation and research, and prepare students for leadership roles in the technology industry.
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
                <li>B.Sc. Computer Science (UG)</li>
                <li>M.Sc. Computer Science (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
