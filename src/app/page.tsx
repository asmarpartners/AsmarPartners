import Image from "next/image";

import { WorkflowSuggestionTool } from "@/components/workflow-suggestion-tool";

const services = [
  {
    name: "AI Risk & Opportunity Review",
    description:
      "Identify where AI can realistically help, where it should not be used, and which internal workflow is the safest first pilot.",
  },
  {
    name: "Secure AI Adoption Sprint + Prototype",
    description:
      "Design and configure one controlled workflow prototype with usage guardrails, human review points, and handoff documentation.",
  },
  {
    name: "AI Governance and Workflow Measurement",
    description:
      "Create practical AI usage rules, approval checkpoints, and success metrics so adoption can be measured instead of guessed.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-[var(--line)] bg-[var(--surface)]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-md">
            <Image
              src="/logo.svg"
              alt="Asmar Partners logo"
              width={240}
              height={170}
              priority
              className="h-32 w-auto sm:h-36 lg:h-40"
            />
            <span className="hidden text-base font-semibold text-[var(--foreground)] sm:inline">
              Asmar Partners
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a className="focus-ring rounded-md hover:text-[var(--foreground)]" href="#services">
              Services
            </a>
            <a className="focus-ring rounded-md hover:text-[var(--foreground)]" href="#workflow-preview">
              Workflow Preview
            </a>
            <a className="focus-ring rounded-md hover:text-[var(--foreground)]" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="focus-ring rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
            href="#contact"
          >
            Schedule Review
          </a>
        </div>
      </header>

      <section id="top" className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
              Business workflow and secure AI adoption consulting
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Secure AI adoption starts with the workflow, not the tool.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Asmar Partners helps professional-services firms identify repetitive internal work, apply AI safely, and launch controlled workflow pilots with clear guardrails and measurable value.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                href="#contact"
              >
                Schedule an AI Risk & Opportunity Review
              </a>
              <a
                className="focus-ring inline-flex justify-center rounded-md border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
                href="#workflow-preview"
              >
                Preview a Workflow Opportunity
              </a>
            </div>
          </div>

          <div className="self-end border-l-4 border-[var(--accent)] bg-[var(--background)] p-6">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Controlled pilot path
            </p>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--foreground)]">1. Map the workflow.</span>{" "}
                Confirm the repetitive task, business owner, data sensitivity, and review process.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">2. Build guardrails.</span>{" "}
                Define approved tools, human checkpoints, and what data should not be used.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">3. Measure the pilot.</span>{" "}
                Track usage, time saved, review effort, risk controls, and adoption.
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
              Practical help for safe internal AI workflows.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {services.map((service) => (
              <div key={service.name} className="grid gap-3 py-6 md:grid-cols-[0.55fr_1fr] md:gap-10">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.name}</h3>
                <p className="leading-7 text-[var(--muted)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow-preview" className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent)]">Workflow Preview</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              AI Workflow Suggestion Preview
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Enter your role and optionally describe repetitive work. The preview will suggest internal workflow opportunities, remove tasks you say are already handled, and produce a practical suggestion plan.
            </p>
          </div>
          <WorkflowSuggestionTool />
        </div>
      </section>

      <section id="contact" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--foreground)]">
                Want this mapped to your actual workflow?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
                This preview is based on limited information. Asmar Partners can help identify the safest first AI workflow, define governance guardrails, build a controlled prototype, and measure results during a 30-day pilot.
              </p>
            </div>
            <div className="md:text-right">
              <a
                className="focus-ring inline-flex justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                href="mailto:contact@asmarpartners.com?subject=Schedule%20an%20AI%20Risk%20%26%20Opportunity%20Review"
              >
                Schedule an AI Risk & Opportunity Review
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--foreground)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm sm:px-6 md:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="font-semibold">Asmar Partners</p>
            <p className="mt-3 max-w-xl leading-6 text-white/70">
              Business workflow and secure AI adoption consulting for professional-services firms.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-white/70">Contact placeholder: contact@asmarpartners.com</p>
            <p className="mt-3 text-white/60">
              © {new Date().getFullYear()} Asmar Partners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
