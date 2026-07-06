import Image from "next/image";
import type { MenuCategoryHighlight } from "@/lib/menu-category-data";
import {
  CATEGORY_PAGE_LAYOUT,
  categorySectionClass,
} from "@/lib/category-page-layout";

const ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    line: "bg-brand-pink/80",
    ring: "hover:ring-brand-pink/15",
  },
  pink: {
    tag: "text-brand-pink-dark",
    line: "bg-brand-pink/80",
    ring: "hover:ring-brand-pink/15",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    line: "bg-brand-cyan/80",
    ring: "hover:ring-brand-cyan/15",
  },
} as const;

function HighlightTile({ item }: { item: MenuCategoryHighlight }) {
  const accent = ACCENT[item.accent];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-card-border bg-white shadow-[0_8px_28px_rgba(52,36,47,0.05)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(52,36,47,0.09)] ${accent.ring}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-4">
        <p
          className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${accent.tag}`}
        >
          <span className={`h-px w-4 shrink-0 ${accent.line}`} aria-hidden />
          {item.tagline}
        </p>
        <h3 className="mt-1.5 text-[1.05rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.62] text-brand-body">
          {item.description}
        </p>
      </div>
    </article>
  );
}

type AppetizersHighlightsSectionProps = {
  highlights: readonly MenuCategoryHighlight[];
};

export function AppetizersHighlightsSection({
  highlights,
}: AppetizersHighlightsSectionProps) {
  return (
    <section
      className={categorySectionClass("peach", {
        extra:
          "relative overflow-hidden bg-gradient-to-b from-brand-bg via-brand-warm-cream to-brand-bg",
      })}
    >
      <div
        className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-brand-pink/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-16 h-48 w-48 rounded-full bg-brand-pink/6 blur-3xl"
        aria-hidden
      />

      <div className={`relative ${CATEGORY_PAGE_LAYOUT.inner}`}>
        <header className={`max-w-[580px] ${CATEGORY_PAGE_LAYOUT.header}`}>
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            Highlights
          </p>
          <h2 className="mt-4 text-[clamp(1.65rem,3vw,2.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark text-balance">
            What makes this{" "}
            <span className="text-brand-cyan-dark">category special.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.72] text-brand-body">
            Four starters fried fresh and made to order — simple, generous, and
            easy to share.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {highlights.map((item) => (
            <HighlightTile key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
