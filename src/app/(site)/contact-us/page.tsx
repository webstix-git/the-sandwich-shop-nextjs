import type { Metadata } from "next";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { ContactPageIntro } from "@/components/contact/ContactPageIntro";

export const metadata: Metadata = {
  title: "Contact Us | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Visit us at 411 3rd Street, Downtown La Crosse. Call (608) 797-1748 or email us. Dine in and carry out available.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageIntro />
      <ContactPageBody />
    </>
  );
}
