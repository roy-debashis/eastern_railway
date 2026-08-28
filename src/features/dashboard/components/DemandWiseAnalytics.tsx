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
      <div className="h-64 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-center text-xs text-slate-500 shadow-sm">
        Loading Demand-wise Analytics...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-slate-900">
      {/* Title with blue "C." badge and Info icon matching screenshot */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-extrabold text-blue-600 font-sans">
            c.
          </span>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Working Expense - Demand-wise Analytics
          </h3>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full ml-2">
            <Sparkles className="h-3 w-3" />
            AI Analyzed
          </span>
        </div>
        <Info className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
      </div>

      {/* Responsive Table matching Screenshot 2 */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <th className="py-2.5 px-3 w-28">DEMAND</th>
              <th className="py-2.5 px-3">BROAD HEAD</th>
              <th className="py-2.5 px-3 text-right">ACTUAL (CR)</th>
              <th className="py-2.5 px-3 text-right">BP (CR)</th>
              <th className="py-2.5 px-3 text-center">VAR %</th>
              <th className="py-2.5 px-3 min-w-[280px]">AI NOTE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {data.map((row, idx) => {
              const isPositive = row.varPct >= 0
              const formattedVar = isPositive
                ? `+${row.varPct.toFixed(2)}%`
                : `${row.varPct.toFixed(2)}%`

              return (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  {/* Demand */}
                  <td className="py-3 px-3 font-bold text-slate-900 whitespace-nowrap">
                    {row.demand}
                  </td>

                  {/* Broad Head */}
                  <td className="py-3 px-3 text-slate-800 font-medium">
                    {row.broadHead}
                  </td>

                  {/* Actual Cr */}
                  <td className="py-3 px-3 text-right font-mono text-slate-700">
                    {typeof row.actualCr === 'number'
                      ? row.actualCr.toFixed(2)
                      : row.actualCr}
                  </td>

                  {/* BP Cr */}
                  <td className="py-3 px-3 text-right font-mono text-slate-700 font-semibold">
                    {row.bpCr.toFixed(2)}
                  </td>

                  {/* Var % */}
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`font-mono font-bold text-[11px] ${
                        isPositive ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {formattedVar}
                    </span>
                  </td>

                  {/* AI Note */}
                  <td className="py-3 px-3 text-[11px] text-slate-600 leading-snug">
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
