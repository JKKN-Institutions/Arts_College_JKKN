'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Navigation from "./Navigation";
import { BottomNavbar } from "../BottomNav";

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

  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <BottomNavbar />
    </>
  );
}
