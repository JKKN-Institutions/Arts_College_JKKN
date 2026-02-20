import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital Classroom | JKKN College of Arts and Science',
  description: 'Exceptional digital classroom facilities at JKKN Educational Institutions equipped with state-of-the-art technology, interactive whiteboards, and comfortable learning environments.',
};

export default function ClassroomPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          Digital class room
        </h1>

        {/* Classroom Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Classroom.png"
              alt="JKKN Arts and Science College classroom"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Classroom - 1.png"
              alt="JKKN Arts and Science College classroom interior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/classroom.avif"
              alt="JKKN Arts and Science College classroom view"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <p className="text-justify">
            At JKKN Educational Institutions, we prioritize the importance of exceptional classroom facilities for an excellent learning experience. Our classrooms are specifically designed to create an engaging and comfortable environment where students can immerse themselves in their studies and develop their skills.
          </p>

          <p className="text-justify">
            Our facilities are equipped with state-of-the-art technology, including high-speed internet, multimedia projectors, and interactive whiteboards, to provide students with access to a vast amount of information. We also offer comfortable seating arrangements to ensure that students can focus on their studies without any discomfort or distractions.
          </p>

          <p className="text-justify">
            Beyond functionality, we believe that the aesthetics of the learning environment are vital in inspiring creativity and nurturing positive attitudes towards learning. Thus, our classrooms are thoughtfully decorated with vibrant colors and motivational posters to create a welcoming atmosphere that fosters a love of learning.
          </p>

          <p className="text-justify">
            We understand that each student has unique learning needs, and that's why we offer various classroom settings to cater to diverse learning styles. Our classrooms range from traditional lecture-style setups to collaborative workspaces, providing students with a comfortable space that suits their learning preferences.
          </p>

          <p className="text-justify">
            Furthermore, we maintain and clean our classrooms regularly to ensure that students can concentrate on their studies without any distractions. We are committed to providing a hygienic learning environment that promotes academic success and personal growth.
          </p>

          <p className="text-justify">
            In summary, at JKKN Educational Institutions, we are dedicated to providing our students with exceptional classroom facilities that inspire learning and growth. We believe that a great learning environment is crucial for academic success, and our classrooms are designed to provide just that.
          </p>
        </div>
      </div>
    </div>
  );
}
