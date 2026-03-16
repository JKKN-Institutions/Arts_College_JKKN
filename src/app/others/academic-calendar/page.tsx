import type { Metadata } from "next";
import React from 'react';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Academic Calendar | JKKN College of Arts and Science",
  description:
    "Academic calendar with important dates, exam schedules and events at JKKN College of Arts and Science (Autonomous) near Erode, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/others/academic-calendar",
  },
  openGraph: {
    title: "Academic Calendar | JKKN College of Arts and Science",
    description:
      "Academic calendar with important dates, exam schedules and events at JKKN College of Arts and Science (Autonomous) near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/others/academic-calendar",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function AcademicCalendarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Academic Calendar", url: "https://cas.jkkn.ac.in/others/academic-calendar" },
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">ACADEMIC CALENDAR</h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-full" style={{ minHeight: '600px' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_979549cd61a738a682146393ae5d3f686fb5c7508bf1ef755dca85404b880533%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Academic Calendar"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
