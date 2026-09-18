"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Images, Play } from "lucide-react";
import type { Content, FeaturedProject as Featured, Media } from "@/content/types";
import { cn, format } from "@/lib/utils";
import { GalleryDialog, type GalleryHandle } from "./GalleryDialog";
import { LazyVideo } from "./LazyVideo";
import { MediaCounts, MediaKindChip } from "./MediaBadges";
import { ProjectLinks, StackList } from "./ProjectCard";

type FeaturedProjectProps = { project: Featured; ui: Content["projectUi"] };

/** Full-width case study: product story on one side, switchable demo videos on the other. */
export function FeaturedProject({ project, ui }: FeaturedProjectProps) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const gallery = useRef<GalleryHandle>(null);
  const clip = project.clips[active];
  const panelId = `${project.slug}-demo`;
  // The gallery opens with the demo videos, followed by the screenshots.
  const media: Media[] = [
    ...project.clips.map(({ src, poster, width, height, alt }) => ({ kind: "video" as const, src, poster, width, height, alt })),
    ...project.gallery,
  ];

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + project.clips.length) % project.clips.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    // overflow-clip (not hidden) keeps the rounded corners without turning the card into a scroll container,
    // which would break the sticky demo column.
    <article className="overflow-clip rounded-xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col p-6 sm:p-8 lg:border-r lg:border-border">
          <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">{project.context}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{project.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p>

          <ul className="mt-6 space-y-5 border-t border-border pt-6">
            {project.features.map((feature, i) => (
              <li key={feature.title} className="flex gap-4">
                <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{feature.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <StackList stack={project.stack} />
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8 text-sm">
            <button
              type="button"
              onClick={() => gallery.current?.open()}
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Images className="size-4" aria-hidden="true" />
              {format(ui.openGallery, { count: media.length })}
              <MediaCounts media={media} ui={ui} className="text-muted-foreground" />
            </button>
            <ProjectLinks project={project} ui={ui} />
          </div>
        </div>

        <div className="min-w-0 bg-background/40">
          {/* Sticky so the demo stays in view while the product story on the left scrolls. */}
          <div className="lg:sticky lg:top-16">
            {/* flex-wrap instead of horizontal scroll: with 7 tabs a scrollbar hides options rather than revealing them */}
            <div role="tablist" aria-label={ui.demos} className="flex flex-wrap gap-1 border-b border-border p-2">
              {project.clips.map((c, i) => (
                <button
                  key={c.src}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${panelId}-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={panelId}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onTabKey}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs whitespace-nowrap transition-colors",
                    i === active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Play className={cn("size-3", i === active && "fill-primary text-primary")} aria-hidden="true" />
                  {c.label}
                </button>
              ))}
            </div>

            <div id={panelId} role="tabpanel" aria-labelledby={`${panelId}-tab-${active}`} className="p-3 sm:p-5">
              <div className="relative">
                <LazyVideo
                  key={clip.src}
                  src={clip.src}
                  poster={clip.poster}
                  label={clip.alt}
                  width={clip.width}
                  height={clip.height}
                  className="h-auto w-full rounded-lg border border-border [box-shadow:var(--shadow-elevated)]"
                />
              </div>
            </div>
            {/* The type tag sits in the caption so it never covers the product UI inside the video. */}
            <p className="flex items-start gap-3 border-y border-border px-5 py-3 text-sm text-muted-foreground" aria-live="polite">
              <MediaKindChip kind="video" ui={ui} className="mt-px shrink-0" />
              <span>{clip.alt}</span>
            </p>
          </div>
        </div>
      </div>

      <GalleryDialog ref={gallery} id={project.slug} name={project.name} gallery={media} ui={ui} />
    </article>
  );
}
