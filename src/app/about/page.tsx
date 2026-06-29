import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs, CtaSection, PageHero, SectionBlock } from "@/components/page-sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Asmar Partners | Secure AI Adoption for Professional Services",
  description:
    "Learn how Asmar Partners helps professional service firms adopt AI safely with cybersecurity-aware governance and workflow implementation.",
  path: "/about",
});

const sections = [
  {
    title: "Founder credibility",
    paragraphs: [
      "Asmar Partners is led by Ali El-Asmar and built for owners, managing partners, and operators who need practical judgment before adopting AI across client-sensitive work.",
      "The firm focuses on turning AI interest into controlled workflows with clear ownership, documented rules, and measurable business value.",
    ],
  },
  {
    title: "Cybersecurity background",
    paragraphs: [
      "The Asmar Partners approach is cybersecurity-aware. That means AI adoption decisions are reviewed through the lens of client information, data-handling rules, shadow AI risk, approved tools, and human review.",
      "This is not positioned as a security audit, incident response engagement, or compliance certification. It is practical implementation support for businesses that want to reduce avoidable AI risk.",
    ],
  },
  {
    title: "Why Asmar Partners focuses on safe AI adoption",
    paragraphs: [
      "Professional services teams are already experimenting with AI. Without structure, that experimentation can happen in personal accounts, unmanaged tools, or workflows that leadership cannot see.",
      "Asmar Partners helps businesses move from scattered experimentation to safe AI adoption: workflow discovery, governance guardrails, client-owned AI tools, review checkpoints, and measurement.",
    ],
  },
  {
    title: "Why professional services businesses need practical governance",
    paragraphs: [
      "Professional services businesses depend on trust, confidentiality, repeatable client work, and clear accountability. AI can help with repetitive internal work, but it should not erase review responsibility or weaken data controls.",
      "Practical governance gives employees useful boundaries for approved AI use, prohibited information, human review, and escalation when an output is uncertain.",
    ],
    links: [
      {
        href: "/ai-governance-professional-services",
        label: "Review AI governance guardrails",
      },
    ],
  },
  {
    title: "Massachusetts and New England service area",
    paragraphs: [
      "Asmar Partners works with professional services businesses in Massachusetts and across New England, including Rhode Island, Connecticut, Southern New Hampshire, Greater Boston, Providence, and Worcester.",
      "The work is especially relevant for firms that handle client information and want practical AI workflow improvements without creating unmanaged risk.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About"
        title="About Asmar Partners"
        intro={[
          "Asmar Partners helps professional services businesses adopt AI safely through practical workflow discovery, governance guardrails, client-owned tools, human review, and measurable time savings.",
          "The work is designed for leaders who want the benefits of AI without exposing client information, weakening trust, or adding another unmanaged tool.",
        ]}
        primaryCta={{ href: "/contact", label: "Schedule an AI Risk & Opportunity Review" }}
      />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <SectionBlock key={section.title} {...section} />
        ))}
        <section className="border-t border-[var(--line)] py-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Start with risk and opportunity</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            The most useful first step is an{" "}
            <Link className="focus-ring rounded-md font-semibold text-[var(--accent)]" href="/ai-risk-opportunity-review">
              AI Risk & Opportunity Review
            </Link>{" "}
            that identifies practical workflow candidates, shadow AI risk, client-data boundaries, and the governance
            guardrails needed before a prototype.
          </p>
        </section>
      </div>
      <CtaSection
        title="Schedule a focused review."
        body="Identify practical AI workflow opportunities and governance gaps before your team expands AI use."
      />
    </main>
  );
}
