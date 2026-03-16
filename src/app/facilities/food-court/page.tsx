import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import FloatingChatButtons from '@/components/ui/FloatingChatButtons';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Food Court | JKKN College of Arts and Science',
  description: 'Hygienic food court and cafeteria at JKKN College of Arts and Science campus. Nutritious meals for students near Erode, Tamil Nadu.',
  alternates: { canonical: 'https://cas.jkkn.ac.in/facilities/food-court' },
  openGraph: {
    title: 'Food Court | JKKN College of Arts and Science',
    description: 'Hygienic food court and cafeteria at JKKN College of Arts and Science campus. Nutritious meals for students near Erode, Tamil Nadu.',
    url: 'https://cas.jkkn.ac.in/facilities/food-court',
    siteName: 'JKKN College of Arts and Science',
    type: 'website',
  },
};

const features = [
  'Diverse menu',
  'Quality ingredients',
  'Healthy options',
  'Affordable prices',
  'Hygiene and safety',
];

export default function FoodCourtPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Facilities", url: "https://cas.jkkn.ac.in/facilities" },
        { name: "Food Court", url: "https://cas.jkkn.ac.in/facilities/food-court" },
      ]} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          FOOD COURT
        </h1>

        {/* Image Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Food Court.png"
              alt="JKKN Arts and Science College food court"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Food Court - 1.png"
              alt="JKKN Arts and Science College food court dining area"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/facilities/JKKN Arts Food Court - 2.png"
              alt="JKKN Arts and Science College food court seating"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 mb-8">
          <p className="text-justify">
            Our canteen is more than just a place to grab a quick bite. It&apos;s a social hub where students can come together to relax, catch up with friends, and recharge before diving back into their studies. With comfortable seating and a warm and welcoming atmosphere, it&apos;s the perfect place to take a break and refuel.
          </p>
          <p className="text-justify">
            And speaking of refueling, you won&apos;t be disappointed with the variety of options available in our canteen. From fresh salads and sandwiches to hearty hot meals and snacks, we&apos;ve got something for everyone. Our menu is designed to cater to a range of dietary needs and preferences, so you can feel confident that you&apos;ll find something delicious and satisfying no matter what your tastes.
          </p>
        </div>

        {/* Bullet Points with CheckCircle2 icons */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0" />
              <span className="text-base md:text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Floating Chat Buttons */}
        <FloatingChatButtons
          facebookUrl="https://m.me/jkkncas"
          whatsappNumber="919345855001"
        />
      </div>
    </div>
  );
}
