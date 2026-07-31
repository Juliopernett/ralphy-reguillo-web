"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { artist } from "@/data/artist";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    `Hola ${artist.stageName}, quiero información para contratar tu show.`,
  );
  const href = `https://wa.me/${artist.booking.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle size={26} className="relative z-10" fill="white" />
    </motion.a>
  );
}
