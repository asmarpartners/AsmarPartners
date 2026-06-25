import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  canonical: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={professionalServiceSchema()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
