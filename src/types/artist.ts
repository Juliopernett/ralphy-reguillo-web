export interface SocialLink {
  id: string;
  platform:
    | "instagram"
    | "facebook"
    | "tiktok"
    | "youtube"
    | "spotify"
    | "appleMusic"
    | "whatsapp";
  label: string;
  handle: string;
  url: string;
  color: string;
}

export interface DiscographyItem {
  id: string;
  title: string;
  year: string;
  cover: string;
  youtubeId?: string;
  listenUrl?: string;
  type: "single" | "album" | "ep";
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}

export interface EventItem {
  id: string;
  date: string; // ISO date
  displayDate: string;
  city: string;
  venue: string;
  eventName: string;
  status: "confirmado" | "agotado" | "proximamente";
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  image?: string;
  year: string;
}

export interface BookingFormat {
  id: string;
  name: string;
  description: string;
}

export interface Artist {
  name: string;
  stageName: string;
  tagline: string;
  heroPhrase: string;
  location: string;
  coverage: string;
  bio: {
    short: string;
    paragraphs: string[];
  };
  whyUs: {
    title: string;
    description: string;
    points: string[];
  };
  formats: BookingFormat[];
  achievements: Achievement[];
  heroImage: string;
  heroImageAlt: string;
  bioImage: string;
  logo: string;
  favicon: string;
  gallery: GalleryImage[];
  videos: VideoItem[];
  socialLinks: SocialLink[];
  booking: {
    managerName: string;
    managerRole: string;
    managerPhoto?: string;
    whatsapp: string;
    whatsappDisplay: string;
    phone: string;
    email: string;
  };
  stats: StatItem[];
  discography: DiscographyItem[];
  events: EventItem[];
  testimonials: Testimonial[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
  };
}
