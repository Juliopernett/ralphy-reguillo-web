"use client";

import { ArrowUpRight } from "lucide-react";
import { artist } from "@/data/artist";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SOCIAL_ICONS } from "@/components/icons/social-icons";

export function SocialLinks() {
  return (
    <section id="redes" className="relative bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Conecta"
          title="Redes Sociales"
          description="Sigue a Ralphy Reguillo y no te pierdas ningún show, lanzamiento o adelanto."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artist.socialLinks.map((social, i) => {
            const Icon = SOCIAL_ICONS[social.platform];
            return (
              <Reveal key={social.id} delay={i * 0.06}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ ["--brand" as string]: social.color }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-15"
                    style={{ background: social.color }}
                  />
                  <div
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{
                      backgroundColor: `${social.color}1a`,
                      color: social.color,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="relative min-w-0 flex-1">
                    <p className="font-display text-lg uppercase text-white">
                      {social.label}
                    </p>
                    <p className="truncate text-sm text-white/50">{social.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="relative shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
