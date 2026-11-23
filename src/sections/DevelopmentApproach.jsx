import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { approach } from "../data/approach";

export default function DevelopmentApproach() {
  return (
    <Section id="approach" className="bg-surface-2/60">
      <SectionHeading
        id="approach"
        title="How I approach building"
        lead="The workflow I follow when taking a feature or project from an idea to something people can use."
      />

      <ol className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {approach.map((step, i) => (
          <li key={step.title} className="relative border-t border-line pb-10 pt-7">
            <span aria-hidden="true" className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-accent" />
            <span className="block text-[2.5rem] font-extrabold leading-none tracking-[-0.04em] text-accent tabular-nums">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-[-0.01em] text-ink">{step.title}</h3>
            <p className="mt-2 max-w-[34ch] text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
