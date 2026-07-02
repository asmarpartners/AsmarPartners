export const siteConfig = {
  businessName: "Asmar Partners",
  siteUrl: "https://www.asmarpartners.com",
  defaultTitle: "Asmar Partners | Secure AI Adoption for Professional Services",
  defaultDescription:
    "Asmar Partners helps professional-services firms turn AI experimentation into safe, repeatable workflows with clear data-use rules, human review, and measurable pilot outcomes.",
  primaryCTA: "Schedule an AI Risk & Opportunity Review",
  serviceArea:
    "Massachusetts, Rhode Island, Connecticut, Southern New Hampshire, Greater Boston, Providence, Worcester",
  founder: "Ali El-Asmar",
  email: "contact@asmarpartners.com",
} as const;

export const sitemapPages = [
  { path: "/", priority: 1 },
  { path: "/ai-risk-opportunity-review", priority: 0.9 },
  { path: "/secure-ai-adoption-sprint", priority: 0.9 },
  { path: "/ai-governance-professional-services", priority: 0.8 },
  { path: "/client-owned-ai-workflows", priority: 0.8 },
  { path: "/ai-adoption-roi-measurement", priority: 0.8 },
  { path: "/ai-governance-adoption-partner", priority: 0.8 },
  { path: "/resources", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
] as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return `${siteConfig.siteUrl}/`;
  }

  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function serviceAreas() {
  return siteConfig.serviceArea.split(", ");
}
