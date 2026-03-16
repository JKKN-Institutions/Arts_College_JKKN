'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const section = sessionStorage.getItem('scrollTo');
    if (!section) return;
    sessionStorage.removeItem('scrollTo');
    const timer = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
