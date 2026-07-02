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
      "Identify safe AI opportunities, reduce shadow AI risk, and clarify governance, client-data, and workflow priorities.",
    h1: "AI Risk & Opportunity Review",
    eyebrow: "The free first step toward safe AI adoption",
    intro: [
      "Your team is probably already using AI — with or without rules. The AI Risk & Opportunity Review shows you where AI is useful, where it should be limited, and which workflow is the safest place to start.",
      "You leave knowing exactly where your firm stands — from unmanaged AI use to governed and measured — and what to do about it. No technical background needed to act on the findings.",
    ],
    ctaText: "Schedule an AI Risk & Opportunity Review",
    ctaTitle: "Ready to find the safest first AI workflow?",
    ctaBody:
      "Start with a focused review of workflow opportunity, client-information risk, governance gaps, and a practical next step.",
    serviceType: "AI risk and opportunity review for professional services businesses",
    sections: [
      {
        title: "What the review is",
        paragraphs: [
          "The review is a structured look at how your firm actually works: current AI use, repetitive pain points, client-data exposure, and operational readiness. It turns vague interest in AI into a prioritized adoption path.",
          "The outcome is not a strategy deck. It is a short set of practical recommendations: which workflows to pursue, which to avoid, and which guardrails need to exist before a pilot.",
        ],
      },
      {
        title: "Who it is for",
        paragraphs: [
          "The review fits professional-services firms such as accounting, bookkeeping, fractional CFO, consulting, agency, engineering, and architecture practices. What they share: client information, deadlines, and review-heavy deliverables.",
          "It is most useful for owners, managing partners, COOs, and operations leaders who suspect employees are already using AI but have no clear data-use rules yet.",
        ],
      },
      {
        title: "The problem: unstructured AI use and shadow AI risk",
        paragraphs: [
          "Employees usually adopt ChatGPT before leadership decides what information can go into it, which outputs need review, and who owns the process. That is shadow AI risk — AI use happening where leadership cannot see it.",
          "Here is why it matters: your engagement letters, NDAs, and cyber insurance application already promise careful handling of client information. AI use nobody is tracking sits outside those promises — and you find out at renewal time, or when a client asks.",
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
          "Client information, credentials, financial records, contracts, and other data that should be restricted.",
          "Human review points for client work, decisions, recommendations, and external communications.",
          "Existing policies, onboarding materials, and informal rules that affect AI use.",
        ],
      },
      {
        title: "Outcomes and deliverables",
        paragraphs: [
          "You leave with a practical adoption brief in plain business language: where your firm stands today, the safest first AI workflow, the key risks, the guardrails you need, and a recommended path into a controlled prototype or pilot.",
        ],
        bullets: [
          "Prioritized AI workflow opportunities with risk notes.",
          "Shadow AI and client-data handling observations.",
          "Recommended approved and prohibited AI use cases.",
          "Suggested human review checkpoints.",
          "A clear next-step recommendation for a Secure AI Adoption Sprint when a prototype is appropriate.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "Move from review into a Secure AI Adoption Sprint",
          },
        ],
      },
      {
        title: "Process",
        paragraphs: [
          "The process is intentionally focused. Asmar Partners gathers context from leadership and workflow owners, maps likely AI opportunities, reviews risk areas, and summarizes findings in plain business language.",
          "The review can be completed before a larger implementation decision, making it useful when a firm wants clarity without committing to a broad technology rollout.",
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
          "The review is not a legal opinion, compliance certification, security audit, incident response engagement, or guarantee of ROI. It does not require uploading client files into AI tools.",
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
          "The review is designed to identify data-handling rules and reduce exposure. You should not provide client names, credentials, financial records, tax records, or confidential files for the review.",
      },
      {
        question: "Can this help if employees are already using ChatGPT?",
        answer:
          "Yes. A common use case is reducing shadow AI risk by identifying current usage, clarifying approved and prohibited use cases, and creating practical governance guardrails.",
      },
      {
        question: "What happens after the review?",
        answer:
          "If there is a strong workflow candidate, the next step is usually a Secure AI Adoption Sprint focused on a controlled AI workflow prototype, documentation, human review, and measurement.",
      },
    ],
  },
  sprint: {
    path: "/secure-ai-adoption-sprint",
    title: "Secure AI Adoption Sprint + Prototype | Asmar Partners",
    description:
      "Build a secure AI workflow prototype with governance guardrails, human review, client-owned tools, and measurable productivity outcomes.",
    h1: "Secure AI Adoption Sprint + Prototype",
    eyebrow: "Controlled implementation for one practical workflow",
    intro: [
      "You have found a workflow worth testing. The Secure AI Adoption Sprint turns it into a controlled prototype — built to show whether AI can cut drafting, rework, or manual time while your data-use rules and human review stay in place.",
      "The prototype lives in tools your firm owns. Decisions are documented. Results are measured in a 30-day pilot, not promised in advance.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Pick the right workflow before building the prototype.",
    ctaBody:
      "A focused review confirms which workflow is worth prototyping and which guardrails need to exist before anyone relies on it.",
    serviceType: "Secure AI adoption sprint and AI workflow prototype implementation",
    sections: [
      {
        title: "What the sprint is",
        paragraphs: [
          "The sprint is a focused implementation engagement for one workflow — an AI-assisted drafting process, an intake assistant, an internal knowledge workflow, or another controlled process where real time savings are plausible.",
          "It does not start by forcing a tool into the business. It starts by defining the work: what goes in, what data is off-limits, what comes out, and who reviews it.",
        ],
      },
      {
        title: "Who it is for",
        paragraphs: [
          "The sprint fits professional services businesses that have identified a real operational bottleneck and want to test AI safely before a broader rollout.",
          "Examples include firms that need faster internal summaries, cleaner handoffs, controlled drafting support, repeatable proposal or report preparation, or better follow-up processes without exposing sensitive client information.",
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
          "Governance guardrails are built into the sprint rather than added after launch. They define approved use, prohibited information, escalation points, and accountability for AI-assisted work.",
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
          "AI-assisted work still needs professional judgment. The sprint defines where a person must review outputs, validate client-facing work, correct assumptions, and approve final use.",
          "The point is to cut repetitive work without weakening the accountability your clients are paying for.",
        ],
      },
      {
        title: "Client-owned tools and documentation",
        paragraphs: [
          "The sprint favors client-owned AI tools and business environments whenever practical. Documentation covers how the workflow is used, who owns it, what data rules apply, and what should be changed before expanding usage.",
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
          "Measurement is agreed before the pilot starts. The sprint tracks usage, estimated time saved, review effort, exceptions, and risk-control status — so the decision to expand, adjust, or stop is grounded in evidence.",
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
          "The sprint includes workflow discovery, prototype design, governance guardrails, implementation support for the selected workflow, documentation, human review checkpoints, and a measurement plan.",
          "Before the sprint starts, we record how the work happens today — how long tasks take and how often they occur — so the 30-day pilot has real numbers to compare against. At the final review, most firms choose to continue with a quarterly partnership that keeps rules, training, and workflows current as AI tools change.",
        ],
      },
      {
        title: "What is not included",
        paragraphs: [
          "The sprint is not a broad enterprise AI transformation program, legal compliance certification, security audit, or promise that staff can be replaced. It is a controlled implementation path for one practical workflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many workflows are included?",
        answer:
          "The sprint focuses on one workflow so the prototype, data rules, review checkpoints, and measurement plan are specific enough to be useful.",
      },
      {
        question: "Do you build only Custom GPTs?",
        answer:
          "No. A Custom GPT may be appropriate in some cases, but the offer is broader: workflow design, governance, client-owned tools, documentation, review checkpoints, and measurement.",
      },
      {
        question: "Can the prototype use our existing tools?",
        answer:
          "Often, yes. The sprint considers the tools your team already uses and prioritizes client-owned environments when they can support the workflow safely.",
      },
      {
        question: "What makes the sprint secure?",
        answer:
          "The sprint uses defined data boundaries, approved use cases, human review, documented ownership, and governance guardrails. It is cybersecurity-aware, but it is not a replacement for a formal security audit.",
      },
    ],
  },
  governance: {
    path: "/ai-governance-professional-services",
    title: "AI Governance for Professional Services | Asmar Partners",
    description:
      "Create practical AI governance guardrails for client data, employee AI use, approved use cases, human review, and safe adoption.",
    h1: "AI Governance Guardrails for Professional Services Firms",
    eyebrow: "Practical rules for safe AI adoption",
    intro: [
      "Your firm has already promised to protect client information — in engagement letters, NDAs, and your cyber insurance application. Staff using AI without rules is a gap in promises you have already signed.",
      "Asmar Partners helps you close that gap with guardrails people can actually follow during real work. The goal is fewer unpleasant surprises — not a policy binder no one opens.",
    ],
    ctaText: "Review Your AI Governance Risk",
    ctaTitle: "Need practical AI rules your team can actually use?",
    ctaBody:
      "Start with a review of current AI use, client-data risk, and the governance guardrails needed before broader adoption.",
    serviceType: "AI governance guardrails for professional services firms",
    sections: [
      {
        title: "Why AI governance matters",
        paragraphs: [
          "Your firm sells trust, confidentiality, and consistent judgment. Unclear AI use puts all three at risk: client information in the wrong tool, an unreviewed draft sent to a client, no one accountable for the output.",
          "Practical governance gives employees clear boundaries while still leaving room for useful workflow improvements. Safe here means controlled, governed, and reviewed — not risk-free.",
        ],
      },
      {
        title: "Shadow AI risk",
        paragraphs: [
          "Shadow AI is employees using AI tools leadership cannot see. You do not know what information is being entered, which outputs are reaching clients, or whether anyone is checking the work.",
          "This matters beyond the office. Cyber insurance applications increasingly ask how your firm uses AI and controls data, and clients are starting to ask the same question. Governance guardrails surface current usage, name the approved tools, and define when AI-assisted work must be reviewed — so you have a real answer.",
        ],
        links: [
          {
            href: "/ai-risk-opportunity-review",
            label: "Assess shadow AI risk",
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
          "Asmar Partners can help shape practical AI acceptable-use policy language that reflects your actual workflows, data boundaries, tool ownership, and review expectations — written so your team can follow it, and your counsel can approve it.",
          "To be clear about scope: this support is operational. It is not legal advice or compliance certification. Your counsel and compliance staff review and approve; we help close the AI gap in the posture you already have.",
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
            label: "Apply governance in a Secure AI Adoption Sprint",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do small professional services firms really need AI governance?",
        answer:
          "Yes. Smaller firms often rely on informal habits, which can make shadow AI harder to see. Practical governance creates clear rules without requiring enterprise bureaucracy.",
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
      "Build client-owned AI workflows around real work with clear data boundaries, review checkpoints, documentation, governance, and measurement.",
    h1: "Client-Owned AI Workflows Built Around Your Real Work",
    eyebrow: "Practical workflow prototypes your business can own",
    intro: [
      "An AI workflow only helps if your firm still owns it after the consultant leaves. Client-owned workflows are built around your real work, your data boundaries, and your approved tools — not an employee's personal account.",
      "Asmar Partners designs AI workflow prototypes your team can run, maintain, and govern without depending on anyone else.",
    ],
    ctaText: "Identify Your Best AI Workflow",
    ctaTitle: "Find the workflow worth prototyping first.",
    ctaBody:
      "A focused review shows where a client-owned AI workflow is practical, safe to run, and worth measuring.",
    serviceType: "Client-owned AI workflow prototype design for professional services businesses",
    sections: [
      {
        title: "What client-owned AI workflows are",
        paragraphs: [
          "A client-owned AI workflow is a documented process — a prompt pattern, an assistant configuration, or an automation path — that lives in tools your firm approves and controls.",
          "Ownership matters because firms need continuity. A workflow only one employee understands is a risk, not an asset.",
        ],
      },
      {
        title: "Why Asmar Partners does not start with tools",
        paragraphs: [
          "Starting with a tool hides the real question: which of your workflows is repetitive, valuable, reviewable, and safe enough for AI assistance?",
          "Asmar Partners starts with workflow discovery, so the tool ends up serving the work — not the other way around.",
        ],
        links: [
          {
            href: "/ai-risk-opportunity-review",
            label: "Identify the safest first AI workflow",
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
            label: "Build the workflow in a Secure AI Adoption Sprint",
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
      "Measure AI adoption by workflow usage, time savings, human review, risk controls, and business impact after implementation.",
    h1: "Measure AI Adoption by Workflow, Risk, and Time Saved",
    eyebrow: "Measurement for practical AI adoption",
    intro: [
      "AI can feel productive while changing nothing. Measurement tells you whether a workflow is actually used, how much time it saves, and whether the rules are being followed — before you decide to expand it.",
      "It also gives you something most firms cannot produce: a plain-English record of how AI is used and controlled, ready for the client or insurer who asks.",
    ],
    ctaText: "Build a Measurable AI Adoption Plan",
    ctaTitle: "Make AI adoption measurable before you expand it.",
    ctaBody:
      "A practical measurement plan helps leadership decide whether a workflow should continue, improve, pause, or expand.",
    serviceType: "AI adoption and ROI measurement for professional services workflows",
    sections: [
      {
        title: "Why AI adoption needs measurement",
        paragraphs: [
          "A prototype that no one measures becomes a tool that no one questions. Measurement connects AI-assisted work to usage, time saved, review effort, exceptions, and risk-control status.",
          "The goal is not an ROI promise. It is enough evidence for leadership to decide what is working and what should change.",
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
          "These summaries do double duty: they are also the record you can show a client or an insurer who asks how AI is governed at your firm.",
        ],
        links: [
          {
            href: "/secure-ai-adoption-sprint",
            label: "Add measurement to a Secure AI Adoption Sprint",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can AI ROI be guaranteed?",
        answer:
          "No. Asmar Partners does not promise guaranteed ROI. A measurement plan helps estimate time savings and business impact with evidence from actual workflow use.",
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
} satisfies Record<string, ServicePageContent>;
