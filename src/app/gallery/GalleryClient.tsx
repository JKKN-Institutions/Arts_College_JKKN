'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  images: GalleryImage[];
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'founders-day',
    title: "Founder's Day",
    images: [
      { src: '/images/gallery/founders-day/DSC_0550_1_11zon-1-scaled.jpg', alt: "Founder's Day Celebration 1" },
      { src: '/images/gallery/founders-day/DSC_0552_2_11zon.jpg', alt: "Founder's Day Celebration 2" },
      { src: '/images/gallery/founders-day/DSC_0586_3_11zon-scaled.jpg', alt: "Founder's Day Celebration 3" },
      { src: '/images/gallery/founders-day/DSC_0587_4_11zon-scaled.jpg', alt: "Founder's Day Celebration 4" },
      { src: '/images/gallery/founders-day/DSC_0597_5_11zon-scaled.jpg', alt: "Founder's Day Celebration 5" },
      { src: '/images/gallery/founders-day/DSC_0601_6_11zon-scaled.jpg', alt: "Founder's Day Celebration 6" },
      { src: '/images/gallery/founders-day/DSC_0603_7_11zon-scaled.jpg', alt: "Founder's Day Celebration 7" },
      { src: '/images/gallery/founders-day/DSC_0614_3_11zon-scaled.jpg', alt: "Founder's Day Celebration 8" },
      { src: '/images/gallery/founders-day/DSC_0669_6_11zon-scaled.jpg', alt: "Founder's Day Celebration 9" },
      { src: '/images/gallery/founders-day/DSC_0724_5_11zon.jpg', alt: "Founder's Day Celebration 10" },
      { src: '/images/gallery/founders-day/DSC_0608_2_11zon-scaled.jpg', alt: "Founder's Day Celebration 11" },
    ],
  },
  {
    id: 'pongal',
    title: 'Pongal',
    images: [
      { src: '/images/gallery/pongal/DJI_0139_2_11zon-scaled.jpg', alt: 'Pongal Celebration 1' },
      { src: '/images/gallery/pongal/DSC_0485_3_11zon-1-scaled.jpg', alt: 'Pongal Celebration 2' },
      { src: '/images/gallery/pongal/DSC_0495_4_11zon-scaled.jpg', alt: 'Pongal Celebration 3' },
      { src: '/images/gallery/pongal/DSC_0499_5_11zon-scaled.jpg', alt: 'Pongal Celebration 4' },
      { src: '/images/gallery/pongal/DSC_0527_1_11zon-scaled.jpg', alt: 'Pongal Celebration 5' },
      { src: '/images/gallery/pongal/DSC_0529_2_11zon-scaled.jpg', alt: 'Pongal Celebration 6' },
      { src: '/images/gallery/pongal/DSC_0532_3_11zon-scaled.jpg', alt: 'Pongal Celebration 7' },
      { src: '/images/gallery/pongal/DSC_0561_4_11zon-scaled.jpg', alt: 'Pongal Celebration 8' },
      { src: '/images/gallery/pongal/DSC_0584_5_11zon-scaled.jpg', alt: 'Pongal Celebration 9' },
      { src: '/images/gallery/pongal/DSC_0612_11_11zon-1-scaled.jpg', alt: 'Pongal Celebration 10' },
      { src: '/images/gallery/pongal/DSC_0632_12_11zon-scaled.jpg', alt: 'Pongal Celebration 11' },
      { src: '/images/gallery/pongal/DSC_0648_13_11zon-scaled.jpg', alt: 'Pongal Celebration 12' },
      { src: '/images/gallery/pongal/DSC_0707_14_11zon-scaled.jpg', alt: 'Pongal Celebration 13' },
      { src: '/images/gallery/pongal/DSC_0708_15_11zon-scaled.jpg', alt: 'Pongal Celebration 14' },
    ],
  },
  {
    id: 'vollymania',
    title: 'Vollymania 2023',
    images: [
      { src: '/images/gallery/vollymania/DJI_0028_1_11zon-scaled.jpg', alt: 'Vollymania 2023 - 1' },
      { src: '/images/gallery/vollymania/DJI_0031_2_11zon-scaled.jpg', alt: 'Vollymania 2023 - 2' },
      { src: '/images/gallery/vollymania/DJI_0034_3_11zon-scaled.jpg', alt: 'Vollymania 2023 - 3' },
      { src: '/images/gallery/vollymania/DJI_0052_4_11zon-scaled.jpg', alt: 'Vollymania 2023 - 4' },
      { src: '/images/gallery/vollymania/DJI_0057_5_11zon-scaled.jpg', alt: 'Vollymania 2023 - 5' },
      { src: '/images/gallery/vollymania/DSC_0763_6_11zon-1-scaled.jpg', alt: 'Vollymania 2023 - 6' },
      { src: '/images/gallery/vollymania/DSC_0766_1_11zon-scaled.jpg', alt: 'Vollymania 2023 - 7' },
      { src: '/images/gallery/vollymania/DSC_0778_2_11zon-scaled.jpg', alt: 'Vollymania 2023 - 8' },
      { src: '/images/gallery/vollymania/DSC_0780_3_11zon-scaled.jpg', alt: 'Vollymania 2023 - 9' },
      { src: '/images/gallery/vollymania/DSC_0781_4_11zon-scaled.jpg', alt: 'Vollymania 2023 - 10' },
      { src: '/images/gallery/vollymania/DSC_0799_5_11zon-scaled.jpg', alt: 'Vollymania 2023 - 11' },
      { src: '/images/gallery/vollymania/DSC_1654_1_11zon-scaled.jpg', alt: 'Vollymania 2023 - 12' },
      { src: '/images/gallery/vollymania/DSC_1673_3_11zon-scaled.jpg', alt: 'Vollymania 2023 - 13' },
      { src: '/images/gallery/vollymania/DSC_1675_4_11zon-scaled.jpg', alt: 'Vollymania 2023 - 14' },
    ],
  },
];

// ── Carousel Section ──────────────────────────────────────────────────────────
interface CarouselSectionProps {
  category: GalleryCategory;
  onImageClick: (images: GalleryImage[], index: number) => void;
}

const GAP = 16; // px

function getItemsPerView(width: number) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

function CarouselSection({ category, onImageClick }: CarouselSectionProps) {
  const images = category.images;
  const total = images.length;

  const [itemsPerView, setItemsPerView] = useState(3);
  const [slideIndex, setSlideIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const maxReal = Math.max(0, total - itemsPerView);

  const extended = [...images, ...images.slice(0, itemsPerView)];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setItemsPerView(getItemsPerView(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setSlideIndex((s) => Math.min(s, maxReal));
  }, [maxReal]);

  useEffect(() => {
    if (slideIndex > maxReal) {
      const id = setTimeout(() => {
        setAnimated(false);
        setSlideIndex(0);
      }, 520);
      return () => clearTimeout(id);
    }
  }, [slideIndex, maxReal]);

  useEffect(() => {
    if (!animated) {
      const id = setTimeout(() => setAnimated(true), 30);
      return () => clearTimeout(id);
    }
  }, [animated]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimated(true);
      setSlideIndex((s) => s + 1);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = useCallback(() => {
    setAnimated(true);
    setSlideIndex((s) => (s <= 0 ? maxReal : s - 1));
  }, [maxReal]);

  const next = useCallback(() => {
    setAnimated(true);
    setSlideIndex((s) => s + 1);
  }, []);

  const itemWidth = containerWidth > 0
    ? (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView
    : 0;
  const offset = itemWidth > 0 ? -slideIndex * (itemWidth + GAP) : 0;

  const activeDot = Math.min(slideIndex, maxReal);

  return (
    <section
      className="mb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#002309] mb-6">
        {category.title}
      </h2>

      {/* Carousel wrapper with side arrows */}
      <div className="relative flex items-center">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                     bg-white/80 border border-gray-200 shadow text-gray-600
                     hover:bg-white hover:text-[#006837] transition-colors duration-200 mr-3"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Sliding track */}
        <div ref={containerRef} className="flex-1 overflow-hidden rounded-xl">
          <div
            className={animated ? 'transition-transform duration-500 ease-in-out' : ''}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {extended.map((image, idx) => (
              <div
                key={idx}
                onClick={() => onImageClick(images, Math.min(idx, total - 1))}
                className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : `${100 / itemsPerView}%` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                     bg-white/80 border border-gray-200 shadow text-gray-600
                     hover:bg-white hover:text-[#006837] transition-colors duration-200 ml-3"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: maxReal + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimated(true); setSlideIndex(i); }}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeDot
                ? 'w-3 h-3 bg-[#006837]'
                : 'w-3 h-3 bg-gray-300 hover:bg-[#006837]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// ── Page Client Component ──────────────────────────────────────────────────────
export default function GalleryClient({
  adminCategories,
}: {
  adminCategories: GalleryCategory[];
}) {
  // Use admin albums if available, otherwise fall back to hardcoded gallery
  const categories = adminCategories.length > 0 ? adminCategories : GALLERY_CATEGORIES;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);

  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);

  const handleLightboxKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002309] mb-2">
            GALLERY
          </h1>
          <div className="w-16 h-1 bg-[#ffde59] mx-auto" />
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Explore moments and memories from events at JKKN College of Arts &amp; Science
          </p>
        </div>

        {/* Carousel Sections */}
        {categories.map((category) => (
          <CarouselSection
            key={category.id}
            category={category}
            onImageClick={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onKeyDown={handleLightboxKey}
          tabIndex={0}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#ffde59] transition-colors z-10 p-1"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffde59] transition-colors z-10
                       w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: '80vh' }}>
              <Image
                src={lightboxImages[lightboxIndex].src}
                alt={lightboxImages[lightboxIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full rounded-lg"
                style={{ maxHeight: '80vh' }}
                priority
              />
            </div>
            <p className="text-white/60 text-sm mt-3">
              {lightboxIndex + 1} / {lightboxImages.length}
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3 overflow-x-auto max-w-full pb-1 px-1">
              {lightboxImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`relative flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                    i === lightboxIndex ? 'border-[#ffde59]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffde59] transition-colors z-10
                       w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
