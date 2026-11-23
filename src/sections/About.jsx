import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  const { heading, paragraphs, facts } = profile.about;
  return (
    <Section id="about" containerClassName="grid gap-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <SectionHeading id="about" title={heading} className="lg:sticky lg:top-28" />
      </div>

      <div className="lg:col-span-7">
        <div className="max-w-[62ch] space-y-5 text-[1.0625rem] leading-[1.7] text-ink-soft sm:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-line py-4">
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1 font-semibold text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
