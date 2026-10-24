"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Classes appliquées au conteneur animé (bordures, coins, ombres...) */
  className?: string;
  /** Charge l'image en priorité (LCP) */
  priority?: boolean;
  sizes?: string;
}

/**
 * Affiche une image (next/image) avec une animation d'apparition
 * douce (zoom + translation) déclenchée à l'entrée dans le viewport.
 */
export default function AnimatedImage({
  src,
  alt,
  width = 1200,
  height = 750,
  className,
  priority = false,
  sizes,
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 768px"}
        className="h-auto w-full object-cover"
      />
    </motion.div>
  );
}
