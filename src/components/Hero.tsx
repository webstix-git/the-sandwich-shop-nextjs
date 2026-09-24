import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "./HomeHeader";
import { StarIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-30 overflow-hidden bg-[#fffaf4]"
    >
      <HomeHeader />

      <div className="relative z-[2] mx-auto box-content grid max-w-[1250px] items-center gap-10 px-7 pb-20 pt-6 md:gap-14 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="home-hero-eyebrow mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-brand-pink-dark shadow-[0_8px_28px_rgba(52,36,47,0.06)] backdrop-blur-sm">
            <StarIcon />
            Locally owned in La Crosse, WI
          </div>

          <h1 className="home-hero-title mb-6 text-balance font-extrabold">
            Handcrafted sandwiches &amp;{" "}
            <em>creative</em> dirty sodas.
          </h1>

          <p className="home-hero-lead mb-9 max-w-[34rem] text-pretty">
            Freshly made hot &amp; cold subs, juicy smash burgers, and a soda bar
            full of fizzy, creamy, candy-rimmed creations. Made fresh, served
            generous.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Link
              href="#sodas"
              className="rounded-full border-2 border-brand-cyan bg-brand-cyan px-8 py-3.5 text-[17px] font-extrabold tracking-[0.01em] !text-white shadow-[0_10px_28px_rgba(35,191,216,0.28)] transition-all hover:-translate-y-0.5 hover:border-brand-cyan-dark hover:bg-brand-cyan-dark hover:!text-white"
            >
              Explore Dirty Sodas
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 md:gap-10">
            <div>
              <div className="home-hero-stat-value font-extrabold text-brand-pink-dark">Fresh</div>
              <div className="home-hero-stat-label mt-1.5">made to order</div>
            </div>
            <div className="w-px bg-brand-divider/80" />
            <div>
              <div className="home-hero-stat-value font-extrabold text-brand-cyan">30+</div>
              <div className="home-hero-stat-label mt-1.5">dirty soda combos</div>
            </div>
            <div className="w-px bg-brand-divider/80" />
            <div>
              <div className="home-hero-stat-value font-extrabold text-brand-pink-dark">Generous</div>
              <div className="home-hero-stat-label mt-1.5">portions, every time</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="rotate-[1.5deg] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_28px_70px_rgba(52,36,47,0.18)] ring-1 ring-brand-border/40">
            <div className="relative h-[280px] sm:h-[360px] md:h-[430px]">
              <Image
                src="/images/hero-sandwich.jpg"
                alt="Toasted steak & cheese sub with cheese curds"
                fill
                sizes="(max-width: 1024px) 512px, 600px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-[140px] w-[140px] animate-floaty overflow-hidden rounded-3xl border-[6px] border-white shadow-[0_18px_44px_rgba(35,191,216,0.22)] ring-1 ring-white/60 sm:h-[172px] sm:w-[172px]">
            <Image
              src="/images/dirty-soda-green.jpg"
              alt="Green dirty soda with rainbow candy rim"
              fill
              sizes="172px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
