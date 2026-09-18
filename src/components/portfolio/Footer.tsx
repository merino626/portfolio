import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/content/profile";
import type { Content } from "@/content/types";

export function Footer({ footer }: { footer: Content["footer"] }) {
  const links = [
    { href: profile.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mt-1 text-muted-foreground/70">{footer.builtWith}</p>
        </div>
        <ul className="flex items-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
