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
  tableData?: Record<string, unknown>[] // optional, renders via TanStack Table
}

export interface AgentMessage {
  id: string
  role: 'user' | 'agent'
  cardContext?: { cardId: string; cardTitle: string }
  content: string | AgentStructuredResponse
  status: 'pending' | 'streaming' | 'done' | 'error'
  createdAt: number
}
