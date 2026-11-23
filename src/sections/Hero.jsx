import { m } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import IconLink from "../components/IconLink";
import ProfileVisual from "../components/ProfileVisual";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1];
const item = (i) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay: 0.05 + i * 0.08 },
});

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <m.h1
            id="hero-title"
            {...item(0)}
            className="text-[clamp(3.25rem,13vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink"
          >
            {profile.name}
          </m.h1>

          <m.p {...item(1)} className="mt-5 flex items-center gap-3 text-xl font-semibold tracking-[-0.01em] text-ink sm:text-2xl">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[3px] bg-accent" />
            {profile.role}
          </m.p>

          <m.p
            {...item(2)}
            className="mt-7 max-w-[34ch] text-[1.375rem] font-medium leading-[1.35] tracking-[-0.012em] text-ink-soft text-balance sm:text-[1.625rem]"
          >
            {profile.headline}
          </m.p>

          <m.p {...item(3)} className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">
            {profile.intro}
          </m.p>

          <m.div {...item(4)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#projects">View projects</Button>
            <Button href="#contact-form" variant="secondary">
              Contact me
            </Button>
            <div className="flex gap-2 sm:ml-3">
              <IconLink href={profile.links.github} label="GitHub" icon={<GitHubIcon />} />
              <IconLink href={profile.links.linkedin} label="LinkedIn" icon={<LinkedInIcon />} />
            </div>
          </m.div>
        </div>

        <div className="lg:col-span-5">
          <ProfileVisual photo={profile.photo} alt={profile.photoAlt} />
        </div>
      </Container>
    </section>
  );
}
