"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Play } from "lucide-react";
import { artist } from "@/data/artist";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-black"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src={artist.heroImage}
          alt={artist.stageName}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:px-10 sm:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-sm"
        >
          {artist.location} · {artist.coverage}
        </motion.span>

        <h1 className="font-display uppercase text-white leading-[0.88] text-[16vw] sm:text-[10vw] lg:text-[7.5vw]">
          {artist.stageName.split(" ").map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: EASE }}
              className="block overflow-hidden"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
          className="font-script mt-4 max-w-xl text-2xl sm:text-3xl text-amber-300/90"
        >
          &ldquo;{artist.tagline}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
          className="mt-5 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          {artist.heroPhrase}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("#contrataciones")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Contratar Ahora</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          <button
            onClick={() => scrollTo("#lanzamientos")}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 active:scale-95 cursor-pointer"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
              <Play size={11} fill="black" className="ml-0.5" />
            </span>
            Escuchar Música
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("#historia")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
