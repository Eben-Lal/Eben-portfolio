import photo from "../assets/eben-lal.webp";

/**
 * Personal profile — the single place to edit your identity, links and copy.
 *
 * Links: leave a URL as an empty string ("") until you have the real one.
 * Empty links render as a "coming soon" state instead of a broken or fake link.
 */
export const profile = {
  name: "Eben Lal",
  role: "Software Developer",

  // Hero
  headline: "I turn ideas into working web applications, from the interface to the API.",
  intro:
    "Software developer building with React and JavaScript on the frontend, and Python and Django on the backend.",

  // Hero portrait (src/assets/eben-lal.webp). Set to null to show the tool orbit instead.
  photo,
  photoAlt: "Portrait of Eben Lal",

  email: "ebenlalofficial@gmail.com",

  links: {
    github: "https://github.com/Eben-Lal",
    linkedin: "https://www.linkedin.com/in/eben-lal/",
  },

  resume: {
    // To update: replace public/resume/Eben-Lal-Resume.pdf with the new file.
    url: "/resume/Eben-Lal-Resume.pdf",
    downloadName: "Eben-Lal-Resume.pdf",
  },

  about: {
    heading: "A developer who works on both sides of the stack.",
    paragraphs: [
      "I build web applications end to end. On the frontend I work with React, JavaScript and Tailwind CSS, structuring interfaces as reusable components and managing state with Hooks, Context API and Zustand. On the backend I work with Python, Django and Django REST Framework.",
      "My experience so far comes from two Python/Django internships, first at KITES Softwares and then with a remote team at Zecser Business. That meant building features against real business requirements, connecting frontends to REST APIs, working with databases, and debugging and testing alongside other developers.",
      "Alongside that, I build my own projects to strengthen my frontend and full-stack skills. I like to understand the problem behind a feature before writing code, so that what I build is genuinely useful to the people using it.",
    ],
    facts: [
      { label: "Focus", value: "Production-style web applications" },
      { label: "Frontend", value: "React, JavaScript, Tailwind CSS" },
      { label: "Backend", value: "Python, Django, Django REST Framework" },
      { label: "Education", value: "BCA, 2022 to 2025" },
    ],
  },
};
