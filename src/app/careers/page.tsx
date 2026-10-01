import type { ReactNode } from "react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import JobCard from "@/components/careers/JobCard";
import { getCollegeJobs } from "@/lib/careers/api";

export const revalidate = 300;

const PAGE_URL = "https://cas.jkkn.ac.in/careers";
const PAGE_DESCRIPTION =
  "Current job openings at JKKN College of Arts and Science, Komarapalayam, for senior learners and team members. View details and apply online.";

export const metadata: Metadata = {
  title: "Careers & Job Openings",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Careers & Job Openings | JKKN College of Arts and Science",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
};

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand-green/20 bg-white p-6 text-center text-[#002309]">
      {children}
    </div>
  );
}

export default async function CareersPage() {
  const { jobs, available } = await getCollegeJobs();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Careers", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="Careers & Job Openings — JKKN College of Arts and Science"
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
      />

      <div className="min-h-screen bg-brand-cream">
        {/* Page Header */}
        <section className="bg-brand-green text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Careers</h1>
            <div className="w-20 h-1 bg-brand-yellow mb-4 rounded-full" />
            <p className="text-white/80 text-base md:text-lg">
              Join JKKN College of Arts and Science — explore our current openings and apply online.
            </p>
          </div>
        </section>

        {/* Current Openings — live from MyJKKN */}
        <section aria-labelledby="openings-heading" className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="openings-heading" className="text-2xl md:text-3xl font-bold text-brand-green">
              Current Openings
            </h2>
            {available && jobs.length > 0 && (
              <p className="text-sm font-medium text-[#002309]/70">
                {jobs.length} open {jobs.length === 1 ? "role" : "roles"}
              </p>
            )}
          </div>

          {!available ? (
            <Notice>
              We couldn&apos;t load the current openings right now. Please try again shortly.
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice>
              There are no open positions at the moment. Please check back soon.
            </Notice>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
