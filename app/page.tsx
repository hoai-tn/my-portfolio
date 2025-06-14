import Sidebar from "./components/Sidebar";
import About from "./components/About";
import NewExperience from "./components/NewExperience";
import NewProjects from "./components/NewProjects";
import NewContact from "./components/NewContact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="main-container">
      <Sidebar />
      
      <main className="main-content">
        <About />
        <NewExperience />
        <NewProjects />
        <Testimonials />
        <NewContact />
      </main>
    </div>
  );
}
