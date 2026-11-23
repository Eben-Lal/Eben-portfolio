/**
 * Projects — add a new object to this array to add a project.
 *
 * featured: true  -> rendered as a full case study
 * featured: false -> rendered as a card in the "More projects" grid
 *
 * image: import a screenshot from src/assets and set it here, or leave null
 *        to use the built-in placeholder graphic.
 * Links: leave as "" until you have the real URL.
 *
 * Template for the next project:
 * {
 *   id: "project-slug",
 *   title: "",
 *   description: "",
 *   problem: "",
 *   solution: "",
 *   features: [],
 *   built: [],
 *   technologies: [],
 *   image: null,
 *   imageAlt: "",
 *   githubUrl: "",
 *   liveUrl: "",
 *   caseStudyUrl: "",
 *   featured: false,
 * },
 */
export const projects = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "A web application that reads an uploaded PDF resume and returns AI-generated feedback on its content.",
    // TODO(Eben): confirm or rewrite the problem/solution wording in your own words.
    problem:
      "Getting feedback on a resume usually means waiting for someone else to read it. I wanted a tool where you can upload your resume and get feedback on its content straight away.",
    solution:
      "Upload a PDF resume, have its content extracted, and send it to an AI model that analyses the resume and returns feedback, all in a responsive React interface.",
    features: [
      "Upload a resume as a PDF",
      "Text extraction from the uploaded PDF",
      "AI-generated feedback on resume content",
      "Responsive interface across screen sizes",
    ],
    built: [
      "Developed the application in React.js with reusable components and logic handled through React Hooks.",
      "Built a responsive, user-friendly interface with Tailwind CSS.",
      "Integrated Puter AI to analyse resume content and generate feedback.",
      "Used PDF.js to process uploaded PDF resumes and extract their content.",
      "Implemented routing with React Router v8 and state management with Zustand.",
      "Connected frontend functionality to APIs and managed asynchronous operations.",
      "Deployed the application on Render.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Puter AI",
      "React Router v8",
      "Zustand",
      "PDF.js",
    ],
    image: null,
    imageAlt: "Screenshot of the AI Resume Analyzer application",
    githubUrl: "https://github.com/Eben-Lal/ai-resume-analyzer",
    liveUrl: "https://ai-resume-analyzer-ikcq.onrender.com/",
    caseStudyUrl: "",
    featured: true,
  },
];
