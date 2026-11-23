/**
 * Placeholder visual for a project with no screenshot yet.
 * It shows the flow of the app (upload, analyse, feedback) as a schematic,
 * not a mock screenshot, so it never implies results the app doesn't show.
 */
export default function ProjectVisual({ steps = ["Upload PDF", "Analyse", "Feedback"], title }) {
  return (
    <svg
      viewBox="0 0 560 340"
      className="h-full w-full"
      role="img"
      aria-label={`Diagram of how ${title} works: ${steps.join(", then ")}`}
    >
      {/* connectors */}
      <g className="stroke-line" strokeWidth="2" strokeDasharray="4 6" fill="none">
        <path d="M168 150 H236" />
        <path d="M324 150 H392" />
      </g>
      <g className="fill-muted">
        <path d="M236 144 l9 6 -9 6z" />
        <path d="M392 144 l9 6 -9 6z" />
      </g>

      {/* document */}
      <g>
        <path d="M58 78 h78 l28 28 v112 a8 8 0 0 1 -8 8 H58 a8 8 0 0 1 -8 -8 V86 a8 8 0 0 1 8 -8z" className="fill-surface stroke-line" strokeWidth="2" />
        <path d="M136 78 v20 a8 8 0 0 0 8 8 h20" className="stroke-line" strokeWidth="2" fill="none" />
        <rect x="66" y="118" width="62" height="6" rx="3" className="fill-ink" opacity="0.75" />
        <rect x="66" y="134" width="82" height="5" rx="2.5" className="fill-muted" opacity="0.45" />
        <rect x="66" y="147" width="74" height="5" rx="2.5" className="fill-muted" opacity="0.45" />
        <rect x="66" y="160" width="80" height="5" rx="2.5" className="fill-muted" opacity="0.45" />
        <rect x="66" y="178" width="54" height="5" rx="2.5" className="fill-muted" opacity="0.45" />
        <rect x="66" y="191" width="70" height="5" rx="2.5" className="fill-muted" opacity="0.45" />
        <rect x="58" y="204" width="34" height="16" rx="4" className="fill-accent" />
        <text x="75" y="216" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-accent-ink">PDF</text>
      </g>

      {/* AI node */}
      <g>
        <rect x="246" y="106" width="68" height="88" rx="20" className="fill-ink" />
        <circle cx="280" cy="150" r="13" fill="none" style={{ stroke: "var(--signal)" }} strokeWidth="2.5" />
        <circle cx="280" cy="150" r="4" style={{ fill: "var(--signal)" }} />
      </g>

      {/* feedback panel */}
      <g>
        <rect x="402" y="78" width="118" height="148" rx="12" className="fill-surface stroke-line" strokeWidth="2" />
        {[100, 140, 180].map((y) => (
          <g key={y}>
            <circle cx="420" cy={y + 4} r="5" className="fill-accent" opacity="0.85" />
            <rect x="432" y={y} width="72" height="6" rx="3" className="fill-ink" opacity="0.7" />
            <rect x="432" y={y + 13} width="58" height="5" rx="2.5" className="fill-muted" opacity="0.4" />
          </g>
        ))}
      </g>

      {/* step labels */}
      <g fontSize="14" fontWeight="600" className="fill-ink-soft" textAnchor="middle">
        <text x="107" y="262">{steps[0]}</text>
        <text x="280" y="262">{steps[1]}</text>
        <text x="461" y="262">{steps[2]}</text>
      </g>
    </svg>
  );
}
