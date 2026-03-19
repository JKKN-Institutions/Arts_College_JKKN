import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of English (SF)',
  description: 'Department of English (Self Finance) at JKKN College offers comprehensive programs with focus on communication skills and literary studies.',
};

export default function EnglishSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of English (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Self Finance Department of English at JKKN College of Arts and Science provides quality education in English language and literature. Our programs emphasize communication skills, critical thinking, and literary appreciation essential for professional success.
              </p>
              <p className="text-justify">
                With experienced faculty and modern teaching methodologies, we prepare students for diverse careers in education, media, corporate communication, and publishing. Our curriculum balances language proficiency with literary studies to create well-rounded graduates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.A. English (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
