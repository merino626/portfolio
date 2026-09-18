import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content/types";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Experience({ experience }: { experience: Content["experience"] }) {
  return (
    <Section id="experience" eyebrow={experience.eyebrow} title={experience.title}>
      <ol className="relative border-l border-border">
        {experience.jobs.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-14 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-primary ring-4 ring-background"
            />
            <Reveal delay={i * 0.04}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-medium text-foreground">
                  {job.role}
                  <span className="text-muted-foreground"> · {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {job.achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Chips items={job.tech} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        <div className="bg-card p-6">
          <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{experience.earlierTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {experience.earlier.map((e) => (
              <li key={e.company}>
                <span className="text-foreground">{e.role}</span>
                <span className="text-muted-foreground"> · {e.company}</span>
                <span className="mt-0.5 block font-mono text-[11px] text-muted-foreground">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card p-6">
          <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">{experience.educationTitle}</h3>
          <p className="mt-4 text-sm text-foreground">{experience.education.degree}</p>
          <p className="text-sm text-muted-foreground">{experience.education.school}</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{experience.education.period}</p>
        </div>
        <div className="bg-card p-6">
          <h3 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
            {experience.certificationsTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {experience.certifications.map((c) => (
              <li key={c.name}>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  >
                    {c.name}
                    <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
                  </a>
                ) : (
                  c.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
