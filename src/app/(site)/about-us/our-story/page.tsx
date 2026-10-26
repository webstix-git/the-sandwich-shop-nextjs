import type { Metadata } from "next";
import { OurStoryPageBody } from "@/components/our-story/OurStoryPageBody";
import { OurStoryPageIntro } from "@/components/our-story/OurStoryPageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "From a roadside soda cart and market pop-ups to 411 3rd Street: how The Sandwich Shop & Dirty Soda Bar became a Downtown La Crosse favorite.",
  path: "/about-us/our-story",
});

export default function OurStoryPage() {
  return (
    <>
      <OurStoryPageIntro />
      <OurStoryPageBody />
    </>
  );
}
