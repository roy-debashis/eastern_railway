import { TrendingUp, AlertTriangle } from 'lucide-react'

export function ForecastOutlook() {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs text-slate-900 flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-2.5">
        <TrendingUp className="h-4 w-4 text-blue-600 shrink-0" />
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
          Forecast & Year-End Outlook
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {/* Forecast Gross Earnings */}
        <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 flex flex-col justify-between min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-tight text-slate-600 leading-snug">
            Forecast Gross Earnings
          </span>
          <div className="mt-1.5">
            <div className="text-xs sm:text-sm font-extrabold text-slate-950 font-mono tracking-tight whitespace-nowrap">
              ₹62,346.33 Cr
            </div>
            <div className="text-[10px] text-rose-600 font-semibold mt-0.5">
              vs BP -49.30%
            </div>
          </div>
        </div>

        {/* Forecast Working Expense */}
        <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 flex flex-col justify-between min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-tight text-slate-600 leading-snug">
            Forecast Working Expense
          </span>
          <div className="mt-1.5">
            <div className="text-xs sm:text-sm font-extrabold text-slate-950 font-mono tracking-tight whitespace-nowrap">
              ₹1,09,348.77 Cr
            </div>
            <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
              vs BP +47.78%
            </div>
          </div>
        </div>

        {/* Forecast OR */}
        <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 flex flex-col justify-between min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-tight text-slate-600 leading-snug">
            Forecast OR
          </span>
          <div className="mt-1.5">
            <div className="text-xs sm:text-sm font-extrabold text-purple-700 font-mono tracking-tight whitespace-nowrap">
              175.4%
            </div>
            <div className="text-[10px] text-rose-600 font-semibold mt-0.5">
              vs BP -1,505.70 pts
            </div>
          </div>
        </div>

        {/* Probability of Meeting Target */}
        <div className="rounded-lg border border-rose-200 bg-rose-50/90 p-2.5 flex flex-col justify-between text-center min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-tight text-rose-800 leading-snug">
            Probability of Target
          </span>
          <div className="mt-1">
            <div className="text-sm sm:text-base font-extrabold text-rose-700 font-mono flex items-center justify-center gap-1">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              0%
            </div>
            <div className="text-[9px] font-bold text-rose-800 uppercase tracking-wider">
              At Risk
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
