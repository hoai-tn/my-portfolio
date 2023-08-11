import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ScrollAnimation from "./components/ScrollAnimation";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container mx-auto px-2">
        <AboutMe />
        <ScrollAnimation initial={{ y: 0, x: 250 }} duration={0.7}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation initial={{ y: 150, x: 0 }} duration={0.7}>
          <Experience />
        </ScrollAnimation>
        <ScrollAnimation initial={{ y: 150, x: 0 }} duration={0.9}>
          <Projects />
        </ScrollAnimation>
        <ScrollAnimation initial={{ y: 0, x: -250 }} duration={0.7}>
          <Testimonials />
        </ScrollAnimation>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
