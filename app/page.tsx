import Image from "next/image";
import Navbar from "./components/accueil/Navbar";
import AboutSection from "./components/accueil/about";
import ProjectsSection from "./components/accueil/projet";
import Footer from "./components/accueil/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <AboutSection/>
    <ProjectsSection/>
    <Footer/>
   </div>
  );
}
