import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden bg-charcoal pt-32 pb-16 lg:min-h-[54vh] lg:pb-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-55"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/50" />

      <Container className="relative z-10">
        <Reveal>
          <Link
            href="/"
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.28em] text-white/50 transition-colors hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-light">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="max-w-2xl font-display text-4xl italic leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
