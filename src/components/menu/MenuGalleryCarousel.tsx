"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MENU_GALLERY_IMAGES } from "@/lib/menu-page-data";

/** Pause while the new item is fully in view. */
const PAUSE_MS = 2800;
/** Slide duration — keep in sync with the transition class. */
const TRANSITION_MS = 700;
/** Always show this many full cards on desktop; fewer on smaller screens. */
const VISIBLE_DESKTOP = 4;

const TOTAL = MENU_GALLERY_IMAGES.length;

/** Extra clones so the last → first jump stays off-screen. */
const TRACK_IMAGES = [
  ...MENU_GALLERY_IMAGES,
  ...MENU_GALLERY_IMAGES.slice(0, VISIBLE_DESKTOP),
];

function getLayout(width: number) {
  if (width >= 1024) return { visible: 4, gap: 24 };
  if (width >= 640) return { visible: 3, gap: 20 };
  return { visible: 2, gap: 16 };
}

export function MenuGalleryCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.clientWidth;
      const layout = getLayout(width);
      setGap(layout.gap);
      setSlideWidth(
        Math.floor(
          ((width - layout.gap * (layout.visible - 1)) / layout.visible) * 1000,
        ) / 1000,
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, PAUSE_MS + TRANSITION_MS);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (index < TOTAL) return;

    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [index]);

  const stepPx = slideWidth + gap;

  return (
    <div
      ref={viewportRef}
      className="mt-12 overflow-hidden pb-[70px] md:mt-16"
      aria-roledescription="carousel"
      aria-label="Menu food gallery"
    >
      <div className="overflow-hidden">
        <div
          className={`flex ${
            animate
              ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              : ""
          }`}
          style={{
            gap,
            width: slideWidth > 0 ? "max-content" : undefined,
            transform:
              stepPx > 0 ? `translate3d(-${index * stepPx}px, 0, 0)` : undefined,
          }}
        >
          {TRACK_IMAGES.map((image, slideIndex) => (
            <div
              key={`${image.src}-${slideIndex}`}
              className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-2xl"
              style={{
                width: slideWidth || undefined,
                flex: slideWidth ? `0 0 ${slideWidth}px` : "0 0 calc((100% - 1rem) / 2)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
