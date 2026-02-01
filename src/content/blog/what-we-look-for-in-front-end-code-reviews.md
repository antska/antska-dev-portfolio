---
title: "What We Look for in Front-End Code Reviews"
slug: "what-we-look-for-in-front-end-code-reviews"
excerpt: "We review a lot of front-end PRs. We focus on a few things every time: accessibility, state, tests, and where performance matters. Here is what we check."
readTime: "6 min read"
category: "React, Process"
publishedAt: "2024-05-01"
---

## Why We Care

Code reviews are not about style wars. They are about catching bugs before merge, keeping the codebase consistent, and sharing context. We focus on what matters. We skip the rest.

Here is what we look for every time.

## What We Always Check

### State and Edge Cases

We check that the code handles loading, error, and empty states. We do not want "it works on my machine" PRs that break when the API is slow or returns nothing.

- **Loading.** Is there a loading state? Skeleton, spinner, or disabled button. We do not require a specific pattern. We require that the user is not left with a blank screen or a stuck button.
- **Error.** Is there an error state? Message, retry, or fallback. We do not require a toast for every error. We require that the user is not left with no feedback.
- **Empty.** Lists and search results: what happens when there are zero items? We require something. "No results" or an empty state component. Not nothing.

We also check for obvious bugs: missing dependency in `useEffect`, stale closure in a callback, state that is never reset when it should be. We do not re-implement the feature. We ask "what happens when X?" and block if the answer is "we didn't think about that" and X is a normal case.

### Tests

We do not require tests on every PR. We require tests when:

- **The change is critical.** Login, checkout, or any flow that would be bad if it broke. We ask for at least one test that covers the happy path or the fix.
- **The fix was a bug.** If the PR fixes a bug, we ask for a test that would have caught it. So we do not reintroduce it later.
- **The change is pure logic.** A util, a formatter, a validator. We ask for unit tests. They are cheap and they catch regressions.

We do not block for tests on every new component. We block when the change is critical, fixes a bug, or is easy to test and untested.

### Performance (Where It Matters)

We do not chase every re-render. We check:

- **Lists.** Are we rendering a long list without virtualization? If the list can grow (e.g. 100+ items), we ask for virtualization or pagination. We do not require it for a list of 5 items.
- **Heavy work.** Is there a heavy computation or a large dependency in a component that re-renders often? We ask for `useMemo`, `useCallback`, or moving it out. We do not require memo everywhere.
- **Images.** Are we loading big images without sizing or lazy loading? We ask for `width`/`height` or `loading="lazy"` where it makes sense. We do not nitpick every image.

We focus on the obvious wins. We skip the micro-optimisations unless we have data.

### Naming and Structure

We check that we can understand the code in 30 seconds. We do not require a specific folder structure. We require:

- **Names that match behaviour.** A function called `handleSubmit` does not fetch data. A component called `UserList` renders a list of users. We block when the name lies.
- **No giant components.** If a component is 300+ lines, we ask for a split. Not always. We ask when it is hard to follow. We suggest extracting hooks or subcomponents. We do not mandate a number.
- **Shared logic in one place.** If two components do the same thing, we ask for a shared util or hook. We do not require a generic on day one. We require "do not copy-paste the same logic a third time."

We do not block for style. We block when the structure makes the code hard to reason about.

## What We Don't Block On

We do not block for:

- **Formatting.** Prettier and ESLint fix that. We do not comment "add a space here."
- **Personal preference.** "I would use a for-loop" vs "I would use map." We only comment when the chosen approach is wrong or harmful.
- **Over-engineering.** "You could make this generic." We only ask when we will reuse it soon. Otherwise we leave it.
- **Tests on every line.** We require tests where they matter. We do not require 100% coverage.

We comment when we have a strong reason. We approve when the rest is good enough. We do not hold PRs for perfection.

## The Lesson

Reviews are a filter. They catch bugs, keep consistency, and spread context. They are not a place to enforce taste. We focus on accessibility, state, tests where they matter, and performance where it hurts. We skip the rest. We ship.

## Key Takeaways

1. **State and edge cases.** Loading, error, empty. We ask "what happens when X?" and block when the answer is missing for normal cases.
2. **Tests when it matters.** Critical flows, bug fixes, pure logic. We do not require tests everywhere.
3. **Performance where it hurts.** Long lists, heavy work, big images. We skip micro-optimisations.
4. **Naming and structure.** Names that match behaviour, no giant components, shared logic in one place. We do not block for style.
5. **Don't block for taste.** Formatting, preference, over-engineering. We comment when we have a strong reason. Otherwise we approve.

This is what we look for. Your list can be different. The useful part is having a list and sticking to it.
