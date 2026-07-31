"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<
  (typeof artist.events)[number]["status"],
  { label: string; dot: string; text: string }
> = {
  confirmado: {
    label: "Confirmado",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
  },
  agotado: {
    label: "Agotado",
    dot: "bg-red-400",
    text: "text-red-400",
  },
  proximamente: {
    label: "Próximamente",
    dot: "bg-amber-400",
    text: "text-amber-400",
  },
};

export function Timeline() {
  return (
    <section id="presentaciones" className="relative bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Agenda"
          title="Próximas Presentaciones"
          description="Consulta la disponibilidad de Ralphy Reguillo para tu evento."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-400/60 via-white/10 to-transparent sm:left-1/2" />

          <ul className="flex flex-col gap-10">
            {artist.events.map((event, i) => {
              const status = STATUS_STYLES[event.status];
              const isEven = i % 2 === 0;
              return (
                <Reveal key={event.id} delay={i * 0.1}>
                  <li
                    className={cn(
                      "relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0",
                      isEven
                        ? "sm:pr-12 sm:text-right sm:mr-auto"
                        : "sm:pl-12 sm:ml-auto",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-black sm:top-1.5",
                        status.dot,
                        isEven ? "sm:left-full sm:-translate-x-1/2" : "sm:left-0 sm:-translate-x-1/2",
                      )}
                    />
                    <div className="glass rounded-2xl p-5">
                      <div
                        className={cn(
                          "mb-2 flex items-center gap-2 text-sm text-white/50",
                          isEven && "sm:justify-end",
                        )}
                      >
                        <CalendarDays size={15} />
                        {event.displayDate}
                      </div>
                      <h3 className="font-display text-lg uppercase text-white">
                        {event.eventName}
                      </h3>
                      <div
                        className={cn(
                          "mt-1 flex items-center gap-2 text-sm text-white/60",
                          isEven && "sm:justify-end",
                        )}
                      >
                        <MapPin size={14} />
                        {event.city}
                        {event.venue !== "Por confirmar" && ` · ${event.venue}`}
                      </div>
                      <span
                        className={cn(
                          "mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest",
                          status.text,
                        )}
                      >
                        <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
                        {status.label}
                      </span>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
