import type { Metadata } from "next";
import { OurStoryPageBody } from "@/components/our-story/OurStoryPageBody";
import { OurStoryPageIntro } from "@/components/our-story/OurStoryPageIntro";

export const metadata: Metadata = {
  title: "Our Story | The Sandwich Shop & Dirty Soda Bar",
  description:
    "From a roadside soda cart and market pop-ups to 411 3rd Street: how The Sandwich Shop & Dirty Soda Bar became a Downtown La Crosse favorite.",
};

export default function OurStoryPage() {
  return (
    <>
      <OurStoryPageIntro />
      <OurStoryPageBody />
    </>
  );
}
