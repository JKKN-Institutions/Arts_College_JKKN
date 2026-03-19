import type { Metadata } from 'next';
import Image from 'next/image';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Seminar Hall',
  description: 'Modern seminar halls for academic presentations and workshops at JKKN College of Arts and Science, Komarapalayam.',
  alternates: { canonical: 'https://cas.jkkn.ac.in/facilities/seminar-hall' },
  openGraph: {
    title: 'Seminar Hall',
    description: 'Modern seminar halls for academic presentations and workshops at JKKN College of Arts and Science, Komarapalayam.',
    url: 'https://cas.jkkn.ac.in/facilities/seminar-hall',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

export default function SeminarHallPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Seminar Hall", url: "https://cas.jkkn.ac.in/facilities/seminar-hall" },
      ]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Seminar Hall
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Seminar Hall.png"
              alt="JKKN Arts and Science College seminar hall"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Seminar Hall - 1.png"
              alt="JKKN Arts and Science College seminar hall interior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/Seminar Hall.avif"
              alt="JKKN Arts and Science College seminar hall view"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <p className="text-justify">
            With a good seating capacity, our seminar hall is equipped with modern amenities that provide a comfortable and conducive learning environment for all attendees. The hall is fully air-conditioned and features a stage, projector, sound system, and lighting equipment, ensuring that every speaker's voice is heard loud and clear.
          </p>

          <p className="text-justify">
            Our seminar hall also boasts a range of convenient amenities that make event planning a breeze. From high-speed Wi-Fi to ample parking facilities, we've got you covered. Our team of skilled technicians and support staff are on hand to ensure that your event runs smoothly and efficiently.
          </p>

          <div className="mt-8">
            <ul className="list-disc list-inside space-y-2">
              <li>Spacious and well-lit</li>
              <li>Audio-visual equipment</li>
              <li>Internet connectivity</li>
              <li>Comfortable seating</li>
              <li>Air conditioning</li>
              <li>Hygiene standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
