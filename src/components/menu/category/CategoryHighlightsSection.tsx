import Image from "next/image";
import type { MenuCategoryHighlight } from "@/lib/menu-category-data";
import {
  CATEGORY_PAGE_LAYOUT,
  categorySectionClass,
  type CategorySectionTone,
} from "@/lib/category-page-layout";

const ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
  },
  pink: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    ring: "hover:ring-brand-cyan/15",
  },
} as const;

function HighlightCard({ item }: { item: MenuCategoryHighlight }) {
  const accent = ACCENT[item.accent];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-card-border bg-white shadow-[0_8px_28px_rgba(52,36,47,0.05)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(52,36,47,0.09)] ${accent.ring}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-brand-border/50 px-5 py-5">
        <p
          className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] ${accent.tag}`}
        >
          {item.tagline}
        </p>
        <h3 className="mt-2.5 text-[1.125rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark">
          {item.title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.65] text-brand-body">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function CategoryHighlightsSection({
  highlights,
  tone = "cream",
  description,
}: {
  highlights: readonly MenuCategoryHighlight[];
  tone?: CategorySectionTone;
  description?: string;
}) {
  const centered = highlights.length === 3;

  return (
    <section className={categorySectionClass(tone)}>
      <div className={CATEGORY_PAGE_LAYOUT.inner}>
        <header
          className={`${centered ? "mx-auto max-w-[680px] text-center" : "max-w-[640px]"} ${CATEGORY_PAGE_LAYOUT.header}`}
        >
          <p
            className={`inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px] ${centered ? "justify-center" : ""}`}
          >
            Highlights
          </p>
          <h2
            className={`mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance ${centered ? "mx-auto" : ""}`}
          >
            What makes this{" "}
            <span className="text-brand-cyan-dark">category special.</span>
          </h2>
          {description ? (
            <p
              className={`mt-5 text-[16px] leading-[1.72] text-brand-body md:text-[17px] ${centered ? "mx-auto max-w-[52ch]" : "max-w-[52ch]"}`}
            >
              {description}
            </p>
          ) : null}
        </header>

        <div
          className={`grid gap-5 ${
            highlights.length === 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          } lg:gap-6`}
        >
          {highlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
