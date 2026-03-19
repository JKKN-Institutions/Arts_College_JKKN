import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Library',
  description: 'Department of Library at JKKN College offers comprehensive programs in library science and information management.',
};

export default function LibraryDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Library
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Library at JKKN College of Arts and Science offers comprehensive programs in library science and information management. Our curriculum covers traditional library practices and modern digital information systems.
              </p>
              <p className="text-justify">
                With experienced faculty and practical training in library management, cataloging, and digital resources, we prepare students for careers in academic libraries, public libraries, digital archives, and information centers. Our focus on information technology ensures graduates are ready for modern library challenges.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Lib.I.Sc. (Bachelor of Library and Information Science)</li>
                <li>M.Lib.I.Sc. (Master of Library and Information Science)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
