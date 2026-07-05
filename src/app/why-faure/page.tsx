import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WhyChooseFaure } from "@/components/sections/WhyChooseFaure";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Why Choose Faure",
  description:
    "Family-owned, detail-obsessed, and built on trust — here's what sets Faure Construction Inc. apart in Puerto Rico.",
};

export default function WhyFaurePage() {
  return (
    <>
      <PageHero
        eyebrow="The Faure Difference"
        title="What Sets Us Apart."
        description="Anyone can pour concrete or paint a wall. Here's what property owners actually notice about working with us."
        image="/images/projects/transformation-front.png"
      />
      <WhyChooseFaure linkToPage={false} />
      <CTABanner />
    </>
  );
}
