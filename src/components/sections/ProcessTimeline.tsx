import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear Process, From First Call To Final Walkthrough."
          description="No guesswork, no surprises — just a straightforward path from your first conversation with us to a finished project you're proud of."
        />

        <div className="mt-16 flex flex-col">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={0.05 * i}>
              <div className="grid grid-cols-1 gap-4 border-t border-charcoal/10 py-9 sm:grid-cols-12 sm:gap-8 sm:py-11">
                <div className="sm:col-span-2">
                  <span className="font-display text-3xl italic text-orange">
                    {s.step}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl text-charcoal">
                    {s.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-base leading-relaxed text-charcoal/65">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-charcoal/10" />
        </div>
      </Container>
    </section>
  );
}
