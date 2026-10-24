import Navbar from "../components/accueil/Navbar";
import Footer from "../components/accueil/footer";
import TechStack from "../components/TechStack";
import ScrollReveal from "../components/ScrollReveal";

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Section Technologies avec apparition au scroll */}
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
      </main>

      {/* Footer animé à son entrée dans l’écran */}
      <ScrollReveal delay={0.1}>
        <Footer />
      </ScrollReveal>
    </>
  );
}