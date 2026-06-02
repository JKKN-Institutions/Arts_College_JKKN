import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";

export const metadata: Metadata = {
  title: "Careers — Job Openings at JKKN Institutions",
  description:
    "Explore current job openings at JKKN Institutions. Apply for faculty, staff, and administrative positions across our colleges.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Careers", url: "https://cas.jkkn.ac.in/careers" },
        ]}
      />
      <WebPageSchema
        name="Careers — JKKN Institutions"
        description="Explore current job openings at JKKN Institutions."
        url="https://cas.jkkn.ac.in/careers"
      />

      <main className="min-h-screen bg-[#fbfbee]">
        {/* Page Header */}
        <section className="bg-[#0b6d41] text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Careers</h1>
            <p className="text-white/80 text-base md:text-lg">
              Join the JKKN family — explore current openings across all our institutions.
            </p>
          </div>
        </section>

        {/* Job Listings Embed */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <iframe
            src="https://jobs.cvviz.com/jkkn_institutions"
            title="JKKN Institutions Job Openings"
            className="w-full rounded-xl border border-gray-200 shadow-sm"
            style={{ minHeight: "800px", height: "80vh" }}
            loading="lazy"
            allowFullScreen
          />
        </section>
      </main>
    </>
  );
}
