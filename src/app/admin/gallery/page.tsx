import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, Image as ImageIcon } from 'lucide-react';
import GalleryTableClient from './GalleryTableClient';

export default async function AdminGallery() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, description, cover_image_url, created_at')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  // Get photo counts
  const albumsWithCount = await Promise.all(
    (albums ?? []).map(async (album) => {
      const { count } = await supabase
        .from('gallery_images')
        .select('*', { count: 'exact', head: true })
        .eq('album_id', album.id);
      return { ...album, photoCount: count ?? 0 };
    })
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-500 text-sm mt-0.5">{albums?.length ?? 0} albums</p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
        >
          <Plus className="w-4 h-4" />
          New Album
        </Link>
      </div>

      {/* Table */}
      {albumsWithCount.length > 0 ? (
        <GalleryTableClient albums={albumsWithCount} />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#0b6d41]/10 rounded-2xl flex items-center justify-center mb-4">
            <ImageIcon className="w-7 h-7 text-[#0b6d41]" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No albums yet</p>
          <p className="text-sm text-gray-400 mb-5">Create an album and upload your photos.</p>
          <Link
            href="/admin/gallery/new"
            className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
          >
            <Plus className="w-4 h-4" />
            New Album
          </Link>
        </div>
      )}
    </div>
  );
}
