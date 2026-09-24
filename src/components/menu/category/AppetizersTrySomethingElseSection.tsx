import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import type { MenuCategoryExploreSection } from "@/lib/menu-category-data";
import {
  CATEGORY_PAGE_LAYOUT,
  categorySectionClass,
} from "@/lib/category-page-layout";

const ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    ring: "group-hover:ring-brand-pink/20",
    arrow: "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white",
    bar: "bg-brand-pink",
  },
  pink: {
    tag: "text-brand-pink-dark",
    ring: "group-hover:ring-brand-pink/20",
    arrow: "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white",
    bar: "bg-brand-pink",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    ring: "group-hover:ring-brand-cyan/20",
    arrow: "bg-brand-cyan-light text-brand-cyan-dark group-hover:bg-brand-cyan group-hover:text-white",
    bar: "bg-brand-cyan",
  },
} as const;

function ExplorePanel({
  item,
}: {
  item: MenuCategoryExploreSection["items"][number];
}) {
  const accent = ACCENT[item.accent];

  return (
    <Link
      href={item.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-brand-card-border bg-white shadow-[0_10px_32px_rgba(52,36,47,0.06)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(52,36,47,0.11)] sm:flex-row ${accent.ring}`}
    >
      <div
        className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 ${accent.bar} transition-transform duration-300 group-hover:scale-y-100`}
        aria-hidden
      />

      <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-[42%] sm:min-h-[188px]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 260px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/20 sm:via-transparent sm:to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div>
          <p
            className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] ${accent.tag}`}
          >
            {item.tagline}
          </p>
          <h3 className="mt-2 text-[1.125rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark md:text-[1.2rem]">
            {item.title}
          </h3>
          <p className="mt-2 text-[14px] leading-[1.62] text-brand-body">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-brand-border/50 pt-4">
          <span className="text-[14px] font-semibold text-brand-dark transition-colors duration-300 group-hover:text-brand-pink-dark">
            {item.ctaLabel}
          </span>
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${accent.arrow}`}
            aria-hidden
          >
            <ChevronRightIcon
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function AppetizersTrySomethingElseSection({
  section,
}: {
  section: MenuCategoryExploreSection;
}) {
  return (
    <section
      className={categorySectionClass("white", {
        extra: "relative overflow-hidden",
      })}
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-pink/6 blur-3xl"
        aria-hidden
      />

      <div className={`relative ${CATEGORY_PAGE_LAYOUT.inner}`}>
        <div
          className={`${CATEGORY_PAGE_LAYOUT.header} lg:flex lg:items-end lg:justify-between lg:gap-10`}
        >
          <header className="max-w-[480px]">
            <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(1.65rem,3vw,2.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark text-balance">
              {section.title}{" "}
              <span className="text-brand-pink-dark">{section.highlight}</span>
            </h2>
          </header>
          <p className="mt-4 max-w-[36ch] text-[16px] leading-[1.72] text-brand-body lg:mt-0 lg:pb-1">
            {section.description}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {section.items.map((item) => (
            <ExplorePanel key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
