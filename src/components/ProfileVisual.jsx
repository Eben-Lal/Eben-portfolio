import ToolOrbit from "./ToolOrbit";

/**
 * Hero profile area.
 *
 * When `photo` is provided (see src/data/profile.js) a real portrait is shown.
 * Until then, the tool orbit graphic stands in.
 */
export default function ProfileVisual({ photo, alt, initials = "EL" }) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
      <div className="@container relative aspect-[21/26] overflow-hidden rounded-[2rem] bg-band ring-1 ring-band-line">
        {photo ? (
          <img
            src={photo}
            alt={alt}
            width="840"
            height="1040"
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
        ) : (
          <ToolOrbit initials={initials} />
        )}
      </div>
    </div>
  );
}
