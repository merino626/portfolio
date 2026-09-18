import type { Content, FeaturedProject as Featured, Project } from "@/content/types";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type ProjectsSectionProps = {
  id: string;
  section: { eyebrow: string; title: string; description: string; items: Project[]; featured?: Featured };
  ui: Content["projectUi"];
};

export function ProjectsSection({ id, section, ui }: ProjectsSectionProps) {
  return (
    <Section id={id} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      {section.featured ? (
        <Reveal className="mb-6">
          <FeaturedProject project={section.featured} ui={ui} />
        </Reveal>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {section.items.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06} className="h-full">
            <ProjectCard project={project} ui={ui} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
