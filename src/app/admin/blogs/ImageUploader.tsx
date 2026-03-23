'use client';

import { X, ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  imagePreview: string;
  onImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageClear: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}

export default function ImageUploader({
  imagePreview,
  onImageSelect,
  onImageClear,
  fileInputRef,
}: ImageUploaderProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        Cover Image
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#006837] hover:bg-green-50/30 transition"
      >
        {imagePreview ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePreview}
              alt="Preview"
              className="h-40 mx-auto rounded-lg object-cover"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onImageClear();
              }}
              className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className="w-8 h-8" />
            <p className="text-sm">Click to upload cover image</p>
            <p className="text-xs">JPG, PNG, WebP up to 5MB</p>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageSelect}
        className="hidden"
      />
    </div>
  );
}
