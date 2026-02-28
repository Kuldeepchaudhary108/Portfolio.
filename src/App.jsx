import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CodingStats from "@/components/CodingStats";
import Projects from "@/components/Projects";
import Reports from "@/components/Reports";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CodingStats />
      <Projects />
      <Reports />
      <Contact />
      <Footer />
    </>
  );
}
