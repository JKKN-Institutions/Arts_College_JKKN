import type { Metadata } from "next";
import React from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Eye, Target, CheckCircle2 } from "lucide-react";

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
    <main className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "Vision & Mission", url: "https://cas.jkkn.ac.in/iqac/vision-mission" },
      ]} />

      {/* Page Header Banner */}
      <div className="bg-[#0b6d41] py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Vision &amp; Mission
          </h1>
          <div className="mt-3 flex items-center gap-2 text-white/70 text-sm">
            <span>IQAC</span>
            <span>›</span>
            <span className="text-[#ffde59]">Vision &amp; Mission</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-8">

        {/* Vision Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-[#0b6d41] px-6 py-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Vision
              </h2>
            </div>
            {/* Card Body */}
            <div className="px-6 py-8 border-l-4 border-[#ffde59]">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The IQAC envisions a culture of excellence, innovation, and continuous
                improvement that enhances the quality of teaching and learning, research,
                and community engagement, and that fosters a culture of academic and
                research integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-[#0b6d41] px-6 py-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Mission
              </h2>
            </div>
            {/* Card Body */}
            <div className="px-6 py-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                The mission is to facilitate the development and implementation of quality
                assurance mechanisms that promote excellence and continuous improvement in
                all aspects of institutional functioning. The IQAC works towards achieving
                this mission through:
              </p>

              {/* Mission Points List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Developing and implementing policies, programs, and initiatives that
                    promote quality enhancement and continuous improvement.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Creating a culture of academic and research integrity that values
                    honesty, integrity, and ethical conduct.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Promoting interdisciplinary collaboration and innovative approaches
                    to teaching and learning.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Developing partnerships with industries, businesses, and other
                    organizations to enhance the employability and career readiness of
                    students.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Engaging with the community and addressing societal issues and
                    challenges through research, innovation, and community engagement.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                  <div className="w-7 h-7 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Facilitating the preparation and submission of quality assurance
                    reports to regulatory bodies such as NAAC, NIRF, ARIA, etc.,
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
