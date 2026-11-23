import { useEffect, useState } from "react";

/** Returns the id of the section currently in the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? "" : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
