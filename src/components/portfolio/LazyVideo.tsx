"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Muted, looping demo clip that only downloads and plays while it's on screen.
 * With reduced motion enabled it stays on the poster frame.
 */
export function LazyVideo({ src, poster, label, width, height, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={cn("block", className)}
    />
  );
}
