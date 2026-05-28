import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Credentials from "@/components/Credentials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

function SectionDivider() {
  return (
    <hr
      aria-hidden="true"
      style={{
        position: "relative",
        zIndex: 1,
        pointerEvents: "none",
        margin: 0,
        border: "none",
        borderTop: "1px solid var(--divider-color)",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Credentials />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Contact />
      <ScrollToTop />
    </main>
  );
}