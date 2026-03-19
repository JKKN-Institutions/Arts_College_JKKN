import { Metadata } from 'next';
import Image from 'next/image';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Transport Facilities',
  description: 'College bus transport covering Erode, Salem, Namakkal and surrounding areas. Safe daily commute to JKKN College of Arts and Science campus.',
  alternates: { canonical: 'https://cas.jkkn.ac.in/facilities/transport' },
  openGraph: {
    title: 'Transport Facilities',
    description: 'College bus transport covering Erode, Salem, Namakkal and surrounding areas. Safe daily commute to JKKN College of Arts and Science campus.',
    url: 'https://cas.jkkn.ac.in/facilities/transport',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

export default function TransportPage() {
  const features = [
    {
      number: 1,
      title: 'Well-Maintained Buses',
      description: 'The transport facility at JKKN Educational Institutions is equipped with a well-maintained fleet of buses. These buses are regularly serviced and inspected to ensure they meet the highest standards of safety. The buses are equipped with modern amenities like air-conditioning, comfortable seating, and GPS tracking.',
    },
    {
      number: 2,
      title: 'Trained Drivers',
      description: 'Drivers who operate the buses at JKKN Educational Institutions are highly trained and experienced. They have a good understanding of the local routes and traffic conditions, which helps them provide a safe and efficient transportation service. Additionally, they undergo regular training to ensure they are always up-to-date.',
    },
    {
      number: 3,
      title: 'Affordable Fees',
      description: 'The transport facility at JKKN Educational Institutions is available to all students and faculty members at an affordable fee. The fee is calculated based on the distance of the student\'s residence from the campus, ensuring that the transportation cost is reasonable for everyone.',
    },
    {
      number: 4,
      title: 'Safe and Secure',
      description: 'The safety and security of the passengers are of utmost importance at JKKN Educational Institutions. The buses are equipped with CCTV cameras, and there are female attendants on board to ensure the safety of female passengers. Additionally, the transport facility operates within a strict set of rules and regulations, ensuring that the passengers are always safe.',
    },
    {
      number: 5,
      title: 'Timely Service',
      description: 'The transport facility at JKKN Educational Institutions operates on a strict schedule, ensuring that the buses arrive and depart from the campus on time. This allows the students and faculty members to plan their day accordingly, without worrying about delays or missed buses.',
    },
    {
      number: 6,
      title: 'Accessibility',
      description: 'The transport facility at JKKN Educational Institutions is accessible to all students, regardless of their physical abilities. The buses are equipped with wheelchair ramps and other accessibility features, making it easy for students with disabilities to use the service.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Transport", url: "https://cas.jkkn.ac.in/facilities/transport" },
      ]} />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-8 md:mb-12">
          TRANSPORT
        </h1>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/facilities/Transport.png"
              alt="JKKN College transport buses"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/facilities/transport2.png"
              alt="JKKN College transport fleet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/facilities/transport3.png"
              alt="JKKN College transport service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Introductory Paragraph */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify mb-8 md:mb-12">
          Transportation is an essential aspect of any educational institution. It provides students and faculty members with a convenient way to reach the campus and enhances the overall educational experience. JKKN Educational Institutions understands the importance of providing a safe and reliable means of travel for students and staff to and from the campus facilities. Here are some of the best features of the transport facility at JKKN Educational Institutions.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">
          {features.map((feature) => (
            <div key={feature.number} className="flex gap-4">
              {/* Numbered Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                  {feature.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-brand-green mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify mt-8 md:mt-12">
          The transport facility at JKKN Educational Institutions is well-equipped to provide safe, reliable, and affordable transportation to all its students and faculty members. The institution has taken significant steps to ensure that the bus transport facility is accessible, secure, and comfortable for everyone.
        </p>
      </div>
    </div>
  );
}
