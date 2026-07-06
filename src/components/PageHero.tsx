import type { PageHeroContent } from "@/lib/page-content";
import Image from "next/image";
import { foodImageClassName } from "@/lib/dessert-cups-image";

const ACCENT_STYLES = {
  pink: {
    eyebrow: "text-brand-pink",
    highlight: "text-brand-pink",
    badge: "border-brand-pink-light text-brand-pink-dark",
    orb: "bg-[radial-gradient(circle_at_35%_30%,#FBB6CE,#ED4E8D)]",
  },
  cyan: {
    eyebrow: "text-brand-cyan",
    highlight: "text-brand-cyan",
    badge: "border-brand-cyan-light text-brand-cyan-dark",
    orb: "bg-[radial-gradient(circle_at_35%_30%,#9BE7F2,#23BFD8)]",
  },
  gold: {
    eyebrow: "text-brand-gold",
    highlight: "text-brand-gold",
    badge: "border-brand-gold-light text-brand-gold-dark",
    orb: "bg-[radial-gradient(circle_at_35%_30%,#FCE6B8,#F2A91C)]",
  },
} as const;

type PageHeroProps = PageHeroContent & {
  variant?: "default" | "compact";
};

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  accent = "pink",
  variant = "default",
}: PageHeroProps) {
  const styles = ACCENT_STYLES[accent];
  const isCompact = variant === "compact";

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-brand-blush to-brand-peach ${
        isCompact ? "pb-12 pt-8 md:pb-16" : "pb-16 pt-10 md:pb-24 md:pt-14"
      }`}
    >
      <div
        className={`pointer-events-none absolute rounded-full opacity-[0.16] ${styles.orb} ${
          isCompact
            ? "right-[8%] top-[40px] h-24 w-24"
            : "left-[6%] top-[80px] h-[140px] w-[140px]"
        }`}
      />
      <div
        className={`pointer-events-none absolute rounded-full opacity-[0.12] bg-[radial-gradient(circle_at_35%_30%,#9BE7F2,#23BFD8)] ${
          isCompact
            ? "bottom-[30px] left-[5%] h-16 w-16"
            : "bottom-[50px] right-[8%] h-24 w-24"
        }`}
      />

      <div
        className={`relative z-[2] mx-auto grid max-w-[1180px] items-center gap-10 px-7 ${
          isCompact ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
        }`}
      >
        <div>
          <div
            className={`mb-4 inline-flex items-center rounded-full border-2 bg-white px-4 py-1.5 text-sm font-semibold ${styles.badge}`}
          >
            {eyebrow}
          </div>

          <h1
            className={`mb-5 font-extrabold leading-[1.04] tracking-[-0.5px] text-brand-dark text-balance ${
              isCompact
                ? "text-[clamp(2rem,4.5vw,3rem)]"
                : "text-[clamp(2.25rem,5vw,3.75rem)]"
            }`}
          >
            {title}{" "}
            {highlight && (
              <span className={styles.highlight}>{highlight}</span>
            )}
          </h1>

          <p
            className={`max-w-[540px] leading-[1.6] text-brand-muted ${
              isCompact ? "text-lg" : "text-lg md:text-xl"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            className={`overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_26px_60px_rgba(52,36,47,0.22)] ${
              accent === "cyan" ? "-rotate-1" : "rotate-[1.5deg]"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={430}
              className={foodImageClassName(
                image,
                `block w-full object-cover ${
                  isCompact ? "h-[240px] sm:h-[300px]" : "h-[280px] sm:h-[360px] md:h-[430px]"
                }`,
              )}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
