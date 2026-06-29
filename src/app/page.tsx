import type { Metadata } from "next";
import Link from "next/link";

import { WorkflowSuggestionTool } from "@/components/workflow-suggestion-tool";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const homeDescription =
  "Asmar Partners helps professional service firms adopt AI safely with governance, secure workflows, and measurable business outcomes.";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: homeDescription,
  path: "/",
});

const services = [
  {
    name: "AI Risk & Opportunity Review",
    href: "/ai-risk-opportunity-review",
    description:
      "Identify practical AI opportunities, shadow AI risk, client-data concerns, and the safest first workflow before implementation.",
  },
  {
    name: "Secure AI Adoption Sprint",
    href: "/secure-ai-adoption-sprint",
    description:
      "Build one controlled AI workflow prototype with governance guardrails, human review checkpoints, documentation, and measurement.",
  },
  {
    name: "AI governance guardrails",
    href: "/ai-governance-professional-services",
    description:
      "Create practical rules for employee AI use, client information, approved and prohibited use cases, and review expectations.",
  },
  {
    name: "client-owned AI workflows",
    href: "/client-owned-ai-workflows",
    description:
      "Design AI-assisted workflows and prototypes that stay owned by your business, documented, governed, and maintainable.",
  },
  {
    name: "AI adoption measurement",
    href: "/ai-adoption-roi-measurement",
    description:
      "Track workflow usage, measurable time savings, review effort, exceptions, and risk-control status after launch.",
  },
];

const examples = [
  "Accounting and bookkeeping firms",
  "Fractional CFO and consulting teams",
  "Agencies, engineering firms, and architecture practices",
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
              Safe AI adoption for professional services businesses
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Adopt AI safely without putting client data, trust, or operations at risk.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Asmar Partners helps professional services businesses identify practical AI workflows, reduce shadow AI
              risk, create governance guardrails, and build client-owned prototypes that produce measurable time
              savings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                href="/contact"
              >
                Schedule an AI Risk & Opportunity Review
              </Link>
              <Link
                className="focus-ring inline-flex justify-center rounded-md border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
                href="/secure-ai-adoption-sprint"
              >
                See How the Secure AI Adoption Sprint Works
              </Link>
            </div>
          </div>

          <div className="self-end border-l-4 border-[var(--accent)] bg-[var(--background)] p-6">
            <p className="text-sm font-semibold text-[var(--foreground)]">A practical adoption path</p>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--foreground)]">1. Review risk and opportunity.</span>{" "}
                Identify shadow AI use, client information risk, and workflows where AI could safely assist.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">2. Build guardrails first.</span> Define
                approved use cases, data-handling rules, human review points, and ownership.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">3. Prototype and measure.</span> Test one
                workflow with client-owned AI tools, documentation, usage tracking, and measurable time savings.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--accent)]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              Practical AI workflows with governance, review, and measurement built in.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Asmar Partners is not generic AI consulting. The work starts with workflow fit, client information risk,
              and the controls needed for safe AI adoption.
            </p>
          </div>
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {services.map((service) => (
              <article key={service.href} className="grid gap-3 py-6 md:grid-cols-[0.55fr_1fr] md:gap-10">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  <Link className="focus-ring rounded-md hover:text-[var(--accent)]" href={service.href}>
                    {service.name}
                  </Link>
                </h3>
                <p className="leading-7 text-[var(--muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">Built for service businesses</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              Useful for teams that handle client information and review-heavy work.
            </h2>
          </div>
          <div>
            <p className="leading-7 text-[var(--muted)]">
              The approach applies to professional services businesses where client trust, operational consistency, and
              human review matter. Examples include:
            </p>
            <ul className="mt-5 grid gap-3 text-[var(--muted)] sm:grid-cols-3">
              {examples.map((example) => (
                <li key={example} className="border-l-2 border-[var(--accent)] bg-white px-4 py-3 text-sm font-semibold">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="workflow-preview" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent)]">Workflow Preview</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              Preview where AI might safely assist internal work.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Enter your role and optionally describe repetitive work. The preview suggests internal workflow
              opportunities, filters out work you say is already handled, and keeps client information out of the input.
            </p>
          </div>
          <WorkflowSuggestionTool />
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Learn the approach before you build.</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Use the resources hub to track upcoming practical guides on shadow AI risk, client-data protection,
              human review, and measurable AI workflows.
            </p>
            <Link
              className="focus-ring mt-5 inline-flex rounded-md border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--accent)] hover:border-[var(--accent)]"
              href="/resources"
            >
              Visit AI adoption resources
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Talk through your actual workflow.</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Learn more about Asmar Partners, then schedule a review when you are ready to identify practical AI
              opportunities and governance gaps.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link
                className="focus-ring inline-flex rounded-md border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--accent)] hover:border-[var(--accent)]"
                href="/about"
              >
                About Asmar Partners
              </Link>
              <Link
                className="focus-ring inline-flex rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                href="/contact"
              >
                Schedule Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
