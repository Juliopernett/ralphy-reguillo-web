import Image from "next/image";
import { artist } from "@/data/artist";
import { SOCIAL_ICONS } from "@/components/icons/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src={artist.logo}
              alt={artist.stageName}
              width={72}
              height={72}
              className="h-16 w-16 object-contain invert"
            />
            <p className="text-white/50 text-sm max-w-xs text-center md:text-left">
              {artist.location} · {artist.coverage}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {artist.socialLinks.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-black sm:h-11 sm:w-11"
                  style={{ ["--brand" as string]: social.color }}
                >
                  <Icon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-sm text-white/50">
              &copy; {year} {artist.stageName}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/30">
              Un sitio de{" "}
              <span className="font-semibold text-amber-400/80">
                Portal Vallenato
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
