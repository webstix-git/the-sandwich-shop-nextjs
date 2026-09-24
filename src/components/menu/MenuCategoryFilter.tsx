"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MenuNavIcon } from "@/components/menu/menu-icons";
import { useSiteHeader } from "@/components/ScrollStickyTopBar";
import { MENU_CATEGORY_CHIPS } from "@/lib/menu-page-data";

const FILTER_SCROLL_PADDING = 12;

export function MenuCategoryFilter() {
  const { height: headerHeight } = useSiteHeader();
  const [activeChip, setActiveChip] = useState<string>(MENU_CATEGORY_CHIPS[0].id);
  const [filterHeight, setFilterHeight] = useState(72);
  const [isPinned, setIsPinned] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stickyTop = headerHeight;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateHeight = () => setFilterHeight(nav.offsetHeight);
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(nav);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const updatePinned = () => {
      const { top } = anchor.getBoundingClientRect();
      setIsPinned(top <= stickyTop);
    };

    updatePinned();
    window.addEventListener("scroll", updatePinned, { passive: true });
    window.addEventListener("resize", updatePinned, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePinned);
      window.removeEventListener("resize", updatePinned);
    };
  }, [stickyTop]);

  useEffect(() => {
    const sectionIds = MENU_CATEGORY_CHIPS.map((chip) => chip.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const topMargin = stickyTop + filterHeight + FILTER_SCROLL_PADDING;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveChip(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${topMargin}px 0px -48% 0px`,
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [filterHeight, stickyTop]);

  useEffect(() => {
    const chip = chipRefs.current[activeChip];
    chip?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeChip]);

  const scrollToSection = useCallback(
    (id: string) => {
      const section = document.getElementById(id);
      if (!section) return;

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        stickyTop -
        filterHeight -
        FILTER_SCROLL_PADDING;

      isClickScrolling.current = true;
      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);

      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

      clickScrollTimer.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 900);
    },
    [filterHeight, stickyTop],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || !MENU_CATEGORY_CHIPS.some((chip) => chip.id === hash)) return;

    setActiveChip(hash);

    const scrollTimer = window.setTimeout(() => {
      scrollToSection(hash);
    }, 150);

    return () => window.clearTimeout(scrollTimer);
  }, [scrollToSection]);

  const handleChipClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveChip(id);
    scrollToSection(id);
  };

  return (
    <div ref={anchorRef}>
      {isPinned && (
        <div style={{ height: filterHeight }} className="pointer-events-none" aria-hidden />
      )}
      <nav
        ref={navRef}
        aria-label="Menu categories"
        className={`z-[35] border-b border-brand-border/50 bg-brand-bg/96 px-4 py-4 shadow-[0_4px_20px_rgba(52,36,47,0.06)] backdrop-blur-md sm:px-7 md:py-5 ${
          isPinned ? "fixed left-0 right-0" : "relative"
        }`}
        style={isPinned ? { top: stickyTop } : undefined}
      >
        <div className="mx-auto min-w-0 max-w-[1250px]">
          <div
            className="flex w-full items-center justify-start gap-1 overflow-x-auto rounded-full border border-[#E8D5C4] bg-white px-3 py-2 shadow-[0_8px_24px_rgba(52,36,47,0.07)] scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1.5 sm:px-4 lg:justify-between lg:overflow-x-visible lg:px-5 [&::-webkit-scrollbar]:hidden"
            role="tablist"
          >
            {MENU_CATEGORY_CHIPS.map((chip) => {
              const isActive = activeChip === chip.id;
              return (
                <a
                  key={chip.id}
                  ref={(el) => {
                    chipRefs.current[chip.id] = el;
                  }}
                  href={`#${chip.id}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={(e) => handleChipClick(e, chip.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-[12px] font-bold transition-all duration-300 ease-out sm:gap-2.5 sm:px-3.5 sm:py-2.5 sm:text-[15px] md:text-[16px] ${
                    isActive
                      ? "bg-brand-pink !text-white shadow-[0_4px_16px_rgba(237,78,141,0.32)]"
                      : "text-brand-dark hover:bg-brand-blush/70 hover:text-brand-pink-dark"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-9 sm:w-9 ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-brand-pink/10 text-brand-pink-dark ring-1 ring-brand-pink/20"
                    }`}
                  >
                    <MenuNavIcon
                      icon={chip.icon}
                      size={20}
                      className={isActive ? "text-white" : "text-brand-pink-dark"}
                    />
                  </span>
                  {chip.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export function useMenuSectionScrollMargin(filterHeight = 72): number {
  const { height: headerHeight } = useSiteHeader();
  return headerHeight + filterHeight + FILTER_SCROLL_PADDING;
}
