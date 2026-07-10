"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/constants";
import { foodImageClassName } from "@/lib/dessert-cups-image";
import { HomeSectionEyebrow } from "@/components/HomeSectionEyebrow";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./icons";

const CLOSE_DURATION_MS = 220;
const BAND_SIZE = 6;
const INITIAL_VISIBLE_COUNT = 6;

const BAND_PLACEMENTS = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-4 lg:row-start-1 lg:row-span-2",
] as const;

function GalleryTile({
  image,
  index,
  onOpen,
  placement,
  tall,
}: {
  image: GalleryImage;
  index: number;
  onOpen: () => void;
  placement?: string;
  tall?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative w-full overflow-hidden rounded-[28px] bg-brand-card-border/30 text-left shadow-[0_8px_24px_rgba(52,36,47,0.06)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(52,36,47,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink animate-gallery-fade-up ${
        placement ?? ""
      } ${tall ? "aspect-[3/4] sm:aspect-[4/5] lg:h-full lg:min-h-0 lg:aspect-auto" : "aspect-[4/3] lg:h-full lg:min-h-0 lg:aspect-auto"}`}
      style={{ animationDelay: `${Math.min(index, 11) * 40}ms` }}
      aria-label={`View larger: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className={foodImageClassName(
          image.src,
          "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
        )}
      />
    </button>
  );
}

function GalleryBand({
  images,
  startIndex,
  onOpen,
}: {
  images: GalleryImage[];
  startIndex: number;
  onOpen: (index: number) => void;
}) {
  if (images.length === BAND_SIZE) {
    return (
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:h-[min(52vw,540px)]">
        {images.map((image, slot) => (
          <GalleryTile
            key={image.src}
            image={image}
            index={startIndex + slot}
            onOpen={() => onOpen(startIndex + slot)}
            placement={BAND_PLACEMENTS[slot]}
            tall={slot === 0 || slot === 5}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
      {images.map((image, slot) => (
        <GalleryTile
          key={image.src}
          image={image}
          index={startIndex + slot}
          onOpen={() => onOpen(startIndex + slot)}
        />
      ))}
    </div>
  );
}

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = useMemo(
    () =>
      showAll
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.slice(0, INITIAL_VISIBLE_COUNT),
    [showAll],
  );

  const bands = useMemo(() => {
    const chunks: GalleryImage[][] = [];
    for (let i = 0; i < visibleImages.length; i += BAND_SIZE) {
      chunks.push(visibleImages.slice(i, i + BAND_SIZE));
    }
    return chunks;
  }, [visibleImages]);

  const hasMore = GALLERY_IMAGES.length > INITIAL_VISIBLE_COUNT;

  const closeLightbox = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
    }, CLOSE_DURATION_MS);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % GALLERY_IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const activeImage = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;
  const isOpen = activeIndex !== null;

  return (
    <>
      <section id="gallery" className="border-t border-brand-border/60 bg-white px-7 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 text-center md:mb-12">
            <HomeSectionEyebrow accent="cyan" className="mb-4">
              Straight from the shop
            </HomeSectionEyebrow>
            <h2 className="text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold tracking-[-0.3px] text-brand-dark">
              A taste of the gallery
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            {bands.map((band, bandIndex) => (
              <GalleryBand
                key={bandIndex}
                images={band}
                startIndex={bandIndex * BAND_SIZE}
                onOpen={setActiveIndex}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center md:mt-10">
              <button
                type="button"
                onClick={() => setShowAll((expanded) => !expanded)}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-[16px] font-bold text-brand-dark shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-brand-cream md:text-[17px]"
                aria-expanded={showAll}
              >
                {showAll ? "Show Less" : "View More Gallery"}
                <ChevronRightIcon
                  size={17}
                  className={showAll ? "rotate-90" : ""}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {isOpen && activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className={`absolute inset-0 bg-black/88 backdrop-blur-[2px] ${
              isClosing ? "animate-lightbox-overlay-out" : "animate-lightbox-overlay-in"
            }`}
            aria-label="Close gallery view"
          />

          <div className="pointer-events-none relative z-10 flex h-full w-full items-center justify-center px-14 py-16 sm:px-20 md:px-24">
            <button
              type="button"
              onClick={showPrevious}
              className="pointer-events-auto absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm transition-colors hover:bg-white/22 sm:left-5 sm:h-12 sm:w-12 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeftIcon size={22} />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="pointer-events-auto absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm transition-colors hover:bg-white/22 sm:right-5 sm:h-12 sm:w-12 md:right-8"
              aria-label="Next image"
            >
              <ChevronRightIcon size={22} />
            </button>

            <div className="pointer-events-auto relative max-h-[82vh] max-w-[min(92vw,1100px)]">
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -right-1 -top-1 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:-right-2 sm:-top-2 sm:h-11 sm:w-11"
                aria-label="Close"
              >
                <CloseIcon size={20} />
              </button>

              <div
                key={activeIndex}
                className={isClosing ? "" : "animate-lightbox-image-in"}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={1100}
                  height={825}
                  className="max-h-[82vh] w-auto max-w-[min(92vw,1100px)] rounded-lg object-contain shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
