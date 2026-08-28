import { DivisionRankingData } from '../types/dashboard.types'
import { Award } from 'lucide-react'

interface DivisionRankingListProps {
  data: DivisionRankingData[]
  isLoading?: boolean
}

export function DivisionRankingList({
  data,
  isLoading,
}: DivisionRankingListProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-52 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-center text-xs text-slate-500 shadow-xs">
        Loading Division Rankings...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs text-slate-900">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5 mb-3">
        <Award className="h-4 w-4 text-purple-600" />
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
          Division Ranking (Earnings Achievement %)
        </h3>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-12 text-[10px] font-bold uppercase text-slate-500 px-1">
          <span className="col-span-1">RANK</span>
          <span className="col-span-3">DIVISION</span>
          <span className="col-span-5">ACHIEVEMENT %</span>
          <span className="col-span-2 text-right">VS BP (PTS)</span>
          <span className="col-span-1 text-right">STATUS</span>
        </div>

        {data.map((item) => (
          <div
            key={item.division}
            className="grid grid-cols-12 items-center rounded-lg border border-slate-100 bg-slate-50/60 p-2.5 text-xs hover:bg-slate-100/80 transition-colors"
          >
            <span className="col-span-1 font-bold text-blue-600 font-mono text-[11px]">
              {item.rank}
            </span>
            <span className="col-span-3 font-semibold text-slate-800 text-[11px]">
              {item.division}
            </span>

            {/* Achievement Bar matching Screenshot 1 */}
            <div className="col-span-5 pr-2">
              <div className="flex justify-between text-[10px] font-mono text-slate-700 font-medium mb-0.5">
                <span>{item.achievement}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  style={{ width: `${item.achievement}%` }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>
            </div>

            <span className="col-span-2 text-right font-mono text-[11px] text-rose-600 font-bold">
              {item.vsBP}
            </span>

            {/* Status dot */}
            <div className="col-span-1 flex justify-end">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  item.status === 'favourable'
                    ? 'bg-emerald-500'
                    : item.status === 'watch'
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
