import { CheckCircle } from 'lucide-react'

export function AnnualTargetAchievement() {
  const earningsTargetPct = 44.09
  const expenseCeilingPct = 45.8

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs text-slate-900">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5 mb-3">
        <CheckCircle className="h-4 w-4 text-emerald-600" />
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
          Annual Target Achievement
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        {/* Gauge 1 */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
          <div className="relative flex items-center justify-center h-20 w-20">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600 transition-all duration-1000"
                strokeDasharray={`${earningsTargetPct}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-xs font-extrabold text-slate-900 font-mono">
              {earningsTargetPct}%
            </div>
          </div>
          <span className="mt-1 text-[11px] font-bold text-slate-800">
            Gross Earnings YTD
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Target: ₹1,22,974 Cr</span>
        </div>

        {/* Gauge 2 */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
          <div className="relative flex items-center justify-center h-20 w-20">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-orange-500 transition-all duration-1000"
                strokeDasharray={`${expenseCeilingPct}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-xs font-extrabold text-slate-900 font-mono">
              {expenseCeilingPct}%
            </div>
          </div>
          <span className="mt-1 text-[11px] font-bold text-slate-800">
            Working Expense YTD
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Budget: ₹2,09,398 Cr</span>
        </div>
      </div>
    </div>
  )
}
