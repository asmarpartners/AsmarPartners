import type { Metadata } from "next";

import { Breadcrumbs, PageHero } from "@/components/page-sections";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Schedule an AI Risk & Opportunity Review | Asmar Partners",
  description:
    "Request an AI Risk & Opportunity Review to identify safe AI workflow opportunities, governance gaps, and client-data risk.",
  path: "/contact",
});

const concerns = ["Data risk", "Productivity", "Governance", "Shadow AI", "Client work", "Other"];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Schedule Review", href: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Schedule Review"
        title="Schedule an AI Risk & Opportunity Review"
        intro={[
          "Use this form to request a focused conversation about where AI could help your firm, where your team is already using it, and which guardrails you need before expanding.",
          "Please keep confidential client information, credentials, financial records, tax records, and regulated data out of the form.",
        ]}
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.65fr] lg:px-8">
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="border border-[var(--line)] bg-white p-5 sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="name">
                  Name
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="name"
                  name="Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="email">
                  Business email
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="email"
                  name="Business email"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="company">
                  Company
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="company"
                  name="Company"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="website">
                  Website
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="website"
                  name="Website"
                  type="url"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="role">
                  Role
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="role"
                  name="Role"
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="industry">
                  Industry
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="industry"
                  name="Industry"
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="team-size">
                  Team size
                </label>
                <input
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="team-size"
                  name="Team size"
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="concern">
                  Main concern
                </label>
                <select
                  className="focus-ring mt-2 w-full rounded-md border border-[var(--line)] bg-white px-3 py-3 outline-none"
                  id="concern"
                  name="Main concern"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {concerns.map((concern) => (
                    <option key={concern} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="tools">
                  Current AI tools used
                </label>
                <textarea
                  className="focus-ring mt-2 w-full resize-y rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="tools"
                  name="Current AI tools used"
                  rows={4}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="pain-point">
                  Biggest workflow pain point
                </label>
                <textarea
                  className="focus-ring mt-2 w-full resize-y rounded-md border border-[var(--line)] px-3 py-3 outline-none"
                  id="pain-point"
                  name="Biggest workflow pain point"
                  rows={5}
                />
              </div>
            </div>
            <button
              className="focus-ring mt-6 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
              type="submit"
            >
              Schedule an AI Risk & Opportunity Review
            </button>
          </form>

          <aside className="self-start border-l-4 border-[var(--accent)] bg-[var(--surface)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--foreground)]">1. Your request gets read.</span> Asmar
                Partners looks at workflow fit, current AI usage, and risk themes before responding.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">2. A focused conversation.</span> It centers
                on your actual work: client information, governance gaps, and where AI could measurably help.
              </li>
              <li>
                <span className="font-semibold text-[var(--foreground)]">3. An honest next step.</span> That may be a
                review, a sprint — or a recommendation to wait until the workflow is clearer. Not every firm should
                start now.
              </li>
            </ol>
            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
              Prefer email? Contact{" "}
              <a className="focus-ring rounded-md font-semibold text-[var(--accent)]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
