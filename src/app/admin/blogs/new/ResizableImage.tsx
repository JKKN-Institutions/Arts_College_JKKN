'use client';

/**
 * ResizableImage
 *
 * Extends the official @tiptap/extension-image with a `width` attribute and a
 * React NodeView that adds corner drag-handles, so authors can resize images
 * directly inside the editor. No external dependency — built on the
 * already-installed @tiptap/react ReactNodeViewRenderer.
 *
 * Shared by both the Blog and Events rich-text editors.
 */

import Image from '@tiptap/extension-image';
import {
  ReactNodeViewRenderer,
  NodeViewWrapper,
  type NodeViewProps,
} from '@tiptap/react';
import { useRef } from 'react';

const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
type Corner = (typeof CORNERS)[number];

const HANDLE_BASE: React.CSSProperties = {
  position: 'absolute',
  width: 12,
  height: 12,
  background: '#006837',
  border: '2px solid #ffffff',
  borderRadius: '50%',
  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  zIndex: 20,
};

function handleStyle(corner: Corner): React.CSSProperties {
  const o = -6;
  const pos: Record<Corner, React.CSSProperties> = {
    'top-left': { top: o, left: o, cursor: 'nwse-resize' },
    'top-right': { top: o, right: o, cursor: 'nesw-resize' },
    'bottom-left': { bottom: o, left: o, cursor: 'nesw-resize' },
    'bottom-right': { bottom: o, right: o, cursor: 'nesw-resize' },
  };
  return { ...HANDLE_BASE, ...pos[corner] };
}

function ResizableImageView({ node, updateAttributes, selected }: NodeViewProps) {
  const { src, alt, title, width, align } = node.attrs as {
    src: string;
    alt?: string;
    title?: string;
    width?: number | null;
    align?: 'left' | 'center' | 'right' | null;
  };
  const imgRef = useRef<HTMLImageElement>(null);

  const justify =
    align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';

  function startResize(e: React.PointerEvent, corner: Corner) {
    e.preventDefault();
    e.stopPropagation();
    const img = imgRef.current;
    if (!img) return;

    const startX = e.clientX;
    const startWidth = img.offsetWidth;
    const growsRight = corner.includes('right');
    const prevUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    function onMove(ev: PointerEvent) {
      const dx = ev.clientX - startX;
      const next = startWidth + dx * (growsRight ? 1 : -1);
      updateAttributes({ width: Math.max(40, Math.round(next)) });
    }
    function onUp() {
      document.body.style.userSelect = prevUserSelect;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    }
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }

  return (
    <NodeViewWrapper
      className="resizable-image"
      style={{
        display: 'flex',
        justifyContent: justify,
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          lineHeight: 0,
          maxWidth: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt || ''}
          title={title || undefined}
          draggable={false}
          style={{
            width: width ? `${width}px` : 'auto',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '0.5rem',
            display: 'block',
            outline: selected ? '2px solid #006837' : 'none',
            outlineOffset: 2,
          }}
        />
        {selected &&
          CORNERS.map((corner) => (
            <span
              key={corner}
              onPointerDown={(e) => startResize(e, corner)}
              style={handleStyle(corner)}
            />
          ))}
      </div>
    </NodeViewWrapper>
  );
}

export const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (el) => {
          const w = el.getAttribute('width');
          return w ? parseInt(w, 10) : null;
        },
        renderHTML: (attrs) =>
          attrs.width ? { width: attrs.width } : {},
      },
      align: {
        default: null,
        parseHTML: (el) => el.getAttribute('data-align'),
        renderHTML: (attrs) =>
          attrs.align && attrs.align !== 'left'
            ? { 'data-align': attrs.align }
            : {},
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageView);
  },
});

export default ResizableImage;
