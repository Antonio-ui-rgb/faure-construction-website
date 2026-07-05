import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative aspect-[373/416] h-10 shrink-0 overflow-hidden rounded-[3px] sm:h-11">
        <Image
          src="/images/logo/faure-mark.png"
          alt="Faure Construction"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </div>
      <span
        className={cn(
          "hidden text-[10px] font-semibold uppercase tracking-[0.32em] sm:block",
          light ? "text-white/65" : "text-charcoal/50",
        )}
      >
        Construction
      </span>
    </div>
  );
}
