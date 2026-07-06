import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "@/lib/constants";

export function MenuSection() {
  return (
    <section id="menu" className="border-t border-brand-border/60 bg-brand-bg px-7 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
      <div className="mb-12 text-center">
        <div className="mb-2.5 text-base font-semibold uppercase tracking-[1.5px] text-brand-cyan">
          What we make
        </div>
        <h2 className="text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold tracking-[-0.3px] text-brand-dark">
          Made fresh, served generous
        </h2>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block overflow-hidden rounded-3xl border border-brand-card-border bg-white shadow-[0_12px_30px_rgba(52,36,47,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(52,36,47,0.14)]"
          >
            <div className="h-[230px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={230}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="px-6 pb-7 pt-6">
              <div
                className={`mb-1.5 text-[13px] font-semibold uppercase tracking-[1px] ${item.tagColor}`}
              >
                {item.tag}
              </div>
              <h3 className="mb-2 text-[25px] font-semibold text-brand-dark">
                {item.title}
              </h3>
              <p className="text-base leading-normal text-brand-body">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
