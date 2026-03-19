import type { Metadata } from "next";
import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import GalleryClient from './GalleryClient';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "View campus photos, events and academic activities at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
  alternates: {
    canonical: "https://cas.jkkn.ac.in/gallery",
  },
  openGraph: {
    title: "Photo Gallery | JKKN Arts & Science",
    description:
      "View campus photos, events and academic activities at JKKN College of Arts and Science (Autonomous), Komarapalayam, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/gallery",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

interface AdminImage {
  src: string;
  alt: string;
}

interface AdminCategory {
  id: string;
  title: string;
  images: AdminImage[];
}

export default async function GalleryPage() {
  let adminCategories: AdminCategory[] = [];

  try {
    const supabase = await createClient();
    const { data: albums } = await supabase
      .from('gallery_albums')
      .select('id, name, gallery_images(image_url, caption, display_order)')
      .eq('college_id', siteConfig.id)
      .order('created_at', { ascending: false });

    if (albums) {
      adminCategories = albums
        .map((album) => {
          const imgs = (
            album.gallery_images as {
              image_url: string;
              caption: string | null;
              display_order: number;
            }[]
          ) ?? [];
          return {
            id: album.id,
            title: album.name,
            images: imgs
              .sort((a, b) => a.display_order - b.display_order)
              .map((img) => ({
                src: img.image_url,
                alt: img.caption ?? album.name,
              })),
          };
        })
        .filter((cat) => cat.images.length > 0);
    }
  } catch {
    // On error, fall back to hardcoded gallery (handled in GalleryClient)
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "Gallery", url: "https://cas.jkkn.ac.in/gallery" },
      ]} />
      <GalleryClient adminCategories={adminCategories} />
    </>
  );
}
