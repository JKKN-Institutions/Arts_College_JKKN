import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sports & Recreation",
  description: "Sports facilities and athletics infrastructure at JKKN College of Arts and Science. Indoor and outdoor sports near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/facilities/sports-club" },
  openGraph: {
    title: "Sports & Recreation",
    description: "Sports facilities and athletics infrastructure at JKKN College of Arts and Science. Indoor and outdoor sports near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/facilities/sports-club",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function SportsClubPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Sports & Club", url: "https://cas.jkkn.ac.in/facilities/sports-club" },
      ]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-2">
            Sports Club
          </h1>
          <div className="w-16 h-1 bg-[#ffde59]"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/sports-1.avif"
              alt="JKKN Arts and Science College sports facilities"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/sports-2.avif"
              alt="JKKN Arts and Science College sports ground"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/sports-3.avif"
              alt="JKKN Arts and Science College sports activities"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Hero Intro */}
        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed mb-8">
          JKKN College of Arts and Science has two outdoor grounds, an indoor stadium and a three-floor gymnasium on its 15-acre campus at Komarapalayam. The details below come from the NAAC records of the college.
        </p>

        {/* Feature Cards */}
        <div className="space-y-6 mb-8">
          {/* Outdoor grounds */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Outdoor Grounds:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              Ground I (6,300 sq m, 106 m × 60 m) and Ground II (4,700 sq m, 76 m × 62 m) are used for volleyball, basketball on a concrete court with flood lighting, tennis, handball, kabaddi, a 200-metre track, and field events such as long jump, high jump, shot put and discus throw.
            </p>
          </div>

          {/* Indoor stadium and games */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Indoor Stadium and Games:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              An indoor stadium of 1,069 sq m (16.75 m high) was built with a UGC grant. Indoor games include carrom, chess and table tennis.
            </p>
          </div>

          {/* Gymnasium */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Gymnasium:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              A 655 sq m gymnasium on three floors has fitness and wellness equipment, weight-training facilities and dumbbells, with separate gym facilities for boys and girls.
            </p>
          </div>

          {/* Coaching */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Coaching:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              Students train under the physical directress of the college and specialised coaches, and are given the sports equipment for the games they play.
            </p>
          </div>

          {/* Tournaments */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Tournaments and Sports Meet:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              Students take part in inter-collegiate, district, state and national-level tournaments, and an intramural sports meet is held every year. The college hosted the Periyar University inter-collegiate basketball tournament in 2013-14, 2014-15 and 2016-17.
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
          Source: NAAC <a href="/documents/iqac/ssr/cycle-1-2013-2018.pdf" className="text-brand-green underline">Self Study Report, cycle 1 (2013-2018)</a>, criterion 4.1.2, and AQAR <a href="/documents/iqac/aqar/aqar-2019-2020.pdf" className="text-brand-green underline">2019-20</a> and <a href="/documents/iqac/aqar/aqar-2022-2023.pdf" className="text-brand-green underline">2022-23</a>.
        </p>
      </div>
    </div>
  );
}
