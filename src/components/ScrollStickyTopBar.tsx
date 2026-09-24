"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

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
  const barRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(STICKY_HEADER_HEIGHT);
  const [naturalHeight, setNaturalHeight] = useState(0);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateHeaderHeight = () => {
      const height = bar.offsetHeight;
      setHeaderHeight(height);
      if (window.scrollY <= 1) {
        setNaturalHeight(height);
      }
      document.documentElement.style.setProperty("--site-header-height", `${height}px`);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(bar);

    const onScroll = () => {
      setIsPinned(window.scrollY > 1);
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
    <SiteHeaderContext.Provider value={{ height: headerHeight, isFixed: isPinned }}>
      {isPinned && naturalHeight > 0 && (
        <div
          style={{ height: naturalHeight }}
          className="pointer-events-none"
          aria-hidden="true"
        />
      )}
      <div
        ref={barRef}
        className={`left-0 right-0 z-40 w-full overflow-visible transition-[height,background-color,box-shadow,border-color] duration-300 ease-out ${
          isPinned
            ? `fixed top-0 ${PINNED_BAR_CLASSES}`
            : "relative h-auto border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        {children}
      </div>
    </SiteHeaderContext.Provider>
  );
}

export function useStickyHeaderPinned() {
  return useSiteHeader().isFixed;
}
