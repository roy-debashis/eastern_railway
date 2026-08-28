import { MonthlyTrendData } from '../types/dashboard.types'
import { Info } from 'lucide-react'

interface MonthlyEarningsExpenseChartProps {
  data: MonthlyTrendData[]
  isLoading?: boolean
}

export function MonthlyEarningsExpenseChart({
  data,
  isLoading,
}: MonthlyEarningsExpenseChartProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-64 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-center text-xs text-slate-500 shadow-xs">
        Loading Monthly Trend Chart...
      </div>
    )
  }

  const maxVal = 2600
  const yTicks = [2500, 2000, 1500, 1000, 500, 0]

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs text-slate-900">
      {/* Header & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-1 bg-blue-600 rounded-full" />
          <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
            Monthly Earnings vs Working Expense Trend
          </h3>
          <Info className="h-3.5 w-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-[11px] font-medium">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-5 rounded-xs bg-orange-500" />
            <span className="text-slate-700">Working Expense (₹ Cr)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-xs bg-blue-600" />
            <span className="text-slate-700">Gross Earnings (₹ Cr)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 border-t-2 border-dashed border-emerald-500" />
            <span className="text-slate-500">Earnings Budget (Proportional)</span>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative mt-4 h-60 w-full">
        {/* Y-Axis Labels & Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {yTicks.map((tick) => (
            <div key={tick} className="flex items-center w-full">
              <span className="w-9 text-right font-mono text-[10px] text-slate-400 pr-2">
                {tick.toLocaleString()}
              </span>
              <div className="flex-1 border-b border-slate-100" />
            </div>
          ))}
        </div>

        {/* Bars & Line Area */}
        <div className="absolute inset-0 pl-10 pr-4 flex items-end">
          <div className="grid grid-cols-10 w-full h-full items-end gap-2 pb-6">
            {data.map((item, idx) => {
              const barHeightPct = (item.grossEarnings / maxVal) * 100
              const expenseYPct = (item.workingExpense / maxVal) * 100
              const budgetYPct = (item.earningsBudget / maxVal) * 100

              return (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center justify-end h-full"
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-12 z-20 hidden group-hover:flex flex-col items-center rounded bg-slate-900 border border-slate-700 px-2 py-1 text-[10px] text-white shadow-xl pointer-events-none whitespace-nowrap">
                    <span className="font-bold text-sky-400">{item.month}</span>
                    <span>Gross: ₹{item.grossEarnings} Cr</span>
                    <span>Expense: ₹{item.workingExpense} Cr</span>
                    <span>Budget: ₹{item.earningsBudget} Cr</span>
                  </div>

                  {/* Earnings Bar */}
                  <div
                    style={{ height: `${barHeightPct}%` }}
                    className="w-full max-w-[32px] rounded-t-xs bg-blue-600 hover:bg-blue-500 transition-all shadow-xs"
                  />

                  {/* Expense Dot indicator */}
                  <div
                    style={{ bottom: `${expenseYPct}%` }}
                    className="absolute h-2.5 w-2.5 rounded-full bg-orange-500 border-2 border-white shadow-xs group-hover:scale-125 transition-transform"
                  />

                  {/* Budget Dot indicator */}
                  <div
                    style={{ bottom: `${budgetYPct}%` }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-emerald-500 border border-white opacity-80"
                  />

                  {/* X-Axis Month Label */}
                  <span className="absolute -bottom-5 text-[11px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item.month}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Connected SVG Line overlay for Working Expense */}
          <svg className="absolute inset-0 pl-10 pr-4 h-[calc(100%-24px)] w-full pointer-events-none overflow-visible">
            <polyline
              fill="none"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={data
                .map((item, idx) => {
                  const xPct = ((idx + 0.5) / data.length) * 100
                  const yVal = 100 - (item.workingExpense / maxVal) * 100
                  return `${xPct}%,${yVal}%`
                })
                .join(' ')}
            />
            {/* Dotted line for Earnings Budget */}
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={data
                .map((item, idx) => {
                  const xPct = ((idx + 0.5) / data.length) * 100
                  const yVal = 100 - (item.earningsBudget / maxVal) * 100
                  return `${xPct}%,${yVal}%`
                })
                .join(' ')}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
