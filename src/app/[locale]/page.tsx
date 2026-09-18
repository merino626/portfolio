import { notFound } from "next/navigation";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Principles } from "@/components/portfolio/Principles";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { Skills } from "@/components/portfolio/Skills";
import { Stats } from "@/components/portfolio/Stats";
import { getContent } from "@/content";
import { profile } from "@/content/profile";
import { isLocale, localeTags } from "@/i18n/config";

// GitHub data is refreshed in the background every six hours.
export const revalidate = 21600;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const c = getContent(locale);
  const lang = localeTags[locale].lang;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: c.hero.title,
    url: `${profile.siteUrl}/${locale}`,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Barueri", addressRegion: "SP", addressCountry: "BR" },
    worksFor: { "@type": "Organization", name: "Laborit", url: "https://laborit.com.br" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Impacta Tecnologia" },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: c.skills.groups.flatMap((g) => g.core),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD must be inlined; the content is static and built from our own data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar nav={c.nav} locale={locale} shortName={profile.shortName} resumeUrl={profile.resumeUrl} />
      <main id="main">
        <Hero hero={c.hero} />
        <Stats stats={c.stats} lang={lang} />
        <About about={c.about} />
        <Experience experience={c.experience} />
        <ProjectsSection id="work" section={c.work} ui={c.projectUi} />
        <ProjectsSection id="projects" section={c.projects} ui={c.projectUi} />
        <Principles principles={c.principles} />
        <Skills skills={c.skills} />
        <GitHubSection github={c.github} projects={c.projects.items} lang={lang} />
        <Contact contact={c.contact} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
