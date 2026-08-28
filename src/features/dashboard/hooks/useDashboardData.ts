import { useQuery } from '@tanstack/react-query'
import {
  getSummaryCards,
  getMonthlyHeatmap,
  getMonthlyTrends,
  getDivisionRankings,
} from '../api/dashboard.api'
import { getDemandWiseAnalytics } from '../api/demandAnalytics.api'
import { useDashboardStore } from '../store/dashboardStore'
import { useEffect } from 'react'

export function useDashboardData() {
  const setCards = useDashboardStore((state) => state.setCards)

  const cardsQuery = useQuery({
    queryKey: ['dashboard', 'cards'],
    queryFn: getSummaryCards,
  })

  // Sync store with fetched cards
  useEffect(() => {
    if (cardsQuery.data) {
      setCards(cardsQuery.data)
    }
  }, [cardsQuery.data, setCards])

  const heatmapQuery = useQuery({
    queryKey: ['dashboard', 'heatmap'],
    queryFn: getMonthlyHeatmap,
  })

  const trendsQuery = useQuery({
    queryKey: ['dashboard', 'trends'],
    queryFn: getMonthlyTrends,
  })

  const divisionRankingsQuery = useQuery({
    queryKey: ['dashboard', 'divisionRankings'],
    queryFn: getDivisionRankings,
  })

  const demandAnalyticsQuery = useQuery({
    queryKey: ['dashboard', 'demandAnalytics'],
    queryFn: getDemandWiseAnalytics,
  })

  return {
    cards: cardsQuery.data || [],
    isLoadingCards: cardsQuery.isLoading,
    heatmap: heatmapQuery.data || [],
    isLoadingHeatmap: heatmapQuery.isLoading,
    trends: trendsQuery.data || [],
    isLoadingTrends: trendsQuery.isLoading,
    divisionRankings: divisionRankingsQuery.data || [],
    isLoadingDivisionRankings: divisionRankingsQuery.isLoading,
    demandAnalytics: demandAnalyticsQuery.data || [],
    isLoadingDemandAnalytics: demandAnalyticsQuery.isLoading,
    refetchAll: () => {
      cardsQuery.refetch()
      heatmapQuery.refetch()
      trendsQuery.refetch()
      divisionRankingsQuery.refetch()
      demandAnalyticsQuery.refetch()
    },
  }
}
