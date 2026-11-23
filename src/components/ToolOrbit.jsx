import { m } from "framer-motion";
import { orbitRings } from "../data/orbit";
import { getToolLogo } from "../utils/techLogos";

// Ring radii as a percentage of the frame width (container query units).
const RADII = [23, 34, 44];
const CENTER_Y = "55cqw"; // vertical centre of the orbit inside the frame

// Rough badge width in em, used to space badges evenly around each ring.
const badgeEm = (name) => name.length * 0.57 + 1.7 + (getToolLogo(name) ? 1.9 : 0);

/** Angles (deg) for each badge: each gets a share of the ring sized to its width. */
function layoutAngles(items, offset) {
  const widths = items.map(badgeEm);
  const total = widths.reduce((a, b) => a + b, 0);
  let cursor = offset;
  return widths.map((w) => {
    const span = (360 * w) / total;
    const angle = cursor + span / 2;
    cursor += span;
    return angle;
  });
}

/**
 * Hero graphic: the tools I use orbiting a central "EL" core, like a small
 * solar system. Each ring turns at its own speed. Badges travel along their
 * ring, so rings never collide. Pure CSS rotation, paused on hover, static
 * for visitors who prefer reduced motion.
 */
export default function ToolOrbit({ initials = "EL" }) {
  const allTools = orbitRings.flatMap((r) => r.items).join(", ");

  return (
    <div className="tool-orbit absolute inset-0 select-none" role="img" aria-label={`Orbit of the tools I use: ${allTools}`}>
      <div aria-hidden="true" className="absolute inset-0">
        {orbitRings.map((ring, i) => (
          <Ring key={ring.id} ring={ring} radius={RADII[i]} index={i} />
        ))}

        {/* Core */}
        <m.div
          className="absolute left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[#F2B544] bg-[#161A2E]"
          style={{ top: CENTER_Y, width: "15cqw", height: "15cqw" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-extrabold tracking-[-0.04em] text-[#EEF0F7]" style={{ fontSize: "4.6cqw" }}>
            {initials}
          </span>
        </m.div>
      </div>

      {/* Legend */}
      <ul
        aria-hidden="true"
        className="absolute inset-x-0 flex flex-wrap justify-center gap-x-[4cqw] gap-y-[1.5cqw] px-[6cqw]"
        style={{ bottom: "5.5cqw" }}
      >
        {orbitRings.map((ring) => (
          <li
            key={ring.id}
            className="flex items-center gap-[1.5cqw] font-medium text-[#A9AEC4]"
            style={{ fontSize: "clamp(10px, 2.9cqw, 13px)" }}
          >
            <span className="rounded-full" style={{ width: "1.8cqw", height: "1.8cqw", minWidth: 6, minHeight: 6, background: ring.color }} />
            {ring.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Ring({ ring, radius, index }) {
  const angles = layoutAngles(ring.items, index * 40 - 90);
  const spin = {
    "--orbit-duration": `${ring.duration}s`,
    "--orbit-direction": ring.reverse ? "reverse" : "normal",
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ top: CENTER_Y, width: `${radius * 2}cqw`, height: `${radius * 2}cqw` }}
    >
      <m.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 + index * 0.15 }}
      >
        <div className="orbit-ring relative h-full w-full rounded-full border border-[#2F3554]" style={spin}>
          {ring.items.map((name, i) => (
            <div
              key={name}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angles[i]}deg) translateX(${radius}cqw) rotate(90deg)` }}
            >
              <Badge name={name} color={ring.color} />
            </div>
          ))}
        </div>
      </m.div>
    </div>
  );
}

function Badge({ name, color }) {
  const logo = getToolLogo(name);
  return (
    <span
      className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full border bg-[#1F2440] font-semibold text-[#E3E6F3]"
      style={{
        fontSize: "clamp(7.5px, 2.6cqw, 12.5px)",
        padding: logo ? "0.3em 0.85em 0.3em 0.3em" : "0.5em 0.85em",
        gap: "0.5em",
        borderColor: `${color}66`,
      }}
    >
      {logo && (
        // Light disc so dark and light logos both stay visible on the dark badge.
        <span className="grid shrink-0 place-items-center rounded-full bg-white" style={{ width: "1.75em", height: "1.75em" }}>
          <img src={logo} alt="" draggable="false" style={{ width: "1.15em", height: "1.15em", objectFit: "contain" }} />
        </span>
      )}
      {name}
    </span>
  );
}
