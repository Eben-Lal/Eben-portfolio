import Container from "./Container";
import IconLink from "./IconLink";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { navigation } from "../data/navigation";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col items-center gap-8 text-center">
        <div>
          <p className="text-lg font-bold tracking-[-0.01em] text-ink">{profile.name}</p>
          <p className="mt-1 text-muted">{profile.role}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[0.9375rem] text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center gap-2">
          <IconLink href={profile.links.github} label="GitHub" icon={<GitHubIcon />} />
          <IconLink href={profile.links.linkedin} label="LinkedIn" icon={<LinkedInIcon />} />
          <IconLink href={`mailto:${profile.email}`} label={`Email ${profile.name}`} icon={<MailIcon />} />
        </div>

        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with React, Vite and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
