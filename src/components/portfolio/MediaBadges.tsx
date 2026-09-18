import { ImageIcon, Play } from "lucide-react";
import type { Content, Media } from "@/content/types";
import { cn } from "@/lib/utils";

type Ui = Content["projectUi"];

function countLabel(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}

/** Icon and number per media type ("[image] 5 [play] 2"), with the words available to screen readers. */
export function MediaCounts({ media, ui, className }: { media: Media[]; ui: Ui; className?: string }) {
  const videos = media.filter((m) => m.kind === "video").length;
  const images = media.length - videos;
  const items = [
    { count: images, Icon: ImageIcon, label: countLabel(images, ui.media.image, ui.media.images) },
    { count: videos, Icon: Play, label: countLabel(videos, ui.media.video, ui.media.videos) },
  ].filter((item) => item.count > 0);

  return (
    <span className={cn("inline-flex items-center gap-2.5 font-mono text-[11px]", className)}>
      {items.map(({ count, Icon, label }) => (
        <span key={label} className="inline-flex items-center gap-1" title={label}>
          <Icon className="size-3.5" aria-hidden="true" />
          <span aria-hidden="true">{count}</span>
          <span className="sr-only">{label}</span>
        </span>
      ))}
    </span>
  );
}

/** Tag telling whether a preview is a video or a still image. Videos get the accent color and a filled play icon. */
export function MediaKindChip({ kind, ui, className }: { kind: Media["kind"]; ui: Ui; className?: string }) {
  const isVideo = kind === "video";
  const Icon = isVideo ? Play : ImageIcon;
  return (
    <span
      className={cn(
        "pointer-events-none inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10.5px] tracking-[0.08em] uppercase backdrop-blur",
        isVideo ? "border-primary/50 bg-background/85 text-primary" : "border-border bg-background/80 text-foreground",
        className,
      )}
    >
      <Icon className={cn("size-3", isVideo && "fill-current")} aria-hidden="true" />
      {isVideo ? ui.media.videoTag : ui.media.imageTag}
    </span>
  );
}
