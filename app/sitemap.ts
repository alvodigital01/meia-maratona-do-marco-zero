import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
