"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Database,     // PHP
  Terminal,     // Python
  Server,       // Laravel
  Code2,        // Next.js
  FileCode2,    // TypeScript
  FileCode,     // JavaScript
  Palette,      // Tailwind CSS
  Layout,       // HTML5
  Paintbrush,   // CSS3
  GitBranch,    // Git
  Sparkles,
  ArrowUpRight
} from "lucide-react";

// Technologies avec thème bleu marine / cyan
const TECHNOLOGIES = [
  { name: "PHP", icon: Database },
  { name: "Python", icon: Terminal },
  { name: "Laravel", icon: Server },
  { name: "Next.js", icon: Code2 },
  { name: "JavaScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Paintbrush },
  { name: "Git", icon: GitBranch },
];

export default function AboutSection() {
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative w-full overflow-hidden bg-[#070d18] py-24 text-slate-100">
      {/* Motifs de fond (Gradients & Grid style Graphic/Creative) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* GRILLE PRINCIPALE (Image sur le côté + Texte) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* 1. PHOTO DE PROFIL GRANDE ET SUR LE CÔTÉ (5 colonnes sur desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-5"
          >
            <div className="group relative mx-auto max-w-md lg:max-w-none">
              
              {/* Halos de lumière bleu marine */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-700 via-sky-500 to-indigo-900 opacity-40 blur-2xl transition duration-500 group-hover:opacity-70" />
              
              {/* Cadre style Graphica avec bordure fine et fond sombre */}
              <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0b1426]/90 p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Conteneur Image Grande (Ratio vertical / Portrait) */}
                <div className="relative h-[480px] w-full overflow-hidden rounded-2xl sm:h-[560px]">
                  <Image
                    src="/profil.jpg"
                    alt="Photo de profil"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  
                  {/* Overlay avec dégradé bleu marine subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge flottant "Disponible pour projets" */}
                  

                  {/* Tag du rôle au bas de l'image */}
                  
                </div>

              </div>
            </div>
          </motion.div>

          {/* 2. TEXTE DE PRÉSENTATION (7 colonnes sur desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6 lg:col-span-7"
          >
            {/* Tag de section */}
            <div className="flex items-center gap-2">
              {/* <span className="h-2 w-2 rounded-full bg-sky-400" /> */}
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                À Propos — Développeur Full-Stack
              </span>
            </div>

            {/* Titre style éditorial Graphica */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Donner vie à des projets où la <span className="text-sky-400">technique</span> rencontre l'<span className="underline decoration-sky-500/40 underline-offset-8">expérience utilisateur</span>.
            </h2>

            {/* Texte de présentation */}
            <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                Développeur Web & Full-Stack passionné, j'allie rigueur technique et sensibilité UX pour transformer des idées complexes en applications web performantes, rapides et intuitives.
              </p>
              
              <p>
                Côté back-end, je m'appuie sur la robustesse de <strong className="font-semibold text-sky-300">PHP</strong>, <strong className="font-semibold text-sky-300">Python</strong> et <strong className="font-semibold text-sky-300">Laravel</strong>. Côté front-end, je conçois des interfaces dynamiques et réactives avec <strong className="font-semibold text-sky-300">Next.js</strong>.
              </p>
              
              <p>
                Chaque ligne de code que j'écris est pensée pour la scalabilité, la sécurité et l'expérience utilisateur. Toujours en veille technologique, je suis constamment en quête de nouveaux défis pour repousser mes limits.
              </p>
            </div>

            {/* Chiffres / Cartes de compétences rapides */}
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-500/15 bg-[#0b1426]/60 p-4 backdrop-blur-md">
                <div className="text-2xl font-bold text-sky-400">Architecture</div>
                <div className="text-xs font-medium text-slate-400">Robustesse & Scalabilité</div>
              </div>
              <div className="rounded-2xl border border-sky-500/15 bg-[#0b1426]/60 p-4 backdrop-blur-md">
                <div className="text-2xl font-bold text-sky-400">Performance</div>
                <div className="text-xs font-medium text-slate-400">Next.js & Code Propre</div>
              </div>
              <div className="col-span-2 rounded-2xl border border-sky-500/15 bg-[#0b1426]/60 p-4 backdrop-blur-md sm:col-span-1">
                <div className="text-2xl font-bold text-sky-400">UX / UI</div>
                <div className="text-xs font-medium text-slate-400">Interfaces Soignées</div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 3. CARROUSEL / MARQUEE DE TECHNOLOGIES (EN BAS) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t border-sky-500/10 pt-10"
        >
          <div className="mb-6 flex items-center justify-between px-2">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Stack & Technologies Maîtrisées
            </p>
            <span className="hidden text-xs text-slate-500 sm:inline-flex items-center gap-1">
              Scroll continu <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>

          {/* Marquee infini */}
          <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 22, repeat: Infinity }}
              className="flex flex-nowrap gap-4 py-2"
            >
              {marqueeItems.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={index}
                    className="group flex items-center gap-3 rounded-full border border-sky-500/20 bg-[#0b1426]/80 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-950/60"
                  >
                    <IconComponent className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
                    <span className="whitespace-nowrap text-xs font-bold tracking-wide text-slate-200">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}