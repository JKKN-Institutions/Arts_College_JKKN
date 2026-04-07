'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ConfirmModal from '../ConfirmModal';

export default function DeleteEventButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function doDelete() {
    setModalOpen(false);
    setLoading(true);
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete event.');
    } else {
      toast.success('Event deleted.');
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        disabled={loading}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
        title="Delete"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
      </button>
      <ConfirmModal
        open={modalOpen}
        message="Delete this event? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setModalOpen(false)}
      />
    </>
  );
}
