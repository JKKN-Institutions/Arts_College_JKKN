import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Crown, Building2, GraduationCap, MapPin } from 'lucide-react';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Management",
  description: "Meet the management team of JKKN College of Arts and Science (Autonomous). Leadership committed to academic excellence since 1994, Komarapalayam, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/about/our-management" },
  openGraph: {
    title: "Our Management | JKKN Arts & Science",
    description: "Meet the management team of JKKN College of Arts and Science (Autonomous). Leadership committed to academic excellence since 1994, Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/about/our-management",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

interface ManagementMember {
  name: string;
  position: string;
  organization: string;
  bio: string;
  image?: string;
}

const managementTeam: ManagementMember[] = [
  {
    name: "SMT. N. SENDAMARAAI",
    position: "CHAIRPERSON",
    organization: "JKKN INSTITUTIONS",
    bio: "As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. 'Leadership and Excellence' is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure, distinguished faculty, and unwavering commitment to quality education.",
    image: "/images/about/Chairperson Mam.avif"
  },
  {
    name: "SHRI. S. OMMSHARRAVANA",
    position: "DIRECTOR",
    organization: "JKKN INSTITUTIONS",
    bio: "I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation.",
    image: "/images/about/director.avif"
  }
];

export default function OurManagementPage() {
  return (
    <main className="min-h-screen bg-[#e1e9d4]">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "About", url: "https://cas.jkkn.ac.in/about" },
        { name: "Our Management", url: "https://cas.jkkn.ac.in/about/our-management" },
      ]} />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#c8d9b8] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d1e0c0] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-4">
              OUR MANAGEMENT
            </h1>
            <div className="w-24 h-1 bg-[#ffde59] mx-auto mb-4"></div>
            <p className="text-[#0b6d41]/80 text-lg md:text-xl">
              Leadership Team of JKKN Institutions
            </p>
          </div>

          {/* Management Cards - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {managementTeam.map((member, index) => (
              <article
                key={index}
                className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/60 shadow-[0_8px_32px_0_rgba(11,109,65,0.15)] hover:shadow-[0_8px_32px_0_rgba(11,109,65,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/50"
              >
                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-40 h-48 md:w-48 md:h-56 mb-6 overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.position}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 160px, 192px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400"></div>
                      )}
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-3 text-center">
                      {member.name}
                    </h2>

                    {/* Position with Icon - Glass Badge */}
                    <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ffde59]/10 backdrop-blur-md border border-[#ffde59]/30 shadow-lg">
                      <Crown className="w-4 h-4 text-[#ffde59] drop-shadow-lg" />
                      <p className="text-[#0b6d41] text-sm font-semibold uppercase tracking-wide drop-shadow-sm">
                        {member.position} - {member.organization}
                      </p>
                    </div>
                  </div>

                  {/* Bio with Quote Marks - Glass Panel */}
                  <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-inner">
                    {/* Opening quote */}
                    <div className="absolute -top-2 -left-2 text-3xl text-[#ffde59]/30 font-serif leading-none">
                      "
                    </div>

                    {/* Bio text */}
                    <p className="text-black text-sm md:text-base leading-relaxed text-center px-4 relative z-10">
                      {member.bio}
                    </p>

                    {/* Closing quote */}
                    <div className="absolute -bottom-8 -right-2 text-3xl text-[#ffde59]/30 font-serif leading-none">
                      "
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
