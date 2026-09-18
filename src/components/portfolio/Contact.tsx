"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";
import type { Content } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const fieldClass =
  "w-full rounded-md border border-input bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Contact({ contact }: { contact: Content["contact"] }) {
  const [status, setStatus] = useState<{ tone: "error" | "info"; text: string } | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ tone: "error", text: contact.missing });
      return;
    }

    const subject = encodeURIComponent(`Portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    setStatus({ tone: "info", text: contact.opening });
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { Icon: GitHubIcon, label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
    { Icon: LinkedInIcon, label: "LinkedIn", value: profile.shortName, href: profile.linkedin },
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: MapPin, label: contact.locationLabel, value: contact.locationValue, href: undefined },
  ];

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} description={contact.description}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                {contact.name}
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                placeholder={contact.namePlaceholder}
                className={cn(fieldClass, "h-10")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                {contact.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder={contact.emailPlaceholder}
                className={cn(fieldClass, "h-10")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                {contact.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                placeholder={contact.messagePlaceholder}
                className={cn(fieldClass, "resize-y")}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className={buttonVariants({ className: "w-full sm:w-auto" })}>
                <Send aria-hidden="true" />
                {contact.send}
              </button>
              <p
                role="status"
                className={cn("text-sm", status?.tone === "error" ? "text-red-400" : "text-muted-foreground")}
              >
                {status?.text}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {links.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-foreground">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="flex items-center gap-4 p-5 transition-colors hover:bg-accent/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
