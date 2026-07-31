import type { Artist } from "@/types/artist";

/**
 * Fuente única de verdad para todo el sitio.
 * Contenido base tomado del EPK oficial "Ralphy Reguillo - El que toca y canta".
 * Las secciones marcadas con TODO usan datos de ejemplo y deben
 * actualizarse con información real antes de publicar cambios grandes.
 */
export const artist: Artist = {
  name: "Ralphy Reguillo",
  stageName: "Ralphy Reguillo",
  tagline: "El que toca y canta",
  heroPhrase:
    "El acordeón y la voz de una nueva generación del vallenato tradicional",
  location: "Ciénaga, Magdalena",
  coverage: "Cobertura nacional",

  bio: {
    short:
      "Acordeonero y cantante vallenato de Ciénaga, Magdalena, que lidera su propia agrupación interpretando simultáneamente el acordeón y la voz.",
    paragraphs: [
      "Ralphy Reguillo nació el 27 de enero de 1998 en Ciénaga, Magdalena, Colombia. Desde muy joven descubrió su pasión por la música, especialmente por el acordeón. Inició su formación en la escuela del maestro Amado, en su tierra natal, y posteriormente, de manera autodidacta, perfeccionó su técnica hasta desarrollar un estilo propio.",
      "Su talento lo ha llevado a destacarse en importantes festivales vallenatos. En su primera participación en el Festival Guillermo de Jesús Buitrago obtuvo el segundo lugar, logro que impulsó su carrera artística. Posteriormente ha sido ganador del primer puesto en las categorías de Trío Aficionado, Trío Profesional e Interpretación de Canción Inédita en Ciénaga, además de participar en otros reconocidos festivales del país, como el de Codazzi.",
      "Con el propósito de ofrecer una propuesta auténtica y mantener viva la esencia de los grandes juglares del vallenato, decidió liderar su propia agrupación interpretando simultáneamente el acordeón y la voz, consolidando así un estilo que combina tradición, talento y personalidad.",
    ],
  },

  whyUs: {
    title: "¿Por qué elegirnos?",
    description:
      "Más que interpretar música, hacemos de cada presentación una experiencia inolvidable. Nos inspira la tradición del vallenato y el compromiso de brindar un espectáculo auténtico, lleno de energía, profesionalismo y pasión, capaz de conectar con el público y hacer especial cada celebración.",
    points: [
      "Formatos adaptables a todo tipo de eventos",
      "Repertorio versátil para diferentes públicos y ocasiones",
      "Profesionalismo, puntualidad y compromiso",
      "Un espectáculo que conserva la esencia del vallenato y crea momentos memorables",
    ],
  },

  formats: [
    {
      id: "grupo-completo",
      name: "Grupo Completo",
      description:
        "Una experiencia musical con toda la energía de la agrupación, ideal para grandes celebraciones y eventos masivos.",
    },
    {
      id: "medio-grupo",
      name: "Medio Grupo",
      description:
        "Una propuesta versátil que conserva la esencia del show, perfecta para reuniones sociales y eventos de menor formato.",
    },
  ],

  achievements: [
    {
      id: "buitrago-debut",
      title: "Segundo lugar - Festival Guillermo de Jesús Buitrago",
      description:
        "En su primera participación en el festival, un logro que impulsó su carrera artística.",
      year: "Debut",
      image: "/images/press/buitrago-2025.jpg",
    },
    {
      id: "trio-aficionado",
      title: "Primer puesto - Trío Aficionado",
      description: "Ganador en Ciénaga, Magdalena.",
      year: "Ciénaga",
      image: "/images/press/buitrago-2026.jpg",
    },
    {
      id: "trio-profesional",
      title: "Primer puesto - Trío Profesional",
      description: "Ganador en Ciénaga, Magdalena.",
      year: "Ciénaga",
    },
    {
      id: "cancion-inedita",
      title: "Primer puesto - Interpretación de Canción Inédita",
      description: "Ganador en Ciénaga, Magdalena.",
      year: "Ciénaga",
    },
    {
      id: "codazzi",
      title: "Festival de Codazzi",
      description: "Participación en uno de los festivales más reconocidos del país.",
      year: "Cesar",
    },
  ],

  heroImage: "/images/hero-main.jpg",
  heroImageAlt: "/images/hero-alt.jpg",
  bioImage: "/images/bio-portrait.jpg",
  logo: "/images/brand/logo.png",
  favicon: "/images/brand/logo.png",

  gallery: [
    {
      id: "g1",
      src: "/images/gallery/gallery-1.jpg",
      alt: "Ralphy Reguillo interpretando el acordeón en tarima",
      width: 1200,
      height: 1600,
      category: "Tarima",
    },
    {
      id: "g2",
      src: "/images/gallery/gallery-2.jpg",
      alt: "Ralphy Reguillo en presentación en vivo con pirotecnia",
      width: 1600,
      height: 1066,
      category: "En vivo",
    },
    {
      id: "g3",
      src: "/images/gallery/gallery-3.jpg",
      alt: "Ralphy Reguillo cantando frente al micrófono en blanco y negro",
      width: 1600,
      height: 1066,
      category: "En vivo",
    },
    {
      id: "g4",
      src: "/images/gallery/gallery-4.jpg",
      alt: "Ralphy Reguillo tocando acordeón en concierto",
      width: 720,
      height: 451,
      category: "Tarima",
    },
    {
      id: "g5",
      src: "/images/gallery/gallery-5.jpg",
      alt: "Ralphy Reguillo junto a su agrupación en tarima",
      width: 6224,
      height: 4369,
      category: "Agrupación",
    },
    {
      id: "g6",
      src: "/images/artist-studio.jpg",
      alt: "Retrato de estudio de Ralphy Reguillo con acordeón",
      width: 854,
      height: 1280,
      category: "Retrato",
    },
    {
      id: "g7",
      src: "/images/bio-portrait.jpg",
      alt: "Ralphy Reguillo en blanco y negro interpretando acordeón",
      width: 4474,
      height: 6224,
      category: "Retrato",
    },
    {
      id: "g8",
      src: "/images/hero-alt.jpg",
      alt: "Ralphy Reguillo cantando con su agrupación en tarima",
      width: 6224,
      height: 4369,
      category: "Agrupación",
    },
  ],

  videos: [
    {
      id: "v1",
      title: "Grupo Completo - Presentación en vivo",
      youtubeId: "wxQ2kAUfW2M",
      thumbnail: "/images/gallery/gallery-2.jpg",
    },
    {
      id: "v2",
      title: "Medio Grupo - Presentación en vivo",
      youtubeId: "_57o6okXEfs",
      thumbnail: "/images/gallery/gallery-3.jpg",
    },
    {
      id: "v3",
      title: "Ralphy Reguillo - El que toca y canta",
      youtubeId: "qNHq315d73M",
      thumbnail: "/images/hero-main.jpg",
    },
  ],

  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      label: "Instagram",
      handle: "@ralphyreguillo",
      url: "https://www.instagram.com/ralphyreguillo",
      color: "#E1306C",
    },
    {
      id: "facebook",
      platform: "facebook",
      label: "Facebook",
      handle: "Ralphy Reguillo",
      url: "https://www.facebook.com/RalphyReguillo",
      color: "#1877F2",
    },
    {
      id: "youtube",
      platform: "youtube",
      label: "YouTube",
      handle: "RalphyReguillo",
      url: "https://www.youtube.com/@RalphyReguillo",
      color: "#FF0000",
    },
    // TODO: confirmar enlaces oficiales de TikTok, Spotify y Apple Music.
    {
      id: "tiktok",
      platform: "tiktok",
      label: "TikTok",
      handle: "@ralphyreguillo",
      url: "https://www.tiktok.com/@ralphyreguillo",
      color: "#25F4EE",
    },
    {
      id: "spotify",
      platform: "spotify",
      label: "Spotify",
      handle: "Ralphy Reguillo",
      url: "https://open.spotify.com/search/Ralphy%20Reguillo",
      color: "#1DB954",
    },
    {
      id: "apple-music",
      platform: "appleMusic",
      label: "Apple Music",
      handle: "Ralphy Reguillo",
      url: "https://music.apple.com/search?term=Ralphy%20Reguillo",
      color: "#FA57C1",
    },
  ],

  booking: {
    managerName: "Ralphy Reguillo",
    managerRole: "Booking y Contrataciones",
    managerPhoto: "/images/artist-studio.jpg",
    whatsapp: "573046647259",
    whatsappDisplay: "304 664 7259",
    phone: "573004659458",
    email: "ralphyreguillo@gmail.com",
  },

  // TODO: actualizar con cifras reales verificadas.
  stats: [
    { id: "shows", value: 150, suffix: "+", label: "Presentaciones" },
    { id: "songs", value: 30, suffix: "+", label: "Canciones" },
    { id: "plays", value: 500, suffix: "K+", label: "Reproducciones" },
    { id: "towns", value: 50, suffix: "+", label: "Municipios" },
  ],

  // TODO: sin lanzamientos discográficos confirmados aún; actualizar con el repertorio real.
  discography: [],

  // Fallback si GOOGLE_SHEET_EVENTS_URL no esta configurada o falla la carga
  // (ver src/lib/events.ts). La agenda real se administra desde Google Sheets.
  events: [
    {
      id: "e1",
      date: "2026-08-15",
      displayDate: "15 Ago 2026",
      city: "Ciénaga",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
    {
      id: "e2",
      date: "2026-09-05",
      displayDate: "05 Sep 2026",
      city: "Santa Marta",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
    {
      id: "e3",
      date: "2026-10-12",
      displayDate: "12 Oct 2026",
      city: "Barranquilla",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
  ],

  // TODO: testimonios de ejemplo; reemplazar con testimonios reales de clientes.
  testimonials: [
    {
      id: "t1",
      name: "Organizador de eventos",
      role: "Feria y fiestas municipales",
      quote:
        "Ralphy y su agrupación llevaron la energía del vallenato tradicional a nuestro evento con total profesionalismo y puntualidad. Una experiencia inolvidable para todo el público.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Empresario del sector eventos",
      role: "Celebración privada",
      quote:
        "La calidad del show y la cercanía con el público hicieron de la celebración un momento memorable. Sin duda lo volveríamos a contratar.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Coordinador cultural",
      role: "Festival regional",
      quote:
        "Un artista que conserva la esencia de los juglares del vallenato con un toque fresco y actual. Excelente formato de grupo completo.",
      rating: 5,
    },
  ],

  seo: {
    title: "Ralphy Reguillo | El que toca y canta - Acordeonero Vallenato",
    description:
      "Ralphy Reguillo, acordeonero y cantante vallenato de Ciénaga, Magdalena. Contrataciones para eventos, festivales y celebraciones a nivel nacional.",
    keywords: [
      "Ralphy Reguillo",
      "vallenato",
      "acordeonero",
      "contrataciones vallenato",
      "artista vallenato Ciénaga",
      "Portal Vallenato",
    ],
    url: "https://ralphyreguillo.portalvallenato.com",
  },
};
