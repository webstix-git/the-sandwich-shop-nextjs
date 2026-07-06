import Link from "next/link";
import { EXPERIENCE_HIGHLIGHTS } from "@/lib/constants";
import {
  ChevronRightIcon,
  DropletIcon,
  HeartIcon,
  MapPinIcon,
  StoreIcon,
} from "./icons";

const EXPERIENCE_ICONS = {
  store: StoreIcon,
  heart: HeartIcon,
  droplet: DropletIcon,
  "map-pin": MapPinIcon,
} as const;

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-brand-border/60 bg-brand-warm-cream px-7 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <div className="mb-2.5 text-base font-semibold uppercase tracking-[1.5px] text-brand-pink-dark">
            Why visit us
          </div>
          <h2 className="text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold tracking-[-0.3px] text-brand-dark">
            The full sandwich shop experience
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-relaxed text-brand-body">
            Fresh food, generous portions, and a soda bar that keeps things fun —
            everything we do is built around making your visit worth the trip.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {EXPERIENCE_HIGHLIGHTS.map((item) => {
            const Icon = EXPERIENCE_ICONS[item.icon];
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-card-border bg-white p-7 shadow-[0_12px_30px_rgba(52,36,47,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(52,36,47,0.12)]"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={22} />
                </div>
                <div
                  className={`mb-2 text-[13px] font-semibold uppercase tracking-[1px] ${item.accent}`}
                >
                  {item.eyebrow}
                </div>
                <h3 className="mb-2.5 text-[22px] font-bold leading-tight tracking-[-0.2px] text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-body">
                  {item.description}
                </p>
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.07] transition-transform duration-300 group-hover:scale-110 ${item.glow}`}
                  aria-hidden
                />
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#visit"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-pink px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_22px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover"
          >
            Plan your visit
            <ChevronRightIcon
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
