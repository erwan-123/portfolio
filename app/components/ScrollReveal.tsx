"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  /** Délai (en secondes) avant le déclenchement de l'animation */
  delay?: number;
  /** Direction d'apparition du contenu */
  direction?: Direction;
  /** Classes supplémentaires appliquées au conteneur */
  className?: string;
}

/**
 * Enveloppe son contenu avec une animation d'apparition
 * déclenchée à l'entrée dans le viewport (une seule fois).
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: ScrollRevealProps) {
  const offset = 48;
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };

  if (direction === "up") initial.y = offset;
  if (direction === "down") initial.y = -offset;
  if (direction === "left") initial.x = offset;
  if (direction === "right") initial.x = -offset;

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
