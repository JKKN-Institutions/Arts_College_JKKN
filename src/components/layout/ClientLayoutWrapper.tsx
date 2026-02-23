'use client';

import dynamic from 'next/dynamic';
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
