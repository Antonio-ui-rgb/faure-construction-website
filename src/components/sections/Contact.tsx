import type { SVGProps } from "react";
import { Phone, Mail, Clock, type LucideIcon } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EstimateForm } from "./EstimateForm";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-graylight py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request Your Estimate."
          description="Tell us about your project and our team will follow up to schedule a walkthrough and put together a detailed estimate."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <EstimateForm />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-6 rounded-sm bg-charcoal p-8 text-white sm:p-10">
              <ContactRow icon={Phone} label="Call Us" href={site.phoneHref}>
                {site.phone}
              </ContactRow>
              <ContactRow icon={Mail} label="Email Us" href={`mailto:${site.email}`}>
                {site.email}
              </ContactRow>
              <ContactRow icon={Clock} label="Business Hours">
                {site.hours}
              </ContactRow>
              <div className="flex gap-3 border-t border-white/10 pt-6">
                <SocialIcon href={site.instagramUrl} icon={InstagramIcon} label="Instagram" />
                <SocialIcon href={site.facebookUrl} icon={FacebookIcon} label="Facebook" />
              </div>
            </div>

            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-sm grayscale-[15%]">
              <iframe
                title="Faure Construction service area map — Puerto Rico"
                src="https://www.google.com/maps?q=Puerto+Rico&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-light">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/45">{label}</p>
        <p className="text-sm font-medium text-white">{children}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange hover:text-orange"
    >
      <Icon width={16} height={16} />
    </a>
  );
}
