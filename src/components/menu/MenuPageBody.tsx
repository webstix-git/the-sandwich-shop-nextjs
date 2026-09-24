"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/components/icons";
import { MenuColdSandwichesSection } from "@/components/menu/MenuColdSandwichesSection";
import { MenuCateringCta } from "@/components/menu/MenuCateringCta";
import { MenuGalleryCarousel } from "@/components/menu/MenuGalleryCarousel";
import { useMenuSectionScrollMargin } from "@/components/menu/MenuCategoryFilter";
import {
  MENU_BURGERS,
  MENU_BREAKFAST,
  MENU_HASH_BROWNS_NOTE,
  MENU_KIDS_MENU,
  MENU_SIDES,
  MENU_SIGNATURE_FAVORITES,
  MENU_SIGNATURE_SECTION,
  MENU_SOUP,
  MENU_SPECIALTY_SANDWICHES,
  type MenuSideItem,
  type MenuTextItem,
} from "@/lib/menu-page-data";

type CompactSection = {
  id: string;
  title: string;
  scriptSubtitle: string;
  headingImage: string;
  headingImageAlt: string;
  items: readonly (MenuTextItem | MenuSideItem)[];
};

const COMPACT_SECTIONS: CompactSection[] = [
  MENU_SIDES,
  MENU_SOUP,
  MENU_BREAKFAST,
  MENU_KIDS_MENU,
];

function CategorySubtitle({ children }: { children: string }) {
  return (
    <p className="mt-1.5 text-xs font-bold uppercase leading-tight tracking-[0.14em] text-brand-pink-dark sm:text-[16px] sm:tracking-[1.5px]">
      {children}
    </p>
  );
}

function MenuItemRow({
  item,
  relaxed = false,
}: {
  item: MenuTextItem | MenuSideItem;
  relaxed?: boolean;
}) {
  const badge = "badge" in item ? item.badge : undefined;

  return (
    <li className={relaxed ? "py-5" : "py-4"}>
      <div className="flex items-baseline gap-2.5">
        <span className="text-[18px] font-bold leading-snug text-brand-dark md:text-[19px]">
          {item.name}
        </span>
        {badge && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-pink-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-pink-dark">
            <StarIcon size={10} className="text-brand-pink-dark" />
            {badge}
          </span>
        )}
        <span
          className="min-w-[12px] flex-1 translate-y-[-2px] border-b border-dotted border-[#C4B0A0]"
          aria-hidden
        />
        <span className="shrink-0 text-[18px] font-bold tabular-nums text-brand-dark md:text-[19px]">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="mt-1.5 text-[16px] leading-[1.65] text-brand-nav">
          {item.description}
        </p>
      )}
    </li>
  );
}

function MenuColumnHeader({
  title,
  scriptSubtitle,
  headingImage,
  headingImageAlt,
  note,
  relaxed = false,
}: {
  title: string;
  scriptSubtitle: string;
  headingImage: string;
  headingImageAlt: string;
  note?: string;
  relaxed?: boolean;
}) {
  return (
    <header className={relaxed ? "mb-8" : "mb-6"}>
      <div className="flex items-center gap-3.5 md:gap-4">
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
          <h2 className="text-[clamp(1.375rem,2.5vw,1.875rem)] font-extrabold leading-[1.1] tracking-[-0.3px] text-brand-dark">
            {title}
          </h2>
          <CategorySubtitle>{scriptSubtitle}</CategorySubtitle>
        </div>
      </div>
      {note && (
        <p className="mt-4 text-[16px] leading-[1.65] text-brand-nav">{note}</p>
      )}
    </header>
  );
}

function SignatureCard({
  item,
  index,
}: {
  item: (typeof MENU_SIGNATURE_FAVORITES)[number];
  index: number;
}) {
  const accentText = index % 2 === 1 ? "text-brand-cyan-accent" : "text-brand-pink-light";
  return (
    <Link href={item.href} className="group block">
      <article className="relative aspect-[16/10] overflow-hidden rounded-[20px] sm:aspect-[5/3]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/16" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[78%] bg-[linear-gradient(to_top,rgba(20,14,12,0.96)_0%,rgba(20,14,12,0.78)_32%,rgba(20,14,12,0.38)_58%,transparent_100%)]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[1] p-6 md:p-8">
          <p className={`flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] ${accentText}`}>
            {item.eyebrow}
          </p>

          <h3 className="mt-3 text-[clamp(1.55rem,3vw,2.05rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
            {item.headline}
            {item.headlineAccent ? (
              <span className={accentText}> {item.headlineAccent}</span>
            ) : null}
          </h3>

          <p className="mt-3.5 max-w-[44ch] text-[13px] font-light leading-[1.78] tracking-[0.02em] text-white/76 md:mt-4 md:text-[15px] md:leading-[1.72]">
            {item.description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export function MenuPageBody() {
  const menuSectionScrollMt = useMenuSectionScrollMargin();

  return (
    <>
      <section
        id="signature"
        className="mx-auto box-content max-w-[1250px] px-7 pb-6 pt-10 md:pt-12"
        style={{ scrollMarginTop: menuSectionScrollMt }}
      >
        <header className="mb-8 md:mb-10">
          <p className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {MENU_SIGNATURE_SECTION.eyebrow}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <h2 className="text-[clamp(1.85rem,3.8vw,2.5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-brand-dark">
              {MENU_SIGNATURE_SECTION.title}
            </h2>
            <p className="max-w-[300px] text-[15px] font-light leading-[1.7] tracking-[0.01em] text-brand-nav sm:text-right md:text-[16px]">
              {MENU_SIGNATURE_SECTION.subtitle}
            </p>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {MENU_SIGNATURE_FAVORITES.map((item, index) => (
            <SignatureCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto box-content max-w-[1250px] px-7 pb-0 pt-10 md:pt-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div
            id="specialty-sandwiches"
            style={{ scrollMarginTop: menuSectionScrollMt }}
          >
            <MenuColumnHeader
              title={MENU_SPECIALTY_SANDWICHES.title}
              scriptSubtitle={MENU_SPECIALTY_SANDWICHES.scriptSubtitle}
              headingImage={MENU_SPECIALTY_SANDWICHES.headingImage}
              headingImageAlt={MENU_SPECIALTY_SANDWICHES.headingImageAlt}
            />
            <ul className="divide-y divide-[#E5D4C4]">
              {MENU_SPECIALTY_SANDWICHES.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>

          <div id="smash-burgers" style={{ scrollMarginTop: menuSectionScrollMt }}>
            <MenuColumnHeader
              title={MENU_BURGERS.title}
              scriptSubtitle={MENU_BURGERS.scriptSubtitle}
              headingImage={MENU_BURGERS.headingImage}
              headingImageAlt={MENU_BURGERS.headingImageAlt}
              note={MENU_BURGERS.note}
            />
            <ul className="divide-y divide-[#E5D4C4]">
              {MENU_BURGERS.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <MenuColdSandwichesSection scrollMarginTop={menuSectionScrollMt} />

        <div className="mt-16 grid gap-14 sm:grid-cols-2 md:mt-20 md:gap-x-12 md:gap-y-16 lg:mt-24 lg:gap-x-16">
          {COMPACT_SECTIONS.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex min-w-0 flex-col sm:px-1 md:px-3 lg:px-5"
              style={{ scrollMarginTop: menuSectionScrollMt }}
            >
              <MenuColumnHeader
                title={section.title}
                scriptSubtitle={section.scriptSubtitle}
                headingImage={section.headingImage}
                headingImageAlt={section.headingImageAlt}
                relaxed
              />
              <ul className="flex-1 divide-y divide-[#E5D4C4]">
                {section.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} relaxed />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mb-10 max-w-[760px] rounded-2xl border border-brand-pink/35 bg-brand-pink-light/50 px-6 py-4 text-center text-[17px] font-semibold leading-relaxed text-brand-dark shadow-[0_4px_18px_rgba(237,78,141,0.12)] md:mb-12 md:px-8 md:py-5 md:text-[20px]">
          {MENU_HASH_BROWNS_NOTE.replace("$1.50", "")}
          <span className="font-extrabold text-brand-pink-dark">$1.50</span>
        </p>

        <MenuGalleryCarousel />
      </section>

      <div style={{ scrollMarginTop: menuSectionScrollMt }}>
        <MenuCateringCta />
      </div>
    </>
  );
}
