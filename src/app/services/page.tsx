import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial construction, residential construction, remodeling, interior finishes, project management, and consulting — from Faure Construction Inc. in Puerto Rico.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Built To Handle Every Scope Of Work."
        description="From ground-up builds to the finest interior finishes, we bring the same discipline and eye for detail to every project we take on."
        image="/images/projects/construction-install.jpg"
      />
      <Services linkToPage={false} />
      <CTABanner />
    </>
  );
}
