"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Gallery() {
  const images = artist.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback(() => {
    setIndex(null);
    setZoomed(false);
  }, []);

  const next = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  const active = index !== null ? images[index] : null;

  return (
    <section id="galeria" className="relative bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Momentos"
          title="Galería"
          description="Instantes capturados en tarima y en cada presentación."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <Reveal key={img.id} delay={(i % 6) * 0.06} className="break-inside-avoid">
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
                aria-label={`Ver imagen: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex w-full items-center justify-between p-3">
                    {img.category && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                        {img.category}
                      </span>
                    )}
                    <ZoomIn size={16} className="text-white/80" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col bg-black/95 backdrop-blur-md"
          >
            <div className="flex items-center justify-between p-5">
              <p className="text-sm text-white/60">
                {(index ?? 0) + 1} / {images.length}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setZoomed((z) => !z)}
                  aria-label="Zoom"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
                <button
                  onClick={close}
                  aria-label="Cerrar"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full glass text-white hover:text-amber-400 transition-colors cursor-pointer sm:left-8"
              >
                <ChevronLeft size={22} />
              </button>

              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={
                  zoomed
                    ? "relative h-full w-full cursor-zoom-out overflow-auto"
                    : "relative h-full max-h-[80vh] w-full max-w-4xl cursor-zoom-in"
                }
                onClick={() => setZoomed((z) => !z)}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className={zoomed ? "object-contain scale-150" : "object-contain"}
                />
              </motion.div>

              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full glass text-white hover:text-amber-400 transition-colors cursor-pointer sm:right-8"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
