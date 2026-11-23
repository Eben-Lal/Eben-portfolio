import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import TechList from "../components/TechList";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" containerClassName="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading
          id="experience"
          title="Internship experience"
          lead="Building Python and Django applications with professional teams."
          className="lg:sticky lg:top-28"
        />
      </div>

      <ol className="relative lg:col-span-8">
        {experience.map((job, i) => (
          <li key={job.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            {/* rail */}
            <span
              aria-hidden="true"
              className={`absolute left-[5px] top-2 w-px bg-line ${i === experience.length - 1 ? "h-0" : "bottom-0"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[0.4rem] h-[11px] w-[11px] rounded-full border-2 ${
                i === 0 ? "border-accent bg-accent" : "border-ink-soft bg-bg"
              }`}
            />

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem] text-muted">
              <span className="tabular-nums">
                <time>{job.start}</time> – <time>{job.end}</time>
              </span>
              <span>{job.location}</span>
            </div>
            <h3 className="mt-2 text-[1.375rem] font-bold leading-snug tracking-[-0.015em] text-ink">{job.role}</h3>
            <p className="font-medium text-ink-soft">{job.company}</p>

            <ul className="mt-5 space-y-2.5 text-ink-soft">
              {job.points.map((point) => (
                <li key={point} className="relative pl-5 leading-[1.6]">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1 w-2.5 rounded-full bg-line" />
                  {point}
                </li>
              ))}
            </ul>

            {job.stack?.length > 0 && <TechList items={job.stack} size="sm" className="mt-5" label={`${job.company} stack`} />}
          </li>
        ))}
      </ol>
    </Section>
  );
}
