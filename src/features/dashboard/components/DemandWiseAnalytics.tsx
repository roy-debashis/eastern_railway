import { DemandWiseAnalyticsRow } from '../api/demandAnalytics.api'
import { Info, Sparkles } from 'lucide-react'

interface DemandWiseAnalyticsProps {
  data: DemandWiseAnalyticsRow[]
  isLoading?: boolean
}

export function DemandWiseAnalytics({
  data,
  isLoading,
}: DemandWiseAnalyticsProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-44 rounded-xl border border-slate-200 bg-white p-3 flex items-center justify-center text-xs text-slate-500 shadow-xs">
        Loading Demand-wise Analytics...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs text-slate-900">
      {/* Title Header with blue "C." badge and Info icon */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs font-extrabold text-blue-600 font-sans">
            c.
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
            Working Expense - Demand-wise Analytics
          </h3>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded-full ml-1">
            <Sparkles className="h-2.5 w-2.5" />
            AI Analyzed
          </span>
        </div>
        <Info className="h-3.5 w-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
      </div>

      {/* Compact Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-1.5 px-2 w-24">DEMAND</th>
              <th className="py-1.5 px-2">BROAD HEAD</th>
              <th className="py-1.5 px-2 text-right">ACTUAL (CR)</th>
              <th className="py-1.5 px-2 text-right">BP (CR)</th>
              <th className="py-1.5 px-2 text-center">VAR %</th>
              <th className="py-1.5 px-2 min-w-[220px]">AI NOTE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[11px] font-medium">
            {data.map((row, idx) => {
              const isPositive = row.varPct >= 0
              const formattedVar = isPositive
                ? `+${row.varPct.toFixed(2)}%`
                : `${row.varPct.toFixed(2)}%`

              return (
                <tr
                  key={idx}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Demand */}
                  <td className="py-1.5 px-2 font-bold text-slate-900 whitespace-nowrap">
                    {row.demand}
                  </td>

                  {/* Broad Head */}
                  <td className="py-1.5 px-2 text-slate-800 font-medium">
                    {row.broadHead}
                  </td>

                  {/* Actual Cr */}
                  <td className="py-1.5 px-2 text-right font-mono text-slate-700">
                    {typeof row.actualCr === 'number'
                      ? row.actualCr.toFixed(2)
                      : row.actualCr}
                  </td>

                  {/* BP Cr */}
                  <td className="py-1.5 px-2 text-right font-mono text-slate-700 font-semibold">
                    {row.bpCr.toFixed(2)}
                  </td>

                  {/* Var % */}
                  <td className="py-1.5 px-2 text-center">
                    <span
                      className={`font-mono font-bold text-[10px] ${
                        isPositive ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {formattedVar}
                    </span>
                  </td>

                  {/* AI Note */}
                  <td className="py-1.5 px-2 text-[10px] text-slate-600 leading-snug">
                    {row.aiNote}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
