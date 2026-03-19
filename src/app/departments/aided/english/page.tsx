import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of English',
  description: 'Department of English at JKKN College offers comprehensive programs in English language and literature with focus on communication skills and literary analysis.',
};

export default function EnglishDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of English
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of English at JKKN College of Arts and Science is committed to excellence in teaching English language and literature. Our programs are designed to enhance students' communication skills, critical thinking abilities, and literary appreciation.
              </p>
              <p className="text-justify">
                With a team of dedicated faculty members and modern teaching methodologies, we prepare students for diverse career opportunities in education, media, publishing, and corporate sectors. Our curriculum balances classical literature with contemporary works, ensuring a comprehensive understanding of the English language.
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
                  To be a leading department in English studies, fostering critical thinking, effective communication, and literary excellence among students.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green mb-2">Mission</h3>
                <p className="text-justify">
                  To provide quality education in English language and literature, develop communication skills, and prepare students for professional and academic success.
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
                <li>B.A. English (UG)</li>
                <li>M.A. English (PG)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
