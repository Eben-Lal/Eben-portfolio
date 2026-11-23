import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import App from "./App";
import "@fontsource-variable/schibsted-grotesk/wght.css";
import "./index.css";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { hasUrl } from "./utils/links";

// Development-only reminder of content that is still a placeholder.
if (import.meta.env.DEV) {
  const missing = [
    !hasUrl(profile.links.github) && "profile.links.github",
    !hasUrl(profile.links.linkedin) && "profile.links.linkedin",
    !hasUrl(profile.resume.url) && "profile.resume.url",
    !profile.photo && "profile.photo",
    ...projects.flatMap((p) => [
      !hasUrl(p.liveUrl) && `projects["${p.id}"].liveUrl`,
      !hasUrl(p.githubUrl) && `projects["${p.id}"].githubUrl`,
    ]),
  ].filter(Boolean);
  if (missing.length) console.info("[portfolio] Placeholder content still to fill in:", missing);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LazyMotion>
  </StrictMode>
);
