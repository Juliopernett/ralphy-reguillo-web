import type { MetadataRoute } from "next";
import { artist } from "@/data/artist";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${artist.seo.url}/sitemap.xml`,
  };
}
