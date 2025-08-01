import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bio.avezoor.my.id",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    }
  ]
}
