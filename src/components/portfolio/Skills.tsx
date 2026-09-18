import type { Content } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills({ skills }: { skills: Content["skills"] }) {
  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title} description={skills.description}>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skills.groups.map((group, gi) => (
          <Reveal key={group.category} delay={(gi % 4) * 0.04} className="bg-card">
            <div className="h-full p-6">
              <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {[...group.core, ...group.items].map((name) => {
                  const core = group.core.includes(name);
                  return (
                    <li
                      key={name}
                      className={cn(
                        "rounded-md border px-2.5 py-1 font-mono text-[11px]",
                        core
                          ? "border-primary/40 bg-primary/10 text-foreground"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {name}
                      {core ? <span className="sr-only"> ({skills.coreLabel})</span> : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
        <span aria-hidden="true" className="inline-block size-2.5 rounded-sm border border-primary/40 bg-primary/10" />
        {skills.coreLabel}
      </p>
    </Section>
  );
}
