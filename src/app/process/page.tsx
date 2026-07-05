import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Faure Construction Inc. moves from first consultation to final walkthrough — clear, honest, and built around your property.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From First Call To Final Walkthrough."
        description="Construction goes smoother when everyone knows what happens next. Here's exactly how we work."
        image="/images/projects/repair-exterior.png"
      />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
