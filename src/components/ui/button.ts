import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background/40 text-foreground hover:bg-accent",
  secondary: "bg-secondary text-foreground hover:bg-secondary/75",
  ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
} as const;

const sizes = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-6",
  icon: "size-11",
} as const;

type ButtonStyle = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

/** Shared button look, applied to both <button> and <a> elements. */
export function buttonVariants({ variant = "primary", size = "md", className }: ButtonStyle = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
