import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JKKN College of Arts and Science — our history, trust, vision, mission, and leadership driving academic excellence in Komarapalayam, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/about" },
  openGraph: {
    title: "About Us | JKKN Arts & Science",
    description:
      "Learn about JKKN College of Arts and Science — our history, trust, vision, mission, and leadership driving academic excellence in Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/about",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const cards = [
  {
    href: "/about/our-institution",
    label: "Our Institution",
    description:
      "Learn about our rich history, values, and commitment to excellence",
  },
  {
    href: "/about/our-trust",
    label: "Our Trust",
    description:
      "The foundation that supports our educational mission since 1952",
  },
  {
    href: "/about/vision-mission",
    label: "Vision & Mission",
    description:
      "Our guiding principles and goals for academic excellence",
  },
  {
    href: "/about/our-management",
    label: "Our Management",
    description:
      "Meet our leadership team driving innovation in education",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fbfbee] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "About Us", url: "https://cas.jkkn.ac.in/about" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6d41] mb-2">
            Who We Are
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
            About Us
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mb-4" />
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Discover the story, values, leadership, and vision behind JKKN
            College of Arts and Science — an institution dedicated to
            transforming lives through quality education since 1974.
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
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
