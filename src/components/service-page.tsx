import { Breadcrumbs, CtaSection, FAQList, PageHero, SectionBlock } from "@/components/page-sections";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import type { ServicePageContent } from "@/lib/service-content";

export function ServicePage({ content }: { content: ServicePageContent }) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: content.h1, href: content.path },
  ];

  return (
    <main>
      <JsonLd
        data={[
          serviceSchema({
            name: content.h1,
            description: content.description,
            path: content.path,
            serviceType: content.serviceType,
          }),
          faqPageSchema(content.faqs),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={content.eyebrow}
        title={content.h1}
        intro={content.intro}
        primaryCta={{ href: "/contact", label: content.ctaText }}
      />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        {content.sections.map((section) => (
          <SectionBlock key={section.title} {...section} />
        ))}
        <FAQList faqs={content.faqs} />
      </div>
      <CtaSection title={content.ctaTitle} body={content.ctaBody} label={content.ctaText} />
    </main>
  );
}
