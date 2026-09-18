import type { Content } from "@/content/types";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Principles({ principles }: { principles: Content["principles"] }) {
  return (
    <Section id="principles" eyebrow={principles.eyebrow} title={principles.title}>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {principles.items.map((p, i) => (
          <Reveal key={p.title} delay={(i % 5) * 0.04} className="bg-card">
            <div className="h-full p-6 transition-colors duration-300 hover:bg-accent/40">
              <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-sm font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
