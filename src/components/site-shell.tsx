import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/ai-risk-opportunity-review", label: "AI Risk Review" },
  { href: "/secure-ai-adoption-sprint", label: "Sprint" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
] as const;

const serviceLinks = [
  { href: "/ai-risk-opportunity-review", label: "AI Risk & Opportunity Review" },
  { href: "/secure-ai-adoption-sprint", label: "Secure AI Adoption Sprint" },
  { href: "/ai-governance-professional-services", label: "AI governance guardrails" },
  { href: "/client-owned-ai-workflows", label: "client-owned AI workflows" },
  { href: "/ai-adoption-roi-measurement", label: "AI adoption measurement" },
  { href: "/ai-governance-adoption-partner", label: "AI Governance & Adoption Partner" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--surface)]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring inline-flex rounded-md" aria-label="Asmar Partners home">
          <Image
            src="/logo.svg"
            alt="Asmar Partners"
            width={240}
            height={170}
            priority
            className="h-28 w-auto sm:h-32"
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} className="focus-ring rounded-md hover:text-[var(--foreground)]" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="focus-ring inline-flex shrink-0 justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
          href="/contact"
        >
          Schedule Review
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="border-t border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)] sm:px-6 lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto">
          {navLinks.map((link) => (
            <Link key={link.href} className="focus-ring shrink-0 rounded-md hover:text-[var(--foreground)]" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm sm:px-6 md:grid-cols-[1.05fr_0.95fr_0.8fr] lg:px-8">
        <div>
          <p className="font-semibold">{siteConfig.businessName}</p>
          <p className="mt-3 max-w-xl leading-6 text-white/70">
            Asmar Partners helps professional-services firms turn AI experimentation into safe, repeatable workflows —
            with clear data-use rules, human review, client-owned tools, and measured pilot outcomes.
          </p>
          <p className="mt-5 text-white/60">Service areas: {siteConfig.serviceArea}</p>
        </div>
        <nav aria-label="Service links">
          <p className="font-semibold">Services</p>
          <ul className="mt-3 space-y-2 text-white/70">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link className="focus-ring rounded-md hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:text-right">
          <p className="font-semibold">Next step</p>
          <div className="mt-3 space-y-2 text-white/70">
            <p>
              <Link className="focus-ring rounded-md hover:text-white" href="/resources">
                AI adoption resources
              </Link>
            </p>
            <p>
              <Link className="focus-ring rounded-md hover:text-white" href="/contact">
                Contact Asmar Partners
              </Link>
            </p>
          </div>
          <p className="mt-6 text-white/60">Copyright {new Date().getFullYear()} Asmar Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
