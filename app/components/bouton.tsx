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
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-[#25D366]/40 sm:px-5"
      >
        {/* Halo d'animation en arrière-plan (effet de pulsation subtil) */}
        <span className="absolute -inset-0.5 -z-10 rounded-full bg-[#25D366] opacity-75 blur-md animate-ping" />

        {/* Icône WhatsApp */}
        <FaWhatsapp className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />

        {/* Texte du bouton */}
        <span className="text-xs font-semibold tracking-wide sm:text-sm">
          Contactez-nous pour plus d’informations
        </span>
      </motion.a>
    </div>
  );
}