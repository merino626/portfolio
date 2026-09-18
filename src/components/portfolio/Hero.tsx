"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Content } from "@/content/types";
import heroImage from "@/assets/hero-architecture.jpg";
import { Particles } from "./Particles";

const ease = [0.16, 1, 0.3, 1] as const;

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

export function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "var(--gradient-halo)" }} />
      <Particles />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {hero.badge}
          </motion.p>

          <motion.h1
            id="hero-title"
            {...rise(0.05)}
            className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight text-balance text-gradient-title sm:text-6xl lg:text-7xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p {...rise(0.12)} className="mt-5 font-mono text-sm tracking-wide text-primary sm:text-base">
            {hero.stackLine}
          </motion.p>

          <motion.p {...rise(0.18)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.summary}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className={buttonVariants({ size: "lg" })}>
              {hero.primaryCta}
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              <Mail aria-hidden="true" />
              {hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/40 [box-shadow:var(--shadow-elevated)]">
            <Image
              src={heroImage}
              alt={hero.imageAlt}
              priority
              sizes="(min-width: 1216px) 540px, 45vw"
              placeholder="blur"
              className="aspect-square w-full object-cover opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
