"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Play, Pause, X, ExternalLink } from "lucide-react";
import { artist } from "@/data/artist";

const EQ_BARS = [0.4, 0.9, 0.6, 1, 0.5];

export function MusicPlayer() {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);

  const spotify = artist.socialLinks.find((s) => s.platform === "spotify");
  const youtube = artist.socialLinks.find((s) => s.platform === "youtube");

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 px-4 w-full max-w-sm sm:max-w-md">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong flex items-center gap-3 rounded-2xl p-3 pr-4 shadow-2xl"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={artist.bioImage}
                alt={artist.stageName}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {artist.stageName}
              </p>
              <p className="truncate text-xs text-white/50">{artist.tagline}</p>
            </div>

            <div className="flex items-center gap-1 h-6" aria-hidden>
              {EQ_BARS.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-amber-400"
                  animate={
                    playing
                      ? { scaleY: [h * 0.4, h, h * 0.5, h * 0.9, h * 0.4] }
                      : { scaleY: 0.2 }
                  }
                  transition={{
                    duration: 1,
                    repeat: playing ? Infinity : 0,
                    delay: i * 0.08,
                  }}
                  style={{ height: 20, transformOrigin: "bottom" }}
                />
              ))}
            </div>

            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pausar" : "Reproducir"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black transition-transform hover:scale-105"
            >
              {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>

            <a
              href={spotify?.url ?? youtube?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escuchar en Spotify"
              className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            >
              <ExternalLink size={15} />
            </a>

            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar reproductor"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => setOpen(true)}
            aria-label="Abrir reproductor"
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full glass-strong text-amber-400 shadow-xl"
          >
            <Music2 size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
