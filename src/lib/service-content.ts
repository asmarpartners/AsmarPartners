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
      "Identify safe, practical AI opportunities in your professional services firm while reducing client-data, governance, and shadow AI risks.",
    h1: "AI Risk & Opportunity Review",
    eyebrow: "Entry review for safe AI adoption",
    intro: [
      "The AI Risk & Opportunity Review helps owners and operators understand where AI can be useful, where it should be limited, and which workflow is the safest candidate for a controlled first step.",
      "The review is designed for professional services businesses that handle client information and need practical governance guardrails before employees experiment with unmanaged AI tools.",
    ],
    ctaText: "Schedule an AI Risk & Opportunity Review",
    ctaTitle: "Ready to identify the safest first AI workflow?",
    ctaBody:
      "Start with a focused review of workflow opportunity, client information risk, governance gaps, and measurable next steps.",
    serviceType: "AI risk and opportunity review for professional services businesses",
    sections: [
      {
        title: "What the review is",
        paragraphs: [
          "The review is a structured assessment of current AI use, repetitive workflow pain points, client-data exposure, and operational readiness. It turns vague interest in AI into a prioritized adoption path.",
          "The outcome is not a generic strategy deck. It is a practical set of recommendations for safe AI adoption, including workflows to pursue, workflows to avoid, and guardrails needed before a pilot.",
        ],
      },
      {
        title: "Who it is for",
        paragraphs: [
          "The review is built for professional services businesses such as accounting, bookkeeping, fractional CFO, consulting, agency, engineering, and architecture firms. These examples share a common need: they manage client information, knowledge work, deadlines, and review-heavy deliverables.",
          "It is especially useful for owners, managing partners, COOs, practice managers, IT leaders, and operations teams who suspect employees are already using AI but do not yet have clear data-handling rules.",
        ],
      },
      {
        title: "The problem: unstructured AI use and shadow AI risk",
        paragraphs: [
          "Employees often adopt ChatGPT or other AI tools before the business has decided what information can be used, which outputs require human review, and who owns the resulting process. That creates shadow AI risk.",
          "The business may gain small productivity wins, but it also loses visibility into client information handling, review quality, approved use cases, and whether AI-assisted work is being measured accurately.",
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
          "You receive a practical adoption brief that identifies the safest first AI workflow, key risks, required governance guardrails, and a recommended path into a controlled prototype or pilot.",
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
      "Build a practical AI workflow prototype with governance guardrails, human review, client-owned tools, and measurable productivity outcomes.",
    h1: "Secure AI Adoption Sprint + Prototype",
    eyebrow: "Controlled implementation for one practical workflow",
    intro: [
      "The Secure AI Adoption Sprint turns one validated workflow into a controlled AI workflow prototype. The goal is to prove whether AI can reduce time, rework, or manual drafting while keeping human review and data-handling rules in place.",
      "The sprint is designed around client-owned AI tools, documented decisions, practical governance guardrails, and measurable productivity outcomes.",
    ],
    ctaText: "Start with an AI Risk & Opportunity Review",
    ctaTitle: "Start with the right workflow before building the prototype.",
    ctaBody:
      "A focused review helps confirm which workflow is worth prototyping and what guardrails need to be in place before rollout.",
    serviceType: "Secure AI adoption sprint and AI workflow prototype implementation",
    sections: [
      {
        title: "What the sprint is",
        paragraphs: [
          "The sprint is a focused implementation engagement for one workflow. It may involve an AI-assisted drafting process, intake assistant, internal knowledge workflow, review queue, or another controlled workflow where measurable time savings are realistic.",
          "The sprint does not start by forcing a tool into the business. It starts by defining the work, data boundaries, expected output, review checkpoints, and owner responsibilities.",
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
          "AI tools only help when the business knows where the work starts, what information is allowed, who reviews the output, and how success will be measured. Without that workflow clarity, a prototype can become another unmanaged tool.",
          "Asmar Partners maps the workflow first so the prototype serves the business process rather than becoming a disconnected experiment.",
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
          "AI-assisted workflows still need human judgment. The sprint identifies where people must review outputs, validate client-facing work, correct assumptions, and approve final use.",
          "The purpose is to reduce repetitive work without weakening professional accountability.",
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
          "Measurement is defined before pilot use. The sprint tracks workflow usage, estimated time saved, review effort, exceptions, and risk-control status so the firm can make a grounded decision after the prototype.",
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
      "Create practical AI governance guardrails for client data, employee AI use, human review, and safe adoption.",
    h1: "AI Governance Guardrails for Professional Services Firms",
    eyebrow: "Practical rules for safe AI adoption",
    intro: [
      "AI governance should be clear enough for employees to follow during real work. Asmar Partners helps professional services businesses define practical guardrails for client information, employee AI use, human review, and controlled adoption.",
      "The goal is to reduce shadow AI risk without burying teams in policy language they cannot apply.",
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
          "Professional services businesses depend on trust, confidentiality, review quality, and consistent judgment. Unclear AI use can create risk around client information, external communications, professional work product, and internal accountability.",
          "Practical AI governance gives employees boundaries for safe AI adoption while still allowing useful workflow improvements.",
        ],
      },
      {
        title: "Shadow AI risk",
        paragraphs: [
          "Shadow AI happens when employees use unapproved AI tools or workflows outside management visibility. The business may not know what information is being entered, what outputs are being used, or whether the work is reviewed.",
          "Governance guardrails help surface current usage, clarify approved tools, and define when AI-assisted work must be disclosed or reviewed internally.",
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
          "Employees need examples. Governance should identify safe internal use cases, restricted use cases, and prohibited use cases in plain language.",
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
          "Asmar Partners can help shape practical AI acceptable use policy language that reflects actual workflows, data boundaries, tool ownership, and review expectations.",
          "This support is operational and implementation-focused. It is not legal advice or compliance certification.",
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
      "Build practical AI workflow and assistant prototypes that stay owned by your business, documented, governed, and measurable.",
    h1: "Client-Owned AI Workflows Built Around Your Real Work",
    eyebrow: "Practical workflow prototypes your business can own",
    intro: [
      "Client-owned AI workflows are designed around your real work, your data boundaries, your review expectations, and your business tools. They are not unmanaged experiments sitting in an employee's personal account.",
      "Asmar Partners helps professional services businesses design practical AI workflow prototypes that are documented, governed, and measurable.",
    ],
    ctaText: "Identify Your Best AI Workflow",
    ctaTitle: "Find the workflow that is worth prototyping first.",
    ctaBody:
      "A focused review can identify where a client-owned AI workflow is practical, safe, and measurable.",
    serviceType: "Client-owned AI workflow prototype design for professional services businesses",
    sections: [
      {
        title: "What client-owned AI workflows are",
        paragraphs: [
          "A client-owned AI workflow is a documented process, prompt pattern, assistant configuration, or automation path that lives within business-approved tools and can be governed by the organization.",
          "Ownership matters because professional services businesses need continuity, visibility, and data-handling rules rather than one-off experiments that only one employee understands.",
        ],
      },
      {
        title: "Why Asmar Partners does not start with tools",
        paragraphs: [
          "Starting with a tool can hide the real operational question: which workflow is repetitive, valuable, reviewable, and safe enough for AI assistance?",
          "Asmar Partners starts with workflow discovery so the selected tool supports the work instead of shaping the work around a generic AI feature.",
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
      "Measure AI workflow adoption, time savings, usage, risk controls, and business impact after implementation.",
    h1: "Measure AI Adoption by Workflow, Risk, and Time Saved",
    eyebrow: "Measurement for practical AI adoption",
    intro: [
      "AI adoption should be measured by workflow, usage, review effort, risk controls, and time saved. Without measurement, it is hard to tell whether a prototype is improving operations or just creating another tool to manage.",
      "Asmar Partners helps professional services businesses define practical measurement plans for AI-assisted workflows after implementation.",
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
          "AI can feel productive while still failing to improve the business. Measurement connects AI-assisted work to workflow usage, time savings, review effort, exceptions, and risk-control status.",
          "The goal is not a vague ROI promise. The goal is enough evidence for leadership to decide what is working and what should change.",
        ],
      },
      {
        title: "Time savings",
        paragraphs: [
          "Time savings should be estimated at the workflow level, not guessed across the whole firm. A useful plan compares the previous process with the AI-assisted process and records where time is actually reduced.",
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
          "A reporting cadence keeps adoption grounded. Weekly or monthly summaries can show usage, time saved, exceptions, review findings, and recommendations for the next iteration.",
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
