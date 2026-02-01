---
title: "Jotai vs Redux: Why We Switched"
slug: "jotai-vs-redux"
excerpt: "We used to use Redux. We moved to Jotai and React Query. Boilerplate dropped; Jotai for UI state, React Query for data fetching. Here is how we use them together, with examples."
readTime: "7 min read"
category: "React"
publishedAt: "2022-03-15"
---

## Why We Did It

We had a Redux store with many slices. Every feature needed actions, reducers, selectors. Updating a single boolean meant a new action type, action creator, reducer case, and selector. It worked. The boilerplate did not scale.

We switched to Jotai and never looked back. We do not use Redux anymore. This is how we use Jotai today.

## The Old Way (Redux)

For context, this is what we had before.

```typescript
// store.ts
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  ui: uiReducer,
  // ... 15 more slices
});

// actions.ts
export const setLoading = (isLoading: boolean) => ({
  type: "SET_LOADING",
  payload: isLoading,
});

// reducer.ts
case "SET_LOADING":
  return { ...state, isLoading: action.payload };

// component.tsx
const isLoading = useSelector((state) => state.ui.isLoading);
dispatch(setLoading(true));
```

## How We Use Jotai Now

### Basic Atoms (UI State)

We use plain atoms for toggles, modals, and simple UI state.

```typescript
// atoms/ui.ts
import { atom } from "jotai";

export const loadingAtom = atom(false);
export const sidebarOpenAtom = atom(true);
export const activeModalAtom = atom<"filters" | "export" | null>(null);
```

```typescript
// component.tsx
const [isLoading, setIsLoading] = useAtom(loadingAtom);
const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
const [activeModal, setActiveModal] = useAtom(activeModalAtom);

setIsLoading(true);
setActiveModal("filters");
```

### Derived State

We use read-only atoms for values computed from other atoms. No selectors, no memoization.

```typescript
// atoms/listings.ts
const listingsAtom = atom<PropertyListing[]>([]);
const totalValueAtom = atom((get) =>
  get(listingsAtom).reduce((sum, listing) => sum + listing.price, 0)
);
const listingCountAtom = atom((get) => get(listingsAtom).length);

// component.tsx
const totalValue = useAtomValue(totalValueAtom);
const count = useAtomValue(listingCountAtom);
```

### React Query + Jotai (Data Fetching)

We use **React Query** for server state: fetching, caching, and invalidation. We use **Jotai** for UI state that drives queries (e.g. filters, selected ids). Query keys can depend on atoms so when the atom changes, React Query refetches.

```typescript
// atoms/filters.ts
export const searchFilterAtom = atom("");
export const statusFilterAtom = atom<"all" | "active">("all");

// hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { searchFilterAtom, statusFilterAtom } from "../atoms/filters";

export const useUsers = () => {
  const search = useAtomValue(searchFilterAtom);
  const status = useAtomValue(statusFilterAtom);
  return useQuery({
    queryKey: ["users", { search, status }],
    queryFn: () => fetchUsers({ search, status }),
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
```

```typescript
// component.tsx
function UserList() {
  const { data, isLoading, error } = useUsers();
  const createUser = useCreateUser();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return (
    <>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          createUser.mutate({ name: "Jane", email: "jane@example.com" })
        }
      >
        Add user
      </button>
    </>
  );
}
```

Filters live in Jotai. React Query uses them in the query key. Change the filter, the key changes, React Query refetches. One source of truth for UI state, one for server state.

### Persistence (localStorage / sessionStorage)

We use `atomWithStorage` from `jotai/utils` for theme, sidebar state, or draft form data. It syncs with storage and survives refresh.

```typescript
// atoms/settings.ts
import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark" | "system">(
  "app-theme",
  "system"
);

export const sidebarOpenAtom = atomWithStorage("sidebar-open", true);

// component.tsx
const [theme, setTheme] = useAtom(themeAtom);
setTheme("dark"); // persists to localStorage
```

### Keyed State (atomFamily)

When we need state per item (e.g. expanded row, form per id), we use `atomFamily`. Each key gets its own atom.

```typescript
// atoms/accordion.ts
import { atomFamily } from "jotai/utils";

export const accordionOpenAtomFamily = atomFamily((id: string) => atom(false));

// component.tsx
function AccordionItem({ id, title, children }) {
  const [isOpen, setIsOpen] = useAtom(accordionOpenAtomFamily(id));
  return (
    <div>
      <button onClick={() => setIsOpen((o) => !o)}>{title}</button>
      {isOpen && children}
    </div>
  );
}
```

### Write-Only Atoms (Side Effects)

We use write-only atoms when we only need to trigger an action (e.g. reset filters, clear selection). The component calls `useSetAtom` and never reads. For server refresh we use React Query's `invalidateQueries` in mutation callbacks.

```typescript
// atoms/filters.ts
export const resetFiltersAtom = atom(null, (get, set) => {
  set(searchFilterAtom, "");
  set(statusFilterAtom, "all");
});

// component.tsx
const resetFilters = useSetAtom(resetFiltersAtom);
<button onClick={() => resetFilters()}>Reset filters</button>;
```

## What Went Right

**One mental model for UI state.** No actions, no reducers, no selectors. Read with `useAtomValue`, write with `useAtom` or `useSetAtom`. React Query covers server state; Jotai holds filters and UI state that feed into query keys.

**Less code.** We cut state-management code by a large margin. One file of atoms per domain instead of actions, reducers, and selectors.

**Derived state is trivial.** `atom((get) => ...)` and Jotai handles updates. No custom selectors or memoization.

**Persistence where we need it.** `atomWithStorage` for theme and UI prefs. No custom persistence layer.

**Keyed state without prop drilling.** `atomFamily` for per-item state. Each key is an atom. No context or lifting state.

## What Went Wrong

**No time-travel.** We do not have Redux DevTools. We debug with React DevTools and logs. For complex flows we sometimes add a small log in the write path.

**Loading and error handling.** React Query gives us `isLoading`, `error`, and `isError`. We handle them in the component or with error boundaries.

**When to use useState.** We still use `useState` for state that never leaves the component. No need to put every boolean in an atom.

## When We Use What

We use Jotai for:

- **UI state.** Modals, sidebars, toggles, filters.
- **Derived state.** Totals, counts, computed flags.
- **Server state.** React Query for fetch, cache, and invalidation; Jotai atoms for filters and query-key inputs.
- **Persisted prefs.** Theme, sidebar open, draft form in `atomWithStorage`.
- **Keyed state.** Per-item expanded, per-id form state with `atomFamily`.

We use `useState` for:

- **Purely local state.** A single component, never shared.

We do not use Redux. We use Jotai with React Query for data fetching.

## The Lesson We gained:

- **Less code.** One place per piece of state. No action/reducer/selector chain.
- **Faster iteration.** Add an atom, use it. Change an atom, only its consumers re-render.
- **Clear split.** Jotai for UI state; React Query for server state. Query keys can depend on atoms so they stay in sync.

For us, the trade-off was worth it. We do not use Redux anymore. Jotai plus `useState` for local state covers everything we need.

## Key Takeaways

1. **We use Jotai for UI state and React Query for server state.** No Redux.
2. **Basic atoms** for UI state. **Derived atoms** `atom((get) => ...)` for computed values.
3. **React Query** for data fetching and mutations. Query keys can depend on Jotai atoms (e.g. filters). Invalidate with `queryClient.invalidateQueries`.
4. **`atomWithStorage`** for theme, sidebar, drafts. Persists across refresh.
5. **`atomFamily`** for keyed state (per id, per row). One atom per key.
6. **Write-only atoms** for side effects (refresh, reset). Use `useSetAtom`.
7. **`useState`** for state that never leaves the component.

This setup has been in use for over a year (since 2022). We do not use Redux. Jotai for UI state and React Query for server state works well together. If you are tired of Redux boilerplate, it is worth trying.
