import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import TechList from "../components/TechList";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" className="bg-surface-2/60">
      <SectionHeading
        id="skills"
        title="What I build with"
        lead="The languages, frameworks and tools I use across the frontend, the backend and the space in between."
      />

      <div className="mt-12 border-b border-line lg:mt-16">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-4 border-t border-line py-7 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="text-lg font-bold tracking-[-0.01em] text-ink">{group.title}</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">{group.summary}</p>
            </div>
            <TechList items={group.items} className="md:col-span-8 md:pt-0.5" label={`${group.title} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
