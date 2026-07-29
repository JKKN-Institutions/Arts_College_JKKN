'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import {
  Search,
  ChevronDown,
  FileText,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Globe,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Loader2,
  EyeOff,
  Send,
  Link2 as LinkIcon,
} from 'lucide-react';
import ConfirmModal from '../ConfirmModal';

/* ─── Types ────────────────────────────────────────────────────────── */

interface Blog {
  id: string;
  title: string;
  slug: string | null;
  category: string | null;
  author_name: string | null;
  is_published: boolean | null;
  created_at: string;
  published_at: string | null;
  view_count: number | null;
  read_time: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  blogs: Blog[];
  categories: Category[];
  /** blog id → that post's `preview_token`; empty until the migration has run */
  previewTokens: Record<string, string>;
}

/* ─── Helpers ──────────────────────────────────────────────────────── */

function formatDate(d: string | null) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(d: string | null) {
  if (!d) return '';
  return new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function AuthorAvatar({ name }: { name: string | null }) {
  const initials = name
    ? name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
    : 'AU';
  return (
    <div className="w-7 h-7 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center flex-shrink-0">
      <span className="text-[10px] font-bold text-amber-700">{initials}</span>
    </div>
  );
}

/* ─── Sort Header ──────────────────────────────────────────────────── */

function SortHeader({ label, sorted }: { label: string; sorted: false | 'asc' | 'desc' }) {
  return (
    <span className="flex items-center gap-1.5">
      {label}
      {sorted === 'asc' ? (
        <ArrowUp className="w-3.5 h-3.5 text-[#006837]" />
      ) : sorted === 'desc' ? (
        <ArrowDown className="w-3.5 h-3.5 text-[#006837]" />
      ) : (
        <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
      )}
    </span>
  );
}

/* ─── Action Menu (rendered via portal to avoid overflow clipping) ── */

function ActionMenu({
  blog,
  isOpen,
  onToggle,
  onClose,
  onDelete,
  onTogglePublish,
  isDeleting,
  previewToken,
}: {
  blog: Blog;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onDelete: () => void;
  onTogglePublish: () => void;
  isDeleting: boolean;
  previewToken?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (isOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const menuHeight = 200; // approximate menu height
      const spaceBelow = window.innerHeight - rect.bottom;
      const top = spaceBelow < menuHeight
        ? rect.top - menuHeight + window.scrollY
        : rect.bottom + 4 + window.scrollY;
      const left = rect.right - 160 + window.scrollX; // 160 = min-w of menu
      setPos({ top, left: Math.max(8, left) });
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={onToggle}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition"
      >
        {isDeleting ? (
          <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
        ) : (
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {isOpen && pos && createPortal(
        <>
          <div className="fixed inset-0 z-[9998]" onClick={onClose} />
          <div
            className="absolute z-[9999] bg-white rounded-xl border border-gray-200 shadow-xl py-1.5 min-w-[160px]"
            style={{ top: pos.top, left: pos.left }}
          >
            <Link
              href={`/admin/blogs/${blog.id}`}
              className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              onClick={onClose}
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </Link>
            {blog.is_published && blog.slug ? (
              <Link
                href={`/blog/campus/${blog.slug}`}
                target="_blank"
                className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                onClick={onClose}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Live
              </Link>
            ) : (
              <>
                <Link
                  href={`/blog/preview/${blog.id}`}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                  onClick={onClose}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </Link>
                <button
                  onClick={() => {
                    if (!previewToken) {
                      toast.error('No preview token on this post yet — run the blog preview-token migration.');
                      onClose();
                      return;
                    }
                    const url = `${window.location.origin}/blog/preview/${blog.id}?token=${previewToken}`;
                    navigator.clipboard.writeText(url).then(
                      () => toast.success('Preview link copied — anyone with it can view this draft.'),
                      () => toast.error('Could not copy the link.')
                    );
                    onClose();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  Copy Preview Link
                </button>
              </>
            )}
            <button
              onClick={onTogglePublish}
              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              {blog.is_published ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  Unpublish
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Publish
                </>
              )}
            </button>
            <hr className="my-1.5 border-gray-100" />
            <button
              onClick={onDelete}
              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-red-600 hover:bg-red-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

/* ─── Column definitions ───────────────────────────────────────────── */

const columnHelper = createColumnHelper<Blog>();

/* ─── Main Component ───────────────────────────────────────────────── */

export default function BlogsTableClient({ blogs, categories, previewTokens }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [rowSelection, setRowSelection] = useState({});

  // Pre-filter data based on status + category dropdowns
  const filteredData = useMemo(() => {
    return (blogs ?? []).filter((b) => {
      const matchStatus =
        statusFilter === 'all' ||
        (statusFilter === 'published' && b.is_published) ||
        (statusFilter === 'draft' && !b.is_published);
      const matchCategory =
        categoryFilter === 'all' ||
        (b.category ?? '').toLowerCase() === categoryFilter.toLowerCase();
      return matchStatus && matchCategory;
    });
  }, [blogs, statusFilter, categoryFilter]);

  async function doDelete() {
    if (!pendingDeleteId) return;
    const id = pendingDeleteId;
    setPendingDeleteId(null);
    setDeletingId(id);
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete post.');
    } else {
      toast.success('Post deleted.');
      router.refresh();
    }
    setDeletingId(null);
  }

  async function togglePublish(blog: Blog) {
    const newStatus = !blog.is_published;
    const { error } = await supabase
      .from('blogs')
      .update({
        is_published: newStatus,
        // Keep post_status in sync — the editor's Status dropdown reads it.
        post_status: newStatus ? 'published' : 'draft',
        published_at: newStatus ? new Date().toISOString() : null,
      })
      .eq('id', blog.id);
    if (error) {
      toast.error('Failed to update status.');
    } else {
      toast.success(newStatus ? 'Post published.' : 'Post unpublished.');
      router.refresh();
    }
    setOpenMenu(null);
  }

  const columns = useMemo(
    () => [
      // Checkbox
      columnHelper.display({
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            className="rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
            className="rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
          />
        ),
        size: 40,
        enableSorting: false,
      }),

      // Post
      columnHelper.accessor('title', {
        header: ({ column }) => (
          <SortHeader label="Post" sorted={column.getIsSorted()} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-gray-400" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-800 truncate max-w-[220px]">{row.original.title}</p>
              <p className="text-xs text-gray-400 truncate max-w-[220px]">
                /{row.original.slug ?? ''}
                {row.original.read_time && <span> · {row.original.read_time}</span>}
              </p>
            </div>
          </div>
        ),
        filterFn: (row, _, filterValue) => {
          const title = row.original.title.toLowerCase();
          const slug = (row.original.slug ?? '').toLowerCase();
          return title.includes(filterValue.toLowerCase()) || slug.includes(filterValue.toLowerCase());
        },
      }),

      // Category
      columnHelper.accessor('category', {
        header: ({ column }) => (
          <SortHeader label="Category" sorted={column.getIsSorted()} />
        ),
        cell: ({ getValue }) => {
          const cat = getValue();
          return cat ? (
            <span className="text-xs font-medium text-blue-600 border border-blue-200 px-2.5 py-1 rounded-full">
              {cat}
            </span>
          ) : (
            <span className="text-gray-400 text-xs">—</span>
          );
        },
        meta: { className: 'hidden sm:table-cell' },
      }),

      // Author
      columnHelper.accessor('author_name', {
        header: ({ column }) => (
          <SortHeader label="Author" sorted={column.getIsSorted()} />
        ),
        cell: ({ getValue }) => {
          const name = getValue();
          return (
            <div className="flex items-center gap-2">
              <AuthorAvatar name={name} />
              <span className="text-sm text-gray-600 truncate max-w-[100px]">
                {name ? name.split(' ')[0] + ' ...' : '—'}
              </span>
            </div>
          );
        },
        meta: { className: 'hidden md:table-cell' },
      }),

      // Status
      columnHelper.accessor('is_published', {
        header: ({ column }) => (
          <SortHeader label="Status" sorted={column.getIsSorted()} />
        ),
        cell: ({ getValue }) => {
          const pub = getValue();
          return (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  pub
                    ? 'bg-green-50 text-green-700 border border-green-100'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {pub ? 'Published' : 'Draft'}
              </span>
              {pub && <Globe className="w-3.5 h-3.5 text-gray-400" />}
            </div>
          );
        },
      }),

      // Views
      columnHelper.accessor('view_count', {
        header: ({ column }) => (
          <SortHeader label="Views" sorted={column.getIsSorted()} />
        ),
        cell: ({ getValue }) => (
          <div className="flex items-center gap-1.5 text-gray-500">
            <Eye className="w-3.5 h-3.5" />
            <span className="text-sm">{getValue() ?? 0}</span>
          </div>
        ),
        meta: { className: 'hidden lg:table-cell' },
      }),

      // Published date
      columnHelper.accessor(
        (row) => row.published_at ?? row.created_at,
        {
          id: 'publishedAt',
          header: ({ column }) => (
            <SortHeader label="Published" sorted={column.getIsSorted()} />
          ),
          cell: ({ row }) => {
            const d = row.original.published_at ?? row.original.created_at;
            return (
              <div>
                <p className="text-sm text-gray-600">{formatDate(d)}</p>
                <p className="text-xs text-gray-400">{formatTime(d)}</p>
              </div>
            );
          },
          meta: { className: 'hidden lg:table-cell' },
        }
      ),

      // Actions
      columnHelper.display({
        id: 'actions',
        cell: ({ row }) => {
          const blog = row.original;
          return (
            <ActionMenu
              blog={blog}
              isOpen={openMenu === blog.id}
              onToggle={() => setOpenMenu(openMenu === blog.id ? null : blog.id)}
              onClose={() => setOpenMenu(null)}
              onDelete={() => { setOpenMenu(null); setPendingDeleteId(blog.id); }}
              onTogglePublish={() => togglePublish(blog)}
              isDeleting={deletingId === blog.id}
              previewToken={previewTokens[blog.id]}
            />
          );
        },
        size: 48,
        enableSorting: false,
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openMenu, deletingId, previewTokens]
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
      rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, _, filterValue) => {
      const title = row.original.title.toLowerCase();
      const slug = (row.original.slug ?? '').toLowerCase();
      return title.includes(filterValue.toLowerCase()) || slug.includes(filterValue.toLowerCase());
    },
    enableRowSelection: true,
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-0 sm:min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        {table.getRowModel().rows.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-gray-100">
                    {headerGroup.headers.map((header) => {
                      const meta = header.column.columnDef.meta as { className?: string } | undefined;
                      return (
                        <th
                          key={header.id}
                          className={`text-left px-4 py-3.5 font-semibold text-gray-600 ${meta?.className ?? ''}`}
                          style={header.column.getSize() !== 150 ? { width: header.column.getSize() } : undefined}
                        >
                          {header.isPlaceholder ? null : header.column.getCanSort() ? (
                            <button
                              className="flex items-center gap-1.5 hover:text-gray-900 transition"
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </button>
                          ) : (
                            flexRender(header.column.columnDef.header, header.getContext())
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-50">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-gray-50/50 transition ${row.getIsSelected() ? 'bg-green-50/30' : ''}`}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const meta = cell.column.columnDef.meta as { className?: string } | undefined;
                      return (
                        <td
                          key={cell.id}
                          className={`px-4 py-4 ${meta?.className ?? ''}`}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-gray-300" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">
              {globalFilter || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'No posts match your filters'
                : 'No blog posts yet'}
            </p>
            <p className="text-sm text-gray-400 mb-5">
              {globalFilter || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'Try adjusting your search or filters.'
                : 'Create your first blog post to get started.'}
            </p>
            {!globalFilter && statusFilter === 'all' && categoryFilter === 'all' && (
              <Link
                href="/admin/blogs/new"
                className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
              >
                New Post
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Row count */}
      {table.getRowModel().rows.length > 0 && (
        <div className="flex items-center justify-between text-xs text-gray-400 px-1">
          <span>
            {table.getFilteredSelectedRowModel().rows.length > 0
              ? `${table.getFilteredSelectedRowModel().rows.length} of ${table.getFilteredRowModel().rows.length} selected`
              : `${table.getFilteredRowModel().rows.length} post${table.getFilteredRowModel().rows.length !== 1 ? 's' : ''}`}
          </span>
        </div>
      )}

      <ConfirmModal
        open={!!pendingDeleteId}
        message="Delete this blog post? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}
