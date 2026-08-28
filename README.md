# Build Task: Dashboard + AI Summary Agent (React 19 + Compiler)

You are an experienced React/TypeScript engineer building a production-grade
dashboard. Follow this document top-to-bottom, step by step. Do not skip
steps. After each numbered step, run the app / typecheck to confirm it still
builds before moving to the next step.

---

## 0. Tech Stack (do not substitute)

- React 19 + React Compiler (babel-plugin-react-compiler)
- Vite + TypeScript
- Zustand (client/UI state)
- TanStack Query v5 (server state / async data)
- TanStack Table v8 (data grids)
- Tailwind CSS
- shadcn/ui (Radix-based primitives)

---

## 1. Scaffold the project

```bash
npm create vite@latest dashboard-ai -- --template react-ts
cd dashboard-ai
npm install

npm install -D babel-plugin-react-compiler eslint-plugin-react-compiler
npm install zustand @tanstack/react-query @tanstack/react-query-devtools
npm install @tanstack/react-table

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npx shadcn@latest init
npx shadcn@latest add button card dialog sheet input skeleton badge \
  scroll-area separator tabs dropdown-menu avatar
```

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', {}]],
      },
    }),
  ],
})
```

Add `eslint-plugin-react-compiler` to `.eslintrc` (or flat config) and turn
its rule on as an **error**, not a warning — any Rules-of-React violation
must fail lint, since it silently disables compiler optimization for that
component.

**Verify:** `npm run dev` starts cleanly, `npm run build` succeeds.

---

## 2. Create the folder structure

Create exactly this structure under `src/` (empty files are fine for now,
fill them in the steps below):

```
src/
├── app/
│   ├── providers/
│   │   ├── QueryProvider.tsx
│   │   └── index.tsx
│   ├── App.tsx
│   └── main.tsx
├── components/
│   ├── ui/                     # shadcn output — do not hand-edit
│   ├── layout/
│   │   ├── DashboardLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── common/
│       ├── ErrorBoundary.tsx
│       └── LoadingSkeleton.tsx
├── features/
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── SummaryCard.tsx
│   │   │   ├── SummaryCardGrid.tsx
│   │   │   └── CardSkeleton.tsx
│   │   ├── hooks/
│   │   │   └── useDashboardData.ts
│   │   ├── store/
│   │   │   └── dashboardStore.ts
│   │   ├── api/
│   │   │   └── dashboard.api.ts
│   │   └── types/
│   │       └── dashboard.types.ts
│   ├── ai-agent/
│   │   ├── components/
│   │   │   ├── AgentPanel.tsx
│   │   │   ├── AgentChatWindow.tsx
│   │   │   ├── AgentInput.tsx
│   │   │   ├── AgentMessage.tsx
│   │   │   └── StructuredResponseRenderer.tsx
│   │   ├── hooks/
│   │   │   ├── useAgentQuery.ts
│   │   │   └── useSelectedCardContext.ts
│   │   ├── store/
│   │   │   └── agentStore.ts
│   │   ├── services/
│   │   │   └── agent.service.ts
│   │   └── types/
│   │       └── agent.types.ts
│   └── data-table/
│       ├── components/
│       │   ├── DataTable.tsx
│       │   ├── DataTableToolbar.tsx
│       │   ├── DataTablePagination.tsx
│       │   └── columns.tsx
│       └── hooks/
│           └── useTableData.ts
├── lib/
│   ├── utils.ts
│   ├── queryClient.ts
│   └── constants.ts
├── hooks/
│   └── useDebounce.ts
├── store/
│   └── uiStore.ts
├── types/
│   └── index.ts
└── styles/
    └── globals.css
```

**Verify:** `tree src -L 4` (or equivalent) matches the layout above.

---

## 3. Define shared types first

`src/features/dashboard/types/dashboard.types.ts`:

```ts
export interface SummaryCardData {
  id: string
  title: string
  value: number | string
  unit?: string
  trend?: { direction: 'up' | 'down' | 'flat'; percent: number }
  metricKey: string        // machine key, e.g. "revenue", "churn_rate"
  rawData?: Record<string, unknown>[] // underlying rows this card summarizes
}
```

`src/features/ai-agent/types/agent.types.ts`:

```ts
export interface AgentRequestContext {
  cardId: string
  metricKey: string
  cardTitle: string
  rawData?: Record<string, unknown>[]
  userQuery: string
}

// Strict schema the LLM must return — this is what makes the response
// renderable as structured UI instead of a wall of text.
export interface AgentStructuredResponse {
  summary: string
  keyMetrics: { label: string; value: string | number; delta?: string }[]
  insights: string[]
  recommendation?: string
  tableData?: Record<string, unknown>[]  // optional, renders via TanStack Table
}

export interface AgentMessage {
  id: string
  role: 'user' | 'agent'
  cardContext?: { cardId: string; cardTitle: string }
  content: string | AgentStructuredResponse
  status: 'pending' | 'streaming' | 'done' | 'error'
  createdAt: number
}
```

**Verify:** `tsc --noEmit` passes with these files added.

---

## 4. Zustand stores

`src/features/dashboard/store/dashboardStore.ts` — owns:
- `cards: SummaryCardData[]`
- `selectedCardId: string | null`
- `selectCard(id)`, `clearSelection()`

`src/features/ai-agent/store/agentStore.ts` — owns:
- `messages: AgentMessage[]`
- `isPanelOpen: boolean`
- `isStreaming: boolean`
- `addMessage()`, `updateMessage()`, `openPanel()`, `closePanel()`, `reset()`

Rule: **dashboardStore never imports from ai-agent**. ai-agent reads
dashboardStore via a selector hook (`useSelectedCardContext`) — one-way
dependency only.

**Verify:** both stores compile and can be imported independently with no
circular references.

---

## 5. Data layer (TanStack Query)

`src/features/dashboard/api/dashboard.api.ts` — fetch functions only, no
React in this file (`getSummaryCards()`, `getCardDetail(id)`).

`src/features/dashboard/hooks/useDashboardData.ts` — wraps the above in
`useQuery`, keyed as `['dashboard', 'cards']`.

`src/features/ai-agent/services/agent.service.ts` — the function that
POSTs `AgentRequestContext` to your backend/LLM endpoint and returns
`AgentStructuredResponse`. Keep the actual model call server-side; this
file just calls your own API route.

`src/features/ai-agent/hooks/useAgentQuery.ts` — wraps `agent.service.ts`
in a `useMutation`. On success, push the structured response into
`agentStore.messages`.

**Verify:** React Query Devtools shows the `['dashboard','cards']` query
resolving with mock data.

---

## 6. Build the UI, in this order

1. `DashboardLayout.tsx` — two-column layout: main grid (cards + table) on
   the left, `AgentPanel` as a collapsible right-side sheet/drawer.
2. `SummaryCardGrid.tsx` + `SummaryCard.tsx` — render cards from
   `useDashboardData()`. Clicking a card calls `selectCard(id)` in
   `dashboardStore` and visually highlights the selected card (ring/border).
3. `AgentPanel.tsx` — shows selected card's title as active context chip.
   If no card is selected, show a prompt: "Select a card to ask about it."
4. `AgentInput.tsx` — text input + send button, disabled if no card
   selected AND no general-query mode is enabled.
5. `useAgentQuery` triggers on submit, builds `AgentRequestContext` from
   `useSelectedCardContext()` + the typed query.
6. `AgentMessage.tsx` — if `content` is a string, render as chat bubble; if
   it's an `AgentStructuredResponse` object, delegate to
   `StructuredResponseRenderer.tsx`.
7. `StructuredResponseRenderer.tsx` — renders `summary` as text,
   `keyMetrics` as small stat chips, `insights` as a bullet list, and
   `tableData` (if present) through `features/data-table/components/DataTable.tsx`.

**Verify:** selecting a card → typing a question → submitting shows a
loading state → renders a structured response with at least summary +
keyMetrics visible.

---

## 7. TanStack Table wiring

`data-table/components/columns.tsx` — column defs generated dynamically
from the keys of `tableData[0]` when the agent returns tabular data
(fallback to a fixed column set if you have a known shape).

`DataTable.tsx` — generic wrapper accepting `data` + `columns` props, used
both for the agent's `tableData` output and for any raw dashboard tables.

**Verify:** an agent response containing `tableData` renders a sortable,
paginated table.

---

## 8. Polish pass

- Wrap `DashboardLayout` in `ErrorBoundary`.
- Add `CardSkeleton` / `LoadingSkeleton` for query loading states.
- Confirm `eslint-plugin-react-compiler` reports zero violations
  (`npm run lint`).
- Confirm `npm run build` produces no TypeScript errors.

---

## Definition of Done

- [ ] Selecting a card visually marks it selected
- [ ] Agent panel shows which card is active as context
- [ ] Submitting a query returns a structured (not raw-text) response
- [ ] Structured response renders summary, metrics, insights, and (when
      present) a sortable table
- [ ] `npm run build`, `npm run lint`, `tsc --noEmit` all pass clean