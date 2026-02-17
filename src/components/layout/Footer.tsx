import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - College Info & Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
              J.K.K NATARAJA COLLEGE OF ARTS & SCIENCE
            </h3>

            {/* Map Embed */}
            <div className="my-6 bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500184215895!2d77.7302436!3d11.443778499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969831c528ab9%3A0xe42ccce966098e5d!2sJKKN%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1769438942755!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JKKN College Location"
              />
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Best Innovation Focused</p>
              <p className="font-semibold">Multi-Disciplinary Campus</p>
            </div>
          </div>

          {/* Middle Column - Our Institutions */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
              OUR INSTITUTIONS
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="https://dental.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN Dental College and Hospital
                </a>
              </li>
              <li>
                <a href="https://ahs.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN College of Allied Health Sciences
                </a>
              </li>
              <li>
                <a href="https://pharmacy.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN College of Pharmacy
                </a>
              </li>
              <li>
                <a href="https://nursing.sresakthimayeil.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  Sresakthimayeil Institute of Nursing and Research
                </a>
              </li>
              <li>
                <a href="https://edu.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN College of Education
                </a>
              </li>
              <li>
                <a href="https://cas.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN College of Arts and Science (Autonomous)
                </a>
              </li>
              <li>
                <a href="https://engg.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN College of Engineering and Technology
                </a>
              </li>
              <li>
                <a href="https://school.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  JKKN Matriculation Higher Secondary School
                </a>
              </li>
              <li>
                <a href="https://nv.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                  Nattraja Vidyalaya
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
              CONTACT US
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Call:</span>
                <a href="tel:+919345855001" className="hover:text-brand-yellow transition">
                  +919345855001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:arts@jkkn.org" className="hover:text-brand-yellow transition">
                  arts@jkkn.org
                </a>
              </div>
              <div>
                <span className="font-semibold">Address:</span>
                <p className="mt-2 leading-relaxed">
                  J.K.K NATARAJA COLLEGE OF ARTS & SCIENCE .NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
                FOLLOW US
              </h3>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
