import { MonthlyHeatmapRow } from '../types/dashboard.types'
import { Info, LayoutGrid } from 'lucide-react'

interface MonthlyVarianceHeatmapProps {
  data: MonthlyHeatmapRow[]
  isLoading?: boolean
}

function getCellColorClass(val: number, category: string) {
  // Operating ratio inverted logic (higher OR is worse)
  if (category === 'Operating Ratio') {
    if (val <= 2) return 'bg-[#dcfce7] text-[#15803d] font-semibold'
    if (val <= 5) return 'bg-[#fef9c3] text-[#854d0e]'
    if (val <= 10) return 'bg-[#ffedd5] text-[#c2410c]'
    return 'bg-[#ffe4e6] text-[#be123c] font-bold'
  }

  // Standard variance vs budget matching Screenshot 1:
  if (val > 2) return 'bg-[#dcfce7] text-[#15803d] font-bold'
  if (val >= -5) return 'bg-[#fef9c3] text-[#854d0e] font-medium'
  if (val >= -10) return 'bg-[#ffedd5] text-[#c2410c] font-medium'
  return 'bg-[#ffe4e6] text-[#be123c] font-bold'
}

export function MonthlyVarianceHeatmap({
  data,
  isLoading,
}: MonthlyVarianceHeatmapProps) {
  const months = [
    { key: 'apr', label: 'APR' },
    { key: 'may', label: 'MAY' },
    { key: 'jun', label: 'JUN' },
    { key: 'jul', label: 'JUL' },
    { key: 'aug', label: 'AUG' },
    { key: 'sep', label: 'SEP' },
    { key: 'oct', label: 'OCT' },
    { key: 'nov_dec', label: 'NOV/DEC' },
    { key: 'jan_feb', label: 'JAN/FEB' },
    { key: 'mar', label: 'MAR' },
  ]

  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-60 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-center text-xs text-slate-500 shadow-xs">
        Loading Monthly Variance Heatmap...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-purple-600" />
          <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
            Monthly Performance Heatmap (Variance vs Budget Plan)
          </h3>
        </div>
        <Info className="h-3.5 w-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-600 uppercase">
              <th className="py-2.5 px-2 text-left w-40">CATEGORY / HEAD</th>
              {months.map((m) => (
                <th key={m.key} className="py-2.5 px-1 text-center font-mono">
                  {m.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-2.5 px-2 text-slate-800 font-semibold whitespace-nowrap text-[11px]">
                  {row.category}
                </td>
                {months.map((m) => {
                  const val = row[m.key as keyof MonthlyHeatmapRow] as number
                  const formatted = val > 0 ? `+${val.toFixed(1)}%` : `${val.toFixed(1)}%`
                  const cellClass = getCellColorClass(val, row.category)

                  return (
                    <td key={m.key} className="p-1 text-center">
                      <div
                        className={`rounded px-1.5 py-1 text-[11px] font-mono transition-transform hover:scale-105 ${cellClass}`}
                      >
                        {formatted}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Heatmap Legend matching Screenshot 1 */}
      <div className="mt-3 flex flex-wrap items-center justify-end gap-3 text-[10px] text-slate-600 border-t border-slate-100 pt-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-xs bg-[#dcfce7] border border-[#86efac]" />
          <span>Favourable (&gt; 2%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-xs bg-[#fef9c3] border border-[#fde047]" />
          <span>Neutral (-5% to +2%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-xs bg-[#ffedd5] border border-[#fdba74]" />
          <span>Adverse (-10% to -5%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-xs bg-[#ffe4e6] border border-[#fca5a5]" />
          <span>Critical (&lt; -10%)</span>
        </div>
      </div>
    </div>
  )
}
