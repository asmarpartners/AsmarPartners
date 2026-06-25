import Link from "next/link";

import type { BreadcrumbItem, FaqItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string | string[];
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

type SectionBlockProps = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: {
    href: string;
    label: string;
  }[];
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-[var(--line)] bg-[var(--surface)]">
      <ol className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-3 text-sm text-[var(--muted)] sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-[var(--foreground)]">{item.name}</span>
            ) : (
              <Link className="focus-ring rounded-md hover:text-[var(--foreground)]" href={item.href}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, intro, primaryCta, secondaryCta }: PageHeroProps) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        {eyebrow ? <p className="mb-4 text-sm font-semibold text-[var(--accent)]">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-[var(--foreground)] sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-[var(--muted)]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <Link
                className="focus-ring inline-flex justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                className="focus-ring inline-flex justify-center rounded-md border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionBlock({ title, paragraphs, bullets, links }: SectionBlockProps) {
  return (
    <section className="border-t border-[var(--line)] py-8 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-[var(--muted)]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {bullets ? (
        <ul className="mt-5 space-y-3 leading-7 text-[var(--muted)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {links ? (
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <Link
              key={link.href}
              className="focus-ring inline-flex rounded-md border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--accent)] hover:border-[var(--accent)]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function FAQList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="border-t border-[var(--line)] py-8">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">FAQ</h2>
      <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-5">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{faq.question}</h3>
            <p className="mt-2 leading-7 text-[var(--muted)]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaSection({
  title,
  body,
  href = "/contact",
  label = siteConfig.primaryCTA,
}: {
  title: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[1fr_0.7fr] md:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">{body}</p>
        </div>
        <div className="md:text-right">
          <Link
            className="focus-ring inline-flex justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
            href={href}
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
