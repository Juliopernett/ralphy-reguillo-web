"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Play, X, ExternalLink } from "lucide-react";
import { artist } from "@/data/artist";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const EQ_BARS = [0.4, 0.9, 0.6, 1, 0.5];

/**
 * This is a "now playing" style widget, not a real inline audio player.
 * An earlier version tried to autoplay a hidden/tiny YouTube iframe (both
 * via the raw ?autoplay=1 param and via the IFrame Player API's
 * playVideo() called from a click handler) — both are unreliable across
 * browsers: Chrome doesn't consistently propagate user-activation into a
 * postMessage-controlled cross-origin iframe, and iOS Safari additionally
 * refuses unmuted autoplay on a near-invisible video element. The only
 * approach that reliably plays real audio everywhere, including iOS
 * Safari, is a direct tap on YouTube's own visible player. Opening a new
 * tab satisfied that but felt like leaving the site, so the play button
 * opens a real, visible embed in an on-page modal instead — same
 * reliability, without navigating away.
 */
export function MusicPlayer() {
  const [open, setOpen] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);

  const spotify = artist.socialLinks.find((s) => s.platform === "spotify");
  const youtube = artist.socialLinks.find((s) => s.platform === "youtube");
  const playableVideo = artist.videos.find((v) => v.youtubeId);

  return (
    <div className="fixed inset-x-0 bottom-24 z-40 flex justify-center px-16 sm:bottom-6 sm:px-4">
      <div className="w-full max-w-[calc(100vw-8rem)] sm:max-w-sm md:max-w-md">
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong flex items-center gap-2 rounded-2xl p-2.5 pr-3 shadow-2xl sm:gap-3 sm:p-3 sm:pr-4"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl sm:h-11 sm:w-11">
                <Image
                  src={artist.bioImage}
                  alt={artist.stageName}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-white sm:text-sm">
                  {artist.stageName}
                </p>
                <p className="truncate text-[11px] text-white/50 sm:text-xs">
                  {artist.tagline}
                </p>
              </div>

              <div className="hidden items-center gap-1 h-6 sm:flex" aria-hidden>
                {EQ_BARS.map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] rounded-full bg-amber-400"
                    animate={{ scaleY: [h * 0.4, h, h * 0.5, h * 0.9, h * 0.4] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08 }}
                    style={{ height: 20, transformOrigin: "bottom" }}
                  />
                ))}
              </div>

              {playableVideo ? (
                <button
                  onClick={() => setVideoOpen(true)}
                  aria-label={`Escuchar ${playableVideo.title}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black transition-transform hover:scale-105 sm:h-9 sm:w-9"
                >
                  <Play size={15} className="ml-0.5" />
                </button>
              ) : (
                <a
                  href={spotify?.url ?? youtube?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escuchar música"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black transition-transform hover:scale-105 sm:h-9 sm:w-9"
                >
                  <Play size={15} className="ml-0.5" />
                </a>
              )}

              <a
                href={spotify?.url ?? youtube?.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver más en redes"
                className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                <ExternalLink size={15} />
              </a>

              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar reproductor"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/40 hover:text-white transition-colors sm:h-8 sm:w-8"
              >
                <X size={15} />
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
              className="mx-auto flex h-11 w-11 items-center justify-center rounded-full glass-strong text-amber-400 shadow-xl sm:h-12 sm:w-12"
            >
              <Music2 size={19} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {playableVideo && (
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-2xl border-white/10 bg-black p-0 overflow-hidden">
            <DialogTitle className="sr-only">{playableVideo.title}</DialogTitle>
            {videoOpen && (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${playableVideo.youtubeId}?autoplay=1`}
                  title={playableVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
