import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Department of Cyber Security (SF)',
  description: 'Department of Cyber Security (Self Finance) at JKKN College offers specialized programs in cybersecurity and information security.',
};

export default function CyberSecuritySFDepartmentPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Department of Cyber Security (Self Finance)
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              About the Department
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                The Department of Cyber Security (Self Finance) at JKKN College of Arts and Science offers specialized programs in cybersecurity, network security, and ethical hacking. Our curriculum is designed to address the growing need for cybersecurity professionals in the digital age.
              </p>
              <p className="text-justify">
                With dedicated security labs, industry-certified tools, and expert faculty, we provide comprehensive training in threat detection, vulnerability assessment, penetration testing, and security operations. Our students gain practical experience through simulations, capture-the-flag competitions, and industry internships, preparing them for careers in cybersecurity and information security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              Programmes Offered
            </h2>
            <div className="text-base md:text-lg text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Sc. Computer Science (Cyber Security) (SF)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
