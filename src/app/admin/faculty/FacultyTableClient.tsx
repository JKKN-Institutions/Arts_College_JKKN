'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Pencil, Trash2, UserCircle2, ArrowUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string | null;
  qualification: string | null;
  experience_years: number;
  photo_url: string | null;
  email: string | null;
  display_order: number;
  is_active: boolean;
  aided_or_self: string | null;
}

type SortKey = 'name' | 'department' | 'designation' | 'experience_years' | 'is_active';
type SortDir = 'asc' | 'desc';

export default function FacultyTableClient({ members, userRole }: { members: FacultyMember[]; userRole: string | null }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [pendingMap, setPendingMap] = useState<Record<string, string>>({});
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  const tableScrollRef = useRef<HTMLDivElement>(null);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const topScrollInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tableScroll = tableScrollRef.current;
    const topScroll = topScrollRef.current;
    const topScrollInner = topScrollInnerRef.current;
    if (!tableScroll || !topScroll || !topScrollInner) return;

    topScrollInner.style.width = `${tableScroll.scrollWidth}px`;

    const syncFromTable = () => { topScroll.scrollLeft = tableScroll.scrollLeft; };
    const syncFromTop = () => { tableScroll.scrollLeft = topScroll.scrollLeft; };

    tableScroll.addEventListener('scroll', syncFromTable);
    topScroll.addEventListener('scroll', syncFromTop);
    return () => {
      tableScroll.removeEventListener('scroll', syncFromTable);
      topScroll.removeEventListener('scroll', syncFromTop);
    };
  }, [members]);

  async function handleAidedSave(memberId: string) {
    const value = pendingMap[memberId];
    if (value === undefined) return;
    setSavingId(memberId);
    const supabase = createClient();
    await supabase
      .from('faculty')
      .update({ aided_or_self: value || null })
      .eq('id', memberId);
    setSavingId(null);
    setPendingMap(prev => {
      const next = { ...prev };
      delete next[memberId];
      return next;
    });
    router.refresh();
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setDeletingId(deleteTarget.id);
    const supabase = createClient();
    await supabase.from('faculty').delete().eq('id', deleteTarget.id);
    setDeleteTarget(null);
    setDeletingId(null);
    router.refresh();
  }

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const filtered = useMemo(() => {
    let list = [...members];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        m =>
          m.name.toLowerCase().includes(q) ||
          (m.department?.toLowerCase().includes(q)) ||
          (m.designation?.toLowerCase().includes(q)) ||
          (m.email?.toLowerCase().includes(q)) ||
          (m.qualification?.toLowerCase().includes(q))
      );
    }

    // Status
    if (statusFilter === 'active') list = list.filter(m => m.is_active);
    if (statusFilter === 'inactive') list = list.filter(m => !m.is_active);

    // Sort
    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case 'name':
          cmp = a.name.localeCompare(b.name);
          break;
        case 'department':
          cmp = (a.department ?? '').localeCompare(b.department ?? '');
          break;
        case 'designation':
          cmp = (a.designation ?? '').localeCompare(b.designation ?? '');
          break;
        case 'experience_years':
          cmp = a.experience_years - b.experience_years;
          break;
        case 'is_active':
          cmp = Number(b.is_active) - Number(a.is_active);
          break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [members, search, statusFilter, sortKey, sortDir]);

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
      {/* Search + Filters */}
      <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, department, email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition"
          />
        </div>
        <div className="flex items-center gap-2">
          {(['all', 'active', 'inactive'] as const).map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors capitalize ${
                statusFilter === status
                  ? 'bg-[#0b6d41] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {status === 'all' ? `All (${members.length})` : status}
            </button>
          ))}
        </div>
      </div>

      {/* Top scrollbar mirror */}
      <div ref={topScrollRef} className="overflow-x-auto border-b border-gray-100">
        <div ref={topScrollInnerRef} className="h-px" />
      </div>

      {/* Table */}
      <div ref={tableScrollRef} className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left px-4 py-3 w-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">#</span>
              </th>
              <th className="text-left px-4 py-3">
                <SortHeader label="Name" field="name" />
              </th>
              <th className="text-left px-4 py-3 hidden md:table-cell">
                <SortHeader label="Designation" field="designation" />
              </th>
              <th className="text-left px-4 py-3 hidden lg:table-cell">
                <SortHeader label="Department" field="department" />
              </th>
              <th className="text-left px-4 py-3 hidden xl:table-cell">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Qualification</span>
              </th>
              <th className="text-center px-4 py-3 hidden sm:table-cell">
                <SortHeader label="Exp" field="experience_years" />
              </th>
              <th className="text-center px-4 py-3">
                <SortHeader label="Status" field="is_active" />
              </th>
              <th className="text-left px-4 py-3 hidden lg:table-cell">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Self/Aided</span>
              </th>
              <th className="text-right px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((m, i) => (
              <tr
                key={m.id}
                className={`hover:bg-gray-50/50 transition-colors ${!m.is_active ? 'opacity-60' : ''}`}
              >
                {/* # */}
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-400">{i + 1}</span>
                </td>

                {/* Name + Photo */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {m.photo_url ? (
                      <img
                        src={m.photo_url}
                        alt={m.name}
                        className="w-9 h-9 rounded-full object-cover border border-gray-100 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <UserCircle2 className="w-5 h-5 text-gray-300" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{m.name}</p>
                      {m.email && (
                        <p className="text-xs text-gray-400 truncate">{m.email}</p>
                      )}
                      {/* Mobile: show designation inline */}
                      <p className="text-xs text-[#0b6d41] font-medium md:hidden mt-0.5">{m.designation}</p>
                    </div>
                  </div>
                </td>

                {/* Designation */}
                <td className="px-4 py-3 hidden md:table-cell">
                  <p className="text-sm text-[#0b6d41] font-medium">{m.designation}</p>
                </td>

                {/* Department */}
                <td className="px-4 py-3 hidden lg:table-cell">
                  <p className="text-sm text-gray-600 truncate max-w-[200px]">{m.department ?? '—'}</p>
                </td>

                {/* Qualification */}
                <td className="px-4 py-3 hidden xl:table-cell">
                  <p className="text-sm text-gray-500 truncate max-w-[150px]">{m.qualification ?? '—'}</p>
                </td>

                {/* Experience */}
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  <span className="text-sm text-gray-600">
                    {m.experience_years > 0 ? `${m.experience_years} yrs` : '—'}
                  </span>
                </td>

                {/* Status */}
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                    m.is_active
                      ? 'bg-[#0b6d41]/10 text-[#0b6d41]'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {m.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>

                {/* Self/Aided */}
                <td className="px-4 py-3 hidden lg:table-cell">
                  <div className="flex items-center gap-1.5">
                    <select
                      value={pendingMap[m.id] ?? m.aided_or_self ?? ''}
                      onChange={e => setPendingMap(prev => ({ ...prev, [m.id]: e.target.value }))}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition bg-white"
                    >
                      <option value="">-- Select --</option>
                      <option value="Aided">Aided</option>
                      <option value="Self-Finance">Self-Finance</option>
                    </select>
                    {pendingMap[m.id] !== undefined && pendingMap[m.id] !== (m.aided_or_self ?? '') && (
                      <button
                        onClick={() => handleAidedSave(m.id)}
                        disabled={savingId === m.id}
                        className="text-xs bg-[#0b6d41] text-white px-2.5 py-1.5 rounded-lg hover:bg-[#004d28] disabled:opacity-50 transition"
                      >
                        {savingId === m.id ? '...' : 'Save'}
                      </button>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/admin/faculty/${m.id}`}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0b6d41] hover:bg-[#0b6d41]/5 transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    {userRole === 'seo' && (
                      <button
                        onClick={() => setDeleteTarget({ id: m.id, name: m.name })}
                        disabled={deletingId === m.id}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 disabled:opacity-50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty filtered state */}
      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-400">No faculty members match your search.</p>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Showing {filtered.length} of {members.length} members
        </p>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mx-auto mb-4">
              <Trash2 className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 text-center mb-1">Delete Faculty</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Are you sure you want to delete <span className="font-medium text-gray-700">&quot;{deleteTarget.name}&quot;</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={!!deletingId}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 disabled:opacity-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={!!deletingId}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:opacity-50 transition"
              >
                {deletingId ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
