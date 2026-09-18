"use client";

import Image from "next/image";
import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Content, Media } from "@/content/types";
import { cn, format } from "@/lib/utils";
import { MediaKindChip } from "./MediaBadges";

export type GalleryHandle = { open: (index?: number) => void };

function MediaView({ media }: { media: Media }) {
  const className = "h-auto max-h-[68svh] w-auto max-w-full object-contain";
  if (media.kind === "video") {
    return (
      <video
        key={media.src}
        src={media.src}
        poster={media.poster}
        width={media.width}
        height={media.height}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    );
  }
  return (
    <Image
      key={media.src}
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes="(min-width: 1200px) 1152px, 100vw"
      className={className}
    />
  );
}

type GalleryDialogProps = {
  id: string;
  name: string;
  gallery: Media[];
  ui: Content["projectUi"];
  ref?: Ref<GalleryHandle>;
};

export function GalleryDialog({ id, name, gallery, ui, ref }: GalleryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const total = gallery.length;
  const titleId = `${id}-gallery-title`;

  useImperativeHandle(
    ref,
    () => ({
      open(start = 0) {
        setIndex(start);
        setIsOpen(true);
        dialogRef.current?.showModal();
      },
    }),
    [],
  );

  // Lock page scroll while the gallery is open.
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setIndex((i) => (i + delta + total) % total);
  const current = gallery[index];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => setIsOpen(false)}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      className="m-auto w-[min(72rem,calc(100%-2rem))] overflow-hidden rounded-xl border border-border bg-card p-0 text-foreground backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      {isOpen && current ? (
        <div className="flex max-h-[calc(100svh-2rem)] flex-col">
          <div className="flex items-center gap-3 border-b border-border py-2 pr-2 pl-5">
            <h2 id={titleId} className="min-w-0 flex-1 truncate text-sm font-medium">
              {format(ui.galleryTitle, { name })}
            </h2>
            <MediaKindChip kind={current.kind} ui={ui} />
            <span className="font-mono text-[11px] text-muted-foreground" aria-live="polite">
              {format(ui.counter, { current: index + 1, total })}
            </span>
            <button type="button" onClick={close} aria-label={ui.close} className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <X aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-background/60 p-3 sm:p-6">
            <MediaView media={current} />
            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={ui.previous}
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className: "absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur",
                  })}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={ui.next}
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className: "absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur",
                  })}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </>
            ) : null}
          </div>

          <p className="border-t border-border px-5 py-3 text-sm text-muted-foreground">{current.alt}</p>

          {total > 1 ? (
            <ul className="flex gap-2 overflow-x-auto px-5 pb-4">
              {gallery.map((m, i) => (
                <li key={m.src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`${format(ui.counter, { current: i + 1, total })} · ${m.kind === "video" ? ui.media.videoTag : ui.media.imageTag}`}
                    aria-current={i === index ? "true" : undefined}
                    className={cn(
                      "relative block h-12 w-20 overflow-hidden rounded-md border transition-opacity",
                      i === index ? "border-primary" : "border-border opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image src={m.kind === "video" ? m.poster : m.src} alt="" fill sizes="80px" className="object-cover object-top" />
                    {m.kind === "video" ? (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40" aria-hidden="true">
                        <span className="flex size-6 items-center justify-center rounded-full bg-background/85">
                          <Play className="size-3 fill-primary text-primary" />
                        </span>
                      </span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
