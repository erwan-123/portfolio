"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  /** Remplit son conteneur parent (parent doit être positionné) */
  fill?: boolean;
  width?: number;
  height?: number;
  /** Classes appliquées au conteneur (bordures, coins, ombres...) */
  className?: string;
  /** Classes supplémentaires appliquées à l'image */
  imageClassName?: string;
  /** Charge l'image en priorité (LCP) */
  priority?: boolean;
  sizes?: string;
  /** Effet "blur-up" : netteté progressive au chargement (défaut : oui) */
  blur?: boolean;
  /** Apparition au défilement : fondu + léger zoom (défaut : oui) */
  reveal?: boolean;
}

/**
 * Affiche une image (next/image) avec une animation élégante :
 * - apparition au chargement : fondu + désaturation du flou + léger zoom
 * - apparition au défilement : fondu + translation + zoom léger
 */
export default function AnimatedImage({
  src,
  alt,
  fill = false,
  width = 1200,
  height = 750,
  className,
  imageClassName,
  priority = false,
  sizes,
  blur = true,
  reveal = true,
}: AnimatedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Si l'image est déjà en cache (ou cassée) au montage, on l'affiche tout de suite
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const image = (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      priority={priority}
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      className={[fill ? "" : "h-auto w-full object-cover", imageClassName ?? ""]
        .filter(Boolean)
        .join(" ")}
    />
  );

  // Fondu + défloutage au chargement de l'image
  const inner = blur ? (
    <motion.div
      className={fill ? "absolute inset-0" : "relative"}
      initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
      animate={{
        opacity: loaded ? 1 : 0,
        scale: loaded ? 1 : 1.08,
        filter: loaded ? "blur(0px)" : "blur(14px)",
      }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {image}
    </motion.div>
  ) : (
    image
  );

  if (!reveal) {
    return <div className={className}>{inner}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {inner}
    </motion.div>
  );
}

