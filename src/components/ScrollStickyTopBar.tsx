"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { isCompactIntroPage } from "@/lib/compact-intro-pages";

/** Fallback header height; updated at runtime via ResizeObserver. */
export const STICKY_HEADER_HEIGHT = 100;

type SiteHeaderContextValue = {
  height: number;
  isFixed: boolean;
};

const SiteHeaderContext = createContext<SiteHeaderContextValue>({
  height: STICKY_HEADER_HEIGHT,
  isFixed: false,
});

export function useSiteHeader() {
  return useContext(SiteHeaderContext);
}

const PINNED_BAR_CLASSES =
  "h-[100px] border-b border-brand-border/60 bg-brand-bg/95 shadow-[0_4px_24px_rgba(52,36,47,0.08)] backdrop-blur-sm";

type ScrollStickyTopBarProps = {
  children: React.ReactNode;
};

export function ScrollStickyTopBar({ children }: ScrollStickyTopBarProps) {
  const pathname = usePathname();
  const useCompactIntroHeader = isCompactIntroPage(pathname);
  const barRef = useRef<HTMLDivElement>(null);
  const [isScrollPinned, setIsScrollPinned] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(STICKY_HEADER_HEIGHT);

  const showPinnedAppearance = useCompactIntroHeader || isScrollPinned;
  const isHeaderFixed = useCompactIntroHeader || isScrollPinned;

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateHeaderHeight = () => {
      const height = bar.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty("--site-header-height", `${height}px`);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(bar);

    const onScroll = () => {
      setIsScrollPinned(window.scrollY > 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeaderHeight, { passive: true });
    onScroll();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <SiteHeaderContext.Provider value={{ height: headerHeight, isFixed: isHeaderFixed }}>
      {isHeaderFixed && (
        <div
          style={{ height: headerHeight }}
          className="pointer-events-none"
          aria-hidden="true"
        />
      )}
      <div
        ref={barRef}
        className={`left-0 right-0 z-40 w-full overflow-visible transition-[height,background-color,box-shadow,border-color] duration-300 ease-out ${
          isHeaderFixed
            ? `fixed top-0 ${PINNED_BAR_CLASSES}`
            : showPinnedAppearance
              ? `relative ${PINNED_BAR_CLASSES}`
              : "relative h-auto border-b border-brand-border/60 bg-brand-bg/95 shadow-none backdrop-blur-sm"
        }`}
      >
        {children}
      </div>
    </SiteHeaderContext.Provider>
  );
}

// Backward-compatible alias for compact header styling in Header.tsx
export function useStickyHeaderPinned() {
  const { isFixed } = useSiteHeader();
  const pathname = usePathname();
  return isCompactIntroPage(pathname) || isFixed;
}
