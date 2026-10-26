import type { Metadata } from "next";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { ContactPageIntro } from "@/components/contact/ContactPageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Visit us at 411 3rd Street, Downtown La Crosse. Call (608) 797-1748 or email us. Dine in and carry out available.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageIntro />
      <ContactPageBody />
    </>
  );
}
