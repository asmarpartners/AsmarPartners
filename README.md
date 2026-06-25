# Asmar Partners

Small Next.js landing page for Asmar Partners with one internal workflow suggestion preview tool.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The workflow suggestion API uses Groq from the server only. Do not prefix these variables with `NEXT_PUBLIC_`.

```bash
LLM_PROVIDER=groq
GROQ_API_KEY=
GROQ_PRIMARY_MODEL=openai/gpt-oss-20b
GROQ_FALLBACK_MODEL_1=openai/gpt-oss-120b
GROQ_FALLBACK_MODEL_2=meta-llama/llama-4-scout-17b-16e-instruct
```

If `GROQ_API_KEY` is missing or all Groq model attempts fail, the site returns the polished sample workflow suggestion result so the UI remains usable.

## Vercel Environment Variables

Add these variables to the linked Vercel project:

```bash
npx vercel env add LLM_PROVIDER
npx vercel env add GROQ_API_KEY
npx vercel env add GROQ_PRIMARY_MODEL
npx vercel env add GROQ_FALLBACK_MODEL_1
npx vercel env add GROQ_FALLBACK_MODEL_2
```

Use these values:

```bash
LLM_PROVIDER=groq
GROQ_PRIMARY_MODEL=openai/gpt-oss-20b
GROQ_FALLBACK_MODEL_1=openai/gpt-oss-120b
GROQ_FALLBACK_MODEL_2=meta-llama/llama-4-scout-17b-16e-instruct
```

Store `GROQ_API_KEY` as a sensitive variable. After changing environment variables, redeploy so Vercel functions receive the updated values:

```bash
npx vercel deploy --prod
```

For local development with Vercel-managed values:

```bash
npx vercel env pull .env.local --environment=preview --yes
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```
