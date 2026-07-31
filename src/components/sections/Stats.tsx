"use client";

import { artist } from "@/data/artist";
import { useCounter } from "@/hooks/useCounter";
import { Reveal } from "@/components/ui/reveal";

function StatCard({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}) {
  const { ref, value: count } = useCounter(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <p className="font-display text-gradient-gold text-5xl sm:text-6xl lg:text-7xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/50">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-zinc-950 to-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {artist.stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.1}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
