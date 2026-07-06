import type { Metadata } from "next";
import { AboutPageBody } from "@/components/about/AboutPageBody";
import { AboutPageIntro } from "@/components/about/AboutPageIntro";

export const metadata: Metadata = {
  title: "About Us | The Sandwich Shop & Dirty Soda Bar",
  description:
    "Locally owned in Downtown La Crosse — fresh sandwiches, smash burgers, and a legendary dirty soda bar made with love.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageIntro />
      <AboutPageBody />
    </>
  );
}
