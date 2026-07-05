import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A look at real construction and remodeling projects completed by Faure Construction Inc. in Puerto Rico.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A Portfolio Of Real Transformations."
        description="Every project below is real work completed by our team — no stock photos, no stand-ins."
        image="/images/projects/boutique-bar-counter.jpg"
      />
      <FeaturedProjects linkToPage={false} />
      <CTABanner />
    </>
  );
}
