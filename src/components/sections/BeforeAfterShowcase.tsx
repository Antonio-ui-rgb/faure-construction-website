import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { beforeAfterPairs } from "@/data/beforeAfter";

export function BeforeAfterShowcase() {
  return (
    <section className="bg-graylight py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="See The Transformation"
          title="Before & After."
          description="Drag the slider to see the same space, start to finish — built by our crew from framing to final finish."
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {beforeAfterPairs.map((pair, i) => (
            <Reveal key={pair.title} delay={0.08 * i}>
              <BeforeAfterSlider before={pair.before} after={pair.after} />
              <h3 className="mt-6 font-display text-xl text-charcoal">
                {pair.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {pair.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
