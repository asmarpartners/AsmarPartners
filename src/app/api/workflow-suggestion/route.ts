import { NextResponse } from "next/server";

import { validateWorkflowRequest } from "@/lib/safety";
import { workflowTasks } from "@/lib/workflow-library";
import {
  buildMockSuggestion,
  buildSuggestionFromProviderDraft,
  isWorkflowSuggestionDraft,
} from "@/lib/workflow-suggestions";
import type {
  WorkflowRecommendation,
  WorkflowSuggestionApiResponse,
  WorkflowSuggestionRequest,
  WorkflowSuggestionResponse,
} from "@/lib/workflow-types";

const GROQ_CHAT_COMPLETIONS_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_PROVIDER = "groq";
const DEFAULT_PRIMARY_MODEL = "openai/gpt-oss-20b";
const DEFAULT_FALLBACK_MODEL_1 = "openai/gpt-oss-120b";
const DEFAULT_FALLBACK_MODEL_2 = "meta-llama/llama-4-scout-17b-16e-instruct";
const GROQ_TIMEOUT_MS = 20_000;
const GROQ_RATE_LIMIT_COOLDOWN_MS = 60_000;
const GROQ_TEMPORARY_ERROR_COOLDOWN_MS = 15_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type ModelCooldown = {
  resetAt: number;
};

type ProviderErrorType =
  | "missing_config"
  | "rate_limit"
  | "timeout"
  | "temporary_provider_error"
  | "provider_error"
  | "auth_error"
  | "invalid_json"
  | "invalid_response";

type ProviderAttemptError = Error & {
  provider: "groq";
  model: string;
  statusCode: number | null;
  errorType: ProviderErrorType;
};

type JsonSchema = {
  type?: string | string[];
  enum?: string[];
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  required?: string[];
  additionalProperties?: false;
};

type GroqChatCompletionResponse = {
  choices?: {
    message?: {
      content?: string | null;
    };
  }[];
};

declare global {
  var workflowSuggestionRateLimit: Map<string, RateLimitBucket> | undefined;
  var workflowSuggestionModelCooldowns: Map<string, ModelCooldown> | undefined;
}

const systemInstruction = `You are the Asmar Partners Internal Workflow Recommender.

You help professional-services firms identify internal business workflows that may benefit from safe AI adoption or simple automation.

You are not designing customer-facing chatbots.

Your job:
- Interpret the user's role.
- Review the role-based task library.
- Consider optional pain points.
- Identify tasks that are monotonous, repetitive, rules-based, text-heavy, checklist-based, or easy to standardize.
- Rank workflow opportunities from most automatable to least automatable.
- If the user provides no pain points, return the most relevant common tasks for that role.
- If the user gives a new pain point not in the library, reason about it and create a safe workflow recommendation.
- If the user says or implies something is already automated or already handled, remove it and close duplicates from the active recommendation list.
- Do not remove adjacent workflow opportunities unless the user clearly implies those are also solved.
- Prefer internal workflows over customer-facing tools.
- Prefer safe, simple workflows before integrations or custom software.
- Always include human review points.
- Always include data handling cautions.
- Never recommend uploading sensitive client financial records, tax records, payroll records, credentials, bank statements, or regulated data into public AI tools.
- Do not provide legal, tax, compliance certification, investment, or security audit advice.
- Do not recommend incident response, automatic client communication without human review, automatic accounting record changes, automatic access approval, or guaranteed ROI claims.
- Return valid JSON only.`;

const stringArraySchema: JsonSchema = {
  type: "array",
  items: { type: "string" },
};

const recommendationSchema: JsonSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    workflow_name: { type: "string" },
    task: { type: "string" },
    automation_ease: { type: "string", enum: ["High", "Medium", "Low"] },
    business_value: { type: "string" },
    why_it_fits: { type: "string" },
    safe_ai_or_automation_approach: { type: "string" },
    human_review_points: stringArraySchema,
    success_metrics: stringArraySchema,
  },
  required: [
    "id",
    "workflow_name",
    "task",
    "automation_ease",
    "business_value",
    "why_it_fits",
    "safe_ai_or_automation_approach",
    "human_review_points",
    "success_metrics",
  ],
  additionalProperties: false,
};

const eliminatedRecommendationSchema: JsonSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    workflow_name: { type: "string" },
    reason_removed: { type: "string" },
  },
  required: ["id", "workflow_name", "reason_removed"],
  additionalProperties: false,
};

const workflowSuggestionDraftSchema: JsonSchema = {
  type: "object",
  properties: {
    role_interpretation: { type: "string" },
    latest_user_update_summary: { type: "string" },
    active_recommendations: {
      type: "array",
      items: recommendationSchema,
    },
    eliminated_recommendations: {
      type: "array",
      items: eliminatedRecommendationSchema,
    },
  },
  required: [
    "role_interpretation",
    "latest_user_update_summary",
    "active_recommendations",
    "eliminated_recommendations",
  ],
  additionalProperties: false,
};

function conciseTaskLibrary() {
  return workflowTasks.map((task) => ({
    id: task.id,
    role: task.role,
    task: task.task,
    workflowName: task.workflowName,
    automationEase: task.automationEase,
    category: task.category,
    whyAutomatable: task.whyAutomatable,
    safeApproach: task.safeApproach,
    humanReviewNeeded: task.humanReviewNeeded.slice(0, 2),
    notRecommendedToAutomateFully: task.notRecommendedToAutomateFully.slice(0, 2),
    successMetrics: task.successMetrics.slice(0, 3),
  }));
}

function conciseRecommendation(recommendation: WorkflowRecommendation) {
  return {
    id: recommendation.id,
    workflow_name: recommendation.workflow_name,
    task: recommendation.task,
    automation_ease: recommendation.automation_ease,
    business_value: recommendation.business_value,
    why_it_fits: recommendation.why_it_fits,
    safe_ai_or_automation_approach: recommendation.safe_ai_or_automation_approach,
    human_review_points: recommendation.human_review_points.slice(0, 2),
    success_metrics: recommendation.success_metrics.slice(0, 3),
  };
}

function compactCurrentState(state: WorkflowSuggestionResponse | null | undefined) {
  if (!state) {
    return null;
  }

  return {
    role_interpretation: state.role_interpretation,
    latest_user_update_summary: state.latest_user_update_summary,
    active_recommendations: state.active_recommendations.slice(0, 5).map(conciseRecommendation),
    eliminated_recommendations: state.eliminated_recommendations.slice(0, 8),
  };
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function roleLooksRelevant(inputRole: string, taskRole: string) {
  const role = normalizeText(inputRole);
  const libraryRole = normalizeText(taskRole);

  return role === libraryRole || role.includes(libraryRole) || libraryRole.includes(role);
}

function relevantTaskLibrary(input: WorkflowSuggestionRequest) {
  const roleMatches = conciseTaskLibrary().filter((task) => roleLooksRelevant(input.role, task.role));

  if (roleMatches.length > 0) {
    const highAndMediumRoleMatches = roleMatches.filter((task) => task.automationEase !== "Low");
    return (highAndMediumRoleMatches.length > 0 ? highAndMediumRoleMatches : roleMatches).slice(0, 8);
  }

  return conciseTaskLibrary()
    .filter((task) => task.automationEase !== "Low")
    .slice(0, 12);
}

const jsonObjectModeShapeInstruction = `Return one compact JSON object with:
- role_interpretation: string
- latest_user_update_summary: string
- active_recommendations: array of objects with id, workflow_name, task, automation_ease, business_value, why_it_fits, safe_ai_or_automation_approach, human_review_points, success_metrics
- eliminated_recommendations: array of objects with id, workflow_name, reason_removed

Return 2 to 5 active recommendations.
Use short, practical strings.
The server will build the final suggestion plan and CTA from this draft.`;

function buildProviderInput(input: WorkflowSuggestionRequest) {
  return JSON.stringify(
    {
      user_input: {
        role: input.role,
        companyType: input.companyType ?? "",
        painPoints: input.details ?? "",
        followUp: input.followUp ?? "",
      },
      current_recommendation_state: compactCurrentState(input.currentState),
      role_task_library: relevantTaskLibrary(input),
      important_boundaries: [
        "This is a limited website preview, not a complete assessment.",
        "Use general examples only and do not request sensitive data.",
        "Recommend client-owned, approved business environments for real pilots.",
        "Keep human review for client-facing communication, business decisions, system changes, approvals, accounting changes, tax matters, legal matters, compliance matters, financial recommendations, and security decisions.",
        "Do not make guaranteed ROI claims; suggest measurable pilot metrics instead.",
      ],
    },
    null,
    2,
  );
}

function providerAttemptError(
  model: string,
  errorType: ProviderErrorType,
  statusCode: number | null,
  message: string,
): ProviderAttemptError {
  const error = new Error(message) as ProviderAttemptError;
  error.provider = "groq";
  error.model = model;
  error.statusCode = statusCode;
  error.errorType = errorType;
  return error;
}

function classifyStatus(status: number): ProviderErrorType {
  if (status === 429) {
    return "rate_limit";
  }

  if (status >= 500) {
    return "temporary_provider_error";
  }

  if (status === 401 || status === 403) {
    return "auth_error";
  }

  return "provider_error";
}

function isRetryableProviderError(error: ProviderAttemptError) {
  return (
    error.errorType === "rate_limit" ||
    error.errorType === "timeout" ||
    error.errorType === "temporary_provider_error" ||
    error.errorType === "invalid_json" ||
    error.errorType === "invalid_response"
  );
}

function logProviderError(error: ProviderAttemptError) {
  console.warn("Workflow suggestion provider failure", {
    provider: error.provider,
    model: error.model,
    statusCode: error.statusCode,
    errorType: error.errorType,
  });
}

function getModelCooldownStore() {
  globalThis.workflowSuggestionModelCooldowns ??= new Map<string, ModelCooldown>();
  return globalThis.workflowSuggestionModelCooldowns;
}

function cooldownKey(model: string) {
  return `groq:${model}`;
}

function isModelCoolingDown(model: string) {
  const cooldown = getModelCooldownStore().get(cooldownKey(model));
  return Boolean(cooldown && cooldown.resetAt > Date.now());
}

function markModelCooldown(error: ProviderAttemptError) {
  const cooldownMs =
    error.errorType === "rate_limit"
      ? GROQ_RATE_LIMIT_COOLDOWN_MS
      : error.errorType === "timeout" || error.errorType === "temporary_provider_error"
        ? GROQ_TEMPORARY_ERROR_COOLDOWN_MS
        : 0;

  if (cooldownMs > 0) {
    getModelCooldownStore().set(cooldownKey(error.model), {
      resetAt: Date.now() + cooldownMs,
    });
  }
}

function isStrictSchemaModel(model: string) {
  return model === DEFAULT_PRIMARY_MODEL || model === DEFAULT_FALLBACK_MODEL_1;
}

function groqResponseFormat(model: string) {
  if (!isStrictSchemaModel(model)) {
    return {
      type: "json_object",
    };
  }

  return {
    type: "json_schema",
    json_schema: {
      name: "workflow_suggestion_draft",
      strict: true,
      schema: workflowSuggestionDraftSchema,
    },
  };
}

function userPromptForModel(model: string, input: WorkflowSuggestionRequest) {
  const shapeInstruction = isStrictSchemaModel(model)
    ? "The response_format schema is strict. Return exactly one JSON object matching it."
    : jsonObjectModeShapeInstruction;

  return `${shapeInstruction}

Do not include markdown fences or explanatory text.

${buildProviderInput(input)}`;
}

function extractGroqText(data: GroqChatCompletionResponse) {
  return data.choices?.[0]?.message?.content ?? "";
}

function parseJsonFromText(model: string, text: string) {
  const trimmed = text.trim();
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const firstBrace = withoutFence.indexOf("{");
  const lastBrace = withoutFence.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw providerAttemptError(model, "invalid_json", null, "Groq response did not include a JSON object.");
  }

  try {
    return JSON.parse(withoutFence.slice(firstBrace, lastBrace + 1)) as unknown;
  } catch {
    throw providerAttemptError(model, "invalid_json", null, "Groq response was not valid JSON.");
  }
}

async function callGroqModel(model: string, input: WorkflowSuggestionRequest) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw providerAttemptError(model, "missing_config", null, "GROQ_API_KEY is not configured.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GROQ_TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch(GROQ_CHAT_COMPLETIONS_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: systemInstruction,
          },
          {
            role: "user",
            content: userPromptForModel(model, input),
          },
        ],
        response_format: groqResponseFormat(model),
      }),
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw providerAttemptError(model, "timeout", null, "Groq request timed out.");
    }

    throw providerAttemptError(model, "temporary_provider_error", null, "Groq request failed before receiving a response.");
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw providerAttemptError(
      model,
      classifyStatus(response.status),
      response.status,
      `Groq request failed with status ${response.status}.`,
    );
  }

  const data = (await response.json()) as GroqChatCompletionResponse;
  const text = extractGroqText(data);
  const parsed = parseJsonFromText(model, text);

  if (!isWorkflowSuggestionDraft(parsed)) {
    throw providerAttemptError(model, "invalid_response", null, "Groq response did not match the required workflow suggestion draft shape.");
  }

  return buildSuggestionFromProviderDraft(input, parsed);
}

function groqModels() {
  return [
    process.env.GROQ_PRIMARY_MODEL?.trim() || DEFAULT_PRIMARY_MODEL,
    process.env.GROQ_FALLBACK_MODEL_1?.trim() || DEFAULT_FALLBACK_MODEL_1,
    process.env.GROQ_FALLBACK_MODEL_2?.trim() || DEFAULT_FALLBACK_MODEL_2,
  ];
}

async function callGroq(input: WorkflowSuggestionRequest) {
  const provider = process.env.LLM_PROVIDER?.trim().toLowerCase() || DEFAULT_PROVIDER;
  const models = groqModels();

  if (provider !== "groq") {
    throw providerAttemptError(models[0], "missing_config", null, "LLM_PROVIDER must be set to groq.");
  }

  let lastError: ProviderAttemptError | null = null;

  for (let index = 0; index < models.length; index += 1) {
    const model = models[index];

    if (index < models.length - 1 && isModelCoolingDown(model)) {
      continue;
    }

    try {
      return await callGroqModel(model, input);
    } catch (error) {
      const attemptError =
        error instanceof Error && "errorType" in error
          ? (error as ProviderAttemptError)
          : providerAttemptError(model, "provider_error", null, "Groq model attempt failed.");

      logProviderError(attemptError);
      markModelCooldown(attemptError);
      lastError = attemptError;

      const shouldTryNextModel =
        attemptError.errorType !== "missing_config" &&
        attemptError.errorType !== "auth_error" &&
        (index < models.length - 1 || isRetryableProviderError(attemptError));

      if (!shouldTryNextModel) {
        break;
      }
    }
  }

  throw lastError ?? providerAttemptError(models[0], "provider_error", null, "All Groq model attempts failed.");
}

function getRateLimitStore() {
  globalThis.workflowSuggestionRateLimit ??= new Map<string, RateLimitBucket>();
  return globalThis.workflowSuggestionRateLimit;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "local"
  );
}

function checkRateLimit(request: Request) {
  const store = getRateLimitStore();
  const ip = getClientIp(request);
  const now = Date.now();
  const current = store.get(ip);

  if (!current || current.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((current.resetAt - now) / 1000);

    return NextResponse.json(
      { error: "Too many workflow preview requests. Please wait a minute and try again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSeconds),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(current.resetAt / 1000)),
        },
      },
    );
  }

  current.count += 1;
  store.set(ip, current);
  return null;
}

function apiResponse(
  result: WorkflowSuggestionResponse,
  source: WorkflowSuggestionApiResponse["source"],
  fallbackReason?: string,
) {
  return NextResponse.json({ result, source, fallbackReason } satisfies WorkflowSuggestionApiResponse);
}

export async function POST(request: Request) {
  const rateLimitResponse = checkRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let input: WorkflowSuggestionRequest;

  try {
    input = (await request.json()) as WorkflowSuggestionRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validation = validateWorkflowRequest(input);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.message, fields: validation.fields ?? [] }, { status: 400 });
  }

  const normalizedInput: WorkflowSuggestionRequest = {
    role: input.role.trim(),
    companyType: input.companyType?.trim() ?? "",
    details: input.details?.trim() ?? "",
    followUp: input.followUp?.trim() ?? "",
    currentState: input.currentState ?? null,
  };

  try {
    const result = await callGroq(normalizedInput);
    return apiResponse(result, "groq");
  } catch (error) {
    const fallbackReason =
      error instanceof Error && "errorType" in error
        ? "The live preview is temporarily using a sample result."
        : "The live preview is temporarily using a sample result.";

    return apiResponse(buildMockSuggestion(normalizedInput, fallbackReason), "mock", fallbackReason);
  }
}
