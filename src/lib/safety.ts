import type { WorkflowSuggestionRequest } from "@/lib/workflow-types";

export type ValidationResult =
  | { ok: true }
  | { ok: false; message: string; fields?: string[] };

const ROLE_MAX = 80;
const COMPANY_MAX = 80;
const DETAILS_MAX = 1000;
const FOLLOW_UP_MAX = 700;

const sensitivePatterns: { label: string; pattern: RegExp }[] = [
  { label: "Social Security number", pattern: /\b\d{3}-\d{2}-\d{4}\b/ },
  { label: "tax ID", pattern: /\b\d{2}-\d{7}\b/ },
  { label: "private key", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/i },
  { label: "password or secret", pattern: /\b(password|passwd|pwd|secret)\s*(?:is|:|=)\s*\S+/i },
  { label: "API key", pattern: /\b(api[_ -]?key|access[_ -]?token|auth[_ -]?token)\s*[:=]\s*\S+/i },
  { label: "OpenAI-style key", pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/ },
  { label: "Google API key", pattern: /\bAIza[0-9A-Za-z_-]{20,}\b/ },
  { label: "GitHub token", pattern: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/ },
  { label: "bank statement", pattern: /\bbank\s+statement\b/i },
  { label: "payroll record", pattern: /\b(payroll\s+(record|records|data|report|reports)|w-?2\b)/i },
  { label: "tax return content", pattern: /\b(form\s+1040|1120s?|1065|schedule\s+[a-z]|tax\s+return)\b/i },
  { label: "confidential record", pattern: /\b(confidential|privileged|regulated)\s+(record|records|data|information|file|files)\b/i },
  {
    label: "obvious client name",
    pattern: /\b(client|customer)\s+(name|named|is|:)\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3}\b/,
  },
];

function hasCreditCardNumber(value: string) {
  const candidates = value.match(/\b(?:\d[ -]?){13,19}\b/g) ?? [];

  return candidates.some((candidate) => {
    const digits = candidate.replace(/\D/g, "");
    if (digits.length < 13 || digits.length > 19) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let index = digits.length - 1; index >= 0; index -= 1) {
      let digit = Number(digits[index]);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  });
}

function hasBankAccountLikeNumber(value: string) {
  if (!/\b(bank|routing|account|acct)\b/i.test(value)) {
    return false;
  }

  return /\b\d{6,17}\b/.test(value.replace(/[ -]/g, ""));
}

export function hasSensitiveContent(values: string[]) {
  const combined = values.filter(Boolean).join("\n");
  const matches = sensitivePatterns
    .filter(({ pattern }) => pattern.test(combined))
    .map(({ label }) => label);

  if (hasCreditCardNumber(combined)) {
    matches.push("credit card number");
  }

  if (hasBankAccountLikeNumber(combined)) {
    matches.push("bank account or routing number");
  }

  return [...new Set(matches)];
}

export function validateWorkflowRequest(input: WorkflowSuggestionRequest): ValidationResult {
  const role = input.role?.trim() ?? "";
  const companyType = input.companyType?.trim() ?? "";
  const details = input.details?.trim() ?? "";
  const followUp = input.followUp?.trim() ?? "";

  if (!role) {
    return { ok: false, message: "Role is required.", fields: ["role"] };
  }

  if (role.length > ROLE_MAX) {
    return { ok: false, message: `Role must be ${ROLE_MAX} characters or fewer.`, fields: ["role"] };
  }

  if (companyType.length > COMPANY_MAX) {
    return {
      ok: false,
      message: `Company type must be ${COMPANY_MAX} characters or fewer.`,
      fields: ["companyType"],
    };
  }

  if (details.length > DETAILS_MAX) {
    return {
      ok: false,
      message: `Monotonous work details must be ${DETAILS_MAX} characters or fewer.`,
      fields: ["details"],
    };
  }

  if (followUp.length > FOLLOW_UP_MAX) {
    return {
      ok: false,
      message: `Follow-up must be ${FOLLOW_UP_MAX} characters or fewer.`,
      fields: ["followUp"],
    };
  }

  const sensitiveMatches = hasSensitiveContent([role, companyType, details, followUp]);

  if (sensitiveMatches.length > 0) {
    return {
      ok: false,
      message: `Please remove sensitive or confidential details before continuing. Detected: ${sensitiveMatches.join(", ")}. Use general examples only.`,
    };
  }

  return { ok: true };
}
