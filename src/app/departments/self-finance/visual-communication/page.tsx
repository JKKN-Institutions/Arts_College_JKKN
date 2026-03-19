import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Visual Communication (SF)',
  description: 'Department of Visual Communication (Self Finance) at JKKN College offers creative programs in media, photography, and digital content creation.',
};

export default function VisualCommunicationSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Visual Communication (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Visual Communication (Self Finance) at JKKN College of Arts and Science offers creative programs in media production, photography, videography, and digital content creation. Our curriculum is designed to develop creative thinking and technical expertise in visual storytelling.
              </p>
              <p className="text-justify">
                With modern studios, editing labs, and industry-standard equipment, we provide hands-on training in film making, advertising, journalism, and digital media. Our students gain practical experience through projects, internships, and collaborations with media organizations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Visual Communication (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
