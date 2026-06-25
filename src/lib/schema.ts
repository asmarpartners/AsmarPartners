import { absoluteUrl, serviceAreas, siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    description:
      "Asmar Partners helps professional services businesses adopt AI safely through practical workflows, governance guardrails, client-owned AI tools, human review, and measurable productivity gains.",
    areaServed: serviceAreas(),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    serviceType: "Safe AI adoption, AI governance, and AI workflow implementation for professional services businesses",
  };
}

export function serviceSchema(input: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    areaServed: serviceAreas(),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
