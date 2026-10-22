'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Navigation from "./Navigation";
import { BottomNavbar } from "../BottomNav";
import { ScrollToTop } from "../ScrollToTop";
import { EnquiryModalProvider } from "@/components/lead/EnquiryModal";

const Footer = dynamic(() => import("./Footer"), {
  loading: () => null,
});

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  // The enquiry modal provider wraps every page (user's choice 2026-10-22, the Dental pattern), so
  // every EnquiryButton and every jkkn.ai apply link opens the same 3-box form everywhere, not only
  // on the homepage. Before, every other page fell back to the jkkn.ai link (6 boxes, the college
  // picked again). The homepage popup uses this same provider.
  return (
    <EnquiryModalProvider>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <BottomNavbar />
      <ScrollToTop />
    </EnquiryModalProvider>
  );
}
