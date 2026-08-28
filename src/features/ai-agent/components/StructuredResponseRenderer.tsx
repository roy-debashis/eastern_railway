import { AgentStructuredResponse } from '../types/agent.types'
import { DataTable } from '@/features/data-table/components/DataTable'
import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react'

interface StructuredResponseRendererProps {
  response: AgentStructuredResponse
}

export function StructuredResponseRenderer({
  response,
}: StructuredResponseRendererProps) {
  const { summary, keyMetrics, insights, recommendation, tableData } = response

  return (
    <div className="space-y-3.5 text-xs text-slate-200">
      {/* Executive Summary */}
      <div className="rounded-md border border-sky-500/20 bg-sky-950/30 p-3 text-slate-200 leading-relaxed">
        <div className="flex items-center gap-1.5 font-semibold text-sky-300 mb-1">
          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
          <span>Executive Summary</span>
        </div>
        <p className="text-slate-300">{summary}</p>
      </div>

      {/* Key Metrics Chips */}
      {keyMetrics && keyMetrics.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-sky-400" />
            <span>Key Metrics & Deviations</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-md border border-slate-800 bg-slate-900/90 p-2 shadow-xs"
              >
                <div className="text-[10px] text-slate-400 truncate">
                  {metric.label}
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {metric.value}
                </div>
                {metric.delta && (
                  <div className="text-[10px] text-sky-400 mt-0.5 font-medium">
                    {metric.delta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actionable Insights */}
      {insights && insights.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 text-amber-400" />
            <span>Analytical Insights & Drivers</span>
          </div>
          <ul className="space-y-1.5 rounded-md border border-slate-800 bg-slate-900/60 p-2.5">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Strategic Recommendation */}
      {recommendation && (
        <div className="rounded-md border border-emerald-500/30 bg-emerald-950/30 p-2.5 text-emerald-200">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-300 mb-1">
            <Lightbulb className="h-3.5 w-3.5 text-emerald-400" />
            <span>Strategic PFA Recommendation</span>
          </div>
          <p className="text-[11px] text-emerald-100/90 leading-relaxed">
            {recommendation}
          </p>
        </div>
      )}

      {/* Dynamic Tabular Breakdown (TanStack Table) */}
      {tableData && tableData.length > 0 && (
        <div className="pt-1">
          <DataTable
            data={tableData}
            title="Underlying Telemetry & Data Records"
            pageSize={4}
          />
        </div>
      )}
    </div>
  )
}
