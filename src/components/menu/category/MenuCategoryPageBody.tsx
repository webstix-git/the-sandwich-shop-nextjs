"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon, SodaFlavorIcon } from "@/components/icons";
import { MenuColdSandwichesSection } from "@/components/menu/MenuColdSandwichesSection";
import { AppetizersHighlightsSection } from "@/components/menu/category/AppetizersHighlightsSection";
import { AppetizersTrySomethingElseSection } from "@/components/menu/category/AppetizersTrySomethingElseSection";
import { CategoryHighlightsSection } from "@/components/menu/category/CategoryHighlightsSection";
import { MenuCategoryShowcaseGallery } from "@/components/menu/category/MenuCategoryShowcaseGallery";
import { MenuPremiumItemList } from "@/components/menu/category/MenuPremiumItemList";
import { SODA_FLAVORS } from "@/lib/constants";
import { MENU_HASH_BROWNS_NOTE } from "@/lib/menu-page-data";
import type {
  MenuCategoryEditorial,
  MenuCategoryPageData,
} from "@/lib/menu-category-data";
import {
  CATEGORY_PAGE_LAYOUT,
  categorySectionClass,
  type CategorySectionTone,
} from "@/lib/category-page-layout";
import { foodImageClassName } from "@/lib/dessert-cups-image";

const LAYOUT = CATEGORY_PAGE_LAYOUT;

function highlightsSectionTone(page: MenuCategoryPageData): CategorySectionTone {
  if (page.slug === "kids-menu" || page.slug === "wine-cocktails") {
    return "cream";
  }
  if (page.includeColdSandwiches || (page.menuSections && page.menuSections.length > 0)) {
    return "peach";
  }
  return "cream";
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold-dark sm:text-[11px]">
      <span className="h-px w-8 bg-brand-gold/80" aria-hidden />
      {children}
    </p>
  );
}

function SectionTitle({
  title,
  highlight,
  centered = false,
}: {
  title: string;
  highlight: string;
  centered?: boolean;
}) {
  return (
    <h2
      className={`mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance ${
        centered ? "mx-auto" : ""
      }`}
    >
      {title}{" "}
      <span className="text-brand-gold-dark">{highlight}</span>
    </h2>
  );
}

function MenuSectionHeader({
  title,
  scriptSubtitle,
  headingImage,
  headingImageAlt,
  note,
}: {
  title: string;
  scriptSubtitle: string;
  headingImage: string;
  headingImageAlt: string;
  note?: string;
}) {
  return (
    <header className="mb-8">
      <div className="flex items-start gap-3.5 md:gap-4">
        <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-[14px] shadow-[0_4px_14px_rgba(52,36,47,0.1)] md:h-14 md:w-14 md:rounded-2xl">
          <Image
            src={headingImage}
            alt={headingImageAlt}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[clamp(1.375rem,2.5vw,1.875rem)] font-extrabold tracking-[-0.3px] text-brand-dark">
            {title}
          </h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-pink-dark sm:text-[16px] sm:tracking-[1.5px]">
            {scriptSubtitle}
          </p>
          {note ? (
            <p className="mt-4 text-[16px] leading-[1.65] text-brand-nav">{note}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function EditorialBlock({
  editorial,
  reversed = false,
  tone = "white",
}: {
  editorial: MenuCategoryEditorial;
  reversed?: boolean;
  tone?: CategorySectionTone;
}) {
  return (
    <section className={categorySectionClass(tone)}>
      <div
        className={`${LAYOUT.inner} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}
      >
        <div
          className={`relative ${reversed ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
        >
          <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_24px_56px_rgba(52,36,47,0.14)]">
            <Image
              src={editorial.image}
              alt={editorial.imageAlt}
              width={600}
              height={450}
              className={foodImageClassName(
                editorial.image,
                "h-[300px] w-full object-cover md:h-[420px]",
              )}
            />
          </div>
        </div>

        <div className={reversed ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
          <SectionEyebrow>{editorial.eyebrow}</SectionEyebrow>
          <SectionTitle title={editorial.title} highlight={editorial.highlight} />
          {editorial.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[16px] leading-[1.72] text-brand-body md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          {editorial.ctaLabel && editorial.ctaHref ? (
            <Link
              href={editorial.ctaHref}
              className="group mt-8 inline-flex items-center gap-2 text-[16px] font-semibold text-brand-pink transition-colors hover:text-brand-pink-hover"
            >
              {editorial.ctaLabel}
              <ChevronRightIcon
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CategoryCtaSection({ cta }: { cta: MenuCategoryPageData["cta"] }) {
  return (
    <section className={LAYOUT.ctaSection}>
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-brand-gold/35 bg-brand-footer pb-[70px] shadow-[0_24px_64px_rgba(50,39,30,0.22)]">
        <Image
          src={cta.backgroundImage}
          alt=""
          fill
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/28"
          aria-hidden
        />

        <div className="relative z-[2] grid items-center gap-10 px-7 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-10 md:pt-10 lg:px-12 lg:pt-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-gold/50 bg-black/25 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fce6b8]">
              {cta.eyebrow}
            </span>

            <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
              {cta.title}{" "}
              <span className="text-[#fcd98a]">{cta.highlight}</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              {cta.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={cta.primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-[16px] font-extrabold !text-[#261e17] shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#f5b82e] md:text-[17px]"
              >
                {cta.primaryLabel}
                <ChevronRightIcon size={17} className="text-[#261e17]" />
              </Link>
              {cta.secondaryLabel && cta.secondaryHref ? (
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-7 py-3 text-[16px] font-bold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-brand-cream md:text-[17px]"
                >
                  {cta.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="hidden min-h-[280px] md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export function MenuCategoryPageBody({ page }: { page: MenuCategoryPageData }) {
  const hasMenu = page.menuSections && page.menuSections.length > 0;

  return (
    <>
      <section className={categorySectionClass("white", { first: true })}>
        <div className={LAYOUT.inner}>
          <header className={`max-w-[640px] ${LAYOUT.header}`}>
            <SectionEyebrow>{page.opening.eyebrow}</SectionEyebrow>
            <SectionTitle
              title={page.opening.title}
              highlight={page.opening.highlight}
            />
            <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
              {page.opening.description}
            </p>
          </header>

          {page.showcaseImages && page.showcaseImages.length > 0 ? (
            <MenuCategoryShowcaseGallery images={page.showcaseImages} />
          ) : null}

          {hasMenu ? (
            <div
              className={
                page.menuSections!.length > 1
                  ? "grid gap-12 lg:grid-cols-2 lg:gap-14"
                  : "max-w-[720px]"
              }
            >
              {page.menuSections!.map((section) => (
                <div key={section.id} id={section.id}>
                  <MenuSectionHeader
                    title={section.title}
                    scriptSubtitle={section.scriptSubtitle}
                    headingImage={section.headingImage}
                    headingImageAlt={section.headingImageAlt}
                    note={section.note}
                  />
                  <MenuPremiumItemList items={section.items} relaxed />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {page.includeColdSandwiches ? (
        <section className={categorySectionClass("cream")}>
          <div className={LAYOUT.inner}>
            <MenuColdSandwichesSection scrollMarginTop={88} />
            <p className="mx-auto mt-12 max-w-[760px] rounded-2xl border border-brand-gold/35 bg-brand-gold-light/50 px-6 py-4 text-center text-[17px] font-semibold leading-relaxed text-brand-dark shadow-[0_4px_18px_rgba(242,169,28,0.12)] md:px-8 md:py-5 md:text-[20px]">
              {MENU_HASH_BROWNS_NOTE.replace("$1.50", "")}
              <span className="font-extrabold text-brand-gold-dark">$1.50</span>
            </p>
          </div>
        </section>
      ) : null}

      {page.flavorSection ? (
        <section className={categorySectionClass("cream")}>
          <div className={LAYOUT.inner}>
            <header className={`mx-auto max-w-[680px] text-center ${LAYOUT.header}`}>
              <SectionEyebrow>{page.flavorSection.eyebrow}</SectionEyebrow>
              <SectionTitle
                title={page.flavorSection.title}
                highlight={page.flavorSection.highlight}
                centered
              />
              <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
                {page.flavorSection.description}
              </p>
            </header>

            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
              {SODA_FLAVORS.map((flavor) => (
                <span
                  key={flavor.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan-light/40 px-5 py-2.5 text-[15px] font-semibold text-brand-cyan-dark"
                >
                  <SodaFlavorIcon icon={flavor.icon} />
                  {flavor.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.highlights && page.highlights.length > 0 ? (
        page.slug === "appetizers" ? (
          <>
            <AppetizersHighlightsSection highlights={page.highlights} />
            {page.exploreSection ? (
              <AppetizersTrySomethingElseSection section={page.exploreSection} />
            ) : null}
          </>
        ) : (
          <CategoryHighlightsSection
            highlights={page.highlights}
            tone={highlightsSectionTone(page)}
          />
        )
      ) : null}

      {page.editorial ? (
        <EditorialBlock
          editorial={page.editorial}
          tone={
            page.slug === "appetizers"
              ? "cream"
              : page.flavorSection
                ? "cream"
                : page.highlights
                  ? "white"
                  : "cream"
          }
        />
      ) : null}

      {page.secondaryEditorial ? (
        <EditorialBlock
          editorial={page.secondaryEditorial}
          reversed
          tone="peach"
        />
      ) : null}

      <CategoryCtaSection cta={page.cta} />
    </>
  );
}
