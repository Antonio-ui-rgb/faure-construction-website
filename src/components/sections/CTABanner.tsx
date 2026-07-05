import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTABanner() {
  return (
    <section className="bg-charcoal py-24 lg:py-28">
      <Container className="flex flex-col items-center gap-7 text-center">
        <Reveal>
          <h2 className="max-w-lg font-display text-3xl italic leading-tight text-white sm:text-4xl">
            Ready to build something exceptional?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-white/60">
            Tell us about your project and our team will follow up to
            schedule a walkthrough and put together a detailed estimate.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href="/contact" variant="primary">
            Request an Estimate
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
