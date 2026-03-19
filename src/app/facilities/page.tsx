import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Campus Facilities",
  description:
    "Explore world-class campus facilities at JKKN College of Arts and Science — auditorium, labs, smart classrooms, hostel, sports, library, transport, and more.",
  alternates: { canonical: "https://cas.jkkn.ac.in/facilities" },
  openGraph: {
    title: "Campus Facilities | JKKN Arts & Science",
    description:
      "Explore world-class campus facilities at JKKN College of Arts and Science — auditorium, labs, smart classrooms, hostel, sports, library, transport, and more.",
    url: "https://cas.jkkn.ac.in/facilities",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const cards = [
  {
    href: "/facilities/auditorium",
    label: "Auditorium",
    description: "Multi-purpose auditorium for events and seminars",
  },
  {
    href: "/facilities/labs",
    label: "Laboratories",
    description:
      "Well-equipped science, computer, and research labs",
  },
  {
    href: "/facilities/classroom",
    label: "Smart Classrooms",
    description:
      "Technology-enabled learning spaces with modern amenities",
  },
  {
    href: "/facilities/seminar-hall",
    label: "Seminar Hall",
    description:
      "Dedicated hall for workshops and academic discussions",
  },
  {
    href: "/facilities/hostel",
    label: "Hostel",
    description:
      "Separate hostels for men and women with modern amenities",
  },
  {
    href: "/facilities/sports-club",
    label: "Sports & Recreation",
    description: "Indoor and outdoor sports facilities",
  },
  {
    href: "/facilities/food-court",
    label: "Food Court",
    description:
      "Hygienic multi-cuisine dining options for students",
  },
  {
    href: "/facilities/transport",
    label: "Transport",
    description:
      "Bus facilities connecting major towns and cities",
  },
  {
    href: "/facilities/bank-post-office",
    label: "Bank & Post Office",
    description: "On-campus banking and postal services",
  },
  {
    href: "/library",
    label: "Library",
    description:
      "Digital library with 5,000+ books and e-resources",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Campus Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Infrastructure
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            Campus Facilities
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            JKKN College of Arts and Science provides state-of-the-art
            facilities to ensure a holistic learning environment — from
            modern laboratories and smart classrooms to comfortable hostels
            and recreational spaces.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between group"
            >
              <div>
                <h2 className="text-lg font-semibold text-[#0b6d41] mb-2 group-hover:text-[#004d28] transition-colors">
                  {card.label}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-[#0b6d41] font-medium text-sm">
                <span>Explore</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
