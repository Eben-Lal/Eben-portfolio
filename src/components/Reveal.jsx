import { m } from "framer-motion";

/**
 * Subtle one-time reveal on scroll. Used sparingly (section headings and the
 * featured project), not on every element. Content is fully readable if
 * motion is reduced.
 */
export default function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const Component = m[as] ?? m.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
