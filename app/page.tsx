import Image from "next/image";
import Navbar from "./components/accueil/Navbar";
import AboutSection from "./components/accueil/about";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <AboutSection/>
   </div>
  );
}
