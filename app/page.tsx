import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2">
        <Header/>
      </main>
    </div>
  );
}
