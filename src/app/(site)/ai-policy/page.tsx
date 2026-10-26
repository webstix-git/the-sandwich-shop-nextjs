import type { Metadata } from "next";
import { InfoProse } from "@/components/InfoProse";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { PolicyContactBlock } from "@/components/PolicyContactBlock";
import { AI_POLICY_SECTIONS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Policy",
  description:
    "How The Sandwich Shop & Dirty Soda Bar prepares its menu, guest tools, and website content so artificial intelligence supports the shop while the team stays in charge.",
  path: "/ai-policy",
});

export default function AiPolicyPage() {
  const copy = MINIMAL_PAGE_COPY.aiPolicy;

  return (
    <MinimalPageLayout title={copy.title}>
      <InfoProse
        sections={AI_POLICY_SECTIONS}
        lastUpdated="October 26, 2026"
        embedded
      />
      <section className="mt-10">
        <h2 className="mb-4 text-[20px] font-semibold text-black">Questions</h2>
        <PolicyContactBlock intro="If you have questions about this AI Policy, please contact us at:" />
      </section>
    </MinimalPageLayout>
  );
}
