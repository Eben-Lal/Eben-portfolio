import Reveal from "../components/Reveal";
import Button from "../components/Button";
import TechList from "../components/TechList";
import ProjectVisual from "../components/ProjectVisual";
import { CheckIcon, ExternalIcon, GitHubIcon } from "../components/Icons";
import { hasUrl } from "../utils/links";

/**
 * Full case-study layout for a featured project:
 * Problem → Solution → Key features → Technology → What I built → Links
 */
export default function FeaturedProject({ project }) {
  const {
    id,
    title,
    description,
    problem,
    solution,
    features = [],
    built = [],
    technologies = [],
    image,
    imageAlt,
    githubUrl,
    liveUrl,
    caseStudyUrl,
  } = project;

  return (
    <Reveal as="article" className="overflow-hidden rounded-[1.75rem] border border-line bg-surface" aria-labelledby={`${id}-title`}>
      {/* Overview */}
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        <div className="flex flex-col lg:col-span-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Featured project
          </p>
          <h3 id={`${id}-title`} className="mt-5 text-[2.25rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[3rem]">
            {title}
          </h3>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">{description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-auto lg:pt-10">
            <Button href={liveUrl} icon={<ExternalIcon width={18} height={18} />}>
              Live demo
            </Button>
            <Button href={githubUrl} variant="secondary" icon={<GitHubIcon width={18} height={18} />}>
              View code
            </Button>
            {hasUrl(caseStudyUrl) && (
              <Button href={caseStudyUrl} variant="ghost">
                Read case study
              </Button>
            )}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="flex aspect-[16/11] items-center justify-center overflow-hidden rounded-[1.25rem] border border-line bg-surface-2">
            {image ? (
              <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className="w-full p-5 sm:p-8">
                <ProjectVisual title={title} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Problem / Solution */}
      <div className="grid border-t border-line md:grid-cols-2">
        <CaseBlock heading="The problem" className="md:border-r md:border-line">
          <p>{problem}</p>
        </CaseBlock>
        <CaseBlock heading="The solution" className="border-t border-line md:border-t-0">
          <p>{solution}</p>
        </CaseBlock>
      </div>

      {/* Features / Technology */}
      <div className="grid border-t border-line md:grid-cols-2">
        <CaseBlock heading="Key features" className="md:border-r md:border-line">
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <CheckIcon width={20} height={20} className="mt-[3px] shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </CaseBlock>
        <CaseBlock heading="Technology" className="border-t border-line md:border-t-0">
          <TechList items={technologies} label={`${title} technologies`} />
        </CaseBlock>
      </div>

      {/* What I built */}
      <div className="border-t border-line">
        <CaseBlock heading="What I built">
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {built.map((b) => (
              <li key={b} className="relative pl-5">
                <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-ink-soft" />
                {b}
              </li>
            ))}
          </ul>
        </CaseBlock>
      </div>
    </Reveal>
  );
}

function CaseBlock({ heading, className = "", children }) {
  return (
    <div className={`p-6 sm:p-10 lg:px-12 ${className}`}>
      <h4 className="text-[0.9375rem] font-bold tracking-[-0.005em] text-ink">{heading}</h4>
      <div className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">{children}</div>
    </div>
  );
}
