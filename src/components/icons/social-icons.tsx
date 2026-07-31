import type { SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import type { SocialLink } from "@/types/artist";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3c-.28-.04-1.24-.13-2.36-.13-2.34 0-3.94 1.43-3.94 4.05V10.5H8v3h2.2V21h3.3Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.44 4 12 4 12 4h-.01s-3.44 0-6.54.12c-.43.05-1.36.05-2.19.92C2.6 5.7 2.4 7.2 2.4 7.2S2.18 8.96 2.18 10.72v1.55c0 1.76.22 3.52.22 3.52s.2 1.5.86 2.16c.83.87 1.92.84 2.4.94 1.74.17 7.34.22 7.34.22s3.44 0 6.54-.12c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.16.87-2.16s.22-1.76.22-3.52v-1.55c0-1.76-.22-3.52-.22-3.52ZM9.95 14.6V8.8l5.6 2.91-5.6 2.9Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.96-.85-1.6-2.03-1.72-3.36V2h-3.44v14.4a2.6 2.6 0 1 1-1.84-2.49v-3.5a6.03 6.03 0 0 0-1-.08A6.02 6.02 0 1 0 14.6 16v-7.2a7.4 7.4 0 0 0 4.31 1.38V6.72a4.85 4.85 0 0 1-2.31-.9Z" />
    </svg>
  );
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.59 14.42a.62.62 0 0 1-.86.21c-2.36-1.44-5.33-1.77-8.83-.97a.62.62 0 1 1-.28-1.22c3.83-.88 7.12-.5 9.76 1.11.3.19.4.58.21.87Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.5c3.65-1.1 8.19-.57 11.28 1.33.37.23.48.72.26 1.08Zm.1-2.83c-3.24-1.92-8.6-2.1-11.7-1.16a.94.94 0 1 1-.55-1.8c3.56-1.08 9.46-.87 13.19 1.34a.94.94 0 0 1-.94 1.62Z" />
    </svg>
  );
}

export function AppleMusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.85 2.1c-.4.4-1.13.85-1.9.9-.1-.75.28-1.5.7-1.97.42-.48 1.15-.85 1.86-.93.08.79-.25 1.55-.66 2Zm.62 2.53c-1.02-.06-1.9.58-2.4.58-.5 0-1.27-.55-2.1-.53-1.08.02-2.08.63-2.63 1.6-1.13 1.96-.3 4.86.8 6.45.55.78 1.2 1.65 2.06 1.62.82-.03 1.13-.53 2.13-.53.99 0 1.28.53 2.15.51.89-.02 1.45-.79 1.99-1.58a6.9 6.9 0 0 0 .9-1.84 2.87 2.87 0 0 1-1.72-2.6c-.02-1.42.94-2.16 1-2.36-.6-.9-1.6-1.28-1.98-1.32ZM11 5.5v10.9c0 .6.35 1 .93 1.14.5.12 1.07-.1 1.32-.6.1-.2.15-.4.15-.66V6.9l4.1-.86v8.4c0 .6.36 1 .94 1.13.5.12 1.06-.1 1.3-.6.1-.2.16-.4.16-.65V4.1c0-.4-.17-.7-.5-.9-.28-.16-.55-.15-.86-.08l-5.8 1.2c-.4.08-.7.24-.9.5-.17.22-.24.45-.24.7Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.06-1.33A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3 .79.8-2.93-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.2-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export const SOCIAL_ICONS: Record<SocialLink["platform"], LucideIcon> = {
  instagram: InstagramIcon as unknown as LucideIcon,
  facebook: FacebookIcon as unknown as LucideIcon,
  youtube: YoutubeIcon as unknown as LucideIcon,
  tiktok: TikTokIcon as unknown as LucideIcon,
  spotify: SpotifyIcon as unknown as LucideIcon,
  appleMusic: AppleMusicIcon as unknown as LucideIcon,
  whatsapp: WhatsAppIcon as unknown as LucideIcon,
};
