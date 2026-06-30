'use client';

/**
 * ImageSliderExtension — a Tiptap block node that groups multiple images into
 * a slider/carousel. Stored as a marker div:
 *   <div data-image-slider data-images='["url1","url2"]' data-autoplay="true"></div>
 * which RichContent turns into an interactive <ImageSlider /> on public pages.
 *
 * The editor NodeView lets authors upload multiple images, reorder/remove them
 * and toggle auto-slide. Shared by the Blog and Events rich-text editors.
 */

import { Node, mergeAttributes } from '@tiptap/core';
import {
  ReactNodeViewRenderer,
  NodeViewWrapper,
  type NodeViewProps,
} from '@tiptap/react';
import { useRef, useState } from 'react';

export interface ImageSliderOptions {
  onImageUpload?: ((file: File) => Promise<string>) | null;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imageSlider: {
      insertImageSlider: () => ReturnType;
    };
  }
}

function SliderNodeView({
  node,
  updateAttributes,
  deleteNode,
  extension,
}: NodeViewProps) {
  const images: string[] = node.attrs.images || [];
  const autoplay: boolean = node.attrs.autoplay ?? true;
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const onImageUpload = (extension.options as ImageSliderOptions).onImageUpload;

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    const urls: string[] = [];
    for (const file of Array.from(files)) {
      try {
        const url = onImageUpload ? await onImageUpload(file) : URL.createObjectURL(file);
        if (url) urls.push(url);
      } catch {
        /* skip failed upload */
      }
    }
    setUploading(false);
    if (urls.length) updateAttributes({ images: [...images, ...urls] });
  }

  function removeAt(i: number) {
    updateAttributes({ images: images.filter((_, idx) => idx !== i) });
  }

  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= images.length) return;
    const next = images.slice();
    [next[i], next[j]] = [next[j], next[i]];
    updateAttributes({ images: next });
  }

  return (
    <NodeViewWrapper
      className="image-slider-editor"
      data-drag-handle
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        background: '#fafaf5',
        padding: 12,
        margin: '12px 0',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 15l5-5 4 4 3-3 6 6" />
          </svg>
          Image Slider · {images.length} image{images.length === 1 ? '' : 's'}
        </span>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <label style={{ fontSize: 12, color: '#4b5563', display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={autoplay}
              onChange={(e) => updateAttributes({ autoplay: e.target.checked })}
            />
            Auto-slide
          </label>
          <button
            type="button"
            onClick={() => deleteNode()}
            title="Remove slider"
            style={{ fontSize: 12, color: '#dc2626', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none' }}
          >
            Remove
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {images.map((src, i) => (
            <div
              key={i}
              style={{ position: 'relative', width: 96, height: 72, borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e7eb', background: '#fff' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Image ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                type="button"
                onClick={() => removeAt(i)}
                title="Remove image"
                style={{ position: 'absolute', top: 2, right: 2, width: 18, height: 18, borderRadius: '50%', background: 'rgba(220,38,38,0.9)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 11, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ×
              </button>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.45)' }}>
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} title="Move left" style={{ color: '#fff', background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', opacity: i === 0 ? 0.4 : 1, fontSize: 12, padding: '0 4px' }}>‹</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === images.length - 1} title="Move right" style={{ color: '#fff', background: 'none', border: 'none', cursor: i === images.length - 1 ? 'default' : 'pointer', opacity: i === images.length - 1 ? 0.4 : 1, fontSize: 12, padding: '0 4px' }}>›</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 10px' }}>
          No images yet. Click &ldquo;Add images&rdquo; to upload two or more.
        </p>
      )}

      {/* Add button */}
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={uploading}
        style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#fff', background: '#006837', borderRadius: 8, padding: '7px 14px', border: 'none', cursor: uploading ? 'default' : 'pointer', opacity: uploading ? 0.6 : 1 }}
      >
        {uploading ? 'Uploading…' : '+ Add images'}
      </button>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = '';
        }}
      />
    </NodeViewWrapper>
  );
}

export const ImageSliderExtension = Node.create<ImageSliderOptions>({
  name: 'imageSlider',
  group: 'block',
  atom: true,
  draggable: true,
  selectable: true,

  addOptions() {
    return { onImageUpload: null };
  },

  addAttributes() {
    return {
      images: {
        default: [],
        parseHTML: (el) => {
          try {
            const parsed = JSON.parse(el.getAttribute('data-images') || '[]');
            return Array.isArray(parsed) ? parsed : [];
          } catch {
            return [];
          }
        },
        renderHTML: () => ({}),
      },
      autoplay: {
        default: true,
        parseHTML: (el) => el.getAttribute('data-autoplay') === 'true',
        renderHTML: () => ({}),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-image-slider]' }];
  },

  renderHTML({ node }) {
    return [
      'div',
      mergeAttributes({
        'data-image-slider': '',
        'data-images': JSON.stringify(node.attrs.images || []),
        'data-autoplay': node.attrs.autoplay ? 'true' : 'false',
      }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SliderNodeView);
  },

  addCommands() {
    return {
      insertImageSlider:
        () =>
        ({ commands }) =>
          commands.insertContent({
            type: this.name,
            attrs: { images: [], autoplay: true },
          }),
    };
  },
});

export default ImageSliderExtension;
