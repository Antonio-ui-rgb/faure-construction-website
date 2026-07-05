import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-4 text-xs font-semibold uppercase tracking-[0.28em]",
              light ? "text-orange-light" : "text-orange",
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.1] sm:text-5xl",
            light ? "text-white" : "text-charcoal",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-charcoal/65",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
