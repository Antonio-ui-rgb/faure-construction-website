import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const posts = [
  { src: "/images/projects/repair-window.png", alt: "Repaired exterior wall and window on a residential remodel" },
  { src: "/images/projects/construction-install.jpg", alt: "Crew installing a custom marble countertop on site" },
  { src: "/images/instagram/insta-01.jpg", alt: "Wide view of finished boutique lounge and display area" },
  { src: "/images/instagram/insta-02.jpg", alt: "Marble bar-height counter with built-in display shelving" },
  { src: "/images/instagram/insta-03.jpg", alt: "Boutique seating area with custom millwork and mirror" },
];

export function InstagramFeed() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange">
            Follow Along
          </p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
            {site.instagramHandle}
          </h2>
          <p className="mt-4 max-w-lg text-base text-charcoal/60">
            Real projects, real transformations. Follow our latest work on
            Instagram.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {posts.map((post, i) => (
            <Reveal key={post.src} delay={0.05 * i}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-graylight"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/50">
                  <InstagramIcon
                    width={22}
                    height={22}
                    className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={site.instagramUrl} variant="outline" external>
            Follow on Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}
