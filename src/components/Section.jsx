import Container from "./Container";

/**
 * Standard page section. Gives every section the same vertical rhythm,
 * an anchor id and an accessible label from its heading.
 */
export default function Section({ id, className = "", containerClassName = "", children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
