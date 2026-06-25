"use client";

import { FormEvent, useMemo, useState } from "react";

import type {
  WorkflowSuggestionApiResponse,
  WorkflowSuggestionResponse,
} from "@/lib/workflow-types";

type FieldName = "role" | "companyType" | "details" | "followUp";

const fieldLimits: Record<FieldName, number> = {
  role: 80,
  companyType: 80,
  details: 1000,
  followUp: 700,
};

async function requestSuggestion(payload: {
  role: string;
  companyType: string;
  details: string;
  followUp?: string;
  currentState?: WorkflowSuggestionResponse | null;
}) {
  const response = await fetch("/api/workflow-suggestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | WorkflowSuggestionApiResponse
    | { error?: string }
    | null;

  if (!response.ok) {
    throw new Error(data && "error" in data && data.error ? data.error : "Unable to generate a workflow plan.");
  }

  if (!data || !("result" in data)) {
    throw new Error("The workflow suggestion response was incomplete.");
  }

  return data;
}

function CharacterCount({ value, max }: { value: string; max: number }) {
  return (
    <span className="text-xs text-[var(--muted)]">
      {value.length}/{max}
    </span>
  );
}

function PlanList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] py-5">
      <h4 className="text-sm font-semibold text-[var(--foreground)]">{title}</h4>
      {children}
    </section>
  );
}

function RecommendationRows({ result }: { result: WorkflowSuggestionResponse }) {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-between gap-2 border-b border-[var(--line)] pb-3 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Ranked workflow opportunities</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{result.role_interpretation}</p>
        </div>
        <p className="text-sm text-[var(--muted)]">{result.active_recommendations.length} active</p>
      </div>

      <div className="divide-y divide-[var(--line)]">
        {result.active_recommendations.map((recommendation, index) => (
          <article key={recommendation.id} className="grid gap-4 py-5 md:grid-cols-[0.25fr_1fr]">
            <div className="text-sm">
              <p className="font-semibold text-[var(--accent)]">#{index + 1}</p>
              <p className="mt-2 inline-flex rounded-md bg-[var(--accent-soft)] px-2 py-1 text-xs font-semibold text-[var(--accent)]">
                {recommendation.automation_ease} ease
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">{recommendation.workflow_name}</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{recommendation.business_value}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                <span className="font-semibold text-[var(--foreground)]">Safe approach: </span>
                {recommendation.safe_ai_or_automation_approach}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function EliminatedRows({ result }: { result: WorkflowSuggestionResponse }) {
  if (!result.eliminated_recommendations.length) {
    return null;
  }

  return (
    <div className="mt-4 border-t border-[var(--line)] pt-5">
      <h3 className="text-sm font-semibold text-[var(--foreground)]">Removed from active recommendations</h3>
      <div className="mt-3 divide-y divide-[var(--line)] text-sm">
        {result.eliminated_recommendations.map((item) => (
          <div key={`${item.id}-${item.reason_removed}`} className="py-3">
            <p className="font-medium text-[var(--foreground)]">{item.workflow_name}</p>
            <p className="mt-1 text-[var(--muted)]">{item.reason_removed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuggestionPlan({ result }: { result: WorkflowSuggestionResponse }) {
  const plan = result.suggestion_plan;

  return (
    <div className="mt-8 border border-[var(--line)] bg-white p-5 sm:p-6">
      <h3 className="text-2xl font-semibold text-[var(--foreground)]">{plan.title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{plan.why_this_workflow_fits}</p>

      <PlanSection title="Recommended first workflow">
        <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">{plan.recommended_first_workflow}</p>
      </PlanSection>

      <PlanSection title="Why this workflow fits the user’s role">
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{plan.why_this_workflow_fits}</p>
      </PlanSection>

      <PlanSection title="What could be safely AI-assisted or automated">
        <PlanList items={plan.what_can_be_ai_assisted} />
      </PlanSection>

      <PlanSection title="What should still require human review">
        <PlanList items={plan.what_requires_human_review} />
      </PlanSection>

      <PlanSection title="What should not be automated yet">
        <PlanList items={plan.what_not_to_automate_yet} />
      </PlanSection>

      <PlanSection title="Suggested 30-day pilot plan">
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {plan.suggested_30_day_pilot.map((week) => (
            <div key={week.week} className="border-l-2 border-[var(--accent)] pl-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">Week {week.week}</p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{week.focus}</p>
            </div>
          ))}
        </div>
      </PlanSection>

      <PlanSection title="Success metrics">
        <PlanList items={plan.success_metrics} />
      </PlanSection>

      <section className="border-t border-[var(--line)] pt-5">
        <h4 className="text-lg font-semibold text-[var(--foreground)]">
          {plan.contact_asmar_partners.headline}
        </h4>
        <p className="mt-3 leading-7 text-[var(--muted)]">{plan.contact_asmar_partners.body}</p>
        <a
          className="focus-ring mt-5 inline-flex rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
          href="mailto:contact@asmarpartners.com?subject=Schedule%20an%20AI%20Risk%20%26%20Opportunity%20Review"
        >
          {plan.contact_asmar_partners.button_text}
        </a>
      </section>
    </div>
  );
}

export function WorkflowSuggestionTool() {
  const [role, setRole] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [details, setDetails] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [apiData, setApiData] = useState<WorkflowSuggestionApiResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const canSubmit = useMemo(() => role.trim().length > 0 && !isLoading && !isUpdating, [role, isLoading, isUpdating]);
  const result = apiData?.result ?? null;

  async function handleInitialSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await requestSuggestion({
        role,
        companyType,
        details,
        currentState: null,
      });
      setApiData(data);
      setFollowUp("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to generate a workflow plan.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleFollowUpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!result || !followUp.trim()) {
      return;
    }

    setError("");
    setIsUpdating(true);

    try {
      const data = await requestSuggestion({
        role,
        companyType,
        details,
        followUp,
        currentState: result,
      });
      setApiData(data);
      setFollowUp("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to update the workflow plan.");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="mt-10 border border-[var(--line)] bg-[var(--background)]">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleInitialSubmit} className="border-b border-[var(--line)] p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Start with the workflow owner.</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Use general examples only. Do not enter client names, financial records, payroll data, tax records, credentials, or confidential information.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="role" className="text-sm font-semibold text-[var(--foreground)]">
                  Role / position at company
                </label>
                <CharacterCount value={role} max={fieldLimits.role} />
              </div>
              <input
                id="role"
                name="role"
                required
                maxLength={fieldLimits.role}
                value={role}
                onChange={(event) => setRole(event.target.value)}
                placeholder="Operations Manager"
                className="focus-ring w-full rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--foreground)] outline-none"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="companyType" className="text-sm font-semibold text-[var(--foreground)]">
                  Company type
                </label>
                <CharacterCount value={companyType} max={fieldLimits.companyType} />
              </div>
              <input
                id="companyType"
                name="companyType"
                maxLength={fieldLimits.companyType}
                value={companyType}
                onChange={(event) => setCompanyType(event.target.value)}
                placeholder="Accounting firm"
                className="focus-ring w-full rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--foreground)] outline-none"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="details" className="text-sm font-semibold text-[var(--foreground)]">
                  Monotonous tasks / pain points
                </label>
                <CharacterCount value={details} max={fieldLimits.details} />
              </div>
              <textarea
                id="details"
                name="details"
                maxLength={fieldLimits.details}
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="I spend too much time asking people for project updates and turning messy notes into action items."
                rows={6}
                className="focus-ring w-full resize-y rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--foreground)] outline-none"
              />
            </div>

            {error ? (
              <div role="alert" className="border-l-4 border-[var(--warning)] bg-white px-4 py-3 text-sm text-[var(--warning)]">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!canSubmit}
              className="focus-ring w-full rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Preparing workflow suggestion..." : "Generate Workflow Suggestion Plan"}
            </button>
          </div>
        </form>

        <div className="min-h-[460px] p-5 sm:p-6" aria-live="polite">
          {!result ? (
            <div className="flex h-full min-h-[420px] flex-col justify-center border border-dashed border-[var(--line)] bg-white p-6">
              <p className="text-lg font-semibold text-[var(--foreground)]">Workflow plan preview</p>
              <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">
                The result will rank internal workflow opportunities, identify a recommended first workflow, and show what should stay under human review.
              </p>
              <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                This preview is not legal, tax, compliance, security audit, or incident response advice.
              </p>
            </div>
          ) : (
            <div>
              {apiData?.source === "mock" ? (
                <div className="mb-5 border-l-4 border-[var(--accent)] bg-white px-4 py-3 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--foreground)]">Sample preview mode.</span>{" "}
                  The live preview is temporarily using a sample result.
                </div>
              ) : null}

              <RecommendationRows result={result} />
              <EliminatedRows result={result} />

              <form onSubmit={handleFollowUpSubmit} className="mt-8 border-t border-[var(--line)] pt-6">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor="followUp" className="text-sm font-semibold text-[var(--foreground)]">
                    Refine recommendations
                  </label>
                  <CharacterCount value={followUp} max={fieldLimits.followUp} />
                </div>
                <textarea
                  id="followUp"
                  name="followUp"
                  maxLength={fieldLimits.followUp}
                  value={followUp}
                  onChange={(event) => setFollowUp(event.target.value)}
                  placeholder="We already automated project reminders in our CRM."
                  rows={3}
                  className="focus-ring w-full resize-y rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--foreground)] outline-none"
                />
                <button
                  type="submit"
                  disabled={!followUp.trim() || isUpdating || isLoading}
                  className="focus-ring mt-3 rounded-md border border-[var(--accent)] bg-white px-4 py-2 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isUpdating ? "Updating suggestions..." : "Update Suggestions"}
                </button>
              </form>

              <SuggestionPlan result={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
