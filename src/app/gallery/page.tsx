import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import GalleryClient from './GalleryClient';

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

  return <GalleryClient adminCategories={adminCategories} />;
}
