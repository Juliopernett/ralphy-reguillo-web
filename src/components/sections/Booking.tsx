"use client";

import Image from "next/image";
import { MessageCircle, Phone, Mail, Sparkles } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";

export function Booking() {
  const { booking } = artist;
  const waMessage = encodeURIComponent(
    `Hola ${artist.stageName}, quiero información para contratar tu show.`,
  );

  return (
    <section id="contrataciones" className="relative overflow-hidden bg-black py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 -top-1/3 h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              <Sparkles size={14} />
              Contrataciones
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-[0.95]">
              Hagamos de tu evento un momento inolvidable
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Será un honor acompañarte y llevar la mejor experiencia musical
              a tu celebración. Contáctanos y reserva tu fecha.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
              <div className="mx-auto flex flex-col items-center gap-4 md:mx-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-amber-400/40 sm:h-40 sm:w-40">
                  {booking.managerPhoto && (
                    <Image
                      src={booking.managerPhoto}
                      alt={booking.managerName}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="text-center">
                  <p className="font-display text-xl uppercase text-white">
                    {booking.managerName}
                  </p>
                  <p className="text-sm text-amber-400/80">{booking.managerRole}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/${booking.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-[#25D366] px-6 py-5 text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
                      <MessageCircle size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest opacity-70">
                        WhatsApp
                      </p>
                      <p className="font-display text-xl">
                        {booking.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-sm font-semibold sm:inline">
                    Escribir ahora →
                  </span>
                </a>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href={`tel:+${booking.phone}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white transition-colors duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-400">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Llamar
                      </p>
                      <p className="font-medium">Contacto directo</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${booking.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white transition-colors duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-400">
                      <Mail size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Correo
                      </p>
                      <p className="truncate font-medium">Enviar mensaje</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              {artist.formats.map((format) => (
                <div
                  key={format.id}
                  className="rounded-xl bg-white/[0.02] p-5"
                >
                  <p className="font-display text-base uppercase text-amber-400">
                    {format.name}
                  </p>
                  <p className="mt-1 text-sm text-white/55 leading-relaxed">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
