import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { OurStory } from "@/components/sections/OurStory";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Faure Construction Inc. is a family-owned construction company in Puerto Rico built on high-end craftsmanship, personalized service, and unmatched quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Faure Construction"
        title="Family-Owned. Built On Craftsmanship."
        description="Every project we take on carries our name — so we treat it with the same care we'd give our own property."
        image="/images/projects/transformation-dusk.png"
      />
      <OurStory />
      <CTABanner />
    </>
  );
}
