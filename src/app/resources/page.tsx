import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs, CtaSection, PageHero } from "@/components/page-sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Adoption Resources for Professional Services | Asmar Partners",
  description:
    "Explore practical AI adoption resources on governance, shadow AI risk, client-data protection, human review, and measurable workflows.",
  path: "/resources",
});

const plannedResources = [
  {
    title: "How Professional Services Firms Can Use AI Safely Without Exposing Client Data",
    summary:
      "A practical guide to separating safe internal AI use from risky handling of client information, confidential documents, credentials, and sensitive records.",
  },
  {
    title: "Employees Are Already Using ChatGPT at Work. Here's the Policy You Need.",
    summary:
      "A plain-language approach to approved tools, prohibited inputs, review expectations, and employee AI use rules.",
  },
  {
    title: "Shadow AI Risk for Small Businesses: What Owners Need to Know.",
    summary:
      "How unmanaged AI use appears inside growing service businesses and what owners can do before it becomes a data-handling problem.",
  },
  {
    title: "How to Pick the First AI Workflow to Automate.",
    summary:
      "A workflow-first method for choosing an AI-assisted process with repeatable work, clear ownership, manageable risk, and measurable time savings.",
  },
  {
    title: "Where Human Review Belongs in AI-Assisted Workflows.",
    summary:
      "A guide to placing review checkpoints around client-facing work, recommendations, decisions, and outputs that affect trust.",
  },
];

const serviceLinks = [
  {
    href: "/ai-risk-opportunity-review",
    label: "AI Risk & Opportunity Review",
    description: "Start by identifying safe opportunities and shadow AI risk.",
  },
  {
    href: "/ai-governance-professional-services",
    label: "AI governance guardrails",
    description: "Create practical rules for client information and employee AI use.",
  },
  {
    href: "/client-owned-ai-workflows",
    label: "client-owned AI workflows",
    description: "Build AI workflows that remain documented, governed, and measurable.",
  },
  {
    href: "/ai-adoption-roi-measurement",
    label: "AI adoption measurement",
    description: "Track workflow usage, time saved, review status, and risk controls.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />
      <PageHero
        eyebrow="Resources"
        title="AI Adoption Resources for Professional Services Businesses"
        intro="Practical guides for owners and operators: how to adopt AI safely, write governance your team will follow, spot shadow AI risk, protect client information, and measure whether a workflow is working."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent)]">Planned guides</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              Upcoming practical articles
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              These guides are in progress and will be linked here when complete — no placeholder pages, no empty
              links.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {plannedResources.map((resource) => (
              <article key={resource.title} className="border border-[var(--line)] bg-white p-5">
                <p className="text-xs font-semibold uppercase text-[var(--accent)]">Planned guide</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{resource.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{resource.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent)]">Start here</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              Connect each guide topic to an implementation step.
            </h2>
          </div>
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {serviceLinks.map((link) => (
              <article key={link.href} className="grid gap-3 py-5 md:grid-cols-[0.45fr_1fr] md:gap-8">
                <h3 className="font-semibold text-[var(--foreground)]">
                  <Link className="focus-ring rounded-md hover:text-[var(--accent)]" href={link.href}>
                    {link.label}
                  </Link>
                </h3>
                <p className="leading-7 text-[var(--muted)]">{link.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want help applying this to your firm?"
        body="A focused review identifies your practical AI opportunities, client-data risks, governance gaps, and the right first workflow."
      />
    </main>
  );
}
