import {
  Users,
  Gem,
  ShieldCheck,
  Ruler,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    icon: Users,
    title: "Family-Owned",
    description:
      "You work directly with the people who own the outcome — not a rotating cast of subcontractors.",
  },
  {
    icon: Gem,
    title: "High-End Craftsmanship",
    description:
      "Every wall, finish, and detail is executed with the precision expected on multi-million dollar properties.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description:
      "Clear communication and honest guidance from the first estimate to the final walkthrough.",
  },
  {
    icon: Ruler,
    title: "Attention to Detail",
    description:
      "We prepare every surface and correct every compromised area so results last well beyond the finish coat.",
  },
  {
    icon: Clock,
    title: "Personalized Service",
    description:
      "No two projects are the same — we tailor our approach to your property, budget, and timeline.",
  },
  {
    icon: MapPin,
    title: "Puerto Rico Expertise",
    description:
      "Deep, local knowledge of the materials and conditions that keep Puerto Rico properties built to last.",
  },
];

export function WhyChooseFaure({ linkToPage = true }: { linkToPage?: boolean }) {
  return (
    <section id="why-faure" className="bg-charcoal py-28 text-white lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Faure"
          title="Why Property Owners Trust Faure Construction."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={0.05 * (i % 3)}>
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-orange-light">
                  <reason.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {linkToPage && (
          <Reveal delay={0.2} className="mt-16 flex justify-center">
            <Button href="/why-faure" variant="outline-light">
              See The Full Difference
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
