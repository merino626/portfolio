import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/content/profile";
import type { Content } from "@/content/types";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

// Checked at build time, so the section works with or without the photo file.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", profile.photo));

export function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="space-y-8">
          {hasPhoto ? (
            <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-xl border border-border bg-card [box-shadow:var(--shadow-elevated)] sm:w-52">
              <Image src={profile.photo} alt={about.photoAlt} fill sizes="208px" className="object-cover" />
            </div>
          ) : null}
          <dl className="space-y-6 border-l border-border pl-6 font-mono text-sm">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
