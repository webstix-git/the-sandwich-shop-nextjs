import { CateringSection } from "@/components/CateringSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { SodasSection } from "@/components/SodasSection";
import { StorySection } from "@/components/StorySection";

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
