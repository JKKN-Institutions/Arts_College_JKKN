import type { Metadata } from "next";
import React from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IQAC Vision & Mission",
  description:
    "IQAC vision and mission for quality enhancement at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/iqac/vision-mission",
  },
  openGraph: {
    title: "IQAC Vision & Mission | JKKN Arts & Science",
    description:
      "IQAC vision and mission for quality enhancement at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/iqac/vision-mission",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function IQACVisionMission() {
  return (
    <main className="min-h-screen bg-brand-cream py-12 px-4">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "Vision & Mission", url: "https://cas.jkkn.ac.in/iqac/vision-mission" },
      ]} />
      <div className="container mx-auto max-w-6xl">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-8">
          Vision & Mission
        </h1>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-green mb-4">
            Vision:
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The IQAC envisions a culture of excellence, innovation, and continuous
            improvement that enhances the quality of teaching and learning, research,
            and community engagement, and that fosters a culture of academic and
            research integrity.
          </p>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-green mb-4">
            Mission:
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            The mission is to facilitate the development and implementation of quality
            assurance mechanisms that promote excellence and continuous improvement in
            all aspects of institutional functioning. The IQAC works towards achieving
            this mission through:
          </p>

          {/* Mission Points List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Developing and implementing policies, programs, and initiatives that
                promote quality enhancement and continuous improvement.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Creating a culture of academic and research integrity that values
                honesty, integrity, and ethical conduct.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Promoting interdisciplinary collaboration and innovative approaches
                to teaching and learning.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Developing partnerships with industries, businesses, and other
                organizations to enhance the employability and career readiness of
                students.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Engaging with the community and addressing societal issues and
                challenges through research, innovation, and community engagement.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Facilitating the preparation and submission of quality assurance
                reports to regulatory bodies such as NAAC, NIRF, ARIA, etc.,
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
