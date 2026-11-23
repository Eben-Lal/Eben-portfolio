import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { CloseIcon, MenuIcon } from "./Icons";
import { navigation } from "../data/navigation";
import { profile } from "../data/profile";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const active = useActiveSection(navigation.map((item) => item.id));
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  // Lock scroll, close on Escape, close when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        solid ? "border-line bg-bg/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a href="#top" className="group flex items-center gap-2.5 rounded-lg" aria-label={`${profile.name}, back to top`}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-[0.6rem] bg-ink text-[0.8rem] font-extrabold tracking-tight text-bg transition-colors group-hover:bg-accent group-hover:text-accent-ink"
          >
            EL
          </span>
          <span className="text-[1.0625rem] font-bold tracking-[-0.01em] text-ink">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-accent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="#contact-form" className="min-h-10! px-4! text-sm!">
              Let’s connect
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-[calc(100dvh-4rem-env(safe-area-inset-top,0px))] overflow-y-auto border-t border-line bg-bg md:hidden"
          >
            <Container as="nav" className="flex flex-col pb-10 pt-4" aria-label="Mobile">
              <ul className="flex flex-col">
                {navigation.map((item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center text-2xl font-semibold tracking-[-0.015em] text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#contact-form" onClick={() => setOpen(false)} className="mt-8 w-full">
                Let’s connect
              </Button>
              <a href={`mailto:${profile.email}`} className="mt-5 self-center text-[0.9375rem] text-muted underline-offset-4 hover:text-ink hover:underline">
                {profile.email}
              </a>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
