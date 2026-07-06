"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  BREADCRUMB_LIST_CLASSNAME,
  BREADCRUMB_NAV_CLASSNAME,
} from "@/lib/breadcrumb-styles";

const STAGGER = ["0ms"] as const;

export type PageIntroContent = {
  primaryImage: string;
  primaryImageAlt: string;
};

type PageIntroHeroProps = {
  intro: PageIntroContent;
  breadcrumbLabel: string;
  description?: string;
  breadcrumbParent?: { label: string; href: string };
  imageLayout?: "contain" | "cover";
  solidOverlay?: boolean;
  breadcrumbClassName?: string;
  children?: ReactNode;
};

const DEFAULT_BREADCRUMB_CLASSNAME = BREADCRUMB_LIST_CLASSNAME;

export function PageIntroHero({
  intro,
  breadcrumbLabel,
  description,
  breadcrumbParent,
  imageLayout = "contain",
  solidOverlay = false,
  breadcrumbClassName = DEFAULT_BREADCRUMB_CLASSNAME,
  children,
}: PageIntroHeroProps) {
  const isCover = imageLayout === "cover";

  return (
    <>
      <section
        className="relative h-[350px] w-full overflow-hidden bg-[#1c1612]"
        aria-label={intro.primaryImageAlt}
      >
        {isCover ? (
          <Image
            src={intro.primaryImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_42%]"
            priority
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="absolute inset-0 flex justify-end overflow-hidden">
            <Image
              src={intro.primaryImage}
              alt=""
              width={1920}
              height={350}
              className="h-full w-auto max-w-none translate-x-8 object-contain object-right md:translate-x-14 lg:translate-x-20"
              priority
              unoptimized
              aria-hidden
            />
          </div>
        )}

        <div
          className={`pointer-events-none absolute inset-0 ${
            solidOverlay
              ? "bg-black/55"
              : isCover
                ? "bg-black/48"
                : "bg-black/42"
          }`}
          aria-hidden
        />
        {!solidOverlay ? (
          <div
            className={`pointer-events-none absolute inset-0 ${
              isCover
                ? "bg-gradient-to-r from-black/82 via-black/55 to-black/25"
                : "bg-gradient-to-r from-black/72 via-black/38 to-black/10"
            }`}
            aria-hidden
          />
        ) : null}

        <div className="relative z-[1] mx-auto flex h-full max-w-[1240px] items-center px-7 sm:px-8 md:px-10 lg:px-12">
          <div className="w-full max-w-[600px]">
            <h1
              className="animate-menu-intro-rise text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white opacity-0 [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
              style={{ animationDelay: STAGGER[0] }}
            >
              {breadcrumbLabel}
            </h1>
            {description ? (
              <p
                className="animate-menu-intro-rise mt-4 max-w-[52ch] text-[16px] font-light leading-[1.72] text-white/88 opacity-0 md:text-[17px]"
                style={{ animationDelay: "80ms" }}
              >
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className={BREADCRUMB_NAV_CLASSNAME}>
        <ol className={breadcrumbClassName}>
          <li>
            <Link
              href="/"
              className="text-brand-nav transition-colors hover:text-brand-pink-dark"
            >
              Home
            </Link>
          </li>
          {breadcrumbParent ? (
            <>
              <li className="text-brand-body/50" aria-hidden>
                /
              </li>
              <li>
                <Link
                  href={breadcrumbParent.href}
                  className="text-brand-nav transition-colors hover:text-brand-pink-dark"
                >
                  {breadcrumbParent.label}
                </Link>
              </li>
            </>
          ) : null}
          <li className="text-brand-body/50" aria-hidden>
            /
          </li>
          <li className="font-semibold text-brand-dark" aria-current="page">
            {breadcrumbLabel}
          </li>
        </ol>
      </nav>

      {children}
    </>
  );
}
