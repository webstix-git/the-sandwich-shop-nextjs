"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/navigation";
import { ChevronRightIcon, CloseIcon, MenuIcon } from "./icons";
import { DesktopNav, MobileNavItem } from "./HeaderNav";

export function HomeHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [naturalHeight, setNaturalHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateNaturalHeight = () => {
      if (window.scrollY <= 1) {
        setNaturalHeight(header.offsetHeight);
      }
    };

    updateNaturalHeight();

    const resizeObserver = new ResizeObserver(updateNaturalHeight);
    resizeObserver.observe(header);

    const onScroll = () => {
      setIsPinned(window.scrollY > 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNaturalHeight, { passive: true });
    onScroll();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNaturalHeight);
    };
  }, []);

  return (
    <>
      {isPinned && naturalHeight > 0 && (
        <div
          style={{ height: naturalHeight }}
          className="pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div
        ref={headerRef}
        className={`left-0 right-0 z-40 w-full overflow-visible transition-[height,background-color,box-shadow,border-color] duration-300 ease-out ${
          isPinned
            ? "fixed top-0 h-[100px] border-b border-brand-border/40 bg-brand-bg/95 shadow-[0_4px_24px_rgba(52,36,47,0.08)] backdrop-blur-sm"
            : "relative h-auto border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        <header
          className={`mx-auto flex w-full max-w-[1240px] items-center gap-4 px-7 sm:px-8 md:gap-6 md:px-10 lg:gap-8 lg:px-12 ${
            isPinned ? "h-full py-0" : "py-4"
          }`}
        >
          <Link href="/" className="mr-2 shrink-0 md:mr-4 lg:mr-6">
            <Image
              src="/images/logo.png"
              alt="The Sandwich Shop & Dirty Soda Bar logo"
              width={135}
              height={135}
              className={`rounded-full object-cover transition-all duration-300 ease-out ${
                isPinned
                  ? "h-[75px] w-[75px] border-0 shadow-[0_4px_14px_rgba(237,78,141,0.22)]"
                  : "h-[88px] w-[88px] border-0 shadow-[0_6px_18px_rgba(237,78,141,0.28)] md:h-[135px] md:w-[135px]"
              }`}
              priority
            />
          </Link>

          <DesktopNav pathname={pathname} />

          <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0">
            <Link
              href="/our-menu"
              className="hidden shrink-0 rounded-full bg-brand-pink px-[26px] py-3 text-base font-semibold !text-white shadow-[0_6px_18px_rgba(237,78,141,0.4)] transition-all duration-300 ease-out hover:-translate-y-px hover:bg-brand-pink-hover hover:!text-white sm:inline-block"
            >
              See the Menu
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-brand-nav transition-colors hover:bg-white/60 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-brand-dark/40 lg:hidden">
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,340px)] flex-col overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-brand-dark">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-brand-nav hover:bg-brand-blush"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <MobileNavItem
                  key={link.href}
                  link={link}
                  onClose={() => setMobileOpen(false)}
                  pathname={pathname}
                />
              ))}
            </nav>
            <Link
              href="/our-menu"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-center text-base font-semibold !text-white shadow-[0_6px_18px_rgba(237,78,141,0.4)] hover:!text-white"
            >
              See the Menu
              <ChevronRightIcon size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
