import type { Metadata } from "next";
import Link from "next/link";

import { WorkflowSuggestionTool } from "@/components/workflow-suggestion-tool";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
});

const services = [
  {
    name: "AI Risk & Opportunity Review",
    href: "/ai-risk-opportunity-review",
    description:
      "The free first step. A structured look at how your firm works today, where AI could help, and which workflow is a sensible place to start.",
  },
  {
    name: "Secure AI Adoption Build",
    href: "/secure-ai-adoption-sprint",
    description:
      "Build one controlled prototype with clear data-use rules and human review, then run a 30-day pilot to see whether it is worth expanding.",
  },
  {
    name: "AI governance guardrails",
    href: "/ai-governance-professional-services",
    description:
      "Plain-English rules your team can follow: what AI can be used for, what information stays out of it, and who reviews the output before it is used.",
  },
  {
    name: "client-owned AI workflows",
    href: "/client-owned-ai-workflows",
    description:
      "Every workflow lives in tools your firm owns and controls, documented and maintainable by your own team.",
  },
  {
    name: "AI adoption measurement",
    href: "/ai-adoption-roi-measurement",
    description:
      "See whether a workflow is actually used, how much time it saves in practice, and whether the data-use rules are being followed.",
  },
  {
    name: "AI Governance & Adoption Partner",
    href: "/ai-governance-adoption-partner",
    description:
      "Quarterly reviews that keep your rules, training, and workflows current as AI tools change, with plain-English reporting you can share.",
  },
];

const examples = [
  "Accounting, bookkeeping, and fractional CFO firms",
  "Law practices, consultancies, and insurance agencies",
  "Agencies, architecture, and engineering firms",
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
              Safe AI adoption for professional-services firms
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Secure AI adoption to enhance your workflow
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[var(--accent)]">
              Asmar Partners helps professional-services firms safely and successfully implement AI, creating
              efficient workflows with human review and measurable outcomes.
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
                How the Secure AI Adoption Build Works
              </Link>
            </div>
          </div>

          <div className="self-end border-l-4 border-[var(--accent)] bg-[var(--background)] p-6">
            <p className="text-sm font-semibold text-[var(--foreground)]">A practical adoption path</p>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--foreground)]">1. Explore opportunities.</span> Identify
                established workflows that can be simplified with the use of AI, reducing time spent on monotonous
                tasks.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">2. Create guardrails.</span> Set boundaries
                for AI. With our help, create strict data-use rules for client data and embed human review into your
                processes.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">3. Build and measure.</span> Design your
                prototype in tools the firm owns. After running a 30-day pilot you can assess the results and make
                any changes necessary to streamline your workflow further.
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
              Create AI workflows with cybersecurity, human review, and analytics built in.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Each service covers one part of adopting AI in a firm that handles client information: finding the
              right workflow, setting data-use rules, building a prototype in tools you own, and measuring what
              changes. Safe here means controlled, reviewed, and measured, not risk-free.
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
              Built for firms where client trust is the business.
            </h2>
          </div>
          <div>
            <p className="leading-7 text-[var(--muted)]">
              Most professional-services firms do repeatable knowledge work on confidential client information. That
              is exactly where AI can save time, and exactly where it needs clear rules. The approach fits firms such
              as:
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
              See where AI might safely assist your internal work.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Enter your role and, if you like, the repetitive work that fills your week. The preview suggests
              internal workflow opportunities, skips what you say is already handled, and never asks for client
              information.
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
              The resources hub collects practical guides on protecting client information, writing AI rules your
              team will follow, where human review belongs, and how to pick a first workflow.
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
              A conversation about your real work is more useful than a demo of someone else&apos;s. When you are
              ready, schedule an AI Risk & Opportunity Review to find practical opportunities and the rules you would
              want in place.
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
