import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ttcuk.church";

  return [
    {
      url: base,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locations.map((l) => ({
      url: `${base}/locations/${l.slug}`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/give`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
