export type Media =
  | { kind: "image"; src: string; width: number; height: number; alt: string }
  | { kind: "video"; src: string; poster: string; width: number; height: number; alt: string };

export type ProjectLink = { kind: "github" | "live" | "download"; href: string };

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  /** Short context line, e.g. "Webmotors · 2022–2024". */
  context: string;
  description: string;
  highlights: string[];
  metrics?: Metric[];
  stack: string[];
  links: ProjectLink[];
  /** Shown with a lock icon, e.g. for internal platforms without a public URL. */
  note?: string;
  cover: Extract<Media, { kind: "image" }>;
  /** Optional muted clip that replaces the cover image on the card; it also opens first in the gallery. */
  preview?: Extract<Media, { kind: "video" }>;
  gallery: Media[];
};

export type Clip = { label: string; src: string; poster: string; width: number; height: number; alt: string };

export type FeaturedProject = Project & {
  features: { title: string; description: string }[];
  clips: Clip[];
};

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  tech: string[];
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    skip: string;
    items: { label: string; href: string }[];
    resume: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    stackLine: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  stats: { label: string; items: Stat[]; note: string };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    photoAlt: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    jobs: Job[];
    earlierTitle: string;
    earlier: { company: string; role: string; period: string }[];
    educationTitle: string;
    education: { school: string; degree: string; period: string };
    certificationsTitle: string;
    certifications: { name: string; href?: string }[];
  };
  work: { eyebrow: string; title: string; description: string; featured: FeaturedProject; items: Project[] };
  projects: { eyebrow: string; title: string; description: string; items: Project[] };
  /** Strings with {placeholders} are filled in with `format()` — they cross to client components, so no functions. */
  projectUi: {
    highlights: string;
    /** Label for the demo video tabs of the featured project. */
    demos: string;
    links: Record<ProjectLink["kind"], string>;
    openGallery: string;
    /** Media type labels: tags on previews ("Video"), singular and plural words for counts ("2 videos"). */
    media: { imageTag: string; videoTag: string; image: string; images: string; video: string; videos: string };
    /** "{name}" */
    galleryTitle: string;
    close: string;
    previous: string;
    next: string;
    /** "{current}", "{total}" */
    counter: string;
  };
  principles: { eyebrow: string; title: string; items: { title: string; description: string }[] };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    coreLabel: string;
    groups: { category: string; core: string[]; items: string[] }[];
  };
  github: {
    eyebrow: string;
    title: string;
    description: string;
    languages: string;
    featured: string;
    /** "{date}" */
    updated: string;
    repos: string;
    followers: string;
    since: string;
    unavailable: string;
    openProfile: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    missing: string;
    opening: string;
    locationLabel: string;
    locationValue: string;
  };
  footer: { builtWith: string };
};
