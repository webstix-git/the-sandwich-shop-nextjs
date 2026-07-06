import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ChevronRightIcon } from "@/components/icons";
import { SERVICE_INDEX_ITEMS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";

const TAG_ACCENT = {
  pink: "text-brand-pink-dark",
  cyan: "text-brand-cyan-dark",
  gold: "text-brand-pink-dark",
} as const;

export const metadata: Metadata = {
  title: "Service Index | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Explore every service at The Sandwich Shop & Dirty Soda Bar — dine in, carry out, catering, and signature soda bar experiences.",
};

export default function ServiceIndexPage() {
  const copy = MINIMAL_PAGE_COPY.serviceIndex;

  return (
    <MinimalPageLayout
      title={copy.title}
      description={copy.description}
      breadcrumbParent={{ label: "Services", href: "/services" }}
      breadcrumbLabel="Service Index"
    >
      <ul className="divide-y divide-brand-border/60 border-y border-brand-border/60">
        {SERVICE_INDEX_ITEMS.map((service) => (
          <li key={service.title}>
            <Link
              href={service.href}
              className="group flex items-start justify-between gap-4 py-4 transition-colors hover:text-brand-pink-dark"
            >
              <span>
                <span
                  className={`block text-[11px] font-semibold uppercase tracking-[0.14em] ${TAG_ACCENT[service.accent]}`}
                >
                  {service.tag}
                </span>
                <span className="mt-1 block text-[17px] font-semibold text-brand-dark group-hover:text-brand-pink-dark">
                  {service.title}
                </span>
                <span className="mt-1 block text-[15px] leading-relaxed text-brand-muted">
                  {service.description}
                </span>
              </span>
              <ChevronRightIcon
                size={16}
                className="mt-2 shrink-0 text-brand-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-brand-pink"
              />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[15px] text-brand-muted">
        Looking for the full services overview?{" "}
        <Link
          href="/services"
          className="font-semibold text-brand-pink transition-colors hover:text-brand-pink-dark"
        >
          Visit our services page
        </Link>
        .
      </p>
    </MinimalPageLayout>
  );
}
