import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactAdmissionsProps {
  heading?: string;
  intro?: string;
  ctaLabel?: string;
}

export function ContactAdmissions({
  heading = "Ready to Start Your Journey?",
  intro = "Get in touch with our admissions team for personalized guidance on choosing the right programme for your career goals.",
  ctaLabel = "Apply for Admission",
}: ContactAdmissionsProps) {
  const phoneFormatted = siteConfig.phone.replace(/^\+91/, "+91 ");

  return (
    <section className="py-16 md:py-20 bg-[#0b6d41] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">{intro}</p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
          >
            <Phone className="w-6 h-6 mx-auto mb-3" />
            <div className="font-semibold">{phoneFormatted}</div>
            <div className="text-sm text-white/70 mt-1">Call Us</div>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
          >
            <Mail className="w-6 h-6 mx-auto mb-3" />
            <div className="font-semibold">{siteConfig.email}</div>
            <div className="text-sm text-white/70 mt-1">Email Us</div>
          </a>
          <a
            href="https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
          >
            <MapPin className="w-6 h-6 mx-auto mb-3" />
            <div className="font-semibold">Komarapalayam</div>
            <div className="text-sm text-white/70 mt-1">Visit Campus</div>
          </a>
        </div>

        <a
          href={siteConfig.admissionFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
        >
          {ctaLabel} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
