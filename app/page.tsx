import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2">
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}
