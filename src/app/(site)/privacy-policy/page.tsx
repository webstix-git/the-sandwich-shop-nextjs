import type { Metadata } from "next";
import { InfoProse } from "@/components/InfoProse";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { PolicyContactBlock } from "@/components/PolicyContactBlock";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/info-pages";
import { MINIMAL_PAGE_COPY } from "@/lib/minimal-page-copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how The Sandwich Shop & Dirty Soda Bar collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const copy = MINIMAL_PAGE_COPY.privacyPolicy;

  return (
    <MinimalPageLayout title={copy.title}>
      <InfoProse
        sections={PRIVACY_POLICY_SECTIONS}
        lastUpdated="July 3, 2026"
        embedded
      />
      <section className="mt-10">
        <h2 className="mb-4 text-[20px] font-semibold text-black">Contact Us</h2>
        <PolicyContactBlock intro="If you have questions about this Privacy Policy, please contact us at:" />
      </section>
    </MinimalPageLayout>
  );
}
