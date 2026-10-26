import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { SITEMAP_SECTIONS } from "@/lib/info-pages";
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
    <MinimalPageLayout title={copy.title}>
      <div className="space-y-10">
        {SITEMAP_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-[20px] font-semibold text-black">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={`${section.title}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium !text-black transition-colors hover:!text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MinimalPageLayout>
  );
}
