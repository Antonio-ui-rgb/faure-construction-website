import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function FeaturedProjects({ linkToPage = true }: { linkToPage?: boolean }) {
  return (
    <section id="projects" className="bg-white py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Recent Work, Real Results."
          description="A look at real projects completed by our team — where craftsmanship meets attention to detail."
        />

        <div className="mt-20 flex flex-col gap-28 lg:gap-36">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={project.slug}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6"
              >
                <Reveal
                  className={cn(
                    "lg:col-span-7",
                    reversed ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm">
                      <Image
                        src={project.heroImage}
                        alt={project.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    {project.images.slice(1).map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-sm"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 30vw, 50vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal
                  delay={0.15}
                  className={cn(
                    "lg:col-span-5",
                    reversed ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange">
                    {project.category}
                  </p>
                  <h3 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-charcoal/65">
                    {project.description}
                  </p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm text-charcoal/75"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>

        {linkToPage && (
          <Reveal delay={0.2} className="mt-20 flex justify-center">
            <Button href="/projects" variant="outline">
              View All Projects
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
