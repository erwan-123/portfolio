"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaArrowUp, 
  FaHeart, 
  FaPaperPlane 
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#050a14] pt-20 pb-10 text-slate-300 border-t border-sky-500/10">
      {/* Grille de fond et halos de lumière bleu marine */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION CALL TO ACTION (BANNIÈRE CONTACT) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0b1426]/80 p-8 sm:p-12 backdrop-blur-xl shadow-2xl mb-16"
        >
          {/* Lueur d'arrière-plan */}
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <HiSparkles className="h-4 w-4 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                  Un projet en tête ?
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100 sm:text-3xl lg:text-4xl tracking-tight">
                Travaillons <span className="text-sky-400">ensemble</span> sur votre prochaine idée.
              </h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                Disponible pour des missions en freelance, des collaborations ou des opportunités à temps plein. Discutons de vos besoins !
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:votre.email@example.com"
                className="flex items-center gap-3 rounded-2xl bg-sky-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-400 hover:shadow-sky-500/30"
              >
                <FaPaperPlane className="h-4 w-4" />
                <span>Me contacter</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* 2. CONTENU PRINCIPAL DU FOOTER */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-sky-500/10">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-400" />
              <span className="text-xl font-extrabold tracking-tight text-slate-100">
                Portfolio<span className="text-sky-400">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Développeur Full-Stack spécialisé en PHP, Laravel & Next.js. Créateur d'interfaces modernes, rapides et d'architectures robustes.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-[#0b1426] text-slate-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-950/60 hover:text-sky-400"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {["Accueil", "À Propos", "Projets", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="transition-colors hover:text-sky-400 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-sky-500/40 transition-all group-hover:w-2 group-hover:bg-sky-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Stack Core
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Laravel (PHP)</li>
              <li>Python</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Contact Direct
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <FaEnvelope className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:contact@example.com" className="hover:text-sky-400 transition-colors">
                  stevengansop258@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="h-4 w-4 text-sky-400 shrink-0" />
                <span>+237 653 896 038</span>
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. BAS DE FOOTER */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {currentYear ?? 2026} Tous droits réservés. Conçu avec <FaHeart className="h-3.5 w-3.5 text-sky-400 fill-sky-400" /> en Next.js & Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-[#0b1426] px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-sky-400 hover:bg-sky-950/50 hover:text-sky-400"
          >
            <span>Retour en haut</span>
            <FaArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}