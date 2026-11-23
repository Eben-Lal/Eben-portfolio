/**
 * Optional logos for the hero orbit.
 *
 * Drop image files into src/assets/tech/ named after the tool, in lowercase
 * with spaces and dots turned into hyphens, e.g.
 *   React         -> react.svg
 *   Tailwind CSS  -> tailwind-css.svg
 *   PDF.js        -> pdf-js.svg
 * .svg, .png and .webp all work. Tools without a file just show their name.
 */
const files = import.meta.glob("../assets/tech/*.{svg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const toolSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const logos = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().replace(/\.(svg|png|webp)$/, ""), url])
);

export const getToolLogo = (name) => logos[toolSlug(name)] ?? null;
