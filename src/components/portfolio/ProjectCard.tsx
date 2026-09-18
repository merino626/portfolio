"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Download, Images, Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Content, Media, Project } from "@/content/types";
import { format } from "@/lib/utils";
import { GalleryDialog, type GalleryHandle } from "./GalleryDialog";
import { LazyVideo } from "./LazyVideo";
import { MediaCounts, MediaKindChip } from "./MediaBadges";

export const linkIcons = { github: GitHubIcon, live: ArrowUpRight, download: Download } as const;

export function ProjectLinks({ project, ui }: { project: Project; ui: Content["projectUi"] }) {
  return (
    <>
      {project.links.map((link) => {
        const Icon = linkIcons[link.kind];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="size-4" aria-hidden="true" />
            {ui.links[link.kind]}
            <span className="sr-only">— {project.name}</span>
          </a>
        );
      })}
      {project.note ? (
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Lock className="size-3.5" aria-hidden="true" />
          {project.note}
        </span>
      ) : null}
    </>
  );
}

export function StackList({ stack }: { stack: string[] }) {
  if (!stack.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li key={s} className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {s}
        </li>
      ))}
    </ul>
  );
}

type ProjectCardProps = { project: Project; ui: Content["projectUi"] };

export function ProjectCard({ project, ui }: ProjectCardProps) {
  const gallery = useRef<GalleryHandle>(null);
  // The card's preview clip is also the first item of its gallery, so the counts match what opens.
  const media: Media[] = project.preview ? [project.preview, ...project.gallery] : project.gallery;
  const galleryLabel = format(ui.openGallery, { count: media.length });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/40">
      <button
        type="button"
        tabIndex={-1}
        onClick={() => gallery.current?.open()}
        aria-label={`${galleryLabel} — ${project.name}`}
        className="relative block aspect-[16/10] cursor-zoom-in overflow-hidden border-b border-border"
      >
        {project.preview ? (
          <LazyVideo
            src={project.preview.src}
            poster={project.preview.poster}
            label={project.preview.alt}
            className="size-full object-cover object-top"
          />
        ) : (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1216px) 580px, (min-width: 1024px) 48vw, 100vw"
            className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        {/* Bottom corners: the top of most screenshots holds the product's logo and navigation. */}
        <MediaKindChip kind={project.preview ? "video" : "image"} ui={ui} className="absolute bottom-3 left-3" />
        <MediaCounts
          media={media}
          ui={ui}
          className="absolute right-3 bottom-3 rounded-md border border-border bg-background/80 px-2 py-1 text-foreground backdrop-blur"
        />
      </button>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">{project.context}</p>
        <h3 className="mt-2 text-lg font-medium text-foreground">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.metrics?.length ? (
          <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <dt className="order-2 mt-1 font-mono text-[10.5px] leading-snug text-muted-foreground">{m.label}</dt>
                <dd className="order-1 text-xl font-semibold tracking-tight text-foreground">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-5 border-t border-border pt-5">
          <h4 className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">{ui.highlights}</h4>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <StackList stack={project.stack} />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
          <button
            type="button"
            onClick={() => gallery.current?.open()}
            className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            <Images className="size-4" aria-hidden="true" />
            {galleryLabel}
            <MediaCounts media={media} ui={ui} className="text-muted-foreground" />
            <span className="sr-only">— {project.name}</span>
          </button>
          <ProjectLinks project={project} ui={ui} />
        </div>
      </div>

      <GalleryDialog ref={gallery} id={project.slug} name={project.name} gallery={media} ui={ui} />
    </article>
  );
}
