"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Biography() {
  return (
    <section id="historia" className="relative overflow-hidden bg-black py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="left" className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src={artist.bioImage}
                alt={`${artist.stageName} interpretando el acordeón`}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-strong absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-4 text-center shadow-xl sm:left-auto sm:right-[-1.5rem] sm:translate-x-0"
            >
              <p className="font-display text-2xl text-amber-400">1998</p>
              <p className="text-[11px] uppercase tracking-widest text-white/60">
                Ciénaga, Magdalena
              </p>
            </motion.div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Conoce al artista"
              title="Historia"
              align="left"
              className="items-start text-left"
            />
            <div className="mt-8 flex flex-col gap-5">
              {artist.bio.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="text-white/65 leading-relaxed text-base sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal direction="left">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-10">
              <Quote className="mb-4 text-amber-400/60" size={36} />
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-4">
                Nuestra esencia
              </h3>
              <p className="text-white/60 leading-relaxed">
                {artist.whyUs.description}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-6">
                {artist.whyUs.title}
              </h3>
            </Reveal>
            <ul className="flex flex-col gap-4">
              {artist.whyUs.points.map((point, i) => (
                <Reveal key={point} delay={0.08 * i}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={20} />
                    <span className="text-white/70">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28">
          <SectionHeading eyebrow="Trayectoria" title="Logros y Reconocimientos" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {artist.achievements.map((achievement, i) => (
              <Reveal key={achievement.id} delay={i * 0.07}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-amber-400/40">
                  {achievement.image && (
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                      {achievement.year}
                    </span>
                    <h4 className="font-display text-base uppercase leading-snug text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
