import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Caveat } from "next/font/google";
import { artist } from "@/data/artist";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MusicPlayer } from "@/components/layout/MusicPlayer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const siteUrl = artist.seo.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: artist.seo.title,
    template: `%s | ${artist.stageName}`,
  },
  description: artist.seo.description,
  keywords: artist.seo.keywords,
  authors: [{ name: artist.stageName }],
  creator: artist.stageName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: artist.stageName,
    title: artist.seo.title,
    description: artist.seo.description,
    images: [
      {
        url: artist.heroImage,
        width: 1200,
        height: 630,
        alt: artist.stageName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: artist.seo.title,
    description: artist.seo.description,
    images: [artist.heroImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: artist.stageName,
  alternateName: artist.name,
  genre: "Vallenato",
  description: artist.bio.short,
  url: siteUrl,
  image: `${siteUrl}${artist.heroImage}`,
  foundingLocation: {
    "@type": "Place",
    name: artist.location,
  },
  sameAs: artist.socialLinks.map((s) => s.url),
  award: artist.achievements.map((a) => a.title),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <MusicPlayer />
      </body>
    </html>
  );
}
