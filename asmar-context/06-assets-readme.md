# Assets README

## Purpose

This file tells the website builder how to use Asmar Partners brand assets.

## Logo

The user will provide the logo separately.

Expected locations may include:

```text
/public/logo.svg
/public/logo.png
/public/brand/logo.svg
/public/brand/logo.png
```

Use the provided logo if available.

If no logo file is present, create a clean text-logo fallback using:

```text
Asmar Partners
```

Do not create a new permanent logo.

## Brand Style

Keep the design:

- Clean
- Professional
- Minimal
- Business-oriented
- Easy to edit
- Responsive
- Accessible

Do not make the page visually noisy or overly animated.

## Design Direction

Recommended style:

- Neutral background
- Strong typography
- Subtle accent color
- Clear spacing
- Simple dividers
- Professional CTA buttons
- Minimal motion

Avoid:

- Generic SaaS clutter
- Excessive cards
- Overly complex animations
- Chatbot-style UI
- Dashboard-style UI
- Overuse of gradients
- Stock-photo-heavy layouts

## Asset Handling

Do not embed large base64 assets in code.

Use normal public asset paths.

If assets are missing, keep placeholders simple and obvious so they can be replaced later.

## Suggested Header Logo Behavior

If `/public/logo.svg` exists, use it in the header.

If not, use text:

```text
Asmar Partners
```

## Accessibility

Logo images should include appropriate alt text:

```text
Asmar Partners logo
```
