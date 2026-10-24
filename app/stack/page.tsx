import Navbar from "../components/accueil/Navbar";
import Footer from "../components/accueil/footer";
import TechStack from "../components/TechStack";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedImage from "../components/AnimatedImage";

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

        {/* Exemple de section présentant une image de public/images */}
        <section
          id="projets"
          className="bg-[#050a14] px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Mes projets
                </h2>

                <p className="mt-3 text-slate-400">
                  Découvrez quelques réalisations de mon portfolio.
                </p>
              </div>
            </ScrollReveal>

            {/* Image animée : remplace le chemin par une image existante */}
            <ScrollReveal delay={0.1}>
              <div className="mx-auto max-w-3xl">
                <AnimatedImage
                  src="/images/projet.jpg"
                  alt="Aperçu d’un projet de mon portfolio"
                  width={1200}
                  height={750}
                  className="overflow-hidden rounded-2xl border border-white/10 shadow-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer animé à son entrée dans l’écran */}
      <ScrollReveal delay={0.1}>
        <Footer />
      </ScrollReveal>
    </>
  );
}