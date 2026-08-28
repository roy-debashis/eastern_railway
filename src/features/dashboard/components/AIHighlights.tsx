import { Lightbulb, TrendingDown, AlertTriangle, BarChart3, Check } from 'lucide-react'

export function AIHighlights() {
  const highlights = [
    {
      icon: <TrendingDown className="h-3.5 w-3.5 text-blue-600" />,
      iconBg: 'bg-blue-100',
      content: (
        <span className="text-xs text-slate-700 leading-snug">
          <strong className="font-bold text-slate-950">Gross Earnings</strong> YTD achieved{' '}
          <strong className="font-bold text-slate-950">96.9%</strong> of target, facing a deficit of{' '}
          <strong className="font-bold text-slate-950">-361.69 Cr</strong> vs BP plan.
        </span>
      ),
    },
    {
      icon: <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />,
      iconBg: 'bg-rose-100',
      content: (
        <span className="text-xs text-slate-700 leading-snug">
          <strong className="font-bold text-slate-950">Goods earnings</strong> represents the largest shortfall contributor with{' '}
          <strong className="font-bold text-slate-950">-363.97 Cr</strong> variance YTD.
        </span>
      ),
    },
    {
      icon: <BarChart3 className="h-3.5 w-3.5 text-amber-600" />,
      iconBg: 'bg-amber-100',
      content: (
        <span className="text-xs text-slate-700 leading-snug">
          <strong className="font-bold text-slate-950">Operating Ratio</strong> stands at{' '}
          <strong className="font-bold text-slate-950">153.51%</strong> against BP projection of{' '}
          <strong className="font-bold text-slate-950">148.89%</strong> (+4.62 pts above target).
        </span>
      ),
    },
    {
      icon: <Check className="h-3.5 w-3.5 text-emerald-600" />,
      iconBg: 'bg-emerald-100',
      content: (
        <span className="text-xs text-slate-700 leading-snug">
          <strong className="font-bold text-slate-950">Working Expenses</strong> are within the budget ceiling, reporting a positive savings of{' '}
          <strong className="font-bold text-slate-950">+15.61 Cr</strong> (under budget by 0.1%).
        </span>
      ),
    },
  ]

  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs text-slate-900">
      {/* Header with yellow lightbulb */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 shadow-xs">
          <Lightbulb className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
        </div>
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 uppercase">
          AI Highlights
        </h3>
      </div>

      {/* Items List matching screenshot */}
      <div className="divide-y divide-slate-100">
        {highlights.map((item, idx) => (
          <div key={idx} className="py-2.5 first:pt-1 last:pb-0 flex items-start gap-3">
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${item.iconBg} mt-0.5 shadow-xs`}
            >
              {item.icon}
            </div>
            <div className="flex-1">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
