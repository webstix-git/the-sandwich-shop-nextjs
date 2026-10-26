import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { ScrollStickyTopBar } from "@/components/ScrollStickyTopBar";
import { SITEMAP_SECTIONS } from "@/lib/info-pages";

export default function NotFound() {
  return (
    <>
      <ScrollStickyTopBar>
        <Header />
      </ScrollStickyTopBar>
      <main className="overflow-x-hidden">
        <MinimalPageLayout
          title="Page Not Found"
          description="The page you requested is unavailable or may have moved. Browse the site pages below to continue"
        >
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
      </main>
      <Footer />
    </>
  );
}
