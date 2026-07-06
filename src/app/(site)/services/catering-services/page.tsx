import type { Metadata } from "next";
import { CateringPageBody } from "@/components/catering/CateringPageBody";
import { CateringPageIntro } from "@/components/catering/CateringPageIntro";

export const metadata: Metadata = {
  title: "Catering Services | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Catering for offices, parties, and events in La Crosse. Sandwich trays, burger spreads, and dirty soda bar experiences.",
};

export default function CateringPage() {
  return (
    <>
      <CateringPageIntro />
      <CateringPageBody />
    </>
  );
}
