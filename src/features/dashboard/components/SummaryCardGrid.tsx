import { SummaryCardData } from '../types/dashboard.types'
import { SummaryCard } from './SummaryCard'
import { CardSkeleton } from './CardSkeleton'
import { useDashboardStore } from '../store/dashboardStore'

interface SummaryCardGridProps {
  cards: SummaryCardData[]
  isLoading?: boolean
}

export function SummaryCardGrid({ cards, isLoading }: SummaryCardGridProps) {
  const selectedCardId = useDashboardStore((state) => state.selectedCardId)
  const selectCard = useDashboardStore((state) => state.selectCard)

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3.5">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-3.5">
      {cards.map((card) => (
        <SummaryCard
          key={card.id}
          card={card}
          isSelected={selectedCardId === card.id}
          onSelect={selectCard}
        />
      ))}
    </div>
  )
}
