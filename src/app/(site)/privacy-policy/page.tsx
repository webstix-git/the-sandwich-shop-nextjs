import type { Metadata } from "next";
import { InfoProse } from "@/components/InfoProse";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";

export const metadata: Metadata = {
  title: "Privacy Policy | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Learn how The Sandwich Shop & Dirty Soda Bar collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const copy = MINIMAL_PAGE_COPY.privacyPolicy;

  return (
    <MinimalPageLayout title={copy.title} description={copy.description}>
      <InfoProse
        sections={PRIVACY_POLICY_SECTIONS}
        lastUpdated="July 3, 2026"
        embedded
      />
    </MinimalPageLayout>
  );
}
