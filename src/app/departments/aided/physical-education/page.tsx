import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Physical Education',
  description: 'Department of Physical Education at JKKN College offers comprehensive programs in sports science, fitness, and health education.',
};

export default function PhysicalEducationDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Physical Education
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Physical Education at JKKN College of Arts and Science promotes physical fitness, sports excellence, and health education. Our programs combine theoretical knowledge of sports science with practical training in various sports and fitness activities.
              </p>
              <p className="text-justify">
                With modern sports facilities, qualified coaches, and comprehensive curriculum, we develop students' physical abilities, leadership skills, and understanding of health and wellness. Our graduates pursue careers in sports coaching, fitness training, and physical education.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.P.Ed. (Bachelor of Physical Education)</li>
                <li>M.P.Ed. (Master of Physical Education)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
