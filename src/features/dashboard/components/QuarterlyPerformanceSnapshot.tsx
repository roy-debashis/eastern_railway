import { QuarterlySnapshotData } from '../types/dashboard.types'
import { Badge } from '@/components/ui/badge'

interface QuarterlyPerformanceSnapshotProps {
  data: QuarterlySnapshotData[]
  isLoading?: boolean
}

export function QuarterlyPerformanceSnapshot({
  data,
  isLoading,
}: QuarterlyPerformanceSnapshotProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <div className="h-44 rounded-xl border border-slate-800 bg-[#0a1628] p-4 flex items-center justify-center text-xs text-slate-500">
        Loading Quarterly Snapshot...
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0a1628] p-4 shadow-lg">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800/80 pb-2 mb-3">
        Quarterly Performance Snapshot
      </h3>

      <div className="grid grid-cols-4 gap-2">
        {data.map((item) => (
          <div
            key={item.quarter}
            className="flex flex-col items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-2 text-center"
          >
            <div>
              <div className="text-xs font-bold text-sky-400">{item.quarter}</div>
              <div className="text-[9px] text-slate-400">{item.period}</div>
            </div>

            <div className="my-2 space-y-1 w-full text-[10px]">
              <div>
                <div className="text-[8px] uppercase text-slate-500">EARNINGS VS BP</div>
                <div
                  className={`font-mono font-bold ${
                    item.earningsVsBP.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {item.earningsVsBP}
                </div>
              </div>

              <div>
                <div className="text-[8px] uppercase text-slate-500">EXPENSE VS BP</div>
                <div
                  className={`font-mono font-semibold ${
                    item.expenseVsBP.startsWith('+') ? 'text-emerald-400' : 'text-slate-300'
                  }`}
                >
                  {item.expenseVsBP}
                </div>
              </div>

              <div>
                <div className="text-[8px] uppercase text-slate-500">OR</div>
                <div className="font-mono text-slate-200 font-bold">{item.operatingRatio}</div>
              </div>
            </div>

            <Badge
              variant={item.status === 'WATCH' ? 'watch' : 'critical'}
              className="text-[8px] px-1.5 py-0 uppercase"
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
