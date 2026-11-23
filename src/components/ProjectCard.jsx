import Button from "./Button";
import TechList from "./TechList";
import ProjectVisual from "./ProjectVisual";
import { GitHubIcon } from "./Icons";
import { hasUrl } from "../utils/links";

/**
 * Compact card for non-featured projects. Renders whatever fields a project
 * has; optional fields (image, links) simply don't appear when empty.
 */
export default function ProjectCard({ project }) {
  const { title, description, technologies = [], image, imageAlt, githubUrl, liveUrl, caseStudyUrl } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface">
      <div className="aspect-[16/10] border-b border-line bg-surface-2">
        {image ? (
          <img src={image} alt={imageAlt || `Screenshot of ${title}`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center p-6">
            <ProjectVisual title={title} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-[-0.015em] text-ink">{title}</h3>
        <p className="mt-2 text-muted">{description}</p>
        {technologies.length > 0 && <TechList items={technologies} size="sm" className="mt-5" label={`${title} technologies`} />}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {hasUrl(caseStudyUrl) && (
            <Button href={caseStudyUrl} variant="primary" className="min-h-11!">
              Read case study
            </Button>
          )}
          <Button href={liveUrl} variant={hasUrl(caseStudyUrl) ? "secondary" : "primary"} className="min-h-11!">
            Live demo
          </Button>
          <Button href={githubUrl} variant="secondary" icon={<GitHubIcon width={18} height={18} />} className="min-h-11!">
            Code
          </Button>
        </div>
      </div>
    </article>
  );
}
