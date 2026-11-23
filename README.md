# Eben Lal — Portfolio (v1)

React + Vite + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev       # local development
npm run build     # production build in dist/
npm run preview   # serve the production build
```

In development, the browser console lists any placeholder content still to fill in.

## Where things live

```
src/
  data/          ← all content (edit these, not the components)
    profile.js     name, headline, about copy, email, GitHub/LinkedIn, resume, photo
    projects.js    projects (featured + future)
    skills.js      grouped tech stack
    experience.js  roles
    education.js   degrees
    approach.js    development workflow steps
    orbit.js       tools in the hero orbit graphic (rings, colours, speeds)
    navigation.js  navbar/footer links
    contact.js     contact form delivery settings (FormSubmit)
  sections/      one component per page section
  components/    shared UI (Button, IconLink, ProfileVisual, ProjectCard, …)
  hooks/         useScrolled, useActiveSection
  utils/links.js hasUrl() — empty links render as "coming soon"
public/
  favicon.svg
  resume/        Eben-Lal-Resume.pdf (linked from the resume section)
```

## Common updates

**Add GitHub / LinkedIn** — set `links.github` and `links.linkedin` in `src/data/profile.js`.
Every button and icon that uses them switches from "coming soon" to a real link automatically.

**Update your resume** — replace `public/resume/Eben-Lal-Resume.pdf` with the new PDF
(keep the same file name). The View and Download buttons pick it up automatically.

**Edit the hero orbit** — add, remove or move tools between rings in `src/data/orbit.js`;
`duration` sets seconds per turn for each ring.

**Add tool logos to the orbit** — put each tool's official logo in `src/assets/tech/` using the
file names listed in `src/assets/tech/README.txt` (e.g. `react.svg`, `tailwind-css.svg`).
They are picked up automatically; tools without a file show just their name.

**Change your photo** — replace `src/assets/eben-lal.webp` (portrait, about 840 × 1040 px,
aspect 21:26). To show the tool orbit in the hero instead, set `photo: null` in `profile.js`.

**Add a project** — copy the template at the top of `src/data/projects.js` and fill it in.
`featured: true` shows it as a full case study; `featured: false` adds it to the
"More projects" grid (which replaces the "More projects on the way" note automatically).
Add a screenshot by importing it from `src/assets` into the `image` field.

**Add live / GitHub URLs for AI Resume Analyzer** — set `liveUrl` and `githubUrl` in `projects.js`.

**Contact form** — messages are emailed to you via FormSubmit (free, no account).
After deploying, send yourself one test message: FormSubmit then emails
ebenlalofficial@gmail.com an activation link. Click "Activate Form" once and all later
messages arrive in your inbox. Settings are in `src/data/contact.js`.

**After deploying** — uncomment and fill in `og:url` / `og:image` in `index.html`.

## Notes

- Colours live in `src/themes/`. The active theme is the one imported at the top of
  `src/index.css`: `midnight.css` (original, current), `olive.css` (white & olive green) or
  `pastel.css` (white & pastel green). To switch, change that one import line, then use the
  matching favicon from `src/themes/` (`favicon-midnight.svg`, `favicon-olive.svg`, `favicon-pastel.svg`) and update
  the `theme-color` values in `index.html`.
- Motion respects the visitor's "reduce motion" setting.
- The font (Schibsted Grotesk) is self-hosted via Fontsource; no external requests.
