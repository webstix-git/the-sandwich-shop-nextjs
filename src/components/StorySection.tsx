import Image from "next/image";
import Link from "next/link";
import { HomeSectionEyebrow } from "@/components/HomeSectionEyebrow";
import { ChevronRightIcon, HeartIcon } from "./icons";

export function StorySection() {
  return (
    <section id="story" className="border-t border-brand-border/60 bg-white px-7 py-20 md:py-24">
      <div className="mx-auto max-w-[1250px]">
      <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border-[6px] border-white shadow-[0_18px_44px_rgba(52,36,47,0.14)]">
            <div className="relative h-[280px] md:h-[400px]">
              <Image
                src="/images/dessert-boxes.jpg"
                alt="Handmade dessert boxes with buttercream"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 -rotate-[2deg] md:-bottom-[22px] md:-left-[18px]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-gradient-to-br from-brand-pink to-brand-pink-dark px-5 py-3.5 text-white shadow-[0_14px_32px_rgba(237,78,141,0.42)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/25">
                <HeartIcon size={22} />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[13px] font-bold uppercase tracking-[1.4px] text-white/85">
                  Fresh &amp; local
                </div>
                <div className="text-[17px] font-bold tracking-[-0.2px]">
                  Made by hand, daily
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <HomeSectionEyebrow accent="pink" className="mb-4">
            Our story
          </HomeSectionEyebrow>
          <h2 className="mb-5 text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold leading-[1.06] tracking-[-0.3px] text-brand-dark">
            A neighborhood spot, made with love.
          </h2>
          <p className="mb-4 text-lg leading-[1.65] text-brand-body">
            We&apos;re a locally owned little corner of La Crosse where the
            sandwiches are stacked fresh, the burgers are smashed to order, and
            the soda bar keeps things fun. No chains, no shortcuts, just good
            food and a friendly hello.
          </p>
          <p className="mb-7 text-lg leading-[1.65] text-brand-body">
            From a quick weekday lunch to a sweet treat with the kids,
            there&apos;s a seat at the table for everyone.
          </p>
          <Link
            href="/about-us/our-story"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-pink px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_22px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover"
          >
            Our Story
            <ChevronRightIcon
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
