"use client";

import Image from "next/image";
import { Play, Disc3 } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Discography() {
  const releases = artist.discography;

  return (
    <section id="lanzamientos" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Música"
          title="Lanzamientos"
          description="El repertorio y los sencillos de Ralphy Reguillo, muy pronto disponibles en todas las plataformas."
        />

        {releases.length === 0 ? (
          <Reveal delay={0.15}>
            <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] px-8 py-16 text-center">
              <Disc3 className="text-amber-400/70" size={42} />
              <p className="font-display text-xl uppercase text-white">
                Nuevo material en camino
              </p>
              <p className="text-white/50 max-w-sm">
                Estamos preparando nuevos lanzamientos. Síguenos en redes para
                ser el primero en escucharlos.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((release, i) => (
              <Reveal key={release.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/30">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={release.cover}
                      alt={release.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <button
                      aria-label={`Escuchar ${release.title}`}
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-black shadow-xl transition-transform duration-300 hover:scale-110">
                        <Play size={22} fill="black" className="ml-1" />
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-lg uppercase text-white">
                        {release.title}
                      </h3>
                      <p className="text-sm text-white/50">{release.year}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">
                      {release.type}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
