"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const LOADING_STEPS = [
  "Initialisation du portfolio",
  "Chargement des ressources",
  "Préparation des animations",
  "Presque prêt…",
];

/** Durée d'avancement de la barre de progression (ms) */
export const PRELOADER_DURATION = 2200;
/** Pause après 100 % avant la disparition (ms) */
export const PRELOADER_PAUSE = 350;
/** Durée de l'animation de sortie du loader (ms) */
export const PRELOADER_EXIT = 600;

interface PreloaderProps {
  /** Appelé dès que le contenu peut être révélé (loader en cours de disparition) */
  onReady?: () => void;
}

/**
 * Écran de chargement affiché au lancement du portfolio.
 * Barre de progression animée + statut, puis disparition fluide.
 */
export default function Preloader({ onReady }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(LOADING_STEPS[0]);

  // Garde la dernière référence de onReady sans relancer l'effet
  const onReadyRef = useRef(onReady);
  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  // Avance la barre de progression puis masque le loader
  useEffect(() => {
    const controls = animate(0, 100, {
      duration: PRELOADER_DURATION / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setProgress(Math.round(value)),
      onComplete: () => {
        window.setTimeout(() => {
          // Révèle le contenu pendant que le loader disparaît
          onReadyRef.current?.();
          setVisible(false);
        }, PRELOADER_PAUSE);
      },
    });

    let stepIndex = 0;
    const stepTimer = window.setInterval(() => {
      stepIndex = (stepIndex + 1) % LOADING_STEPS.length;
      setStep(LOADING_STEPS[stepIndex]);
    }, 550);

    return () => {
      controls.stop();
      window.clearInterval(stepTimer);
    };
  }, []);

  // Bloque le défilement tant que le loader est affiché
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Chargement du portfolio"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#050a14] text-slate-100"
        >
          {/* Décor de fond (grille + halo bleu marine) */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

          <div className="relative flex flex-col items-center">
            {/* Logo animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8"
            >
              <motion.span
                className="absolute -inset-3 rounded-2xl bg-sky-500/20 blur-xl"
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-400/30 bg-[#0b1426] text-sky-400 shadow-2xl shadow-sky-500/20">
                <FaCode className="h-9 w-9" />
              </div>
            </motion.div>

            {/* Nom + rôle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Ngansop <span className="text-sky-400">Erwan</span>
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                <HiSparkles className="h-3.5 w-3.5 text-sky-400" />
                Développeur web
              </p>
            </motion.div>

            {/* Barre de progression + statut */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 w-72 sm:w-80"
            >
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">{step}</span>
                <span className="font-bold tabular-nums text-sky-400">{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
