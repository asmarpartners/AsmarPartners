import { getRoleAliases, workflowTasks } from "@/lib/workflow-library";
import type {
  AutomationEase,
  EliminatedRecommendation,
  RoleTask,
  WorkflowRecommendation,
  WorkflowSuggestionDraft,
  WorkflowSuggestionRequest,
  WorkflowSuggestionResponse,
} from "@/lib/workflow-types";

const easeRank: Record<AutomationEase, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const ctaBody =
  "This preview is based on limited information. Asmar Partners can help identify the safest first AI workflow, define governance guardrails, build a controlled prototype, and measure results during a 30-day pilot.";

const defaultUnsafeBoundaries = [
  "Uploading sensitive client financial records, tax records, payroll records, credentials, bank statements, or regulated data into public AI tools.",
  "Tax advice, legal advice, compliance certification, security audit work, incident response, or guaranteed ROI claims.",
  "Automatic client communication, accounting record changes, access approval, pricing commitments, or filing decisions without qualified human review.",
];

const keywordGroups: { tokens: string[]; taskHints: string[] }[] = [
  {
    tokens: ["status", "project update", "project updates", "updates", "blocker", "bottleneck", "crm reminder"],
    taskHints: ["status", "bottleneck", "handoff", "summary", "recurring task"],
  },
  {
    tokens: ["meeting", "notes", "action item", "action items", "messy notes", "follow-up", "follow up"],
    taskHints: ["meeting", "action", "follow-up", "task list"],
  },
  {
    tokens: ["sop", "process", "procedure", "checklist", "template"],
    taskHints: ["sop", "checklist", "process", "standardization"],
  },
  {
    tokens: ["missing document", "missing documents", "document reminder", "documents late", "chase clients", "intake"],
    taskHints: ["document", "intake", "missing", "checklist", "reminder"],
  },
  {
    tokens: ["cleanup", "transaction", "month-end", "month end", "close", "reconciliation"],
    taskHints: ["cleanup", "transaction", "month-end", "review", "close"],
  },
  {
    tokens: ["onboarding", "training", "faq", "policy"],
    taskHints: ["onboarding", "training", "faq", "policy"],
  },
  {
    tokens: ["ticket", "access", "software", "security", "troubleshooting"],
    taskHints: ["ticket", "access", "software", "security", "troubleshooting"],
  },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function roleScore(inputRole: string, task: RoleTask) {
  const role = normalize(inputRole);
  const taskRole = normalize(task.role);
  const aliases = getRoleAliases(task.role).map(normalize);

  if (role === taskRole || taskRole.includes(role) || role.includes(taskRole)) {
    return 8;
  }

  if (aliases.some((alias) => role.includes(alias) || alias.includes(role))) {
    return 8;
  }

  return 0;
}

function detailScore(details: string, task: RoleTask) {
  if (!details.trim()) {
    return 0;
  }

  const text = normalize(details);
  const taskText = normalize(`${task.task} ${task.workflowName} ${task.category}`);
  let score = 0;

  for (const group of keywordGroups) {
    if (group.tokens.some((token) => text.includes(normalize(token)))) {
      score += group.taskHints.some((hint) => taskText.includes(normalize(hint))) ? 8 : 0;
    }
  }

  const detailsTokens = text.split(" ").filter((token) => token.length > 3);
  score += detailsTokens.filter((token) => taskText.includes(token)).length;

  return score;
}

function rankTasks(role: string, details = "", excludedIds = new Set<string>()) {
  const scoredTasks = workflowTasks
    .filter((task) => !excludedIds.has(task.id))
    .map((task) => {
      const taskRoleScore = roleScore(role, task);
      const taskDetailScore = detailScore(details, task);
      const score =
        taskRoleScore +
        taskDetailScore +
        easeRank[task.automationEase] +
        (task.automationEase === "High" ? 2 : 0);

      return { task, score, taskRoleScore };
    })
    .filter(({ score }) => score > 0);

  const hasRoleMatches = scoredTasks.some(({ taskRoleScore }) => taskRoleScore > 0);
  const roleScopedTasks = hasRoleMatches
    ? scoredTasks.filter(({ taskRoleScore }) => taskRoleScore > 0)
    : scoredTasks;
  const highAndMediumTasks = roleScopedTasks.filter(({ task }) => task.automationEase !== "Low");
  const tasksToRank = highAndMediumTasks.length >= 5 ? highAndMediumTasks : roleScopedTasks;

  return tasksToRank
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return easeRank[b.task.automationEase] - easeRank[a.task.automationEase];
    })
    .map(({ task }) => task);
}

function roleWithArticle(role: string) {
  const trimmed = role.trim();
  const article = /^[aeiou]/i.test(trimmed) ? "an" : "a";

  return `${article} ${trimmed}`;
}

function recommendationFromTask(task: RoleTask, role: string, companyType?: string): WorkflowRecommendation {
  const firmContext = companyType?.trim() ? ` in a ${companyType.trim()}` : "";

  return {
    id: task.id,
    workflow_name: task.workflowName,
    task: task.task,
    automation_ease: task.automationEase,
    business_value: `Reduce repetitive preparation time while keeping the ${task.role} owner in control of review, approvals, and data handling.`,
    why_it_fits: `For ${roleWithArticle(role)}${firmContext}, this workflow is a practical place to start because it has ${task.automationEase.toLowerCase()} automation readiness, is repeatable, is measurable, and can be reviewed before use.`,
    safe_ai_or_automation_approach: task.safeApproach,
    human_review_points: task.humanReviewNeeded,
    success_metrics: task.successMetrics,
  };
}

function getTaskByRecommendation(recommendation: WorkflowRecommendation) {
  return workflowTasks.find((task) => task.id === recommendation.id);
}

function removalReason(followUp: string, recommendation: WorkflowRecommendation) {
  const text = normalize(followUp);
  const target = normalize(`${recommendation.workflow_name} ${recommendation.task}`);
  const saysSolved = /\b(already|handled|automated|template|templated|in our crm|portal already|not relevant|do not want)\b/.test(text);

  if (!saysSolved) {
    return null;
  }

  if (
    /\b(project reminder|project reminders|crm)\b/.test(text) &&
    /\b(reminder|recurring task|recurring process)\b/.test(target)
  ) {
    return "Removed because the follow-up says this reminder or follow-up process is already handled.";
  }

  if (
    /\b(missing document|document|portal|intake)\b/.test(text) &&
    (/\b(missing|document|request)\b.*\b(reminder|follow up|follow-up)\b/.test(target) ||
      /\b(reminder|follow up|follow-up)\b.*\b(missing|document|request)\b/.test(target))
  ) {
    return "Removed because the follow-up says the document reminder process is already handled.";
  }

  if (
    /\b(status|project update|project updates)\b/.test(text) &&
    /\b(status|project|update|summary)\b/.test(target)
  ) {
    return "Removed because the follow-up says this status-update process is already handled.";
  }

  const removalStopWords = new Set([
    "already",
    "automated",
    "handled",
    "handles",
    "sends",
    "send",
    "portal",
    "reminder",
    "reminders",
    "template",
    "templated",
  ]);
  const textTokens = text
    .split(" ")
    .filter((token) => token.length > 4 && !removalStopWords.has(token));
  const overlap = textTokens.filter((token) => target.includes(token)).length;

  if (overlap >= 2) {
    return "Removed because the follow-up says this recommendation is already handled or not relevant.";
  }

  return null;
}

function applyFollowUp(
  currentState: WorkflowSuggestionResponse | null | undefined,
  followUp: string,
) {
  const active = currentState?.active_recommendations ?? [];
  const eliminated = [...(currentState?.eliminated_recommendations ?? [])];
  const retained: WorkflowRecommendation[] = [];

  for (const recommendation of active) {
    const reason = removalReason(followUp, recommendation);

    if (reason) {
      eliminated.push({
        id: recommendation.id,
        workflow_name: recommendation.workflow_name,
        reason_removed: reason,
      });
    } else {
      retained.push(recommendation);
    }
  }

  const eliminatedIds = new Set(eliminated.map((item) => item.id));
  const retainedCategories = new Set(
    retained
      .map(getTaskByRecommendation)
      .filter(Boolean)
      .map((task) => task?.category),
  );

  return { retained, eliminated, eliminatedIds, retainedCategories };
}

function buildPlan(
  role: string,
  recommendations: WorkflowRecommendation[],
  eliminated: EliminatedRecommendation[],
): WorkflowSuggestionResponse {
  const top = recommendations[0];
  const topTask = top ? getTaskByRecommendation(top) : undefined;
  const notToAutomate = topTask?.notRecommendedToAutomateFully ?? defaultUnsafeBoundaries;
  const metrics = top?.success_metrics?.length ? top.success_metrics : [
    "Workflow runs completed",
    "Manual time before and after the workflow change",
    "Human review time",
  ];

  return {
    role_interpretation: `${role.trim()} is treated as the primary workflow owner for this preview.`,
    latest_user_update_summary: eliminated.length
      ? "The active list was adjusted to remove workflows the user indicated are already handled or not relevant."
      : "Initial recommendation based on the role, optional company type, and optional pain points provided.",
    active_recommendations: recommendations,
    eliminated_recommendations: eliminated,
    top_recommendation: {
      workflow_name: top?.workflow_name ?? "Internal Workflow Review",
      why_this_should_be_first:
        top?.why_it_fits ??
        "It is a practical starting point for mapping repetitive internal work before selecting tools.",
      first_pilot_step:
        "Document the current manual process with sanitized examples, assign a human reviewer, and define what data may not be used.",
    },
    suggestion_plan: {
      title: "Your AI Workflow Suggestion Plan",
      recommended_first_workflow: top?.workflow_name ?? "Internal Workflow Review",
      why_this_workflow_fits:
        top?.why_it_fits ??
        "The safest first workflow is usually repetitive, measurable, and easy to review before wider rollout.",
      what_can_be_ai_assisted: [
        top?.safe_ai_or_automation_approach ??
          "Drafting, summarizing, categorizing, or checklist-building with sanitized examples in an approved business workspace.",
        "Creating a controlled prototype that uses general examples before any real operational rollout.",
        "Suggesting measurement points such as usage, time saved, review effort, and rework rate.",
      ],
      what_requires_human_review:
        top?.human_review_points?.length ? top.human_review_points : humanReviewFallback(),
      what_not_to_automate_yet: notToAutomate,
      suggested_30_day_pilot: [
        {
          week: 1,
          focus:
            "Map the current workflow, confirm data boundaries, identify approved tools, and collect sanitized examples.",
        },
        {
          week: 2,
          focus:
            "Build a controlled draft workflow or checklist with clear human review checkpoints.",
        },
        {
          week: 3,
          focus:
            "Test with a small internal group, record review edits, and adjust prompts or process steps.",
        },
        {
          week: 4,
          focus:
            "Compare baseline time against assisted time, review risk controls, and decide whether to expand, revise, or stop.",
        },
      ],
      success_metrics: [
        ...metrics.slice(0, 5),
        "Usage, time saved, review effort, risk controls, and adoption validated during the pilot.",
      ],
      contact_asmar_partners: {
        headline: "Want this mapped to your actual workflow?",
        body: ctaBody,
        button_text: "Schedule an AI Risk & Opportunity Review",
      },
    },
  };
}

function humanReviewFallback() {
  return [
    "A qualified workflow owner reviews outputs before use.",
    "Client-facing messages, financial recommendations, tax matters, approvals, and system changes stay human-approved.",
    "Sensitive data handling is reviewed before the workflow is piloted.",
  ];
}

export function buildMockSuggestion(
  input: WorkflowSuggestionRequest,
  fallbackReason = "The live preview is temporarily using a sample result.",
): WorkflowSuggestionResponse {
  const role = input.role.trim();
  const followUp = input.followUp?.trim() ?? "";
  const details = input.details?.trim() ?? "";

  let eliminated: EliminatedRecommendation[] = [];
  let retained: WorkflowRecommendation[] = [];
  let excludedIds = new Set<string>();
  let retainedCategories = new Set<string | undefined>();

  if (followUp && input.currentState) {
    const update = applyFollowUp(input.currentState, followUp);
    eliminated = update.eliminated;
    retained = update.retained;
    excludedIds = update.eliminatedIds;
    retainedCategories = update.retainedCategories;
  }

  const candidates = rankTasks(role, details || followUp, excludedIds).filter((task) => {
    if (retained.some((recommendation) => recommendation.id === task.id)) {
      return false;
    }

    if (retainedCategories.has(task.category) && retained.length >= 3) {
      return false;
    }

    return true;
  });

  const additions = candidates
    .slice(0, Math.max(0, 5 - retained.length))
    .map((task) => recommendationFromTask(task, role, input.companyType));

  const recommendations = [...retained, ...additions]
    .sort((a, b) => easeRank[b.automation_ease] - easeRank[a.automation_ease])
    .slice(0, 5);

  const response = buildPlan(role, recommendations, eliminated);
  response.latest_user_update_summary = fallbackReason;

  if (followUp) {
    response.latest_user_update_summary =
      "Updated from the follow-up. Items described as already handled were removed where they matched the active recommendations, and adjacent opportunities were kept.";
  }

  return response;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isRecommendation(value: unknown): value is WorkflowRecommendation {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<WorkflowRecommendation>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.workflow_name === "string" &&
    typeof candidate.task === "string" &&
    (candidate.automation_ease === "High" ||
      candidate.automation_ease === "Medium" ||
      candidate.automation_ease === "Low") &&
    typeof candidate.business_value === "string" &&
    typeof candidate.why_it_fits === "string" &&
    typeof candidate.safe_ai_or_automation_approach === "string" &&
    isStringArray(candidate.human_review_points) &&
    isStringArray(candidate.success_metrics)
  );
}

function isEliminatedRecommendation(value: unknown): value is EliminatedRecommendation {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<EliminatedRecommendation>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.workflow_name === "string" &&
    typeof candidate.reason_removed === "string"
  );
}

function isPilotWeek(value: unknown): value is WorkflowSuggestionResponse["suggestion_plan"]["suggested_30_day_pilot"][number] {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<WorkflowSuggestionResponse["suggestion_plan"]["suggested_30_day_pilot"][number]>;

  return typeof candidate.week === "number" && typeof candidate.focus === "string";
}

export function isWorkflowSuggestionResponse(value: unknown): value is WorkflowSuggestionResponse {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<WorkflowSuggestionResponse>;
  const plan = candidate.suggestion_plan;
  const topRecommendation = candidate.top_recommendation;
  const contactCta = plan?.contact_asmar_partners;

  return (
    typeof candidate.role_interpretation === "string" &&
    typeof candidate.latest_user_update_summary === "string" &&
    Array.isArray(candidate.active_recommendations) &&
    candidate.active_recommendations.every(isRecommendation) &&
    Array.isArray(candidate.eliminated_recommendations) &&
    candidate.eliminated_recommendations.every(isEliminatedRecommendation) &&
    Boolean(topRecommendation) &&
    typeof topRecommendation?.workflow_name === "string" &&
    typeof topRecommendation?.why_this_should_be_first === "string" &&
    typeof topRecommendation?.first_pilot_step === "string" &&
    Boolean(plan) &&
    typeof plan?.title === "string" &&
    typeof plan.recommended_first_workflow === "string" &&
    typeof plan.why_this_workflow_fits === "string" &&
    isStringArray(plan.what_can_be_ai_assisted) &&
    isStringArray(plan.what_requires_human_review) &&
    isStringArray(plan.what_not_to_automate_yet) &&
    Array.isArray(plan.suggested_30_day_pilot) &&
    plan.suggested_30_day_pilot.every(isPilotWeek) &&
    isStringArray(plan.success_metrics) &&
    Boolean(contactCta) &&
    typeof contactCta?.headline === "string" &&
    typeof contactCta?.body === "string" &&
    typeof contactCta?.button_text === "string"
  );
}

export function isWorkflowSuggestionDraft(value: unknown): value is WorkflowSuggestionDraft {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<WorkflowSuggestionDraft>;

  return (
    typeof candidate.role_interpretation === "string" &&
    typeof candidate.latest_user_update_summary === "string" &&
    Array.isArray(candidate.active_recommendations) &&
    candidate.active_recommendations.length > 0 &&
    candidate.active_recommendations.every(isRecommendation) &&
    Array.isArray(candidate.eliminated_recommendations) &&
    candidate.eliminated_recommendations.every(isEliminatedRecommendation)
  );
}

export function buildSuggestionFromProviderDraft(
  input: WorkflowSuggestionRequest,
  draft: WorkflowSuggestionDraft,
): WorkflowSuggestionResponse {
  const response = buildPlan(
    input.role,
    draft.active_recommendations.slice(0, 5),
    draft.eliminated_recommendations,
  );

  response.role_interpretation = draft.role_interpretation;
  response.latest_user_update_summary = draft.latest_user_update_summary;

  return normalizeProviderResponse(response);
}

export function normalizeProviderResponse(response: WorkflowSuggestionResponse): WorkflowSuggestionResponse {
  return {
    ...response,
    suggestion_plan: {
      ...response.suggestion_plan,
      title: "Your AI Workflow Suggestion Plan",
      contact_asmar_partners: {
        headline: "Want this mapped to your actual workflow?",
        body: ctaBody,
        button_text: "Schedule an AI Risk & Opportunity Review",
      },
      what_not_to_automate_yet:
        response.suggestion_plan.what_not_to_automate_yet?.length > 0
          ? response.suggestion_plan.what_not_to_automate_yet
          : defaultUnsafeBoundaries,
    },
  };
}
