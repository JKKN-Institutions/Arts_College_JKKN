import type { Metadata } from 'next';
import Image from 'next/image';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Laboratories',
  description: 'Well-equipped science and computer laboratories at JKKN College of Arts and Science for practical learning and research near Erode, Tamil Nadu.',
  alternates: { canonical: 'https://cas.jkkn.ac.in/facilities/labs' },
  openGraph: {
    title: 'Laboratories',
    description: 'Well-equipped science and computer laboratories at JKKN College of Arts and Science for practical learning and research near Erode, Tamil Nadu.',
    url: 'https://cas.jkkn.ac.in/facilities/labs',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Labs", url: "https://cas.jkkn.ac.in/facilities/labs" },
      ]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Labs
        </h1>

        {/* Lab Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts lab.png"
              alt="JKKN Arts and Science College laboratory facilities"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts lab - 1.png"
              alt="JKKN Arts and Science College laboratory equipment and workspace"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts lab - 2.png"
              alt="JKKN Arts and Science College lab with students conducting experiments"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <p className="text-justify">
            When it comes to quality education, the availability of advanced laboratory facilities is essential. At JKKN Educational Institutions, we understand the importance of providing our students with top-of-the-line laboratory facilities that cater to their academic and research needs. Our state-of-the-art laboratory facilities are designed to meet the requirements of our students and provide them with the best learning experience.
          </p>

          <p className="text-justify">
            We have various laboratory facilities that cover various topics, including physics, chemistry, biology, and engineering. Our laboratories are equipped with the latest technology and equipment, allowing our students to conduct experiments and research in a safe and controlled environment. Our facilities are constantly updated to keep up with the latest developments in the field and ensure that our students have access to the most advanced tools and techniques available.
          </p>

          <p className="text-justify">
            Our laboratory facilities are managed by a team of experienced professionals who are dedicated to providing our students with the support they need. They work closely with our faculty to ensure that the laboratory facilities are fully utilized to enhance the learning experience of our students. Our team of professionals is always available to assist our students with any questions or concerns they may have.
          </p>
        </div>
      </div>
    </div>
  );
}
