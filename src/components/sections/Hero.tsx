"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/projects/transformation-front.png"
          alt="Modern luxury home exterior transformation by Faure Construction Inc. in Puerto Rico"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-orange-light"
        >
          Family-Owned &middot; Puerto Rico
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-5xl italic leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Built for Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
        >
          From custom homes to luxury renovations, we bring your vision to
          life with precision and elegance &mdash; high-end craftsmanship,
          personalized service, unmatched quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <Button href="#contact" variant="primary">
            Request an Estimate
          </Button>
          <Button href="#projects" variant="outline-light">
            View Our Work
          </Button>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
