import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from "../components/Icons";
import { profile } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable: the email is still visible and selectable.
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-band py-20 text-band-ink sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2
              id="contact-title"
              className="max-w-[14ch] text-[clamp(2.5rem,7vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-balance"
            >
              Let’s build something useful.
            </h2>
            <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-band-muted">
              Have a role, a project or a question? Send me a message, or reach me directly.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-band-line pt-8">
            <div className="flex min-w-0 flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="min-w-0 break-all text-lg font-semibold tracking-[-0.01em] transition-colors hover:text-band-accent sm:text-xl"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-band-line px-4 text-sm font-semibold text-band-ink transition-colors hover:border-band-ink"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.span
                    key={copied ? "done" : "copy"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    {copied ? <CheckIcon width={16} height={16} /> : <CopyIcon width={16} height={16} />}
                    {copied ? "Copied" : "Copy email"}
                  </m.span>
                </AnimatePresence>
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={profile.links.linkedin} variant="onBandOutline" icon={<LinkedInIcon width={18} height={18} />}>
                LinkedIn
              </Button>
              <Button href={profile.links.github} variant="onBandOutline" icon={<GitHubIcon width={18} height={18} />}>
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
