"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRightIcon, CloseIcon, MenuIcon } from "./icons";
import { DesktopNav, MobileNavItem } from "./HeaderNav";
import { NAV_LINKS } from "@/lib/navigation";
import { useStickyHeaderPinned } from "./ScrollStickyTopBar";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPinned = useStickyHeaderPinned();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`mx-auto flex w-full max-w-[1240px] items-center gap-4 px-7 sm:px-8 md:gap-6 md:px-10 lg:gap-8 lg:px-12 ${
          isPinned ? "h-full py-0" : "py-4"
        }`}
      >
        <Link href="/" className="mr-2 shrink-0 md:mr-4 lg:mr-6">
          <Image
            src="/images/logo.png"
            alt="The Sandwich Shop & Dirty Soda Bar logo"
            width={160}
            height={160}
            className={`rounded-full object-cover transition-all duration-300 ease-out ${
              isPinned
                ? "h-[90px] w-[90px] border-0 shadow-[0_4px_14px_rgba(237,78,141,0.22)]"
                : "h-[104px] w-[104px] border-0 shadow-[0_6px_18px_rgba(237,78,141,0.28)] md:h-[160px] md:w-[160px]"
            }`}
            priority
          />
        </Link>

        <DesktopNav pathname={pathname} />

        <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0">
          <Link
            href="/our-menu"
            className="hidden shrink-0 rounded-full bg-brand-pink px-6 py-3 text-base font-semibold !text-white shadow-[0_6px_18px_rgba(237,78,141,0.4)] transition-all duration-300 ease-out hover:-translate-y-px hover:bg-brand-pink-hover hover:!text-white sm:inline-block"
          >
            View Our Menu
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
              View Our Menu
              <ChevronRightIcon size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
