import type { MetadataRoute } from "next";

import { absoluteUrl, sitemapPages } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
