"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-QW6LQV7XE5";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Staff pages stay out of GA4 (2026-11-02): page_view was already skipped here, but gtag.js
    // still sent enhanced-measurement events - 4 of the 13 October form_start events came from
    // /admin/login and /admin/events/new. Google's opt-out flag stops every hit for this id; it is
    // re-read per hit, so a client-side move back to a public page turns tracking on again.
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = pathname.startsWith("/admin");
    if (!GA_ID || typeof window.gtag !== "function") return;
    if (pathname.startsWith("/admin")) return;

    const query = searchParams.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_ID,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`if(location.pathname.indexOf('/admin')===0){window['ga-disable-${GA_ID}']=true;}window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
