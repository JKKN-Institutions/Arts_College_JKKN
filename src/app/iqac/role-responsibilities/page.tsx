import type { Metadata } from "next";
import React from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IQAC Roles & Responsibilities | JKKN College of Arts and Science",
  description:
    "IQAC roles and responsibilities for institutional quality at JKKN College of Arts and Science (Autonomous), Komarapalayam.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/iqac/role-responsibilities",
  },
  openGraph: {
    title: "IQAC Roles & Responsibilities | JKKN College of Arts and Science",
    description:
      "IQAC roles and responsibilities for institutional quality at JKKN College of Arts and Science (Autonomous), Komarapalayam.",
    url: "https://cas.jkkn.ac.in/iqac/role-responsibilities",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function IQACRoleResponsibilities() {
  return (
    <main className="min-h-screen bg-brand-cream py-12 px-4">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "IQAC", url: "https://cas.jkkn.ac.in/iqac" },
        { name: "Role & Responsibilities", url: "https://cas.jkkn.ac.in/iqac/role-responsibilities" },
      ]} />
      <div className="container mx-auto max-w-6xl">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-8">
          Role/ Responsibilities
        </h1>

        {/* Responsibilities Section - Ordered List with 10 items */}
        <section className="mb-12">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">1.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To ensure institutionalization of quality assurance through established systems
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">2.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To oversee the activities carried out by the Departments in conjunction with the vision and mission of the Institution
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">3.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To administer policies to govern the functions of the Institution for the overall development
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">4.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To review the process of the Institution through academic, administrative and financial audits
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">5.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To encourage the students to participate in co-curricular and extra-curricular activities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">6.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To sensitize young minds to maintain a plastic-free environment
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">7.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To tap the inherent skills of the pupils through inter and intra-Department/Collegiate competitions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">8.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To invite external experts to bridge the void between the potential of the students with the ground reality
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">9.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To enhance the level of under-privileged people by means of reciprocal activities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">10.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                To kindle and recognize the spirit and activities of sports
              </span>
            </li>
          </ol>
        </section>

        {/* IQAC Panel Section */}
        <section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-green mb-6">
            IQAC Panel
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">1.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Mrs. C. Seeranganayaki, Associate Professor of Commerce, Coordinator
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">2.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Mrs. K. Veena, Assistant Professor of Computer Science, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">3.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Dr. S.Sumathi, Assistant Professor of English, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">4.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Dr. S. V. Ramesh, Assistant Professor of Commerce, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">5.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Dr. K. Kalaiselvi, Assistant Professor of Chemistry, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">6.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Mrs. G. Malaiyammal, Assistant Professor of Commerce, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">7.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Mr. S. Balaji, Assistant Professor of Computer Science, Member
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">8.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Local Nominee : Suresh Baskaran, MD&amp;Centre Head, CSC Computer Education, Komarapalayam
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">9.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Industrialist: Mr.S.K.P. Murugan,
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">10.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Alumna: Mrs.T.Radhiga,Principal JKKN Matriculation School, Komarapalayam,
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">11.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Student Nominee: Ms.V.Nila- III B.A. English (2019-2022)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-green font-bold text-lg mr-3 min-w-[2rem]">12.</span>
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                Ms. S. Arularasi -II B.Sc. Computer Science (2019-2022)
              </span>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
