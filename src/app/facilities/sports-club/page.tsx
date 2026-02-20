import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sports Club | JKKN College of Arts and Science",
  description: "Discover our world-class Sports Club facility with expert instructors, cutting-edge equipment, and a vibrant community. Join JKKN Educational Institutions for the ultimate fitness and sporting experience.",
};

export default function SportsClubPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
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
              src="/images/facilities/JKKN Arts Sport.png"
              alt="JKKN Arts and Science College sports facilities"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Sport - 1.png"
              alt="JKKN Arts and Science College sports ground"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/sports3.png"
              alt="JKKN Arts and Science College sports activities"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Hero Intro */}
        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed mb-8">
          where fitness and fun come together! Our top-notch facility is designed to cater to all your sporting and fitness needs. Here's why our Sports Clubs stands out from the rest:
        </p>

        {/* Feature Cards */}
        <div className="space-y-6 mb-8">
          {/* Feature 1: World-class Facilities */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                World-class Facilities:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              Our facility boasts world-class amenities including a fully equipped gym, swimming pool, basketball court, tennis court, football field, and more. Whether you're looking to pump some iron, practice your free throws, or perfect your backstroke, we've got you covered.
            </p>
          </div>

          {/* Feature 2: Expert Instructors */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Expert Instructors:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              Our team of expert instructors is passionate about helping you achieve your fitness goals. They're certified, experienced, and always ready to provide guidance and support. They'll motivate you, push past your limits and achieve your potential.
            </p>
          </div>

          {/* Feature 3: Cutting-edge Equipment */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Cutting-edge Equipment:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              We're proud to offer state-of-the-art equipment that's regularly maintained and updated. Our gym is packed with the latest cardio and weight training machines, and our outdoor sports facilities are built to the highest standards. You won't find better equipment anywhere else!
            </p>
          </div>

          {/* Feature 4: Free Memberships */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Free Memberships:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              We believe that everyone should have access to top-quality sports facilities, which is why we offer memberships for students, staff, and members of the community. Our flexible membership options make it easy for you to find the perfect package that suits your needs.
            </p>
          </div>

          {/* Feature 5: Community Spirit */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-brand-green text-xl font-bold">•</span>
              <h3 className="text-base md:text-lg font-bold text-brand-green">
                Community Spirit:
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
              We believe in building a strong community through sports and fitness. Our sports club is a place where you'll make friends, and have fun. We regularly organize events and competitions that bring people together and foster healthy competition and camaraderie.
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
          So why wait? Join the Sports Club Facility at JKKN Educational Institutions and experience the ultimate fitness and sporting experience. Whether you're a beginner or a seasoned pro, we've got something for everyone. Come and join our vibrant community of sports enthusiasts today!
        </p>
      </div>
    </div>
  );
}
