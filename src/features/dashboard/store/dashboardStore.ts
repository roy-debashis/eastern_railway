import { create } from 'zustand'
import { SummaryCardData } from '../types/dashboard.types'

interface DashboardState {
  cards: SummaryCardData[]
  selectedCardId: string | null
  financialYear: string
  selectedMonth: string
  division: string
  department: string
  scenario: string
  reviewMode: 'monthly' | 'quarterly' | 'annual'
  
  // Actions
  setCards: (cards: SummaryCardData[]) => void
  selectCard: (id: string) => void
  clearSelection: () => void
  setFinancialYear: (year: string) => void
  setSelectedMonth: (month: string) => void
  setDivision: (division: string) => void
  setDepartment: (department: string) => void
  setScenario: (scenario: string) => void
  setReviewMode: (mode: 'monthly' | 'quarterly' | 'annual') => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  cards: [],
  selectedCardId: 'card-gross-earnings', // default select gross earnings card as in screenshot
  financialYear: '2025-26',
  selectedMonth: 'All Months (YTD)',
  division: 'all',
  department: 'all',
  scenario: 'actuals_vs_bp',
  reviewMode: 'monthly',

  setCards: (cards) => set({ cards }),
  selectCard: (id) =>
    set((state) => ({
      selectedCardId: state.selectedCardId === id ? null : id,
    })),
  clearSelection: () => set({ selectedCardId: null }),
  setFinancialYear: (year) => set({ financialYear: year }),
  setSelectedMonth: (month) => set({ selectedMonth: month }),
  setDivision: (division) => set({ division }),
  setDepartment: (department) => set({ department }),
  setScenario: (scenario) => set({ scenario }),
  setReviewMode: (mode) => set({ reviewMode: mode }),
}))
