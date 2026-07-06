import Image from "next/image";
import Link from "next/link";
import { SodaFlavorIcon } from "@/components/icons";
import { SODA_FLAVORS } from "@/lib/constants";

const BUBBLES = [
  { left: "5%", size: 14, animation: "rise", duration: "3.2s", delay: "0s" },
  { left: "9%", size: 9, animation: "rise", duration: "2.8s", delay: "0.6s" },
  { left: "14%", size: 18, animation: "rise-slow", duration: "4.1s", delay: "1.1s" },
  { left: "21%", size: 11, animation: "rise", duration: "3.5s", delay: "0.3s" },
  { left: "28%", size: 7, animation: "rise", duration: "2.6s", delay: "1.8s" },
  { left: "35%", size: 15, animation: "rise-slow", duration: "4.4s", delay: "0.8s" },
  { left: "43%", size: 10, animation: "rise", duration: "3.0s", delay: "2.2s" },
  { left: "52%", size: 20, animation: "rise-slow", duration: "5.0s", delay: "0.4s" },
  { left: "60%", size: 8, animation: "rise", duration: "2.7s", delay: "1.4s" },
  { left: "67%", size: 13, animation: "rise", duration: "3.3s", delay: "0.9s" },
  { left: "74%", size: 9, animation: "rise", duration: "2.9s", delay: "2.5s" },
  { left: "82%", size: 16, animation: "rise-slow", duration: "4.2s", delay: "1.6s" },
  { left: "89%", size: 11, animation: "rise", duration: "3.6s", delay: "0.2s" },
  { left: "95%", size: 7, animation: "rise", duration: "2.5s", delay: "1.9s" },
] as const;

const DECOR_BUBBLES = [
  { top: "18%", right: "4%", size: 28, delay: "0s", duration: "5s" },
  { top: "38%", right: "8%", size: 16, delay: "0.8s", duration: "4.2s" },
  { top: "62%", right: "3%", size: 22, delay: "1.3s", duration: "6s" },
  { top: "22%", left: "2%", size: 20, delay: "0.4s", duration: "5.5s" },
  { top: "55%", left: "5%", size: 12, delay: "1.9s", duration: "4.8s" },
] as const;

export type SodaBarSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
};

export function SodaBarSection({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  image = "/images/dirty-soda-green.jpg",
  imageAlt = "Signature green dirty soda with candy rim",
}: SodaBarSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-brand-border/60 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark px-7 py-24 md:py-28 lg:py-32"
    >
      {BUBBLES.map((bubble, index) => (
        <div
          key={index}
          className={`absolute bottom-0 rounded-full bg-white opacity-0 ${
            bubble.animation === "rise-slow" ? "animate-rise-slow" : "animate-rise"
          }`}
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}

      {DECOR_BUBBLES.map((bubble, index) => (
        <div
          key={`decor-${index}`}
          className="animate-float-bubble absolute rounded-full border-[1.5px] border-white/30 bg-white/10"
          style={{
            top: bubble.top,
            ...("right" in bubble ? { right: bubble.right } : { left: bubble.left }),
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-[1120px] items-center gap-10 md:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative">
          <div className="-rotate-2 overflow-hidden rounded-3xl border-[6px] border-white/85 shadow-[0_22px_50px_rgba(0,0,0,0.22)]">
            <Image
              src={image}
              alt={imageAlt}
              width={500}
              height={420}
              className="block h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>

        <div>
          <div className="mb-3 text-base font-semibold uppercase tracking-[1.5px] text-white/90">
            {eyebrow}
          </div>
          <h2 className="mb-4 text-[clamp(2rem,4.5vw,2.875rem)] font-extrabold leading-[1.05] tracking-[-0.4px] text-white">
            {title}
          </h2>
          <p className="mb-6 max-w-[540px] text-lg leading-relaxed text-white/90 md:text-[19px]">
            {description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2.5">
            {SODA_FLAVORS.map((flavor) => (
              <span
                key={flavor.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/18 px-[18px] py-2.5 text-[15px] font-medium text-white"
              >
                <SodaFlavorIcon icon={flavor.icon} />
                {flavor.name}
              </span>
            ))}
          </div>

          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-cyan-dark shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:bg-brand-peach hover:text-brand-dark"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
