import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Computer Applications (SF)',
  description: 'Department of Computer Applications (Self Finance) at JKKN College offers professional programs in software development and IT applications.',
};

export default function ComputerApplicationsSFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Computer Applications (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Computer Applications (Self Finance) at JKKN College of Arts and Science offers professional programs focused on software development, database management, and IT applications. Our curriculum is designed to meet current industry demands.
              </p>
              <p className="text-justify">
                With well-equipped computer labs, experienced faculty, and industry collaborations, we provide comprehensive training in programming, web development, mobile applications, and enterprise software. Our students gain hands-on experience through projects and internships, ensuring they are industry-ready upon graduation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>BCA (Bachelor of Computer Applications)</li>
                <li>MCA (Master of Computer Applications)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
