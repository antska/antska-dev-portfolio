---
title: "How We Cut Load Time by 40% (Without Breaking Anything)"
slug: "performance-optimization"
excerpt: "Performance optimization is one of those things everyone talks about but few actually do well. Here's how we did it at Blueground, and the mistakes we made along the way."
readTime: "6 min read"
category: "React"
publishedAt: "2024-02-15"
---

## The Starting Point

Our app was slow. Initial load: 4.2 seconds. Time to interactive: 6.8 seconds. Users were bouncing. We had to fix it.

## The Low-Hanging Fruit

First, we did the obvious stuff:

**1. Code splitting**

```typescript
// Before
import { HeavyComponent } from "./HeavyComponent";

// After
const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

**2. Loading skeletons**
We added skeleton placeholders for lists and cards instead of spinners or blank space. Users see layout and structure immediately; perceived load time dropped and bounce rate improved.

**3. Bundle analysis**

```bash
npm run build -- --analyze
```

Turns out we were shipping 2.1MB of JavaScript. A third of it was unused. We removed dead code, got it down to 1.4MB.

## The Real Wins

But the big improvements came from things most people don't think about:

**1. Prefetching critical routes**

```typescript
// Prefetch routes users are likely to visit
<link rel="prefetch" href="/search" />
<link rel="prefetch" href="/booking" />
```

We analyzed user flows, prefetched the top 3 routes. Saved ~800ms on average.

**2. Lazy loading below the fold**

```typescript
// Only load when in viewport
import { useInView } from "react-intersection-observer";

function LazySection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <div ref={ref}>{inView && <ExpensiveComponent />}</div>;
}
```

**3. Memoization (but only where it matters)**

```typescript
// Don't do this everywhere
const MemoizedButton = memo(Button); // Usually unnecessary

// Do this for expensive computations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

We memoized 3 components. That's it. The rest didn't need it.

## The Mistakes

**Over-optimizing too early**: We spent a week optimizing a component that rendered once. Waste of time.

**Premature code splitting**: We split everything into tiny chunks. Result? More network requests, slower overall load. We consolidated.

**Ignoring the network**: We optimized JavaScript but forgot about fonts. Added `font-display: swap`, saved 500ms.

## The Results

After 2 months:

- Initial load: 2.5 seconds (down from 4.2s)
- Time to interactive: 3.8 seconds (down from 6.8s)
- Bundle size: 840KB (down from 2.1MB)
- Lighthouse score: 80+ (was 70 - we still need work here)

## The Lesson

Performance isn't about one big change. It's about 20 small ones. Measure everything, optimize what matters, ignore the rest.

And for god's sake, use `font-display: swap`.
