import { SummaryCardData } from '../types/dashboard.types'
import { cn } from '@/lib/utils'
import {
  Coins,
  Receipt,
  Percent,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

interface SummaryCardProps {
  card: SummaryCardData
  isSelected: boolean
  onSelect: (id: string) => void
}

function getCardIcon(metricKey: string) {
  switch (metricKey) {
    case 'gross_earnings':
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-xs">
          <Coins className="h-4 w-4" />
        </div>
      )
    case 'working_expense':
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 shadow-xs">
          <Receipt className="h-4 w-4" />
        </div>
      )
    case 'operating_ratio':
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-xs">
          <Percent className="h-4 w-4" />
        </div>
      )
    case 'budget_achievement':
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
          <CheckCircle2 className="h-4 w-4" />
        </div>
      )
    default:
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Coins className="h-4 w-4" />
        </div>
      )
  }
}

// Sparkline SVG renderer matching the screenshot's clean dark curve
function SparklinePath({ data }: { data?: number[] }) {
  if (!data || data.length === 0) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const width = 160
  const height = 30

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * width
      const y = height - ((val - min) / range) * (height - 8) - 4
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg className="w-full h-7 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
      <path
        d={`M ${points}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-800"
      />
    </svg>
  )
}

export function SummaryCard({ card, isSelected, onSelect }: SummaryCardProps) {
  const {
    id,
    title,
    subtitle,
    value,
    unit,
    totalBudget,
    metricKey,
    statusBadge,
    sparkline,
    vsTargetText,
  } = card

  return (
    <div
      onClick={() => onSelect(id)}
      className={cn(
        'group relative cursor-pointer rounded-xl border p-4 transition-all duration-200 select-none bg-white shadow-xs',
        isSelected
          ? 'border-blue-600 ring-2 ring-blue-500 shadow-md'
          : 'border-slate-200/90 hover:border-slate-300'
      )}
    >
      {/* Active AI Context Indicator Banner */}
      {isSelected && (
        <div className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white shadow-md">
          <Sparkles className="h-2.5 w-2.5" />
          Active Agent Focus
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-0.5">
          <h4 className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[10px] text-slate-500 font-medium">{subtitle}</p>
          )}
        </div>
        {getCardIcon(metricKey)}
      </div>

      {/* Value */}
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-sans">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-semibold text-slate-600">{unit}</span>
        )}
      </div>

      {/* Total Budget Reference */}
      {totalBudget && (
        <div className="text-[11px] text-slate-500 font-medium">
          of <span className="font-semibold text-slate-700">{totalBudget}</span>
        </div>
      )}

      {/* Sparkline curve */}
      <div className="my-2.5 transition-colors">
        <SparklinePath data={sparkline} />
      </div>

      {/* Bottom Footer with Status & Variance */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
        <div className="flex items-center gap-1 font-medium truncate max-w-[170px]">
          {card.trend?.direction === 'down' && (
            <span className="text-rose-600 font-semibold truncate flex items-center gap-0.5">
              <TrendingDown className="h-3 w-3 shrink-0" />
              {vsTargetText}
            </span>
          )}
          {card.trend?.direction === 'up' && (
            <span className="text-emerald-700 font-semibold truncate flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3 shrink-0" />
              {vsTargetText}
            </span>
          )}
          {card.trend?.direction === 'flat' && (
            <span className="text-slate-600 truncate">{vsTargetText}</span>
          )}
        </div>

        {statusBadge && (
          <span
            className={`text-[9px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider ${
              statusBadge.variant === 'critical'
                ? 'bg-rose-100 text-rose-700 border border-rose-200'
                : statusBadge.variant === 'favourable'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {statusBadge.text}
          </span>
        )}
      </div>
    </div>
  )
}
