import Image from "next/image";
import Link from "next/link";
import { CheckIcon, StarIcon } from "@/components/icons";
import { MENU_CATERING_CTA } from "@/lib/menu-page-data";

export function MenuCateringCta() {
  const cta = MENU_CATERING_CTA;

  return (
    <section
      id="catering"
      aria-label="Catering services"
      className="relative px-7 pb-12 pt-4 md:pb-16 md:pt-6"
    >
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-brand-gold/35 bg-brand-footer shadow-[0_24px_64px_rgba(50,39,30,0.22)]">
        <Image
          src={cta.backgroundImage}
          alt=""
          fill
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-[center_40%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/45"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/35 md:from-black/88 md:via-black/58 md:to-black/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25"
          aria-hidden
        />

        <div className="relative z-[1] px-7 py-12 md:px-12 md:py-14 lg:px-14 lg:py-16">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-black/25 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fce6b8]">
              <StarIcon size={11} className="text-[#fce6b8]" />
              {cta.badge}
            </span>

            <h2 className="mt-5 text-[clamp(1.85rem,4.2vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
              {cta.title}{" "}
              <span className="text-[#fcd98a]">{cta.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              {cta.description}
            </p>

            <ul className="mt-6 space-y-3">
              {cta.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-medium leading-[1.55] text-white md:text-[16px]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/30 text-[#fce6b8]">
                    <CheckIcon size={11} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={cta.primaryHref}
                className="inline-block rounded-full bg-brand-gold px-7 py-3.5 text-[17px] font-extrabold !text-[#261e17] shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#f5b82e] hover:!text-[#1a1410]"
              >
                {cta.primaryLabel}
              </Link>
              <Link
                href={cta.secondaryHref}
                className="inline-block rounded-full border-2 border-white bg-white px-7 py-3 text-[17px] font-bold text-brand-dark shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:bg-brand-cream hover:text-brand-dark"
              >
                {cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
