import Image from "next/image";
import Navbar from "./components/accueil/Navbar";
import AboutSection from "./components/accueil/about";
import ProjectsSection from "./components/accueil/projet";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <AboutSection/>
    <ProjectsSection/>
   </div>
  );
}
