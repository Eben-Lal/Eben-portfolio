import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import FeaturedProject from "./FeaturedProject";
import { GitHubIcon } from "../components/Icons";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { hasUrl } from "../utils/links";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        title="Projects"
        lead="Applications I’ve designed and built, from the problem they solve to the code behind them."
      />

      <div className="mt-12 space-y-10 lg:mt-16">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {others.length > 0 ? (
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">More projects</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-start gap-5 rounded-[1.5rem] border border-dashed border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-ink">More projects on the way</h3>
            <p className="mt-1 text-muted">New projects will be added here as they’re completed.</p>
          </div>
          {hasUrl(profile.links.github) && (
            <Button href={profile.links.github} variant="secondary" icon={<GitHubIcon width={18} height={18} />}>
              See GitHub
            </Button>
          )}
        </div>
      )}
    </Section>
  );
}
