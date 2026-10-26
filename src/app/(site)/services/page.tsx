import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/services/ServicesPageBody";
import { ServicesPageIntro } from "@/components/services/ServicesPageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Dine in, carry out, and catering in Downtown La Crosse. Fresh sandwiches, smash burgers, dirty soda bar experiences, and event catering.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesPageIntro />
      <ServicesPageBody />
    </>
  );
}
