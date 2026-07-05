import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-2 text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="w-32 overflow-hidden rounded-sm bg-white p-1.5">
              <Image
                src="/images/logo/faure-logo-lockup.png"
                alt="Faure Construction Inc. logo"
                width={373}
                height={483}
                className="w-full"
              />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Family-owned construction company serving Puerto Rico with
              high-end craftsmanship and personalized service.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-orange hover:text-orange"
              >
                <InstagramIcon width={15} height={15} />
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-orange hover:text-orange"
              >
                <FacebookIcon width={15} height={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              Navigate
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              Services
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.title} className="text-sm text-white/70">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              Contact
            </h3>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a href={site.phoneHref} className="hover:text-orange">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-orange break-all">
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
              <li>{site.serviceArea}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {year} Faure Construction Inc. All rights reserved.</p>
          <p>Built for excellence in Puerto Rico.</p>
        </Container>
      </div>
    </footer>
  );
}
