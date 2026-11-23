import { hasUrl, isExternal } from "../utils/links";

/**
 * Round icon-only link (GitHub, LinkedIn, email).
 * Renders a dimmed, non-interactive placeholder when the URL is not set yet.
 */
export default function IconLink({ href, label, icon, tone = "default", className = "" }) {
  const size = "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200";
  const tones = {
    default: "border border-line text-ink hover:border-ink hover:bg-surface",
    band: "border border-band-line text-band-ink hover:border-band-ink",
  };

  if (!hasUrl(href)) {
    return (
      <span
        role="img"
        aria-label={`${label} (link coming soon)`}
        title={`${label}: link coming soon`}
        className={`${size} border border-dashed ${tone === "band" ? "border-band-line text-band-muted" : "border-line text-muted"} opacity-70 ${className}`}
      >
        {icon}
      </span>
    );
  }

  const external = isExternal(href);
  return (
    <a
      href={href}
      aria-label={external ? `${label} (opens in a new tab)` : label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${size} ${tones[tone]} ${className}`}
    >
      {icon}
    </a>
  );
}
