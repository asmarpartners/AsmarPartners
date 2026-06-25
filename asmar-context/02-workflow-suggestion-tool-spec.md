# Workflow Suggestion Tool Specification

## Purpose

Build an interactive website tool called:

```text
AI Workflow Suggestion Preview
```

The tool helps a visitor identify internal business workflows that may be good candidates for safe AI assistance or simple automation.

This is not a chatbot. The UI should not look like a chat window. It should feel like a guided internal workflow assessment.

## User Experience Goal

The user should enter:

1. Their role or position at the company
2. Optional company type
3. Optional monotonous tasks or pain points

The tool returns:

- Ranked workflow opportunities
- A recommended first workflow
- Safety and human-review guidance
- A 30-day pilot plan
- Success metrics
- A CTA to contact Asmar Partners

The user should also be able to follow up and say that a recommended item is already automated, already handled, or not relevant. The tool should update the list and suggest different options.

## Inputs

### Required Input

```text
Role / position at company
```

Examples:

- Operations Manager
- Practice Manager
- Client Services Manager
- Managing Partner
- Bookkeeper
- Tax Manager
- Fractional CFO
- Office Manager
- IT Manager

### Optional Input

```text
Company type
```

Examples:

- Accounting firm
- Bookkeeping firm
- Fractional CFO firm
- Professional-services firm
- Consulting firm
- Law firm
- MSP
- Other

### Optional Input

```text
Monotonous tasks / pain points
```

Examples:

- I spend too much time asking staff for status updates.
- We constantly chase clients for missing documents.
- I turn messy meeting notes into action items every week.
- We have repetitive onboarding checklists.
- Staff ask the same internal process questions repeatedly.

### Follow-Up Input

After the first result, allow the user to provide an update such as:

- We already automated missing document reminders.
- Our CRM already handles project reminders.
- We already have templates for that.
- That is handled in QuickBooks.
- We do not want to automate client emails.
- Status updates are still manual.

The current recommendation state should be sent back to the API with the follow-up.

## Behavior Rules

### Initial Submission

If the user provides a role but no pain points:

- Return common internal workflow opportunities for that role.
- Rank from most automatable to least automatable.
- Prefer high-impact, low-risk workflows first.

If the user provides pain points:

- Compare the pain points against the role task library.
- Identify matching workflow opportunities.
- If the pain point is not in the library, reason about it and create a new workflow recommendation.
- Rank opportunities from most automatable to least automatable.

### Follow-Up Behavior

If the user says or implies that something is already automated, already handled, already templated, or not relevant:

- Remove that task from active recommendations.
- Remove close duplicates and near-equivalent recommendations.
- Do not remove adjacent tasks unless the user clearly implies they are also solved.
- Add the removed items to `eliminated_recommendations` with a clear reason.
- Rerank the remaining active recommendations.
- Provide a new top recommendation if needed.

Example:

User says:

```text
We already automated document reminders through our portal.
```

Remove:

- Missing document reminders
- Client document follow-up reminders
- Chasing missing client documents

Do not automatically remove:

- Intake checklist standardization
- Internal document completeness review
- Staff handoff notes

## Role and Task Library

Build a simple static role-task library in code. Keep it easy to edit.

Recommended fields:

```ts
role
id
task
workflowName
automationEase: "High" | "Medium" | "Low"
category
whyAutomatable
safeApproach
humanReviewNeeded
notRecommendedToAutomateFully
successMetrics
```

## Roles and Tasks

### Owner / Managing Partner

High automation ease:

- Reviewing and prioritizing internal AI use-case ideas
- Drafting internal updates or firm announcements
- Summarizing operational bottlenecks from team notes

Medium automation ease:

- Preparing service improvement plans
- Reviewing client service trends
- Comparing software or vendor options

Low automation ease:

- Making staffing decisions
- Final pricing decisions
- Formal legal, tax, or compliance determinations

### Operations Manager / Practice Manager

High automation ease:

- Creating weekly internal status summaries
- Turning messy process notes into SOP drafts
- Building recurring task checklists
- Preparing meeting follow-up summaries

Medium automation ease:

- Prioritizing team bottlenecks
- Standardizing client onboarding workflows
- Preparing internal handoff notes

Low automation ease:

- Automatically changing project records across systems
- Making approval decisions without manager review
- Complex cross-system workflow automation

### Client Services Manager

High automation ease:

- Summarizing client requests for internal review
- Drafting client follow-up messages for human review
- Creating missing-information checklists
- Preparing client status update drafts

Medium automation ease:

- Identifying possible scope creep
- Routing client requests to the right internal owner
- Creating service quality review notes

Low automation ease:

- Sending client emails automatically
- Making client commitments automatically
- Handling sensitive client data in public AI tools

### Bookkeeper

High automation ease:

- Creating document request checklists
- Summarizing bookkeeping cleanup notes
- Drafting clarification questions for clients
- Turning transaction review notes into internal summaries

Medium automation ease:

- Preparing month-end close checklists
- Explaining bookkeeping issues in plain English
- Creating internal review notes for manager approval

Low automation ease:

- Reconciling transactions automatically
- Changing accounting records automatically
- Reviewing live bank statements or payroll data in public AI tools

### Tax Manager / Tax Admin

High automation ease:

- Preparing tax-prep intake checklists
- Drafting missing-document reminders
- Summarizing client-provided notes for internal review
- Creating staff review checklists

Medium automation ease:

- Organizing tax season workload notes
- Preparing client-safe explanation drafts
- Creating internal deadline reminders

Low automation ease:

- Answering tax advice questions
- Reviewing actual tax returns
- Making filing decisions
- Processing sensitive tax documents in public AI tools

### Fractional CFO / Advisory Lead

High automation ease:

- Turning meeting notes into action items
- Drafting advisory follow-up emails for review
- Creating client question lists before meetings
- Summarizing owner conversations into internal briefs

Medium automation ease:

- Summarizing monthly business themes
- Preparing board-style commentary drafts
- Organizing client advisory priorities

Low automation ease:

- Forecasting without validated financial data
- Making financial recommendations without human review
- Producing final board reports automatically

### Administrative / Office Manager

High automation ease:

- Scheduling follow-up reminders
- Creating intake checklists
- Drafting internal announcements
- Organizing meeting notes into task lists

Medium automation ease:

- Routing internal requests
- Preparing onboarding packets
- Maintaining recurring process checklists

Low automation ease:

- Approving access requests automatically
- Handling HR or payroll-sensitive records in public AI tools
- Making policy decisions

### Sales / Business Development

High automation ease:

- Summarizing prospect notes
- Drafting follow-up emails for review
- Creating discovery call prep notes
- Turning call notes into next-step summaries

Medium automation ease:

- Prioritizing leads based on fit
- Drafting proposal outlines
- Creating objection-handling notes

Low automation ease:

- Sending proposals automatically
- Making pricing commitments
- Claiming guaranteed ROI

### HR / People Operations

High automation ease:

- Drafting onboarding checklists
- Summarizing training feedback
- Creating internal FAQ drafts
- Drafting policy reminder messages

Medium automation ease:

- Organizing performance review notes
- Creating training plans
- Summarizing employee questions

Low automation ease:

- Making employment decisions
- Handling sensitive employee records in public AI tools
- Producing final HR policy without review

### IT / Security / Systems Admin

High automation ease:

- Summarizing support tickets
- Creating internal troubleshooting checklists
- Drafting access review reminders
- Creating software rollout notes

Medium automation ease:

- Prioritizing recurring support issues
- Reviewing AI tool requests
- Creating internal security awareness reminders

Low automation ease:

- Auto-approving access
- Changing permissions automatically
- Handling credentials or secrets
- Making incident response decisions

## Gemini Instruction

Use this as the core server-side instruction:

```text
You are the Asmar Partners Internal Workflow Recommender.

You help professional-services firms identify internal business workflows that may benefit from safe AI adoption or simple automation.

You are not designing customer-facing chatbots.

Your job:
- Interpret the user’s role.
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
- Return valid JSON only.
```

## Expected JSON Shape

Use this shape or something very close:

```json
{
  "role_interpretation": "string",
  "latest_user_update_summary": "string",
  "active_recommendations": [
    {
      "id": "string",
      "workflow_name": "string",
      "task": "string",
      "automation_ease": "High | Medium | Low",
      "business_value": "string",
      "why_it_fits": "string",
      "safe_ai_or_automation_approach": "string",
      "human_review_points": ["string"],
      "success_metrics": ["string"]
    }
  ],
  "eliminated_recommendations": [
    {
      "id": "string",
      "workflow_name": "string",
      "reason_removed": "string"
    }
  ],
  "top_recommendation": {
    "workflow_name": "string",
    "why_this_should_be_first": "string",
    "first_pilot_step": "string"
  },
  "suggestion_plan": {
    "title": "Your AI Workflow Suggestion Plan",
    "recommended_first_workflow": "string",
    "why_this_workflow_fits": "string",
    "what_can_be_ai_assisted": ["string"],
    "what_requires_human_review": ["string"],
    "what_not_to_automate_yet": ["string"],
    "suggested_30_day_pilot": [
      {
        "week": 1,
        "focus": "string"
      },
      {
        "week": 2,
        "focus": "string"
      },
      {
        "week": 3,
        "focus": "string"
      },
      {
        "week": 4,
        "focus": "string"
      }
    ],
    "success_metrics": ["string"],
    "contact_asmar_partners": {
      "headline": "Want this mapped to your actual workflow?",
      "body": "This preview is based on limited information. Asmar Partners can help identify the safest first AI workflow, define governance guardrails, build a controlled prototype, and measure results during a 30-day pilot.",
      "button_text": "Schedule an AI Risk & Opportunity Review"
    }
  }
}
```

## UI Requirements

The workflow tool should include:

- Required role input
- Optional company type input
- Optional pain points textarea
- Submit button: Generate Workflow Suggestion Plan
- Result state
- Follow-up input after first result
- Follow-up button: Update Suggestions
- Final CTA button

Do not use a chat-window layout.

## Safety Helper Text

Place this near the form:

```text
Use general examples only. Do not enter client names, financial records, payroll data, tax records, credentials, or confidential information.
```

## Validation Requirements

Validate input before sending to Gemini:

- Role is required
- Role max length: about 80 characters
- Details max length: about 1000 characters
- Follow-up max length: about 700 characters
- Reject obvious secrets, credentials, SSNs, tax IDs, API keys, or pasted financial records

If sensitive-looking data is detected, show a warning and do not send it to Gemini.

## Fallback Behavior

If Gemini fails, rate-limits, returns invalid JSON, or the API key is missing:

- Use a mock/fallback response.
- The site should still demonstrate the workflow suggestion experience.
- Clearly avoid pretending the fallback is a complete assessment.
