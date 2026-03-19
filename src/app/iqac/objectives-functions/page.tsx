import type { Metadata } from "next";
import React from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IQAC Objectives & Functions",
  description:
    "Internal Quality Assurance Cell objectives and functions at JKKN College of Arts and Science (Autonomous). Quality assurance framework and initiatives.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/iqac/objectives-functions",
  },
  openGraph: {
    title: "IQAC Objectives & Functions | JKKN Arts & Science",
    description:
      "Internal Quality Assurance Cell objectives and functions at JKKN College of Arts and Science (Autonomous). Quality assurance framework and initiatives.",
    url: "https://cas.jkkn.ac.in/iqac/objectives-functions",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function IQACObjectivesFunctions() {
  return (
    <main className="min-h-screen bg-brand-cream py-12 px-4">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "Objectives & Functions", url: "https://cas.jkkn.ac.in/iqac/objectives-functions" },
      ]} />
      <div className="container mx-auto max-w-6xl">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-8">
          Objectives/Functions
        </h1>

        {/* Introduction Paragraph */}
        <section className="mb-12">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            IQAC evolves plan of action for academic and administrative excellence and implements through the activities of Departments and various Associations. It defines and promotes quality parameters for effective teaching-learning, research, students' support and progression, leadership, and management, while holding up the Institutional and cultural values.
          </p>
        </section>

        {/* Functions Section */}
        <section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-green mb-6">
            IQAC Functions – As per UGC Guidelines
          </h2>

          {/* Functions List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Development and application of quality benchmarks/parameters for the various academic and administrative activities of the Colleges
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Facilitating the creation of a learner-centric environment conducive for quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching-learning process
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Arrangement for feedback responses from students, parents and other stakeholders on quality-related institutional processes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Dissemination of information on the various quality parameters of higher education. Organization of inter and intra Institutional Workshops, Seminars on quality related themes and promotion of quality circles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Documentation of the various programmes/activities of the College, leading to quality improvement
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
