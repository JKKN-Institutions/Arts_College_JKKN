'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Pencil, Image as ImageIcon, ArrowUpDown } from 'lucide-react';
import DeleteAlbumButton from './DeleteAlbumButton';

interface Album {
  id: string;
  name: string;
  description: string | null;
  cover_image_url: string | null;
  created_at: string;
  photoCount: number;
}

type SortKey = 'name' | 'photoCount' | 'created_at';
type SortDir = 'asc' | 'desc';

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function GalleryTableClient({ albums }: { albums: Album[] }) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('created_at');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const filtered = useMemo(() => {
    let list = [...albums];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        a =>
          a.name.toLowerCase().includes(q) ||
          (a.description?.toLowerCase().includes(q))
      );
    }

    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case 'name':
          cmp = a.name.localeCompare(b.name);
          break;
        case 'photoCount':
          cmp = a.photoCount - b.photoCount;
          break;
        case 'created_at':
          cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [albums, search, sortKey, sortDir]);

  function SortHeader({ label, field }: { label: string; field: SortKey }) {
    const active = sortKey === field;
    return (
      <button
        onClick={() => toggleSort(field)}
        className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${
          active ? 'text-[#0b6d41]' : 'text-gray-400'
        } hover:text-[#0b6d41] transition-colors`}
      >
        {label}
        <ArrowUpDown className="w-3 h-3" />
      </button>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Search */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search album name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left px-4 py-3 w-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">#</span>
              </th>
              <th className="text-left px-4 py-3">
                <SortHeader label="Album" field="name" />
              </th>
              <th className="text-center px-4 py-3">
                <SortHeader label="Photos" field="photoCount" />
              </th>
              <th className="text-left px-4 py-3 hidden sm:table-cell">
                <SortHeader label="Created" field="created_at" />
              </th>
              <th className="text-right px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((album, i) => (
              <tr key={album.id} className="hover:bg-gray-50/50 transition-colors">
                {/* # */}
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-400">{i + 1}</span>
                </td>

                {/* Album name + cover */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {album.cover_image_url ? (
                      <img
                        src={album.cover_image_url}
                        alt={album.name}
                        className="w-10 h-10 rounded-lg object-cover border border-gray-100 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-[#0b6d41]/10 flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="w-5 h-5 text-[#0b6d41]" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{album.name}</p>
                      {album.description && (
                        <p className="text-xs text-gray-400 truncate max-w-[250px]">{album.description}</p>
                      )}
                    </div>
                  </div>
                </td>

                {/* Photos count */}
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                    album.photoCount > 0
                      ? 'bg-[#0b6d41]/10 text-[#0b6d41]'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {album.photoCount} {album.photoCount === 1 ? 'photo' : 'photos'}
                  </span>
                </td>

                {/* Created */}
                <td className="px-4 py-3 hidden sm:table-cell">
                  <p className="text-sm text-gray-500">{formatDate(album.created_at)}</p>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/admin/gallery/${album.id}`}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0b6d41] hover:bg-[#0b6d41]/5 transition-colors"
                      title="Manage Photos"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <DeleteAlbumButton id={album.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty filtered */}
      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-400">No albums match your search.</p>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Showing {filtered.length} of {albums.length} albums
        </p>
      </div>
    </div>
  );
}
