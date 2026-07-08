import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Student Testimonials | JKKN College of Arts and Science",
  description:
    "Hear from students of JKKN College of Arts and Science (Autonomous) about their transformative experiences — academics, placements, and campus life.",
  alternates: { canonical: "https://cas.jkkn.ac.in/testimonials" },
  openGraph: {
    title: "Student Testimonials | JKKN Arts & Science",
    description:
      "Real stories from students of JKKN College of Arts and Science — academics, placements, and campus life.",
    url: "https://cas.jkkn.ac.in/testimonials",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

const testimonials = [
  {
    initials: "SK",
    name: "Santhosh Kumar R",
    programme: "B.Sc Computer Science",
    batch: "Batch of 2024",
    quote:
      "The faculty at JKKN College are exceptional. They not only teach but also mentor us, helping us develop both academically and professionally. The hands-on projects prepared me well for my career.",
    accentBg: "bg-[#0b6d41]",
    cardGradient: "from-yellow-50 to-white",
    cardBorder: "border-yellow-100",
  },
  {
    initials: "DM",
    name: "Deepika M",
    programme: "B.Com Commerce",
    batch: "Batch of 2023",
    quote:
      "JKKN College provided me with excellent opportunities for internships and industry exposure. The placement support was outstanding, and I secured a great job even before graduation.",
    accentBg: "bg-[#0b6d41]",
    cardGradient: "from-green-50 to-white",
    cardBorder: "border-green-100",
  },
  {
    initials: "KP",
    name: "Karthikeyan P",
    programme: "BCA Computer Applications",
    batch: "Batch of 2024",
    quote:
      "The infrastructure and facilities at JKKN are world-class. The computer labs, library, and sports facilities made my college experience memorable and enriching.",
    accentBg: "bg-[#ffde59]",
    cardGradient: "from-yellow-50 to-white",
    cardBorder: "border-purple-100",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Testimonials", url: "https://cas.jkkn.ac.in/testimonials" },
        ]}
      />
      <div className="min-h-screen bg-[#fbfbee]">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0b6d41] via-[#0e8a52] to-[#1aab68] py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffde59] text-sm font-semibold uppercase tracking-widest mb-3">
              Learner Stories
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              What Our Learners Say
            </h1>
            <div className="w-16 h-1 bg-[#ffde59] mx-auto mb-4"></div>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Hear from our learners about their transformative experiences at JKKN College of Arts and Science.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`bg-gradient-to-br ${t.cardGradient} p-8 rounded-2xl border ${t.cardBorder} shadow-lg flex flex-col`}
              >
                <div className="flex items-center mb-5">
                  <div
                    className={`${t.accentBg} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mr-4`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-600">{t.programme}, {t.batch}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex text-[#ffde59] text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
