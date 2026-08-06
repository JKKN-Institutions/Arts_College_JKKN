'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function AdmissionPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-w-sm w-full sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <a
          href="https://www.jkkn.ai/apply/jkkn-admission-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/arts-pop-up-poster.webp"
            alt="JKKN Admission 2026"
            width={500}
            height={700}
            className="w-full h-auto rounded-lg shadow-2xl cursor-pointer"
            priority
          />
        </a>
      </div>
    </div>
  );
}
