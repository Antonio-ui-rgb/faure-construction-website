import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-dark shadow-[0_8px_24px_-8px_rgba(242,102,10,0.6)] hover:shadow-[0_10px_30px_-6px_rgba(242,102,10,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white hover:-translate-y-0.5",
  "outline-light":
    "border border-white/40 text-white hover:bg-white hover:text-charcoal hover:-translate-y-0.5",
  ghost: "text-charcoal hover:text-orange",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
