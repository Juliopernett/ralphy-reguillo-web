"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { artist } from "@/data/artist";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#historia", label: "Historia" },
  { href: "#lanzamientos", label: "Lanzamientos" },
  { href: "#galeria", label: "Galería" },
  { href: "#videos", label: "Videos" },
  { href: "#presentaciones", label: "Presentaciones" },
  { href: "#contrataciones", label: "Contrataciones" },
];

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3" : "bg-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <Image
            src={artist.logo}
            alt={artist.stageName}
            width={40}
            height={40}
            className="h-9 w-9 object-contain invert"
            priority
          />
          <span className="font-display text-lg tracking-wide text-white uppercase hidden sm:inline">
            {artist.stageName}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/70 hover:text-amber-400 transition-colors duration-300 tracking-wide cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick("#contrataciones")}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">Contratar Ahora</span>
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong mx-4 mt-3 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/80 hover:text-amber-400 py-3 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contrataciones")}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 text-sm font-semibold text-black cursor-pointer"
              >
                Contratar Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
