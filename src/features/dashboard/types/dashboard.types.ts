export interface SummaryCardData {
  id: string
  title: string
  subtitle?: string
  value: number | string
  unit?: string
  totalBudget?: number | string
  trend?: { direction: 'up' | 'down' | 'flat'; percent: number }
  metricKey: string // machine key, e.g. "gross_earnings", "working_expense", "operating_ratio", "budget_achievement"
  statusBadge?: {
    text: string
    variant: 'critical' | 'favourable' | 'watch' | 'neutral'
  }
  sparkline?: number[]
  vsTargetText?: string
  rawData?: Record<string, unknown>[] // underlying rows this card summarizes
}

export interface MonthlyHeatmapRow {
  category: string
  apr: number
  may: number
  jun: number
  jul: number
  aug: number
  sep: number
  oct: number
  nov_dec: number
  jan_feb: number
  mar: number
}

export interface MonthlyTrendData {
  month: string
  grossEarnings: number
  workingExpense: number
  earningsBudget: number
}

export interface DivisionRankingData {
  rank: number
  division: string
  achievement: number
  vsBP: number
  status: 'critical' | 'favourable' | 'watch'
}

export interface QuarterlySnapshotData {
  quarter: string
  period: string
  earningsVsBP: string
  expenseVsBP: string
  operatingRatio: string
  status: 'CRITICAL' | 'FAVOURABLE' | 'WATCH'
}

export interface WaterfallItem {
  name: string
  amount: number
  isTotal?: boolean
}
