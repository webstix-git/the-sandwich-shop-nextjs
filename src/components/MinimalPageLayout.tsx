import Link from "next/link";
import type { ReactNode } from "react";
import {
  BREADCRUMB_LIST_CLASSNAME,
  BREADCRUMB_NAV_CLASSNAME,
} from "@/lib/breadcrumb-styles";
import { CATEGORY_PAGE_LAYOUT } from "@/lib/category-page-layout";

type MinimalPageLayoutProps = {
  title: string;
  description?: string;
  breadcrumbLabel?: string;
  breadcrumbParent?: { label: string; href: string };
  children: ReactNode;
};

export function MinimalPageLayout({
  title,
  description,
  breadcrumbLabel,
  breadcrumbParent,
  children,
}: MinimalPageLayoutProps) {
  const currentLabel = breadcrumbLabel ?? title;

  return (
    <>
      <section className="relative h-[220px] w-full overflow-hidden bg-[#1c1612] md:h-[240px]">
        <div
          className="pointer-events-none absolute inset-0 bg-black/48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/25"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto flex h-full max-w-[1240px] items-center px-7 sm:px-8 md:px-10 lg:px-12">
          <div className="w-full max-w-[600px]">
            <h1 className="text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-[52ch] text-[16px] font-light leading-[1.72] text-white/88 md:text-[17px]">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className={BREADCRUMB_NAV_CLASSNAME}>
        <ol className={BREADCRUMB_LIST_CLASSNAME}>
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
            {currentLabel}
          </li>
        </ol>
      </nav>

      <div className={`bg-white ${CATEGORY_PAGE_LAYOUT.section}`}>
        <div className="mx-auto max-w-[820px]">{children}</div>
      </div>
    </>
  );
}
