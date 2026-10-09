"use client";

// ✅ APRÈS (corrigé)
import {
  SiMysql,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss,           // <-- Utilise SiCss
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { FaCss3Alt } from "react-icons/fa6";

type Tech = {
  name: string;
  icon: IconType;
  color: string; // couleur officielle de la techno
  level: string; // ex: "Avancé", "Intermédiaire"
};

const TECHNOLOGIES: Tech[] = [
  { name: "HTML5",       icon: SiHtml5,        color: "#E34F26", level: "Avancé" },
  { name: "CSS3",        icon: FaCss3Alt,         color: "#1572B6", level: "Avancé" },
  { name: "Tailwind CSS",icon: SiTailwindcss,  color: "#06B6D4", level: "Avancé" },
  { name: "Next.js",     icon: SiNextdotjs,    color: "#000000", level: "Avancé" },
  { name: "PHP",         icon: SiPhp,          color: "#777BB4", level: "Intermédiaire" },
  { name: "Laravel",     icon: SiLaravel,      color: "#FF2D20", level: "Intermédiaire" },
  { name: "MySQL",       icon: SiMysql,        color: "#4479A1", level: "Intermédiaire" },
  { name: "Python",      icon: SiPython,       color: "#3776AB", level: "Intermédiaire" },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Mes technologies
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Voici les langages, frameworks et outils que j'utilise au quotidien
            pour construire des applications web modernes.
          </p>
        </div>

        {/* Grille des technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {TECHNOLOGIES.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:border-gray-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icône */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15` }} // 15 = ~8% d'opacité
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Nom */}
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {tech.name}
                </h3>

                {/* Niveau */}
                <span
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    color: tech.color,
                    backgroundColor: `${tech.color}15`,
                  }}
                >
                  {tech.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}