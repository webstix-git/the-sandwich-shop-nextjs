import type { Metadata } from "next";
import { MenuPageBody } from "@/components/menu/MenuPageBody";
import { MenuPageIntro } from "@/components/menu/MenuPageIntro";

export const metadata: Metadata = {
  title: "Our Menu | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Explore our full menu: specialty sandwiches, smash burgers, sides, soup, breakfast, kid's menu, and dirty sodas. Made fresh in Downtown La Crosse.",
};

export default function MenuPage() {
  return (
    <>
      <MenuPageIntro />
      <MenuPageBody />
    </>
  );
}
