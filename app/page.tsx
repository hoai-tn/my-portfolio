import About from "@/components/home/About";
import NewContact from "@/components/home/NewContact";
import NewExperience from "@/components/home/NewExperience";
import NewProjects from "@/components/home/NewProjects";
import Sidebar from "@/components/home/Sidebar";
import Testimonials from "@/components/home/Testimonials";


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
