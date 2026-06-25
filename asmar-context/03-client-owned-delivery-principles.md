# Client-Owned Delivery Principles

## Core Principle

Asmar Partners should recommend and build workflows inside the client’s approved business environment whenever possible.

The client should own:

- Platform accounts
- Users
- Billing
- Data
- Access control
- API credentials
- Long-term administration
- Data retention
- Backups
- Internal rollout decisions

Asmar Partners provides:

- Workflow design
- Safe AI adoption guidance
- Prototype configuration
- Guardrails
- Testing
- Documentation
- Training
- Handoff

## Recommended Delivery Model

```text
Client-owned platform
→ temporary builder/admin access for Asmar Partners
→ workflow or assistant prototype build
→ testing and evaluation
→ employee rollout guidance
→ documentation and training
→ admin handoff
→ client removes or downgrades Asmar Partners access
```

## Website Implication

The website demo is only a preview. It should not imply that Asmar Partners hosts long-term production systems for clients by default.

Use language like:

- Built inside your approved business tools
- Client-owned workflow
- Controlled prototype
- Admin handoff
- Safe rollout plan

Avoid implying:

- Asmar Partners permanently hosts client workflows
- Visitors should upload sensitive client files to the website
- The website tool is production-ready
- The demo replaces a real workflow assessment

## Platform Guidance

Recommend the simplest architecture that solves the client’s problem.

Possible client-owned delivery paths:

- Microsoft 365 / Copilot Studio for Microsoft-heavy firms
- Google Workspace / Gemini for Google-heavy firms
- ChatGPT Business or Enterprise for approved workspace pilots
- Claude Team or Enterprise for writing-heavy internal workflows
- Dify or n8n for model-agnostic low-code workflows
- LangGraph or custom workflows only when needed for advanced cases

## Important Boundary

Do not build production agents inside personal AI accounts.

Personal accounts may be acceptable for lightweight internal experimentation or demonstration, but client delivery should happen inside a business workspace, enterprise tenant, or client-approved platform.

## Website Copy Guidance

Good copy:

```text
Asmar Partners helps firms design and pilot client-owned AI workflows inside approved business environments.
```

Bad copy:

```text
We host your AI agents for you.
```

Good copy:

```text
The preview helps identify workflow opportunities. A real engagement maps those opportunities to your approved tools, users, data rules, and review process.
```

Bad copy:

```text
Upload your files and we will automate your business.
```
