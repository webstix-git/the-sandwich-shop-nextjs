import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ChevronRightIcon } from "@/components/icons";
import { linkifyContactText } from "@/components/contact/ContactInfoLink";
import { SITE } from "@/lib/constants";
import { SERVICE_INDEX_ITEMS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";
import { pageMetadata } from "@/lib/seo";

const TAG_ACCENT = {
  pink: "text-black",
  cyan: "text-black",
  gold: "text-black",
} as const;

export const metadata: Metadata = pageMetadata({
  title: "AI Readiness Service Index",
  description:
    "How The Sandwich Shop & Dirty Soda Bar prepares its menu, guest tools, and website content for responsible use of artificial intelligence.",
  path: "/service-index",
});

export default function ServiceIndexPage() {
  const copy = MINIMAL_PAGE_COPY.serviceIndex;

  return (
    <MinimalPageLayout
      title={copy.title}
      description={copy.description}
      breadcrumbParent={{ label: "Services", href: "/services" }}
      breadcrumbLabel="AI Readiness Service Index"
    >
      <ul className="divide-y divide-brand-border/60 border-y border-brand-border/60">
        {SERVICE_INDEX_ITEMS.map((service) => (
          <li key={service.title}>
            <Link
              href={service.href}
              className="group flex items-start justify-between gap-4 py-4 !text-black transition-colors hover:!text-black"
            >
              <span>
                <span
                  className={`block text-[13px] font-bold uppercase tracking-[0.14em] ${TAG_ACCENT[service.accent]}`}
                >
                  {service.tag}
                </span>
                <span className="mt-1 block text-[17px] font-semibold text-black">
                  {service.title}
                </span>
                <span className="mt-1 block text-[15px] leading-relaxed text-brand-muted">
                  {service.description}
                </span>
              </span>
              <ChevronRightIcon
                size={16}
                className="mt-2 shrink-0 text-black transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[15px] text-black">
        Read how we use artificial intelligence on the{" "}
        <Link
          href="/ai-policy"
          className="font-semibold !text-black underline decoration-black/35 underline-offset-[3px] transition-colors hover:!text-black"
        >
          AI Policy
        </Link>
        , or see dine-in, carry out, and catering on the{" "}
        <Link
          href="/services"
          className="font-semibold !text-black underline decoration-black/35 underline-offset-[3px] transition-colors hover:!text-black"
        >
          services page
        </Link>
        .
      </p>

      <section className="mt-10">
        <h2 className="mb-4 text-[20px] font-semibold text-black">Contact Us</h2>
        <p className="text-base leading-relaxed text-black [&_a]:!text-black [&_a]:decoration-black/35 [&_a]:hover:!text-black [&_a]:hover:decoration-black">
          {linkifyContactText(
            `If you have questions about this Privacy Policy, please contact us at ${SITE.email} or ${SITE.phone}. You may also visit us at ${SITE.address}, ${SITE.city}.`,
          )}
        </p>
      </section>
    </MinimalPageLayout>
  );
}
