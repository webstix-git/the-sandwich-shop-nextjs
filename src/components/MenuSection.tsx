import Image from "next/image";
import Link from "next/link";
import { HomeSectionEyebrow } from "@/components/HomeSectionEyebrow";
import { ChevronRightIcon } from "@/components/icons";
import { MENU_ITEMS } from "@/lib/constants";

const MENU_CARD_ACCENT = {
  pink: {
    eyebrow: "text-brand-pink-light",
    line: "bg-brand-pink/85",
    ring: "group-hover:ring-brand-pink/25",
    cta: "text-brand-pink-dark group-hover:text-brand-pink",
    ctaCircle:
      "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white",
  },
  cyan: {
    eyebrow: "text-brand-cyan-light",
    line: "bg-brand-cyan/85",
    ring: "group-hover:ring-brand-cyan/25",
    cta: "text-brand-cyan-dark group-hover:text-brand-cyan",
    ctaCircle:
      "bg-brand-cyan-light text-brand-cyan-dark group-hover:bg-brand-cyan group-hover:text-white",
  },
} as const;

function getMenuCardAccent(tagColor: string) {
  return tagColor.includes("pink")
    ? MENU_CARD_ACCENT.pink
    : MENU_CARD_ACCENT.cyan;
}

function MenuItemCard({
  item,
}: {
  item: (typeof MENU_ITEMS)[number];
}) {
  const accent = getMenuCardAccent(item.tagColor);

  return (
    <Link href={item.href} className="group block h-full">
      <article
        className={`flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-2.5 shadow-[0_16px_48px_rgba(52,36,47,0.08)] ring-1 ring-brand-border/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_rgba(52,36,47,0.14)] ${accent.ring}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 transition-opacity duration-500 group-hover:from-black/80"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-[1] p-5 md:p-6">
            <p
              className={`flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${accent.eyebrow}`}
            >
              <span
                className={`h-px w-7 shrink-0 ${accent.line}`}
                aria-hidden
              />
              {item.tag}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7">
          <h3 className="text-[clamp(1.5rem,2.8vw,1.9rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-[16px] leading-[1.76] text-brand-body md:text-[17px]">
            {item.description}
          </p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <span
              className={`text-[16px] font-semibold tracking-[0.01em] transition-colors duration-300 ${accent.cta}`}
            >
              {item.ctaLabel}
            </span>
            <span
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${accent.ctaCircle}`}
              aria-hidden
            >
              <ChevronRightIcon size={17} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function MenuSection() {
  return (
    <section
      id="menu"
      className="border-t border-brand-border/60 bg-white px-7 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center md:mb-14">
          <HomeSectionEyebrow accent="cyan" className="mb-4">
            What we make
          </HomeSectionEyebrow>
          <h2 className="mt-4 text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold tracking-[-0.03em] text-brand-dark text-balance">
            Made fresh, served generous
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {MENU_ITEMS.map((item) => (
            <MenuItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
