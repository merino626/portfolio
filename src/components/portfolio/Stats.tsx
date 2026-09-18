"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import type { Content, Stat } from "@/content/types";

function Counter({ stat, lang }: { stat: Stat; lang: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // Server render shows the final number, so crawlers and no-JS visitors get real values.
  const [current, setCurrent] = useState(stat.value);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCurrent(stat.value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  const decimals = stat.decimals ?? 0;
  const formatted = new Intl.NumberFormat(lang, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(current);

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export function Stats({ stats, lang }: { stats: Content["stats"]; lang: string }) {
  return (
    <section aria-label={stats.label} className="border-y border-border">
      {/* The grid sits inside the padded wrapper so its 1px gap lines don't paint the side gutters. */}
      <div className="container-page">
        <dl className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {stats.items.map((s) => (
            <div key={s.label} className="flex flex-col bg-background px-2 py-10 sm:px-4">
              <dt className="order-2 mt-2 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {s.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <Counter stat={s} lang={lang} />
              </dd>
              <dd className="order-3 mt-1 text-xs text-muted-foreground/80">{s.caption}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="container-page border-t border-border py-3 font-mono text-[11px] text-muted-foreground/80">
        {stats.note}
      </p>
    </section>
  );
}
