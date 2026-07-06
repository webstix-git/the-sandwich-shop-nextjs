import type { Metadata } from "next";
import { InfoProse } from "@/components/InfoProse";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { AI_POLICY_SECTIONS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";

export const metadata: Metadata = {
  title: "AI Policy | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Our transparent approach to artificial intelligence on The Sandwich Shop & Dirty Soda Bar website.",
};

export default function AiPolicyPage() {
  const copy = MINIMAL_PAGE_COPY.aiPolicy;

  return (
    <MinimalPageLayout title={copy.title} description={copy.description}>
      <InfoProse
        sections={AI_POLICY_SECTIONS}
        lastUpdated="July 3, 2026"
        embedded
      />
    </MinimalPageLayout>
  );
}
