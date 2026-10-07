"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ExternalLink, 

  FolderKanban, 
  Sparkles 
} from "lucide-react";

// Types TypeScript
export type ProjectCategory = "Tous" | "Full-Stack" | "Web App" | "SaaS";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: "En production" | "En développement" | "Beta";
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

// Données des projets
const PROJECTS: Project[] = [
  {
    id: "stocking",
    title: "Stocking",
    description: "Application intuitive de gestion de stock en temps réel. Suivi des inventaires, gestion des fournisseurs et analyse statistique des flux.",
    category: "Full-Stack",
    status: "En production",
    image: "/projects/stocking.jpg",
    technologies: ["PHP", "Laravel", "Next.js", "Tailwind CSS", "MySQL"],
    demoUrl: "https://example.com/stocking",
    githubUrl: "https://github.com/example/stocking",
  },
  {
    id: "memoria",
    title: "Memoria",
    description: "Plateforme d'assistance à la rédaction et structuration de mémoires académiques. Intègre le suivi des révisions et l'organisation bibliographique.",
    category: "SaaS",
    status: "En production",
    image: "/projects/memoria.jpg",
    technologies: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://example.com/memoria",
    githubUrl: "https://github.com/example/memoria",
  },
  {
    id: "edugest",
    title: "EduGest",
    description: "Système complet de gestion d'établissement scolaire : notes, absences, plannings, facturation et portail parents/enseignants.",
    category: "Web App",
    status: "En production",
    image: "/projects/edugest.jpg",
    technologies: ["PHP", "Laravel", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://example.com/edugest",
    githubUrl: "https://github.com/example/edugest",
  },
//   {
//     id: "ia-minute",
//     title: "IA Minute",
//     description: "Générateur d'actifs marketing et de visuels automatisés pour les réseaux sociaux utilisant des modèles d'IA générative.",
//     category: "SaaS",
//     status: "Beta",
//     image: "/projects/iaminute.jpg",
//     technologies: ["Next.js", "Python", "Tailwind CSS", "Framer Motion"],
//     demoUrl: "https://example.com/iaminute",
//     githubUrl: "https://github.com/example/iaminute",
//   },
];

const CATEGORIES: ProjectCategory[] = ["Tous", "Full-Stack", "Web App", "SaaS"];

// 🎬 VARIANTS FRAMER MOTION POUR L'EFFET EN CASCADE (STAGGER)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Décalage de 0.15s entre chaque carte
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, // Légère translation vers le bas au départ
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0, // Remontée fluide à sa position initiale
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // Courbe cubique ultra-fluide (easeOutCubic)
    },
  },
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? PROJECTS 
    : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section className="relative w-full overflow-hidden bg-[#070d18] py-24 text-slate-100">
      {/* Arrière-plan grille & gradients bleu marine */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-10 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/40 px-4 py-1.5 backdrop-blur-md"
          >
            <FolderKanban className="h-4 w-4 text-sky-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Portfolio & Réalisations
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Mes Projets <span className="text-sky-400">Récents</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            Découvrez une sélection de projets modernes développés avec précision, alliant performance back-end et expérience front-end soignée.
          </motion.p>
        </div>

        {/* FILTRES PAR CATÉGORIE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "text-slate-100 shadow-lg shadow-sky-500/20"
                  : "border border-sky-500/10 bg-[#0b1426]/60 text-slate-400 hover:border-sky-500/30 hover:text-slate-200"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* 🚀 GRILLE DE CARTES AVEC ANIMATION D'APPARITION AU SCROLL (STAGGER) */}
        <motion.div 
          key={activeCategory} // Force le re-déclenchement propre de l'animation lors du changement de filtre
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // S'anime dès que 10% de la section est visible dans le viewport
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }} // Effet d'élévation fluide au survol
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0b1426]/80 backdrop-blur-xl transition-colors duration-500 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                {/* Glow discret au survol */}
                <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-b from-sky-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* IMAGE DU PROJET */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Overlay dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426] via-transparent to-black/30" />

                  {/* Badge de statut */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#070d18]/80 px-3 py-1 backdrop-blur-md">
                    <span className={`h-2 w-2 rounded-full ${project.status === "En production" ? "bg-emerald-400" : "bg-sky-400"}`} />
                    <span className="text-[11px] font-medium text-slate-200">{project.status}</span>
                  </div>

                  {/* Tag Catégorie */}
                  <div className="absolute top-4 right-4 rounded-full border border-sky-400/20 bg-sky-950/80 px-3 py-1 text-[11px] font-semibold text-sky-400 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* CONTENU DE LA CARTE */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies & Boutons */}
                  <div className="mt-6 space-y-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="rounded-md border border-sky-500/10 bg-sky-950/30 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-sky-500/10">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25"
                        >
                          <span>Voir le projet</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
{/* 
                      {project.githubUrl && (
                        // <a
                        //   href={project.githubUrl}
                        //   target="_blank"
                        //   rel="noopener noreferrer"
                        //   aria-label={`Code source GitHub de ${project.title}`}
                        //   className="flex items-center justify-center rounded-xl border border-sky-500/20 bg-[#070d18] p-2.5 text-slate-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-950/50 hover:text-sky-400"
                        // >
                         
                        // </a>
                      )} */}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}