/** Inline list of technology names rendered as quiet chips. */
export default function TechList({ items, size = "md", className = "", label }) {
  const sizes = {
    sm: "px-2.5 py-1 text-[0.8125rem]",
    md: "px-3 py-1.5 text-[0.875rem]",
  };
  return (
    <ul className={`flex flex-wrap content-start items-start gap-2 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border border-line bg-surface font-medium text-ink-soft ${sizes[size]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
