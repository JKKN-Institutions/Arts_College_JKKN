import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  GraduationCap,
  FileText,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Calendar,
  ArrowRight,
  Award,
  HelpCircle,
} from "lucide-react";

import {
  getAllAdmissionSlugs,
  getProgrammeBySlug,
} from "@/data/programme-metadata";
import { getAdmissionContent } from "@/lib/admission-defaults";
import { siteConfig } from "@/lib/site-config";

import { CourseSchema } from "@/components/seo/CourseSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

import { CourseHero } from "@/components/admissions/CourseHero";
import { AdmissionProcess } from "@/components/admissions/AdmissionProcess";
import { DocumentsRequired } from "@/components/admissions/DocumentsRequired";
import { CourseFeeCard } from "@/components/admissions/CourseFeeCard";
import { SeatIntakeCard } from "@/components/admissions/SeatIntakeCard";
import { HostelTransportCard } from "@/components/admissions/HostelTransportCard";
import { RelatedCourses } from "@/components/admissions/RelatedCourses";
import { ContactAdmissions } from "@/components/admissions/ContactAdmissions";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllAdmissionSlugs().map((slug) => ({ course: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const match = getProgrammeBySlug(course);
  if (!match) return {};

  const { info } = match;
  const url = `https://${siteConfig.domain}/admissions/${info.slug}`;
  const title = `${info.name} Admission 2026-27 | JKKN College of Arts & Science`;
  const description = `Apply for ${info.fullName} (${info.category}) at JKKN College of Arts and Science (Autonomous). ${info.duration} programme — eligibility, fees, seats, dates and admission process. ${info.description.slice(0, 80)}`;

  return {
    title,
    description,
    keywords: [
      ...info.keywords,
      `${info.name} admission 2026`,
      `${info.name} apply now`,
      "admission near Erode",
      "JKKN admission Tamil Nadu",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function CourseAdmissionPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const match = getProgrammeBySlug(course);
  if (!match) notFound();

  const { path, info } = match;
  const content = getAdmissionContent(path, info);
  const url = `https://${siteConfig.domain}/admissions/${info.slug}`;

  return (
    <>
      <CourseSchema
        name={info.fullName}
        description={info.description}
        duration={info.duration}
        educationalLevel={info.level}
        category={info.category}
        url={`/admissions/${info.slug}`}
      />
      <FAQSchema faqs={content.faq} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `https://${siteConfig.domain}` },
          {
            name: "Admissions",
            url: `https://${siteConfig.domain}/admissions`,
          },
          {
            name: "Course-wise Admissions",
            url: `https://${siteConfig.domain}/admissions/courses`,
          },
          { name: info.name, url },
        ]}
      />

      <main className="min-h-screen bg-white">
        {/* 1. Hero */}
        <CourseHero programme={info} />

        {/* 2. Quick Info Bar */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Duration",
                  value: info.duration,
                  icon: Calendar,
                },
                {
                  label: "Level",
                  value: info.level,
                  icon: GraduationCap,
                },
                {
                  label: "Mode",
                  value: "Full-Time",
                  icon: BookOpen,
                },
                {
                  label: info.category === "Aided" ? "Annual Fee" : "MQ Fee",
                  value:
                    info.category === "Aided"
                      ? "Govt Norms"
                      : content.feesMQ
                      ? `₹${content.feesMQ.toLocaleString("en-IN")}`
                      : "TBD",
                  icon: Award,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#fbfbee] rounded-2xl p-6 text-center border border-gray-100"
                >
                  <item.icon className="w-8 h-8 text-[#0b6d41] mx-auto mb-3" />
                  <div className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Programme Overview */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                About the Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Programme Overview
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {info.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {content.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Eligibility & Admission Criteria */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Admissions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eligibility & Admission Criteria
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Requirements for joining {info.name}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#fbfbee] rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-[#0b6d41] rounded-xl flex items-center justify-center mb-5">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                  Academic Qualification
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {content.eligibilityCriteria.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0b6d41] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fbfbee] rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-[#0b6d41] rounded-xl flex items-center justify-center mb-5">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                  Recommended Background
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {content.recommendedBackground.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0b6d41] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fbfbee] rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-[#0b6d41] rounded-xl flex items-center justify-center mb-5">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b6d41] mb-4">
                  Documents Required
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {content.documents.slice(0, 8).map((doc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0b6d41] mt-1">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Documents Required (full list) */}
        <DocumentsRequired documents={content.documents} background="cream" />

        {/* 6. Fee Structure */}
        <CourseFeeCard
          programmeName={info.name}
          feesGQ={content.feesGQ}
          feesMQ={content.feesMQ}
          scholarshipNote={content.scholarshipNote}
          category={info.category}
        />

        {/* 6. Seat Intake */}
        <SeatIntakeCard
          intakeSeats={content.intakeSeats}
          programmeName={info.name}
          applicationDeadline={content.applicationDeadline}
        />

        {/* 7. Admission Process */}
        <AdmissionProcess
          background="white"
          intro={`Follow these 5 simple steps to secure your seat in ${info.name}`}
        />

        {/* 8. Hostel + Transport */}
        <HostelTransportCard />

        {/* 9. Curriculum Highlights */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Academic Structure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Curriculum Highlights
              </h2>
              <p className="text-lg text-gray-600">
                What you will study in {info.name}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {content.curriculumHighlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#0b6d41]/10 text-[#0b6d41] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-gray-800 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Career Opportunities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                Future Prospects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Career Opportunities
              </h2>
              <p className="text-lg text-gray-600">
                Career pathways after completing {info.name}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {content.careers.map((role) => (
                <div
                  key={role}
                  className="bg-[#fbfbee] rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Briefcase className="w-6 h-6 text-[#0b6d41] mb-2" />
                  <div className="font-semibold text-gray-900">{role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Important Dates Timeline */}
        <section className="py-16 md:py-20 bg-[#fbfbee]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <Calendar className="w-3.5 h-3.5" />
                Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Important Dates
              </h2>
              <p className="text-lg text-gray-600">
                2026-27 admission cycle calendar
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#0b6d41]/20 md:-translate-x-1/2" />
              <div className="space-y-6">
                {content.importantDates.map((item, i) => (
                  <div
                    key={i}
                    className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 md:items-center"
                  >
                    <div
                      className={`absolute left-0 md:left-1/2 w-8 h-8 bg-[#0b6d41] text-white rounded-full flex items-center justify-center text-sm font-bold md:-translate-x-1/2 z-10`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`bg-white rounded-xl p-5 border border-gray-100 ${
                        i % 2 === 0
                          ? "md:col-start-1 md:text-right md:mr-8"
                          : "md:col-start-2 md:ml-8"
                      }`}
                    >
                      <div className="font-semibold text-[#0b6d41] mb-1">
                        {item.label}
                      </div>
                      <div className="text-gray-700">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#0b6d41]/10 px-4 py-1.5 rounded-full text-sm font-semibold text-[#0b6d41] mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {content.faq.map((item, i) => (
                <details
                  key={i}
                  className="bg-[#fbfbee] rounded-xl border border-gray-200 group"
                >
                  <summary className="px-6 py-4 cursor-pointer text-base font-semibold text-gray-900 hover:text-[#0b6d41] transition list-none flex items-center justify-between">
                    {item.question}
                    <span className="text-[#0b6d41] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Apply Now CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b6d41] to-[#004d28] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Apply for {info.name}?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards your career. Apply online or visit our
              campus near Erode, Tamil Nadu.
            </p>
            <a
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
            >
              Apply Now for 2026-27 <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* 14. Related Courses */}
        <RelatedCourses currentPath={path} currentInfo={info} />

        {/* 15. Contact */}
        <ContactAdmissions
          heading={`Have questions about ${info.name}?`}
          intro="Get in touch with our admissions team for personalized guidance on eligibility, fees, and seat availability."
        />
      </main>
    </>
  );
}
