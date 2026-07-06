import Image from "next/image";
import type { MenuCategoryShowcaseImage } from "@/lib/menu-category-data";

const ACCENT = {
  pink: {
    line: "bg-brand-pink/80",
    tag: "text-brand-pink-dark",
  },
  gold: {
    line: "bg-brand-pink/80",
    tag: "text-brand-pink-dark",
  },
  cyan: {
    line: "bg-brand-cyan/80",
    tag: "text-brand-cyan-dark",
  },
} as const;

type ShowcaseAccent = keyof typeof ACCENT;

const DEFAULT_ACCENTS: ShowcaseAccent[] = ["pink", "cyan", "pink", "cyan"];

function ShowcaseTile({
  item,
  accent,
}: {
  item: MenuCategoryShowcaseImage;
  accent: ShowcaseAccent;
}) {
  const styles = ACCENT[accent];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-card-border bg-white shadow-[0_8px_28px_rgba(52,36,47,0.05)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(52,36,47,0.09)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 50vw, 280px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      {item.label ? (
        <div className="border-t border-brand-border/50 px-4 py-4 md:px-5 md:py-5">
          {item.tagline ? (
            <p
              className={`flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${styles.tag}`}
            >
              <span className={`h-px w-5 shrink-0 ${styles.line}`} aria-hidden />
              {item.tagline}
              <span className={`h-px w-5 shrink-0 ${styles.line}`} aria-hidden />
            </p>
          ) : null}
          <h3
            className={`text-center text-[1.05rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark md:text-[1.125rem] ${item.tagline ? "mt-2" : ""}`}
          >
            {item.label}
          </h3>
        </div>
      ) : null}
    </article>
  );
}

export function MenuCategoryShowcaseGallery({
  images,
}: {
  images: readonly MenuCategoryShowcaseImage[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-5">
      {images.map((item, index) => (
        <ShowcaseTile
          key={item.src}
          item={item}
          accent={item.accent ?? DEFAULT_ACCENTS[index % DEFAULT_ACCENTS.length]}
        />
      ))}
    </div>
  );
}
