import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/services/ServicesPageBody";
import { ServicesPageIntro } from "@/components/services/ServicesPageIntro";

export const metadata: Metadata = {
  title: "Services | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Dine in, carry out, and catering in Downtown La Crosse. Fresh sandwiches, smash burgers, dirty soda bar experiences, and event catering.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageIntro />
      <ServicesPageBody />
    </>
  );
}
