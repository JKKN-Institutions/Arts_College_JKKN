'use client';

import { Plus, Trash2 } from 'lucide-react';
import { FaqItem } from './blog-form-types';

interface FaqEditorProps {
  faqTitle: string;
  faqs: FaqItem[];
  onFaqTitleChange: (v: string) => void;
  onFaqsChange: (faqs: FaqItem[]) => void;
}

export default function FaqEditor({
  faqTitle,
  faqs,
  onFaqTitleChange,
  onFaqsChange,
}: FaqEditorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm font-bold text-gray-500 flex-shrink-0">9.</span>
          <input
            type="text"
            value={faqTitle}
            onChange={(e) => onFaqTitleChange(e.target.value)}
            className="flex-1 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
            placeholder="Section heading..."
          />
        </div>
        <button
          type="button"
          onClick={() => onFaqsChange([...faqs, { q: '', a: '' }])}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#006837] hover:text-[#005a2e] border border-[#006837] px-3 py-1.5 rounded-lg transition"
        >
          <Plus className="w-3.5 h-3.5" />
          Add FAQ
        </button>
      </div>
      {faqs.length === 0 && (
        <p className="text-xs text-gray-400 italic">
          No FAQs yet. Upload a Word file or click &quot;Add FAQ&quot; to add
          manually.
        </p>
      )}
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-gray-500">
              FAQ #{i + 1}
            </span>
            <button
              type="button"
              onClick={() =>
                onFaqsChange(faqs.filter((_, idx) => idx !== i))
              }
              className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-500 hover:bg-red-100 transition"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              Question
            </label>
            <input
              type="text"
              value={faq.q}
              onChange={(e) =>
                onFaqsChange(
                  faqs.map((item, idx) =>
                    idx === i ? { ...item, q: e.target.value } : item
                  )
                )
              }
              placeholder="Enter the question..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              Answer
            </label>
            <textarea
              value={faq.a}
              onChange={(e) =>
                onFaqsChange(
                  faqs.map((item, idx) =>
                    idx === i ? { ...item, a: e.target.value } : item
                  )
                )
              }
              rows={3}
              placeholder="Enter the answer..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none bg-white"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
