import type { MetadataRoute } from "next";
import { artist } from "@/data/artist";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: artist.seo.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
