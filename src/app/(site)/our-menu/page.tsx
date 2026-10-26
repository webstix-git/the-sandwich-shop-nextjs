import type { Metadata } from "next";
import { MenuPageBody } from "@/components/menu/MenuPageBody";
import { MenuPageIntro } from "@/components/menu/MenuPageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Menu",
  description:
    "Explore our full menu: specialty sandwiches, smash burgers, sides, soup, breakfast, kid's menu, and dirty sodas. Made fresh in Downtown La Crosse.",
  path: "/our-menu",
});

export default function MenuPage() {
  return (
    <>
      <MenuPageIntro />
      <MenuPageBody />
    </>
  );
}
