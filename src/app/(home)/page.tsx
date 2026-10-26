import type { Metadata } from "next";
import { CateringSection } from "@/components/CateringSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { SodasSection } from "@/components/SodasSection";
import { StorySection } from "@/components/StorySection";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${SITE.name} | La Crosse, WI`,
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <SodasSection />
      <StorySection />
      <ExperienceSection />
      <GallerySection />
      <CateringSection />
    </>
  );
}
