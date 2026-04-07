'use client';

import { useState, useRef, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2, X, ImageIcon, Images } from 'lucide-react';
import { useAdminCollege } from '../AdminCollegeContext';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

interface EventFormProps {
  event?: {
    id: string;
    title: string;
    slug: string;
    description: string;
    event_date: string;
    event_time: string;
    venue: string;
    image_url: string;
    is_published: boolean;
    gallery_album_id?: string | null;
  };
}

interface GalleryAlbum {
  id: string;
  name: string;
  imageCount: number;
}

const INPUT = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition';

function AlbumDropdown({
  albums,
  value,
  onChange,
}: {
  albums: GalleryAlbum[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = albums.find(a => a.id === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`${INPUT} flex items-center justify-between text-left ${!selected ? 'text-gray-400' : 'text-gray-900'}`}
      >
        <span className="flex items-center gap-2 truncate">
          <Images className="w-4 h-4 text-gray-400 flex-shrink-0" />
          {selected ? `${selected.name} (${selected.imageCount} photos)` : 'No album selected'}
        </span>
        <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto">
          <button
            type="button"
            onClick={() => { onChange(''); setOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
              !value ? 'bg-[#0b6d41]/5 text-[#0b6d41] font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center flex-shrink-0">
              {!value && <span className="w-2.5 h-2.5 rounded-sm bg-[#0b6d41]" />}
            </span>
            No album selected
          </button>
          {albums.map((album) => (
            <button
              key={album.id}
              type="button"
              onClick={() => { onChange(album.id); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                value === album.id ? 'bg-[#0b6d41]/5 text-[#0b6d41] font-medium' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                value === album.id ? 'border-[#0b6d41] bg-[#0b6d41]' : 'border-gray-300'
              }`}>
                {value === album.id && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                )}
              </span>
              <div className="flex-1 min-w-0">
                <p className="truncate">{album.name}</p>
                <p className={`text-xs ${value === album.id ? 'text-[#0b6d41]/70' : 'text-gray-400'}`}>{album.imageCount} photos</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EventForm({ event }: EventFormProps) {
  const isEdit = !!event;
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const collegeId = useAdminCollege();

  const [title, setTitle] = useState(event?.title ?? '');
  const [slug, setSlug] = useState(event?.slug ?? '');
  const [description, setDescription] = useState(event?.description ?? '');
  const [eventDate, setEventDate] = useState(event?.event_date ?? '');
  const [eventTime, setEventTime] = useState(event?.event_time ?? '');
  const [venue, setVenue] = useState(event?.venue ?? '');
  const [imageUrl, setImageUrl] = useState(event?.image_url ?? '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(event?.image_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [galleryAlbumId, setGalleryAlbumId] = useState(event?.gallery_album_id ?? '');

  // Gallery albums
  const [albums, setAlbums] = useState<GalleryAlbum[]>([]);
  const [loadingAlbums, setLoadingAlbums] = useState(true);

  useEffect(() => {
    async function fetchAlbums() {
      const { data: albumsData } = await supabase
        .from('gallery_albums')
        .select('id, name')
        .eq('college_id', collegeId)
        .order('name');

      if (albumsData) {
        const { data: imagesData } = await supabase
          .from('gallery_images')
          .select('album_id')
          .eq('college_id', collegeId);

        const counts: Record<string, number> = {};
        imagesData?.forEach((img: { album_id: string }) => {
          counts[img.album_id] = (counts[img.album_id] || 0) + 1;
        });

        setAlbums(albumsData.map(a => ({
          id: a.id,
          name: a.name,
          imageCount: counts[a.id] || 0,
        })));
      }
      setLoadingAlbums(false);
    }
    fetchAlbums();
  }, [supabase, collegeId]);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) setSlug(slugify(val));
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return imageUrl || null;
    setUploading(true);
    const ext = imageFile.name.split('.').pop();
    const fileName = `education/${new Date().getFullYear()}/${Date.now()}-${slugify(title || 'event')}.${ext}`;
    const { data, error } = await supabase.storage
      .from('event-images')
      .upload(fileName, imageFile, { upsert: true });
    setUploading(false);
    if (error) {
      toast.error('Image upload failed: ' + error.message);
      return null;
    }
    const { data: { publicUrl } } = supabase.storage.from('event-images').getPublicUrl(data.path);
    return publicUrl;
  }

  async function handleSubmit(e: React.FormEvent, publish: boolean) {
    e.preventDefault();
    if (!title.trim()) return toast.error('Title is required.');
    if (!slug.trim()) return toast.error('Slug is required.');
    setSaving(true);

    const uploadedUrl = await uploadImage();
    if (imageFile && !uploadedUrl) { setSaving(false); return; }

    const payload = {
      college_id: collegeId,
      title: title.trim(),
      slug: slug.trim(),
      description: description.trim(),
      event_date: eventDate || null,
      event_time: eventTime.trim() || null,
      venue: venue.trim() || null,
      image_url: uploadedUrl ?? '',
      is_published: publish,
      updated_at: new Date().toISOString(),
    };

    // Try saving with gallery_album_id first, fallback without it if column doesn't exist
    let error;
    const payloadWithAlbum = { ...payload, gallery_album_id: galleryAlbumId || null };

    if (isEdit) {
      const res = await supabase.from('events').update(payloadWithAlbum).eq('id', event.id);
      if (res.error?.message?.includes('gallery_album_id')) {
        ({ error } = await supabase.from('events').update(payload).eq('id', event.id));
      } else {
        error = res.error;
      }
    } else {
      const res = await supabase.from('events').insert({ ...payloadWithAlbum, created_at: new Date().toISOString() });
      if (res.error?.message?.includes('gallery_album_id')) {
        ({ error } = await supabase.from('events').insert({ ...payload, created_at: new Date().toISOString() }));
        if (!error) toast('Gallery album link skipped — run the SQL migration to enable it.', { icon: '⚠️' });
      } else {
        error = res.error;
      }
    }

    setSaving(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
    } else {
      toast.success(isEdit ? 'Event updated!' : publish ? 'Event published!' : 'Draft saved!');
      router.push('/admin/events');
      router.refresh();
    }
  }

  return (
    <form className="space-y-6">
      {/* Title & Slug */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Title *</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder="e.g. Annual Day 2025"
            className={INPUT}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">URL Slug *</label>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl px-3 py-3 whitespace-nowrap">
              /events/
            </span>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              required
              placeholder="annual-day-2025"
              className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition"
            />
          </div>
        </div>
      </div>

      {/* Date, Time & Venue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={INPUT}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Time</label>
          <input
            type="text"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            placeholder="e.g. 1:00 PM to 4:00 PM"
            className={INPUT}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Venue</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="e.g. Vibrant Arangam, JKKN Campus"
            className={INPUT}
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          placeholder="Describe the event..."
          className={`${INPUT} resize-none`}
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Image</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-[#0b6d41] hover:bg-[#0b6d41]/5 transition"
        >
          {imagePreview ? (
            <div className="relative inline-block">
              <img src={imagePreview} alt="Preview" className="h-48 mx-auto rounded-lg object-cover" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImagePreview('');
                  setImageFile(null);
                  setImageUrl('');
                }}
                className="absolute top-2 right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 shadow-sm"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <ImageIcon className="w-10 h-10" />
              <p className="text-sm font-medium text-gray-600">Click to upload event image</p>
              <p className="text-xs">JPG, PNG, WebP up to 5MB</p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>

      {/* Gallery Album */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          <span className="flex items-center gap-2">
            <Images className="w-4 h-4 text-[#0b6d41]" />
            Gallery Album
          </span>
        </label>
        <p className="text-xs text-gray-400 mb-3">
          Select a gallery album to display event photos on the public page.
        </p>
        {loadingAlbums ? (
          <div className="flex items-center gap-2 text-sm text-gray-400 py-3">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading albums...
          </div>
        ) : (
          <AlbumDropdown
            albums={albums}
            value={galleryAlbumId}
            onChange={setGalleryAlbumId}
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, false)}
          disabled={saving || uploading}
          className="flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
        >
          {(saving || uploading) ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Save as Draft
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={saving || uploading}
          className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004d28] transition disabled:opacity-50"
        >
          {(saving || uploading) ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {isEdit ? 'Update & Publish' : 'Publish Event'}
        </button>
      </div>
    </form>
  );
}
