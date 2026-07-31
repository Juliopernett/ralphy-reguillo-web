"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen de nosotros"
        />

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {artist.testimonials.map((t) => (
              <div key={t.id} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_80%] md:flex-[0_0_60%]">
                <Reveal>
                  <div className="glass mx-auto flex h-full flex-col items-center gap-5 rounded-3xl p-8 text-center sm:p-10">
                    <Quote className="text-amber-400/60" size={32} />
                    <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-display uppercase text-white">{t.name}</p>
                      <p className="text-sm text-white/50">{t.role}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Testimonio anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-amber-400/50 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {artist.testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => scrollTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  selected === i ? "w-6 bg-amber-400" : "w-2 bg-white/20",
                )}
              />
            ))}
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Siguiente testimonio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-amber-400/50 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
