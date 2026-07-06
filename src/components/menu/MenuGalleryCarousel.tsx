"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MENU_GALLERY_IMAGES } from "@/lib/menu-page-data";

const VISIBLE_COUNT = 4;
const ROTATE_MS = 4000;

export function MenuGalleryCarousel() {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setOffset((current) => (current + 1) % MENU_GALLERY_IMAGES.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const visibleImages = Array.from({ length: VISIBLE_COUNT }, (_, index) => {
    const imageIndex = (offset + index) % MENU_GALLERY_IMAGES.length;
    return MENU_GALLERY_IMAGES[imageIndex];
  });

  return (
    <div
      className="mt-12 pb-[70px] md:mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {visibleImages.map((image, index) => (
          <div
            key={`${offset}-${image.src}`}
            className="animate-menu-gallery-fade relative aspect-[4/3] overflow-hidden rounded-2xl"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
