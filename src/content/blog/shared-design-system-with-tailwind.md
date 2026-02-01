---
title: "A Shared Design System with Tailwind in a Monorepo"
slug: "design-system-tailwind-monorepo"
excerpt: "We ship a design system as a library. One Tailwind preset, design tokens in JS, and components that use them. Here is how we keep it consistent across apps."
readTime: "7 min read"
category: "CSS"
publishedAt: "2025-01-5"
---

## Why We Wrote This

Tailwind is easy to adopt in a single app. When you have several apps in a monorepo and need one look and feel, you have to put the theme somewhere shared and make sure every app uses it. We built a shared UI library: it holds our design tokens and React components, with a Tailwind preset that apps extend. No duplicate theme config, no drift. Here is what we do so it stays maintainable.

## One Preset, Many Apps

We don’t copy `tailwind.config.js` into each app. We keep one preset in the shared UI package and every app uses it.

```javascript
// lib/ui-kit/tailwind.config.js
import Preset from "./tailwind-preset";

export default {
  content: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "src/compositions/**/*.{js,jsx,ts,tsx}",
    "src/**/*.stories.@(js|jsx|ts|tsx)",
    ".storybook/preview.tsx",
  ],
  corePlugins: { preflight: true },
  presets: [Preset],
};
```

Our apps do the same: they set their own `content` and add `presets: [tailwindPreset]`. They can extend `theme` or add `plugins` if they need app-specific stuff. The base colors, spacing, typography, shadows, breakpoints lives in the preset. One place to change. No magic numbers in app code.

## Design Tokens in JS

We don’t hand-edit a big `tailwind.config.js` object. We keep tokens in separate JS modules under src/styles/:

```
colors.js
spacing.js
borderRadius.js
boxShadow.js
fontFamily.js
fontSize.js
screens.js
```

The preset imports them and spreads them into `theme` and `theme.extend`.

Colors are the heaviest. We have a base palette (blue-500, grey-700, semantic-error-main, etc.) and a large palette of component and semantic tokens (e.g. `component-button-primary-contained-fill`, `semantic-primary-hover`). Those names are long, so we curate them: we strip keywords like component, fill, txt and expose shorter Tailwind classes.

So `component-button-primary-contained-fill` becomes `button-primary-contained` in the theme. In components we use `bg-button-primary-contained`, `text-primary-on-dark`. One source of truth. Design changes in one file.

Spacing, radius, and shadows are simple objects. Font sizes are arrays: `[fontSize, { lineHeight, fontWeight, letterSpacing }]`, so we get `text-body-1`, `text-button-medium`, etc. with the right line-height and weight. We use these in Typography and Button and form controls. No arbitrary values for type.

## Content Paths: Include the Library

Tailwind only generates classes it finds in your content. Our apps don’t only scan their own `src/`. They also scan the UI library source so that every class used inside its components is generated.

```javascript
// apps/main-app/tailwind.config.js (example)
const tailwindPreset = require("@sampleLib/ui-kit/tailwind-preset");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@sampleLib/ui-kit/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [tailwindPreset],
};
```

If we forget the library path, we get missing styles in production. We add a path when we add a new app or a new file type. We don’t rely on defaults; we list what we use.

## Components Use the Tokens

The library’s components are React + Tailwind. They don’t use arbitrary values for brand or spacing. They use the preset: `bg-primary-main`, `text-badge-label`, `rounded-200`, `text-button-medium`, `shadow-1`, `text-chip-filled-neutral`.

Buttons, Badge, Chip, Typography, form controls, all reference the same tokens. When we change a token in the preset, every component that uses it updates. We avoid one-off pixel values; if we need something new, we add it to the token set first.

We use `clsx` for conditional classes and a small `cn()` helper that wraps `tailwind-merge`. We extended the merge so it knows our custom `fontSize`, `borderRadius`, and `boxShadow` keys. That way when we do `cn('text-body-1', variant === 'body2' && 'text-body-2')`, the last one wins. No duplicate or conflicting utilities.

## Custom Utilities in the Preset

When we need something Tailwind doesn’t ship, we add it in the preset’s `plugins` array. For example: `.scrollbar-hidden` (hide scrollbars across browsers), `.transition-border-color`, `.transition-border-on-hover`. We also define keyframes and animation in the preset (e.g. `nudge`) so components can use `animate-nudge` without each app redefining it. We don’t scatter one-off arbitrary values; we add a reusable utility or token.

## One CSS Entry, One Build

The UI library has a single entry CSS file: `src/index.css`. It pulls in the font files we need (e.g. Roboto) and then `@tailwind base`, `@tailwind components`, `@tailwind utilities`. We build that to `dist/ui-kit.css`. Apps that need the base and fonts can import that file; their own Tailwind build uses the preset and their own `content`, so they get the full utility set. We don’t scatter `@apply` or extra layers across many files; the design system stays in one package and one build pipeline.

## File Structure

The shared UI library lives inside the monorepo:

```
lib/ui-kit/
  tailwind-preset.js     # theme + plugins
  tailwind.config.js     # content + presets: [Preset]
  src/
    index.css            # fonts + @tailwind directives
    styles/              # design tokens
      index.js
      colors.js
      spacing.js
      borderRadius.js
      boxShadow.js
      fontFamily.js
      fontSize.js
      screens.js
    components/          # Button, Badge, Chip, Typography, etc.
    compositions/
    utils/
      cn.ts              # clsx + tailwind-merge (extended)
```

Apps depend on `@sampleLib/ui-kit`, require the preset, and include the library’s `src` in `content`. They import components from `@sampleLib/ui-kit` and, if needed, `ui-kit.css`. Shared component classes and tokens live in the library. Apps only extend when they have a real need (e.g. legacy colors, container queries).

## The Result

- **One Tailwind preset.** Colors, spacing, typography, shadows, breakpoints, keyframes, custom utilities. All apps use it, no copy-paste.
- **Design tokens in JS.** Curated color names, typography with line-height and weight, consistent spacing and radius. One place to change.
- **Content paths include the library.** So every class used in the shared components is generated in each app.
- **Components use tokens only.** No arbitrary values for design. New needs become new tokens.
- **One CSS entry and one build for the design system.** Easy to find and ship.

We didn’t do anything fancy. We put the theme in a preset, tokens in JS, and made components depend on those tokens. New developers see the same patterns in every app.

## The Takeaway

A shared design system stays maintainable when the theme lives in one preset, tokens are in one place (and readable in class names), and every app includes the library in Tailwind’s content. Use the tokens in components; avoid arbitrary values for anything you use more than once. Your future self and your team will thank you.
