"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  const phoneNumber = "237653896038";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-[#25D366]/40 sm:px-5"
      >
        {/* Pulsation douce et continue en arrière-plan */}
        <motion.span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.3, 1.4],
            opacity: [0.6, 0.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Icône WhatsApp avec une légère secousse au survol */}
        <FaWhatsapp className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />

        {/* Texte du bouton */}
        <span className="text-xs font-semibold tracking-wide sm:text-sm">
          Contactez-nous
        </span>
      </motion.a>
    </div>
  );
}