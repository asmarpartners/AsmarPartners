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
    title: "Who leads the work",
    paragraphs: [
      "Asmar Partners is led by Ali El-Asmar and built for owners, managing partners, and operators who want practical judgment before adopting AI in work that touches client information.",
      "The focus is narrow on purpose: turning interest in AI into controlled workflows with clear ownership, documented rules, and results your team can measure.",
    ],
  },
  {
    title: "A cybersecurity-aware approach",
    paragraphs: [
      "Every AI adoption decision is looked at through a security lens: what client information is involved, which tools are approved, how AI is already being used, and where a person must review the work.",
      "To be clear about scope: this is not a security audit, incident response, or compliance certification. It is practical implementation support for firms that want to adopt AI without creating avoidable risk.",
    ],
  },
  {
    title: "Why safe AI adoption is the whole focus",
    paragraphs: [
      "Most teams are already experimenting with AI. Without some structure, that experimentation tends to happen in personal accounts and scattered tools, which makes it hard to build on.",
      "Asmar Partners helps firms move from scattered experimentation to governed adoption: workflow discovery, guardrails, client-owned tools, review checkpoints, and measurement.",
    ],
  },
  {
    title: "Why practical governance matters",
    paragraphs: [
      "Professional-services firms run on trust, confidentiality, and clear accountability. Practical AI rules make sure new tools fit the way your firm already handles client information.",
      "Good rules give employees usable boundaries: what AI is approved for, what information stays out, who reviews outputs, and when to escalate.",
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
      "Asmar Partners works with professional-services firms in Massachusetts and across New England, including Rhode Island, Connecticut, Southern New Hampshire, Greater Boston, Providence, and Worcester.",
      "The work fits firms that handle client information and want real workflow improvements without creating unmanaged risk.",
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
          "Asmar Partners helps professional-services firms safely and successfully implement AI, creating efficient workflows with human review and measurable outcomes.",
          "The work is built for leaders who want the benefits of AI while keeping client information protected and keeping people in charge of the final call.",
        ]}
        primaryCta={{ href: "/contact", label: "Schedule an AI Risk & Opportunity Review" }}
      />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <SectionBlock key={section.title} {...section} />
        ))}
        <section className="border-t border-[var(--line)] py-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Start with a review</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            The most useful first step is an{" "}
            <Link className="focus-ring rounded-md font-semibold text-[var(--accent)]" href="/ai-risk-opportunity-review">
              AI Risk & Opportunity Review
            </Link>{" "}
            that identifies practical workflow candidates, how client information should be handled, and the rules
            that make sense before a prototype.
          </p>
        </section>
      </div>
      <CtaSection
        title="Schedule a focused review."
        body="Find practical AI workflow opportunities and the rules you would want in place before your team expands AI use."
      />
    </main>
  );
}
