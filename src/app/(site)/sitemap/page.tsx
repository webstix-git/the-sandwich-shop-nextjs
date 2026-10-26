import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ChevronRightIcon } from "@/components/icons";
import { SITEMAP_PAGES } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description:
    "Browse every page on The Sandwich Shop & Dirty Soda Bar website: menus, services, about, and contact.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const copy = MINIMAL_PAGE_COPY.sitemap;

  return (
    <MinimalPageLayout title={copy.title} description={copy.description}>
      <section>
        <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-black">
          Pages
        </h2>
        <ul className="divide-y divide-brand-border/60 border-y border-brand-border/60">
          {SITEMAP_PAGES.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-start justify-between gap-3 py-3.5 text-[15px] !text-black transition-colors hover:!text-black"
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
                  className="mt-1 shrink-0 text-black transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </MinimalPageLayout>
  );
}
