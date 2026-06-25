export type AutomationEase = "High" | "Medium" | "Low";

export type RoleTask = {
  id: string;
  role: string;
  task: string;
  workflowName: string;
  automationEase: AutomationEase;
  category: string;
  whyAutomatable: string;
  safeApproach: string;
  humanReviewNeeded: string[];
  notRecommendedToAutomateFully: string[];
  successMetrics: string[];
};

export type WorkflowRecommendation = {
  id: string;
  workflow_name: string;
  task: string;
  automation_ease: AutomationEase;
  business_value: string;
  why_it_fits: string;
  safe_ai_or_automation_approach: string;
  human_review_points: string[];
  success_metrics: string[];
};

export type EliminatedRecommendation = {
  id: string;
  workflow_name: string;
  reason_removed: string;
};

export type SuggestionPlan = {
  title: "Your AI Workflow Suggestion Plan";
  recommended_first_workflow: string;
  why_this_workflow_fits: string;
  what_can_be_ai_assisted: string[];
  what_requires_human_review: string[];
  what_not_to_automate_yet: string[];
  suggested_30_day_pilot: {
    week: number;
    focus: string;
  }[];
  success_metrics: string[];
  contact_asmar_partners: {
    headline: "Want this mapped to your actual workflow?";
    body: "This preview is based on limited information. Asmar Partners can help identify the safest first AI workflow, define governance guardrails, build a controlled prototype, and measure results during a 30-day pilot.";
    button_text: "Schedule an AI Risk & Opportunity Review";
  };
};

export type WorkflowSuggestionResponse = {
  role_interpretation: string;
  latest_user_update_summary: string;
  active_recommendations: WorkflowRecommendation[];
  eliminated_recommendations: EliminatedRecommendation[];
  top_recommendation: {
    workflow_name: string;
    why_this_should_be_first: string;
    first_pilot_step: string;
  };
  suggestion_plan: SuggestionPlan;
};

export type WorkflowSuggestionDraft = Pick<
  WorkflowSuggestionResponse,
  "role_interpretation" | "latest_user_update_summary" | "active_recommendations" | "eliminated_recommendations"
>;

export type WorkflowSuggestionApiResponse = {
  source: "groq" | "mock";
  fallbackReason?: string;
  result: WorkflowSuggestionResponse;
};

export type WorkflowSuggestionRequest = {
  role: string;
  companyType?: string;
  details?: string;
  followUp?: string;
  currentState?: WorkflowSuggestionResponse | null;
};
