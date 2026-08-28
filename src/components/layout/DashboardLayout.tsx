import { useDashboardData } from '@/features/dashboard/hooks/useDashboardData'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { SummaryCardGrid } from '@/features/dashboard/components/SummaryCardGrid'
import { MonthlyEarningsExpenseChart } from '@/features/dashboard/components/MonthlyEarningsExpenseChart'
import { MonthlyVarianceHeatmap } from '@/features/dashboard/components/MonthlyVarianceHeatmap'
import { DemandWiseAnalytics } from '@/features/dashboard/components/DemandWiseAnalytics'
import { DivisionRankingList } from '@/features/dashboard/components/DivisionRankingList'
import { AIHighlights } from '@/features/dashboard/components/AIHighlights'
import { ForecastOutlook } from '@/features/dashboard/components/ForecastOutlook'
import { AnnualTargetAchievement } from '@/features/dashboard/components/AnnualTargetAchievement'
import { AgentPanel } from '@/features/ai-agent/components/AgentPanel'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { useAgentStore } from '@/features/ai-agent/store/agentStore'
import { Bot, Sparkles } from 'lucide-react'

export function DashboardLayout() {
  const {
    cards,
    isLoadingCards,
    heatmap,
    isLoadingHeatmap,
    trends,
    isLoadingTrends,
    divisionRankings,
    isLoadingDivisionRankings,
    demandAnalytics,
    isLoadingDemandAnalytics,
  } = useDashboardData()

  const toggleAgentPanel = useAgentStore((state) => state.togglePanel)
  const isPanelOpen = useAgentStore((state) => state.isPanelOpen)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#040e1f] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
        {/* Header with Month Filter & Profile */}
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Left Vertical Nav Rail */}
          <Sidebar />

          {/* Main Dashboard Canvas - Compact & Beautiful Integrated Grid */}
          <main className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 pb-20">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-3.5 items-start">
              {/* Column 1: Left Summary Cards (Width: 3/12) */}
              <div className="xl:col-span-3 space-y-3.5">
                <SummaryCardGrid cards={cards} isLoading={isLoadingCards} />
              </div>

              {/* Column 2: Center Charts + Heatmap + Demand Analytics (Width: 6/12) */}
              <div className="xl:col-span-6 space-y-3.5">
                {/* Monthly Earnings vs Working Expense Trend */}
                <MonthlyEarningsExpenseChart
                  data={trends}
                  isLoading={isLoadingTrends}
                />

                {/* Monthly Performance Heatmap */}
                <MonthlyVarianceHeatmap
                  data={heatmap}
                  isLoading={isLoadingHeatmap}
                />

                {/* Compact Section C: Demand-Wise Analytics Table */}
                <DemandWiseAnalytics
                  data={demandAnalytics}
                  isLoading={isLoadingDemandAnalytics}
                />
              </div>

              {/* Column 3: Right Column - AI Highlights + Division Rankings + Targets + Forecast (Width: 3/12) */}
              <div className="xl:col-span-3 space-y-3.5">
                {/* 💡 AI Highlights Card */}
                <AIHighlights />

                {/* Division Rankings */}
                <DivisionRankingList
                  data={divisionRankings}
                  isLoading={isLoadingDivisionRankings}
                />

                {/* Annual Target Achievement */}
                <AnnualTargetAchievement />

                {/* Forecast & Year-End Outlook */}
                <ForecastOutlook />
              </div>
            </div>
          </main>
        </div>

        {/* High-Visibility Floating AI Summary Agent Button */}
        <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
          <button
            type="button"
            onClick={toggleAgentPanel}
            className="group relative flex items-center gap-2.5 rounded-full bg-[#020b18] text-white px-5 py-3 font-bold shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 border-2 border-sky-400 cursor-pointer"
          >
            {/* Ping animation indicator */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500"></span>
            </span>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-inner">
              <Bot className="h-4 w-4" />
            </div>

            <span className="text-xs sm:text-sm tracking-wide text-sky-100 font-extrabold">
              {isPanelOpen ? 'Close AI Assistant' : 'Ask AI'}
            </span>

            <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
          </button>
        </div>

        {/* Collapsible Slide-out AI Agent Panel */}
        <AgentPanel />
      </div>
    </ErrorBoundary>
  )
}
