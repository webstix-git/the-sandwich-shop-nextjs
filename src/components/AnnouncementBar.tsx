"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import { isCompactIntroPage } from "@/lib/compact-intro-pages";
import { StoreIcon } from "./icons";

export function AnnouncementBar() {
  const pathname = usePathname();

  if (isCompactIntroPage(pathname)) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 bg-brand-cyan px-4 py-2.5 text-center text-[15px] font-medium tracking-[0.2px] text-white">
      <span className="inline-flex">
        <StoreIcon />
      </span>
      <span>
        Now open in Downtown La Crosse —{" "}
        <Link
          href={SITE.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-white/50 underline-offset-[3px] transition-colors hover:text-white/90"
        >
          {SITE.address}
        </Link>
      </span>
      <span className="opacity-70">•</span>
      <span className="font-semibold">Dine in &amp; carry out</span>
    </div>
  );
}
