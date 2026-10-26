import type { Metadata } from "next";
import { AboutPageBody } from "@/components/about/AboutPageBody";
import { AboutPageIntro } from "@/components/about/AboutPageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Locally owned in Downtown La Crosse, serving fresh sandwiches, smash burgers, and a legendary dirty soda bar made with love.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <AboutPageIntro />
      <AboutPageBody />
    </>
  );
}
