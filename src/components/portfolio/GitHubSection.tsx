import { GitFork, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { profile } from "@/content/profile";
import type { Content, Project } from "@/content/types";
import { format } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
};

type Account = { public_repos: number; followers: number; created_at: string };

const SIX_HOURS = 60 * 60 * 6;

async function fetchGitHub(user: string) {
  const init = { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: SIX_HOURS } };
  try {
    const [accountRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`, init),
      fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, init),
    ]);
    if (!accountRes.ok || !reposRes.ok) return null;
    const account = (await accountRes.json()) as Account;
    const repos = ((await reposRes.json()) as Repo[]).filter((r) => !r.fork);
    return { account, repos };
  } catch {
    return null;
  }
}

type GitHubSectionProps = { github: Content["github"]; projects: Project[]; lang: string };

export async function GitHubSection({ github, projects, lang }: GitHubSectionProps) {
  const data = await fetchGitHub(profile.githubUser);

  const header = { id: "github", eyebrow: github.eyebrow, title: github.title, description: github.description };

  if (!data) {
    return (
      <Section {...header}>
        <p className="text-sm text-muted-foreground">
          {github.unavailable}{" "}
          <a href={profile.github} target="_blank" rel="noreferrer noopener" className="text-primary underline">
            {github.openProfile}
          </a>
        </p>
      </Section>
    );
  }

  const { account, repos } = data;
  const featured = profile.featuredRepos
    .map((name) => repos.find((r) => r.name === name))
    .filter((r): r is Repo => Boolean(r));

  const languageCounts = repos.reduce<Record<string, number>>((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] ?? 0) + 1;
    return acc;
  }, {});
  const totalLanguages = Object.values(languageCounts).reduce((a, b) => a + b, 0) || 1;
  const languages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, share: Math.round((count / totalLanguages) * 100) }));

  const dateFormat = new Intl.DateTimeFormat(lang, { day: "2-digit", month: "short", year: "numeric" });
  const projectFor = (repo: Repo) =>
    projects.find((p) => p.links.some((l) => l.kind === "github" && l.href.endsWith(`/${repo.name}`)));

  return (
    <Section {...header}>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <GitHubIcon className="size-4" />
              {github.languages}
            </h3>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              @{profile.githubUser}
            </a>
          </div>

          <ul className="mt-6 space-y-3">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-foreground">{l.name}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{l.share}%</span>
                </div>
                <div className="mt-1.5 h-px bg-border">
                  <div className="h-px bg-primary" style={{ width: `${l.share}%` }} />
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 font-mono text-xs">
            <div className="flex flex-col">
              <dt className="order-2 mt-1 text-muted-foreground">{github.repos}</dt>
              <dd className="order-1 text-base text-foreground">{account.public_repos}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 mt-1 text-muted-foreground">{github.followers}</dt>
              <dd className="order-1 text-base text-foreground">{account.followers}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 mt-1 text-muted-foreground">{github.since}</dt>
              <dd className="order-1 text-base text-foreground">{new Date(account.created_at).getFullYear()}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.05} className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-foreground">{github.featured}</h3>
          <ul className="mt-5 divide-y divide-border">
            {featured.map((repo) => {
              const project = projectFor(repo);
              return (
                <li key={repo.id} className="py-4 first:pt-0 last:pb-0">
                  <a href={repo.html_url} target="_blank" rel="noreferrer noopener" className="group block">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                      <span className="font-mono text-sm text-foreground group-hover:text-primary">{repo.name}</span>
                      <span className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                        {repo.language ? <span>{repo.language}</span> : null}
                        <span className="inline-flex items-center gap-1">
                          <Star className="size-3" aria-hidden="true" />
                          {repo.stargazers_count}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="size-3" aria-hidden="true" />
                          {repo.forks_count}
                        </span>
                      </span>
                    </div>
                    {project ? (
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        <span className="text-foreground/90">{project.name}</span> — {project.description}
                      </p>
                    ) : null}
                    <p className="mt-1.5 font-mono text-[11px] text-muted-foreground/80">
                      {format(github.updated, { date: dateFormat.format(new Date(repo.pushed_at)) })}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
