import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ChevronRightIcon } from "@/components/icons";
import { SITEMAP_PAGES } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";

export const metadata: Metadata = {
  title: "Sitemap | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Browse every page on The Sandwich Shop & Dirty Soda Bar website — menus, services, about, and contact.",
};

export default function SitemapPage() {
  const copy = MINIMAL_PAGE_COPY.sitemap;

  return (
    <MinimalPageLayout title={copy.title} description={copy.description}>
      <section>
        <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-pink-dark">
          Pages
        </h2>
        <ul className="divide-y divide-brand-border/60 border-y border-brand-border/60">
          {SITEMAP_PAGES.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-start justify-between gap-3 py-3.5 text-[15px] text-brand-dark transition-colors hover:text-brand-pink-dark"
              >
                <span>
                  <span className="font-medium">{link.label}</span>
                  {link.description ? (
                    <span className="mt-0.5 block text-sm text-brand-muted">
                      {link.description}
                    </span>
                  ) : null}
                </span>
                <ChevronRightIcon
                  size={14}
                  className="mt-1 shrink-0 text-brand-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-brand-pink"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </MinimalPageLayout>
  );
}
