"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { DesktopNav, MobileNavDrawer } from "./HeaderNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="mx-auto box-content flex h-full max-w-[1250px] items-center gap-4 px-7 sm:px-8 md:gap-6 md:px-10 lg:gap-8 lg:px-12"
      >
        <Link href="/" className="mr-2 shrink-0 md:mr-4 lg:mr-6">
          <Image
            src="/images/logo.png"
            alt="The Sandwich Shop & Dirty Soda Bar logo"
            width={160}
            height={160}
            className="h-[60px] w-[60px] rounded-full border-0 object-cover shadow-[0_4px_14px_rgba(237,78,141,0.22)]"
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
        <MobileNavDrawer
          pathname={pathname}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
