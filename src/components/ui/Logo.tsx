import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-14 w-[3rem] shrink-0 overflow-hidden rounded-[5px] bg-white p-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] sm:h-16 sm:w-[3.4rem]",
        className,
      )}
    >
      <Image
        src="/images/logo/faure-logo-lockup.png"
        alt="Faure Construction"
        fill
        sizes="64px"
        className="object-contain"
        priority
      />
    </div>
  );
}
