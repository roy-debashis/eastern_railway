import { create } from 'zustand'
import { AgentMessage } from '../types/agent.types'

interface AgentState {
  messages: AgentMessage[]
  isPanelOpen: boolean
  isStreaming: boolean
  activeViewMode: 'chat' | 'table_view' | 'metrics'
  
  // Actions
  addMessage: (message: AgentMessage) => void
  updateMessage: (id: string, partial: Partial<AgentMessage>) => void
  openPanel: () => void
  closePanel: () => void
  togglePanel: () => void
  setIsStreaming: (isStreaming: boolean) => void
  setActiveViewMode: (mode: 'chat' | 'table_view' | 'metrics') => void
  reset: () => void
}

const initialMessages: AgentMessage[] = [
  {
    id: 'msg-welcome',
    role: 'agent',
    cardContext: { cardId: 'card-gross-earnings', cardTitle: 'GROSS EARNINGS YTD / FY' },
    content: {
      summary: 'Eastern Railway Financial Intelligence Agent active. You are reviewing MCDO Monthly Performance. Select any KPI card on the dashboard to generate targeted diagnostic summaries, root cause analyses, and tabular breakdowns.',
      keyMetrics: [
        { label: 'Gross Shortfall', value: '₹-5,632.24 Cr', delta: '-9.41% vs BP' },
        { label: 'Working Expense', value: '₹95,919.97 Cr', delta: '+1.92% (Favourable)' },
        { label: 'Operating Ratio', value: '1873.71%', delta: '+192.6 pts' },
      ],
      insights: [
        'Sundry earnings show severe lag (-52.1% in Apr, -36.0% in May) due to delayed siding commercialization in Asansol and Howrah divisions.',
        'Passenger earnings recovered in Jan/Feb (-4.5%) and Mar (-0.4%) owing to special festival trains and revised tatkal allocations.',
        'Malda division leads Eastern Railway at 93.2% budget achievement, while Sealdah is lagging at 86.6%.',
      ],
      recommendation: 'Accelerate freight demurrage recovery in Howrah yard and optimize electric loco trip maintenance turnarounds in Asansol division.',
    },
    status: 'done',
    createdAt: Date.now() - 300000,
  },
]

export const useAgentStore = create<AgentState>((set) => ({
  messages: initialMessages,
  isPanelOpen: false,
  isStreaming: false,
  activeViewMode: 'chat',

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      isPanelOpen: true,
    })),
  updateMessage: (id, partial) =>
    set((state) => ({
      messages: state.messages.map((m) =>
        m.id === id ? { ...m, ...partial } : m
      ),
    })),
  openPanel: () => set({ isPanelOpen: true }),
  closePanel: () => set({ isPanelOpen: false }),
  togglePanel: () => set((state) => ({ isPanelOpen: !state.isPanelOpen })),
  setIsStreaming: (isStreaming) => set({ isStreaming }),
  setActiveViewMode: (mode) => set({ activeViewMode: mode }),
  reset: () => set({ messages: initialMessages, isStreaming: false }),
}))
