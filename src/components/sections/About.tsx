import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const pillars = [
  "High-End Craftsmanship",
  "Personalized Service",
  "Unmatched Quality",
];

export function About() {
  return (
    <section id="about" className="bg-white py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm">
              <Image
                src="/images/projects/repair-exterior.png"
                alt="Faure Construction residential exterior repair project in Puerto Rico"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden w-44 overflow-hidden rounded-sm border-8 border-white shadow-2xl sm:block lg:-right-10 lg:w-56">
              <Image
                src="/images/projects/construction-tools.jpg"
                alt="Marble countertop installation tools on a Faure Construction job site, showcasing hands-on craftsmanship"
                width={224}
                height={224}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Faure Construction"
              title="A Family Name Built On Craftsmanship."
              description="Faure Construction Inc. is a family-owned construction company serving Puerto Rico. From custom homes to luxury renovations, we bring every client's vision to life with precision and elegance — treating each property with the same care we'd give our own."
            />

            <Reveal delay={0.2}>
              <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-medium text-charcoal">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <Button
                href="/about"
                variant="ghost"
                className="mt-9 !px-0 !py-0"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
