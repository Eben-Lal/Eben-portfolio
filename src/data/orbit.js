/**
 * Tools shown in the hero "orbit" graphic. Each ring spins at its own speed.
 * Edit names or move tools between rings here; the graphic updates itself.
 */
export const orbitRings = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#7C8BFF",
    duration: 40, // seconds per full turn
    reverse: false,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "libraries-backend",
    label: "Libraries & backend",
    color: "#E3E6EF",
    duration: 62,
    reverse: true,
    items: ["React Router", "Zustand", "Axios", "Python", "Django", "DRF", "PostgreSQL"],
  },
  {
    id: "ai-tools",
    label: "AI, PDF & tools",
    color: "#F2B544",
    duration: 85,
    reverse: false,
    items: ["Puter AI", "PDF.js", "Git", "GitHub", "VS Code", "Postman"],
  },
];
