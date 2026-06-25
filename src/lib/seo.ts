import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site-config";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  canonical?: string | false;
};

const ogImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: "Asmar Partners safe AI adoption for professional services businesses",
};

export function createPageMetadata({ title, description, path, canonical: canonicalOverride }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const canonical = canonicalOverride === false ? null : (canonicalOverride ?? url);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description,
    ...(canonical
      ? {
          alternates: {
            canonical,
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
