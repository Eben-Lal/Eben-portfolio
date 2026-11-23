import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DevelopmentApproach from "./sections/DevelopmentApproach";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import ResumeCTA from "./sections/ResumeCTA";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevelopmentApproach />
        <Experience />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
