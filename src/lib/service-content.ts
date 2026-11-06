import type { FaqItem } from "@/lib/schema";

export type ServiceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: {
    href: string;
    label: string;
  }[];
};

export type ServicePageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  ctaText: string;
  ctaTitle: string;
  ctaBody: string;
  serviceType: string;
  sections: ServiceSection[];
  faqs: FaqItem[];
};

export const servicePages = {
  review: {
    path: "/ai-risk-opportunity-review",
    title: "AI Risk & Opportunity Review for Professional Services | Asmar Partners",
    description:
      "A structured look at how your firm works today, where AI could help, how client information should be handled, and which workflow is a sensible place to start.",
    h1: "AI Risk & Opportunity Review",
    eyebrow: "The free first step",
    intro: [
      "Most teams are already trying AI in some form. The AI Risk & Opportunity Review gives you a clear picture: where AI is useful in your firm, where it should be limited, and which workflow makes sense to start with.",
      "You leave knowing where your firm stands today and what a sensible next step looks like. No technical background is needed to act on the findings.",
    ],
    ctaText: "Schedule an AI Risk & Opportunity Review",
    ctaTitle: "Want a clear picture of where AI fits in your firm?",
    ctaBody:
      "The review covers workflow opportunities, how client information should be handled, the rules you would need, and a practical next step.",
    serviceType: "AI risk and opportunity review for professional services businesses",
    sections: [
      {
        title: "What the review is",
        paragraphs: [
          "The review is a structured look at how your firm actually works: current AI use, repetitive tasks, how client information moves through your processes, and how ready your team is. It turns general interest in AI into a short, prioritized list.",
          "The outcome is not a strategy deck. It is a set of practical recommendations: which workflows to pursue, which to leave alone for now, and which rules should exist before a pilot.",
        ],
      },
      {
        title: "Who it is for",
        paragraphs: [
          "The review fits professional-services firms such as accounting, bookkeeping, fractional CFO, consulting, agency, engineering, and architecture practices. What they share: client information, deadlines, and review-heavy deliverables.",
          "It is most useful for owners, managing partners, COOs, and operations leaders who want a clear picture of how AI is being used in their firm before deciding what comes next.",
        ],
      },
      {
        title: "Why unstructured AI use is worth a look",
        paragraphs: [
          "Employees often start using tools like ChatGPT before the firm has decided what information can go into them, which outputs need review, and who owns the process. This is sometimes called shadow AI: AI use that leadership cannot see.",
          "It is rarely careless. Usually people are just trying to get work done faster. The review brings that use into view so you can decide, calmly, what to approve, what to limit, and what to build on.",
        ],
      },
      {
        title: "What gets reviewed",
        paragraphs: [
          "The review looks at real work rather than abstract use cases. It examines repetitive tasks, existing tools, employee AI usage, sensitive data categories, handoff points, approval steps, and reporting needs.",
        ],
        bullets: [
          "Current AI tools being used by employees or teams.",
          "Workflow bottlenecks where AI assistance may reduce rework or manual drafting.",
          "Client information, credentials, financial records, contracts, and other data that should stay out of AI tools.",
          "Human review points for client work, decisions, recommendations, and external communications.",
          "Existing policies, onboarding materials, and informal rules that affect AI use.",
        ],
      },
      {
        title: "Outcomes and deliverables",
        paragraphs: [
          "You leave with a short adoption brief in plain business language: where your firm stands today, a sensible first AI workflow, the main risks, the rules you would need, and a recommended path to a controlled prototype if one makes sense.",
        ],
        bullets: [
          "Prioritized AI workflow opportunities with risk notes.",
          "Observations on current AI use and client-data handling.",
          "Recommended approved and off-limits AI use cases.",
          "Suggested human review checkpoints.",
          "A clear next-step recommendation: a Secure AI Adoption Build when a prototype is appropriate, or a reason to wait.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "See how the Secure AI Adoption Build works",
          },
        ],
      },
      {
        title: "Process",
        paragraphs: [
          "The process is intentionally focused. Asmar Partners gathers context from leadership and workflow owners, maps likely AI opportunities, reviews risk areas, and summarizes findings in plain business language.",
          "The review stands on its own. It is useful when a firm wants clarity without committing to a broader technology rollout.",
        ],
      },
      {
        title: "What is included",
        paragraphs: [
          "The review includes discovery, workflow opportunity mapping, AI risk triage, governance recommendations, and a practical adoption sequence for the next phase.",
        ],
      },
      {
        title: "What is not included",
        paragraphs: [
          "The review is not a legal opinion, compliance certification, security audit, incident response engagement, or guarantee of results. It does not require uploading client files into AI tools.",
          "If specialized legal, regulatory, or security certification work is needed, those decisions should be handled by the appropriate qualified advisor.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need to know which AI tool we want to use first?",
        answer:
          "No. The review starts with workflows, data boundaries, and review requirements. Tool selection comes after the business understands where AI can be used safely.",
      },
      {
        question: "Will this expose client information?",
        answer:
          "No. The review is designed to clarify data-handling rules, not to use client data. You should not provide client names, credentials, financial records, tax records, or confidential files for the review.",
      },
      {
        question: "Can this help if employees are already using ChatGPT?",
        answer:
          "Yes. A common starting point is understanding current use, agreeing on approved and off-limits use cases, and writing practical rules people can follow.",
      },
      {
        question: "What happens after the review?",
        answer:
          "If there is a strong workflow candidate, the next step is usually a Secure AI Adoption Build focused on a controlled AI workflow prototype, documentation, human review, and measurement.",
      },
    ],
  },
  sprint: {
    path: "/secure-ai-adoption-sprint",
    title: "Secure AI Adoption Build + Prototype | Asmar Partners",
    description:
      "Build a controlled AI workflow prototype with clear data-use rules, human review, and tools your firm already owns, then measure the results in a pilot.",
    h1: "Secure AI Adoption Build + Prototype",
    eyebrow: "Controlled implementation for one practical workflow",
    intro: [
      "Together with Asmar Partners you'll build a workflow worth testing. The Secure AI Adoption Build delivers a controlled prototype. Easily assess via metrics how much AI can cut employee hours spent drafting, reworking, or producing projects while retaining human review and your unique company guidelines.",
      "Next, your prototype will be seamlessly integrated into tools your firm already owns. After you've spent a trial period with your personalized build, we'll help you measure and analyze results to fine-tune what works best for you.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Pick the right workflow before building the prototype.",
    ctaBody:
      "A focused review confirms which workflow is worth prototyping and which rules should be in place before anyone relies on it.",
    serviceType: "Secure AI adoption build and AI workflow prototype implementation",
    sections: [
      {
        title: "What the build is",
        paragraphs: [
          "The build is a focused implementation engagement for one workflow: an AI-assisted drafting process, an intake assistant, an internal knowledge workflow, or another controlled process where real time savings are plausible.",
          "It does not start by forcing a tool into the business. It starts by defining the work: what goes in, what information is off-limits, what comes out, and who reviews it.",
        ],
      },
      {
        title: "Who it is for",
        paragraphs: [
          "The build fits professional-services firms that have identified a real bottleneck and want to test AI carefully before a broader rollout.",
          "Examples include firms that want faster internal summaries, cleaner handoffs, controlled drafting support, repeatable proposal or report preparation, or better follow-up processes, all without exposing client information.",
        ],
      },
      {
        title: "Why workflow comes before the tool",
        paragraphs: [
          "An AI tool only helps when the firm knows where the work starts, what information is allowed, who reviews the output, and how success will be judged. Without that clarity, a prototype becomes one more unmanaged tool.",
          "Asmar Partners maps the workflow first, so the prototype serves your process instead of becoming a disconnected experiment.",
        ],
      },
      {
        title: "Prototype scope",
        paragraphs: [
          "The prototype is intentionally narrow. It focuses on one workflow, a defined user group, approved inputs, expected outputs, and a documented review path.",
        ],
        bullets: [
          "Workflow intake and output requirements.",
          "Prompting or assistant behavior for the specific task.",
          "Data boundaries and information that should not be entered.",
          "Owner responsibilities for review, adoption, and feedback.",
          "Measurement points for time savings, quality, usage, and risk controls.",
        ],
      },
      {
        title: "Governance guardrails",
        paragraphs: [
          "Governance guardrails are part of the work from day one rather than added after launch. They define approved use, information that stays out, when to escalate, and who is accountable for AI-assisted work.",
        ],
        links: [
          {
            href: "/ai-governance-professional-services",
            label: "Plan AI governance guardrails",
          },
        ],
      },
      {
        title: "Human review checkpoints",
        paragraphs: [
          "AI-assisted work still needs professional judgment. The build defines where a person must review outputs, validate client-facing work, correct assumptions, and approve final use.",
          "The point is to cut repetitive work without weakening the accountability your clients are paying for.",
        ],
      },
      {
        title: "Client-owned tools and documentation",
        paragraphs: [
          "The build favors tools and environments your firm already owns whenever practical. Documentation covers how the workflow is used, who owns it, what data rules apply, and what should be changed before expanding usage.",
        ],
        links: [
          {
            href: "/client-owned-ai-workflows",
            label: "Build client-owned AI workflows",
          },
        ],
      },
      {
        title: "Measurement plan",
        paragraphs: [
          "Measurement is agreed before the pilot starts. We track usage, estimated time saved, review effort, exceptions, and whether the rules are being followed, so the decision to expand, adjust, or stop is based on evidence.",
        ],
        links: [
          {
            href: "/ai-adoption-roi-measurement",
            label: "Measure AI adoption and time savings",
          },
        ],
      },
      {
        title: "What is included",
        paragraphs: [
          "The build includes workflow discovery, prototype design, governance guardrails, implementation support for the selected workflow, documentation, human review checkpoints, and a measurement plan.",
          "Before the build starts, we record how the work happens today, including how long tasks take and how often they occur, so the 30-day pilot has real numbers to compare against. At the final review, many firms choose to continue with quarterly support that keeps rules, training, and workflows current as AI tools change.",
        ],
      },
      {
        title: "What is not included",
        paragraphs: [
          "The build is not a broad AI transformation program, legal compliance certification, security audit, or a plan to replace staff. It is a controlled implementation path for one practical workflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many workflows are included?",
        answer:
          "The build focuses on one workflow so the prototype, data rules, review checkpoints, and measurement plan are specific enough to be useful.",
      },
      {
        question: "Do you build only Custom GPTs?",
        answer:
          "No. A Custom GPT may be appropriate in some cases, but the work is broader: workflow design, governance, client-owned tools, documentation, review checkpoints, and measurement.",
      },
      {
        question: "Can the prototype use our existing tools?",
        answer:
          "Often, yes. The build considers the tools your team already uses and prioritizes environments your firm owns when they can support the workflow safely.",
      },
      {
        question: "What makes the build secure?",
        answer:
          "The build uses defined data boundaries, approved use cases, human review, documented ownership, and governance guardrails. It is cybersecurity-aware, but it is not a replacement for a formal security audit.",
      },
    ],
  },
  governance: {
    path: "/ai-governance-professional-services",
    title: "AI Governance for Professional Services | Asmar Partners",
    description:
      "Practical AI rules for professional-services firms: what AI can be used for, what client information stays out of it, and who reviews the output.",
    h1: "AI Governance Guardrails for Professional Services Firms",
    eyebrow: "Practical rules for safe AI adoption",
    intro: [
      "Professional-services firms are built on confidentiality and careful judgment. As AI becomes part of everyday work, most firms want simple, clear rules for how it is used, without a policy binder no one opens.",
      "Asmar Partners helps you write rules people can actually follow during real work: what AI can be used for, what information stays out of it, and who reviews the output.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Want practical AI rules your team can actually use?",
    ctaBody:
      "Start with a review of current AI use, how client information should be handled, and the rules that make sense before broader adoption.",
    serviceType: "AI governance guardrails for professional services firms",
    sections: [
      {
        title: "Why AI governance matters",
        paragraphs: [
          "Your firm sells trust, confidentiality, and consistent judgment. Clear AI rules protect all three: they keep client information in approved tools, make sure drafts are reviewed before they reach a client, and name who is accountable for the output.",
          "Practical governance gives employees clear boundaries while leaving room for useful improvements. Safe here means controlled, reviewed, and measured, not risk-free.",
        ],
      },
      {
        title: "Bringing AI use into view",
        paragraphs: [
          "Shadow AI is a term for employees using AI tools that leadership cannot see. It usually comes from good intentions, people trying to work faster, but it means nobody knows what information is being entered or whether anyone is checking the work.",
          "Clear rules surface current usage, name the approved tools, and define when AI-assisted work must be reviewed. They also give you a ready answer when a client or insurer asks how your firm uses AI.",
        ],
        links: [
          {
            href: "/ai-risk-opportunity-review",
            label: "Start with a review of current AI use",
          },
        ],
      },
      {
        title: "Client-data handling",
        paragraphs: [
          "Data-handling rules should identify what information can be used, what must be anonymized, and what should not be entered into AI systems. This includes client names, confidential documents, credentials, financial records, tax records, contracts, and regulated information.",
          "The rules should also clarify where approved business tools must be used instead of personal accounts or unmanaged AI services.",
        ],
      },
      {
        title: "Approved and prohibited use cases",
        paragraphs: [
          "Employees follow examples, not abstractions. Good governance names safe use cases, restricted use cases, and prohibited use cases in plain language.",
        ],
        bullets: [
          "Approved examples may include summarizing non-confidential internal notes, drafting internal checklists, or brainstorming workflow steps.",
          "Restricted examples may include client-facing drafts that require human review before use.",
          "Prohibited examples may include uploading confidential client files, credentials, legal instructions, tax records, or sensitive financial details to unapproved tools.",
        ],
      },
      {
        title: "Human review checkpoints",
        paragraphs: [
          "AI-assisted work should not bypass professional judgment. Governance should identify outputs that need review, who reviews them, and what reviewers are checking for before client-facing or operational use.",
        ],
      },
      {
        title: "AI acceptable use policy support",
        paragraphs: [
          "Asmar Partners can help shape practical AI acceptable-use policy language that reflects your actual workflows, data boundaries, tool ownership, and review expectations, written so your team can follow it and your counsel can approve it.",
          "To be clear about scope: this support is operational. It is not legal advice or compliance certification. Your counsel and compliance staff review and approve; we help put the operational pieces in place.",
        ],
      },
      {
        title: "Training and adoption",
        paragraphs: [
          "Governance only works if people understand it. Training should focus on realistic work examples, what not to enter into tools, when to ask for approval, and how to document AI-assisted work.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "Apply the rules in a Secure AI Adoption Build",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do small professional services firms really need AI governance?",
        answer:
          "Yes. Smaller firms often rely on informal habits, which makes it harder to know how AI is being used. Practical rules create clarity without enterprise bureaucracy.",
      },
      {
        question: "Is this a legal policy review?",
        answer:
          "No. Asmar Partners can help with operational policy structure and practical use rules, but legal policy review should be handled by qualified counsel.",
      },
      {
        question: "Can governance still allow experimentation?",
        answer:
          "Yes. Good guardrails distinguish safe experimentation from risky use of client information, unapproved tools, or unreviewed client-facing outputs.",
      },
    ],
  },
  workflows: {
    path: "/client-owned-ai-workflows",
    title: "Client-Owned AI Workflows for Professional Services | Asmar Partners",
    description:
      "AI workflows built around your real work and kept in tools your firm owns, with clear data boundaries, review checkpoints, documentation, and measurement.",
    h1: "Client-Owned AI Workflows Built Around Your Real Work",
    eyebrow: "Practical workflow prototypes your business can own",
    intro: [
      "An AI workflow only helps if your firm still owns it after the consultant leaves. Client-owned workflows are built around your real work, your data boundaries, and your approved tools, not an employee's personal account.",
      "Asmar Partners designs AI workflow prototypes your team can run, maintain, and govern without depending on anyone else.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Find the workflow worth prototyping first.",
    ctaBody:
      "A focused review shows where a client-owned AI workflow is practical, safe to run, and worth measuring.",
    serviceType: "Client-owned AI workflow prototype design for professional services businesses",
    sections: [
      {
        title: "What client-owned AI workflows are",
        paragraphs: [
          "A client-owned AI workflow is a documented process, such as a prompt pattern, an assistant configuration, or an automation path, that lives in tools your firm approves and controls.",
          "Ownership matters because firms need continuity. A workflow only one employee understands is hard to maintain and easy to lose.",
        ],
      },
      {
        title: "Why Asmar Partners does not start with tools",
        paragraphs: [
          "Starting with a tool hides the real question: which of your workflows is repetitive, valuable, reviewable, and safe enough for AI assistance?",
          "Asmar Partners starts with workflow discovery, so the tool ends up serving the work, not the other way around.",
        ],
        links: [
          {
            href: "/ai-risk-opportunity-review",
            label: "Identify a sensible first AI workflow",
          },
        ],
      },
      {
        title: "Workflow discovery",
        paragraphs: [
          "Discovery maps the current process, recurring inputs, handoffs, decisions, pain points, review responsibilities, and output quality requirements.",
          "The best first workflow is usually one with repeatable structure, clear business value, manageable data risk, and a human review path that already exists or can be added.",
        ],
      },
      {
        title: "Prototype design",
        paragraphs: [
          "Prototype design defines what the AI-assisted workflow should do, what it should not do, what information it can use, and how employees interact with it.",
        ],
        bullets: [
          "Role-specific instructions for the workflow owner.",
          "Input and output boundaries.",
          "Review and approval steps.",
          "Escalation paths when the output is uncertain or incomplete.",
          "Usage notes so the workflow can be maintained by the business.",
        ],
      },
      {
        title: "Data boundaries",
        paragraphs: [
          "Every workflow needs data-handling rules. These rules identify what information is allowed, what should be anonymized, and what must stay out of AI systems unless an approved environment and business decision allow it.",
        ],
      },
      {
        title: "Review checkpoints",
        paragraphs: [
          "Client-owned workflows keep human review where it matters. Review checkpoints are defined for external communications, client work, decisions, recommendations, and anything that affects trust or professional responsibility.",
        ],
      },
      {
        title: "Documentation and ownership",
        paragraphs: [
          "Documentation makes the workflow maintainable. It records the purpose, owner, approved use cases, prohibited inputs, review expectations, measurement approach, and change notes.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "See the Secure AI Adoption Build",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does client-owned mean custom software?",
        answer:
          "Not always. It may mean a configured business tool, documented assistant, prompt workflow, or lightweight prototype that the business controls and can maintain.",
      },
      {
        question: "Can employees still use AI creatively?",
        answer:
          "Yes, within boundaries. The point is to make safe use clear, especially when client information, external work, or repeatable business processes are involved.",
      },
      {
        question: "How do we avoid building the wrong workflow?",
        answer:
          "Start with a risk and opportunity review, then prototype one workflow with defined ownership, data boundaries, human review, and measurement.",
      },
    ],
  },
  roi: {
    path: "/ai-adoption-roi-measurement",
    title: "AI Adoption & ROI Measurement | Asmar Partners",
    description:
      "Measure AI adoption by workflow usage, time saved, human review, and whether the rules are followed, so decisions to expand are based on evidence.",
    h1: "Measure AI Adoption by Workflow, Risk, and Time Saved",
    eyebrow: "Measurement for practical AI adoption",
    intro: [
      "AI can feel productive while changing very little. Measurement tells you whether a workflow is actually used, how much time it saves, and whether the rules are being followed, before you decide to expand it.",
      "It also gives you a plain-English record of how AI is used and controlled in your firm, which is useful when a client or insurer asks.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Make AI adoption measurable before you expand it.",
    ctaBody:
      "A practical measurement plan helps leadership decide whether a workflow should continue, improve, pause, or expand.",
    serviceType: "AI adoption and ROI measurement for professional services workflows",
    sections: [
      {
        title: "Why AI adoption needs measurement",
        paragraphs: [
          "A prototype that no one measures becomes a tool that no one questions. Measurement connects AI-assisted work to usage, time saved, review effort, exceptions, and whether the rules are being followed.",
          "The goal is not a promise of return. It is enough evidence for leadership to decide what is working and what should change.",
        ],
      },
      {
        title: "Time savings",
        paragraphs: [
          "Time savings should be measured at the workflow level, not guessed across the whole firm. A useful plan compares the old process with the AI-assisted one and records where time actually drops.",
        ],
      },
      {
        title: "Workflow usage",
        paragraphs: [
          "Usage shows whether the team is adopting the workflow. If the prototype is rarely used, the issue may be training, workflow fit, tool friction, or unclear ownership rather than the AI model itself.",
        ],
      },
      {
        title: "Human review status",
        paragraphs: [
          "Human review should be tracked because AI-assisted work still requires judgment. Measurement should show whether review steps are happening, where reviewers spend time, and where outputs need improvement.",
        ],
      },
      {
        title: "Risk-control tracking",
        paragraphs: [
          "Risk controls should be visible. The plan can track whether users follow data-handling rules, avoid prohibited inputs, use approved tools, and escalate uncertain outputs.",
        ],
      },
      {
        title: "Reporting cadence",
        paragraphs: [
          "A reporting cadence keeps adoption grounded. Weekly or monthly summaries show usage, time saved, exceptions, review findings, and recommendations for the next iteration.",
          "These summaries also serve as a record you can share with a client or insurer who asks how AI is used at your firm.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "Add measurement to a Secure AI Adoption Build",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can AI ROI be guaranteed?",
        answer:
          "No. Asmar Partners does not promise a guaranteed return. A measurement plan helps estimate time savings and business impact with evidence from actual workflow use.",
      },
      {
        question: "What should we measure first?",
        answer:
          "Start with usage, time saved, review effort, exceptions, and whether the workflow follows the data-handling and human review rules.",
      },
      {
        question: "How long should a pilot be measured?",
        answer:
          "Many workflows can produce useful signals within a focused pilot window, but the right cadence depends on workflow frequency, team size, and review needs.",
      },
    ],
  },
  retainer: {
    path: "/ai-governance-adoption-partner",
    title: "AI Governance & Adoption Partner Retainer | Asmar Partners",
    description:
      "Quarterly reviews that keep your firm's AI rules, workflows, and reporting current as tools change. Plans from $750 per month.",
    h1: "AI Governance & Adoption Partner",
    eyebrow: "Ongoing quarterly support after your first workflow",
    intro: [
      "AI tools change often. The rules and workflows your firm sets up today will need updating as new features appear and working habits shift.",
      "The AI Governance & Adoption Partner retainer keeps your rules, training, and workflows current, and gives you plain-English reporting you can share with partners and clients. Plans run $750 to $1,500 per month depending on firm size.",
    ],
    ctaText: "Schedule an AI Risk & Opportunity Review",
    ctaTitle: "Not sure if ongoing support is the right next step?",
    ctaBody:
      "Start with the free review. It shows where your firm stands today and whether ongoing support, a build, or waiting is the sensible next step.",
    serviceType: "Ongoing AI governance and adoption support for professional-services firms",
    sections: [
      {
        title: "Why ongoing support matters",
        paragraphs: [
          "A policy written in January can be out of date by June. New AI features appear in tools your team already uses, habits shift, and the questions clients and insurers ask keep evolving.",
          "A regular review rhythm keeps everything current without redoing the work.",
        ],
      },
      {
        title: "What you get each quarter",
        paragraphs: ["The retainer is deliberately concrete. Each quarter includes:"],
        bullets: [
          "A review of how your team is actually using AI, including tools that were never formally approved.",
          "Updates to your rules and policies as AI tools and models change.",
          "One new workflow rollout, or a refinement of an existing one.",
          "Adoption and time-savings reporting you can share with partners, clients, and insurers.",
          "Priority support between quarterly reviews.",
        ],
      },
      {
        title: "Who it fits",
        paragraphs: [
          "Most retainer clients arrive after a Secure AI Adoption Build, once the first governed workflow is live and worth maintaining.",
          "It also fits firms where AI use already exists but nobody owns the rules, the review, or the reporting.",
        ],
        links: [{ href: "/secure-ai-adoption-sprint", label: "See how the build works" }],
      },
      {
        title: "What it costs",
        paragraphs: [
          "Plans run $750 to $1,500 per month depending on firm size. The price is set before the retainer starts and reviewed annually, with no surprise fees.",
        ],
      },
      {
        title: "What is not included",
        paragraphs: [
          "The retainer is not legal advice, compliance certification, a security audit, or incident response. Your counsel and compliance staff review and approve policy language; we keep the operational side current.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need a build before starting a retainer?",
        answer:
          "Usually, yes. The build creates the first governed workflow and the baseline numbers the retainer maintains. Firms with existing AI foundations can sometimes start after a review instead.",
      },
      {
        question: "What does a quarterly review actually look like?",
        answer:
          "A focused working session, not an audit. We look at what tools are in use, whether the data-use rules are being followed, what changed in the AI landscape, and which workflow to roll out or refine next. You get a plain-English summary afterward.",
      },
      {
        question: "Is this the same as IT support?",
        answer:
          "No. The retainer covers AI rules, workflows, human review, and measurement. It complements, and does not replace, your IT provider or MSP.",
      },
    ],
  },
} satisfies Record<string, ServicePageContent>;
