import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, UserCircle2 } from 'lucide-react';
import FacultyTableClient from './FacultyTableClient';

export default async function AdminFaculty() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: members } = await supabase
    .from('faculty')
    .select('id, name, designation, department, qualification, experience_years, photo_url, email, display_order, is_active, aided_or_self')
    .eq('college_id', collegeId)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faculty</h1>
          <p className="text-gray-500 text-sm mt-0.5">{members?.length ?? 0} total members</p>
        </div>
        <Link
          href="/admin/faculty/new"
          className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
        >
          <Plus className="w-4 h-4" />
          Add Faculty
        </Link>
      </div>

      {/* Table */}
      {members && members.length > 0 ? (
        <FacultyTableClient members={members} />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#0b6d41]/10 rounded-2xl flex items-center justify-center mb-4">
            <UserCircle2 className="w-7 h-7 text-[#0b6d41]" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No faculty members yet</p>
          <p className="text-sm text-gray-400 mb-5">Add faculty members to display on the site.</p>
          <Link
            href="/admin/faculty/new"
            className="flex items-center gap-2 bg-[#0b6d41] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
          >
            <Plus className="w-4 h-4" />
            Add Faculty
          </Link>
        </div>
      )}
    </div>
  );
}
