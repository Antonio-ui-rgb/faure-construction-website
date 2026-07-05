import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "High-End Craftsmanship",
    description:
      "Every wall, finish, and detail is executed with the precision expected on multi-million dollar properties.",
  },
  {
    title: "Personalized Service",
    description:
      "No two projects are the same — we tailor our approach to your property, budget, and timeline.",
  },
  {
    title: "Unmatched Quality",
    description:
      "We prepare every surface and correct every compromised area so results last well beyond the finish coat.",
  },
];

export function OurStory() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/projects/transformation-front.png"
                alt="Faure Construction completed home exterior with modern white, grey, and black finish"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange">
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl leading-[1.15] text-charcoal sm:text-4xl">
                How we approach every property we touch.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-charcoal/65">
                <p>
                  Faure Construction Inc. is a family-owned construction
                  company serving Puerto Rico. We work across commercial
                  construction, residential construction, remodeling,
                  interior finishes, project management, and consulting —
                  but the way we work stays the same on every job.
                </p>
                <p>
                  From custom homes to luxury renovations, we bring every
                  client&apos;s vision to life with precision and elegance,
                  treating each property with the same care we&apos;d give
                  our own. That means showing up, communicating clearly, and
                  not considering a job finished until every detail holds up
                  to our own standard.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <h3 className="font-display text-lg text-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/55">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
