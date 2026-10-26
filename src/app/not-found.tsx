import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronRightIcon } from "@/components/icons";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ScrollStickyTopBar } from "@/components/ScrollStickyTopBar";
import { SITEMAP_PAGES } from "@/lib/info-pages";

export default function NotFound() {
  return (
    <>
      <ScrollStickyTopBar>
        <Header />
      </ScrollStickyTopBar>
      <main className="overflow-x-hidden">
        <MinimalPageLayout
          title="404"
          description="Sorry, we couldn’t find that page. Try one of these links or head back home."
          breadcrumbLabel="Page Not Found"
        >
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
      </main>
      <Footer />
    </>
  );
}
