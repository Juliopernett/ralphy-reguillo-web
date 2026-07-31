"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function Videos() {
  const [active, setActive] = useState<string | null>(null);
  const activeVideo = artist.videos.find((v) => v.id === active);

  return (
    <section id="videos" className="relative bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="En movimiento"
          title="Videos"
          description="Revive los mejores momentos de Ralphy Reguillo en tarima."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artist.videos.map((video, i) => {
            const hasVideo = Boolean(video.youtubeId);
            return (
              <Reveal key={video.id} delay={i * 0.08}>
                <button
                  onClick={() => hasVideo && setActive(video.id)}
                  disabled={!hasVideo}
                  className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] disabled:cursor-default"
                >
                  {video.thumbnail && (
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-300 group-hover:from-black/70" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    {hasVideo ? (
                      <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-white/90 text-black opacity-90 shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <Play size={24} fill="black" className="ml-1" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                        <Clock size={13} />
                        Próximamente
                      </span>
                    )}
                  </div>

                  <p className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-sm uppercase tracking-wide text-white">
                    {video.title}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-white/10 bg-black p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {activeVideo?.title ?? "Video"}
          </DialogTitle>
          {activeVideo?.youtubeId && (
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
