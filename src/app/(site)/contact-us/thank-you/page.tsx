import type { Metadata } from "next";
import { MinimalPageLayout } from "@/components/MinimalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You",
    description:
      "Thanks for contacting The Sandwich Shop & Dirty Soda Bar. We will get in touch with you shortly.",
    path: "/contact-us/thank-you",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <MinimalPageLayout
      title="CONTACT – THANK YOU"
      breadcrumbLabel="Thank You"
      breadcrumbParent={{ label: "Contact Us", href: "/contact-us" }}
    >
      <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
        Request received
      </p>
      <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.35rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
        Thanks for contacting us!
      </h2>
      <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
        We will get in touch with you shortly.
      </p>
    </MinimalPageLayout>
  );
}
