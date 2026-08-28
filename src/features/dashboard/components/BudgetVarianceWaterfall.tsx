import { WaterfallItem } from '../types/dashboard.types'
import { TrendingDown } from 'lucide-react'

interface BudgetVarianceWaterfallProps {
  data: WaterfallItem[]
  isLoading?: boolean
}

export function BudgetVarianceWaterfall({
  data,
  isLoading,
}: BudgetVarianceWaterfallProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-48 rounded-xl border border-slate-800 bg-[#0a1628] p-4 flex items-center justify-center text-xs text-slate-500">
        Loading Variance Drivers...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0a1628] p-4 shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-slate-800/80 pb-2.5">
        <TrendingDown className="h-4 w-4 text-sky-400" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
          YTD Budget Variance Drivers
        </h3>
      </div>

      {/* Waterfall Bar visualization */}
      <div className="mt-3 grid grid-cols-6 gap-2 h-36 items-end border-b border-slate-800/60 pb-2">
        {data.map((item, idx) => {
          const isPositive = item.amount >= 0
          const absAmount = Math.abs(item.amount)
          // Scale relative for rendering
          const heightPct = item.isTotal
            ? 85
            : Math.min(Math.max((absAmount / 400) * 75, 15), 75)

          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-end h-full group relative"
            >
              {/* Value Label */}
              <span className="text-[9px] font-mono font-bold text-slate-300 mb-1">
                {isPositive ? `+${item.amount}` : item.amount}
              </span>

              {/* Bar */}
              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full max-w-[24px] rounded-t transition-all group-hover:scale-105 shadow ${
                  item.isTotal
                    ? 'bg-blue-600'
                    : isPositive
                    ? 'bg-emerald-500'
                    : 'bg-rose-500'
                }`}
              />

              {/* Label */}
              <span className="mt-2 text-[9px] text-center text-slate-400 truncate max-w-[45px] leading-tight" title={item.name}>
                {item.name}
              </span>
            </div>
          )
        })}
      </div>

      {/* Footer summary banner */}
      <div className="mt-2 rounded-md bg-rose-950/40 border border-rose-800/40 py-1 px-2 text-center text-[10px] font-bold text-rose-300">
        Total Variance vs BP: -361.69 Cr (-3.09%)
      </div>
    </div>
  )
}
