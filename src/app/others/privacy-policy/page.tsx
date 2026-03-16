import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | JKKN College of Arts and Science",
  description:
    "Privacy policy for JKKN College of Arts and Science website. How we collect, use and protect your information.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/others/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | JKKN College of Arts and Science",
    description:
      "Privacy policy for JKKN College of Arts and Science website. How we collect, use and protect your information.",
    url: "https://cas.jkkn.ac.in/others/privacy-policy",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Privacy Policy", url: "https://cas.jkkn.ac.in/others/privacy-policy" },
      ]} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span className="mx-2">&gt;</span>
          <span>Privacy Policy</span>
        </nav>

        {/* Main Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              At JKKN Educational Institutions, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose information about our students, staff, and other stakeholders.
            </p>
          </div>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect personal information from you, such as your name, email address, phone number, address, and other details when you apply for admission, register for a course, or interact with us in other ways. We may also collect information about your academic and professional background, including transcripts, resumes, and references.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In addition, we may collect information automatically when you visit our website, such as your IP address, browser type, operating system, and other technical details.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide educational and administrative services, such as course registration, academic advising, and career services</li>
              <li>To communicate with you about our programs, services, and events</li>
              <li>To process payments and manage financial aid</li>
              <li>To comply with legal obligations, such as reporting requirements and requests from government agencies</li>
              <li>To improve our website and other systems, and to conduct research and analysis</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We may also use your information for other purposes that are consistent with this privacy policy and that you have consented to, or that are permitted by law.
            </p>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may share your personal information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With your consent or at your direction</li>
              <li>Our service providers assist us in providing educational and administrative services, such as IT support, payment processing, and marketing</li>
              <li>With our academic partners who offer joint programs and courses</li>
              <li>With government agencies or other parties as required by law or to protect our legal rights or the safety of others</li>
              <li>In connection with a merger, acquisition, or other business transaction involving JKKN Educational Institutions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We may also share information that is aggregated or anonymized and does not identify you personally.
            </p>
          </section>

          {/* How We Protect Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure. We use a combination of physical, technical, and administrative safeguards to protect your information, including encryption, firewalls, and access controls.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, no system can guarantee complete security, and we cannot guarantee the security of your information. Therefore, you should take steps to protect your information, such as using strong passwords and avoiding sharing sensitive information over unsecured networks.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have certain rights regarding your personal information, such as the right to access, correct, and delete your information. You may also have the right to object to certain uses of your information or to withdraw your consent for certain purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To exercise your rights or to request more information about our privacy practices, please contact us at admin@jkkn.ac.in. We will respond to your request as soon as reasonably practicable.
            </p>
          </section>

          {/* Updates to this Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to this Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our information practices or legal requirements. We will notify you of any material changes to this policy by posting a notice on our website or by other means.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="text-gray-700 space-y-1">
              <p><strong>Call:</strong> +917845945001</p>
              <p><strong>Email:</strong> admin@jkkn.org</p>
              <p><strong>Address:</strong> JKKN Educational Institutions, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu, 638183</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will endeavor to resolve any complaints or disputes about our privacy practices in a timely and fair manner.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
