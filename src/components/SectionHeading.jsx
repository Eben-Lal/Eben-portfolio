import Reveal from "./Reveal";

/** Section title (h2) with an optional short lead paragraph. */
export default function SectionHeading({ id, title, lead, className = "" }) {
  return (
    <Reveal className={className}>
      <h2
        id={`${id}-title`}
        className="text-[2rem] font-bold leading-[1.08] tracking-[-0.025em] text-ink text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}
