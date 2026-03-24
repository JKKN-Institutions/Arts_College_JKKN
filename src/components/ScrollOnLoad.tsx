'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (!scrollTo) return;

    sessionStorage.removeItem('scrollTo');

    let retries = 0;
    const maxRetries = 20;

    const tryScroll = () => {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(tryScroll, 100);
      }
    };

    setTimeout(tryScroll, 500);
  }, [pathname]);

  return null;
}
