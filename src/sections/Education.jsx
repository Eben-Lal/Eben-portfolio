import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <Section id="education" className="pt-0! sm:pt-0! lg:pt-0!" containerClassName="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading id="education" title="Education" />
      </div>
      <ul className="lg:col-span-8">
        {education.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-4 rounded-[1.5rem] border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <h3 className="text-[1.25rem] font-bold leading-snug tracking-[-0.015em] text-ink">{item.degree}</h3>
              <p className="mt-1 text-ink-soft">{item.institution}</p>
            </div>
            <p className="shrink-0 font-semibold tabular-nums text-muted">
              <time>{item.start}</time> – <time>{item.end}</time>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
