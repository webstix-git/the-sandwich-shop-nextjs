import type { Metadata } from "next";
import Link from "next/link";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { PolicyContactBlock } from "@/components/PolicyContactBlock";
import {
  SERVICE_INDEX_FAQS,
  SERVICE_INDEX_TABLES,
} from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Readiness Service Index",
  description:
    "How The Sandwich Shop & Dirty Soda Bar prepares its menu, guest tools, and website content for responsible use of artificial intelligence.",
  path: "/service-index",
});

export default function ServiceIndexPage() {
  const copy = MINIMAL_PAGE_COPY.serviceIndex;

  return (
    <MinimalPageLayout title={copy.title}>
      <p className="mb-6 text-sm font-medium text-black">
        Last updated: October 26, 2026
      </p>

      <div className="space-y-10">
        {SERVICE_INDEX_TABLES.map((table) => (
          <section key={table.title}>
            <h2 className="mb-4 text-[20px] font-semibold text-black">
              {table.title}
            </h2>
            <div className="overflow-x-auto border-y border-brand-border/60">
              <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
                <tbody>
                  {table.rows.map((row) => (
                    <tr
                      key={`${table.title}-${row.label}`}
                      className="border-b border-brand-border/60 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="w-[38%] py-3.5 pr-4 align-top font-semibold text-black"
                      >
                        {row.label}
                      </th>
                      <td className="py-3.5 align-top text-brand-muted">
                        {row.href ? (
                          <Link
                            href={row.href}
                            className="!text-black underline decoration-black/35 underline-offset-[3px] transition-colors hover:!text-black"
                          >
                            {row.value}
                          </Link>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section>
          <h2 className="mb-4 text-[20px] font-semibold text-black">
            Common Questions
          </h2>
          <div className="space-y-5">
            {SERVICE_INDEX_FAQS.map((faq) => (
              <div key={faq.question}>
                <p className="font-semibold text-black">{faq.question}</p>
                <p className="mt-1.5 text-base leading-relaxed text-brand-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-[20px] font-semibold text-black">
            Contact Us
          </h2>
          <PolicyContactBlock intro="If you have questions about this AI Readiness Service Index, please contact us at:" />
        </section>
      </div>
    </MinimalPageLayout>
  );
}
