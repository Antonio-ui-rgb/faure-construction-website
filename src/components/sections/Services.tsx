import {
  Building2,
  Home,
  Hammer,
  Paintbrush,
  ClipboardList,
  MessagesSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  commercial: Building2,
  residential: Home,
  remodeling: Hammer,
  interior: Paintbrush,
  management: ClipboardList,
  consulting: MessagesSquare,
};

export function Services({ linkToPage = true }: { linkToPage?: boolean }) {
  return (
    <section id="services" className="bg-graylight py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built Around Every Stage Of Your Project."
          description="Whether you're building from the ground up or reimagining what's already there, our team brings the same discipline and eye for detail to every scope of work."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={0.06 * (i % 3)}>
                <div className="group relative flex h-full flex-col gap-5 bg-white p-9 transition-colors duration-500 hover:bg-charcoal">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl text-charcoal transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal/60 transition-colors duration-500 group-hover:text-white/70">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {linkToPage && (
          <Reveal delay={0.2} className="mt-14 flex flex-wrap justify-center gap-4">
            <Button href="/services" variant="outline">
              View All Services
              <ArrowRight size={16} />
            </Button>
            <Button href="/process" variant="ghost">
              See Our Process
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
