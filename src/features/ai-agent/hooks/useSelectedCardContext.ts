import { useDashboardStore } from '@/features/dashboard/store/dashboardStore'
import { AgentRequestContext } from '../types/agent.types'

/**
 * Reads dashboard selection via selector hook (one-way dependency from dashboard to agent).
 */
export function useSelectedCardContext(userQuery = ''): AgentRequestContext | null {
  const cards = useDashboardStore((state) => state.cards)
  const selectedCardId = useDashboardStore((state) => state.selectedCardId)

  if (!selectedCardId) {
    return {
      cardId: 'all',
      metricKey: 'all',
      cardTitle: 'Overall Eastern Railway MCDO Overview',
      userQuery,
    }
  }

  const selectedCard = cards.find((c) => c.id === selectedCardId)

  if (!selectedCard) {
    return {
      cardId: selectedCardId,
      metricKey: 'general',
      cardTitle: 'Eastern Railway Financial Dashboard',
      userQuery,
    }
  }

  return {
    cardId: selectedCard.id,
    metricKey: selectedCard.metricKey,
    cardTitle: selectedCard.title,
    rawData: selectedCard.rawData,
    userQuery,
  }
}
