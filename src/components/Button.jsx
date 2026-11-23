import { hasUrl, isExternal } from "../utils/links";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.98]";

const variants = {
  primary: "bg-ink text-bg hover:bg-accent hover:text-accent-ink",
  secondary: "border border-line bg-surface text-ink hover:border-ink",
  ghost: "text-ink hover:bg-surface-2",
  onBand: "bg-band-ink text-band hover:bg-signal",
  onBandOutline: "border border-band-line text-band-ink hover:border-band-ink",
};

const pendingStyles = {
  default: "border border-dashed border-line text-muted cursor-not-allowed",
  band: "border border-dashed border-band-line text-band-muted cursor-not-allowed",
};

/**
 * Link styled as a button.
 * - Internal anchors ("#projects") scroll in-page.
 * - External URLs open in a new tab.
 * - An empty href renders a non-interactive "coming soon" state, so no
 *   placeholder or invented URL is ever shipped as a real link.
 */
export default function Button({
  href,
  variant = "primary",
  icon,
  download,
  pendingLabel = "Coming soon",
  className = "",
  children,
  ...rest
}) {
  if (!hasUrl(href)) {
    const onBand = variant.startsWith("onBand");
    return (
      <span
        role="link"
        aria-disabled="true"
        title={pendingLabel}
        className={`${base} ${pendingStyles[onBand ? "band" : "default"]} active:scale-100 ${className}`}
      >
        {icon}
        <span>{children}</span>
        <span className="text-xs font-medium opacity-80">{pendingLabel}</span>
      </span>
    );
  }

  const external = isExternal(href);
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
