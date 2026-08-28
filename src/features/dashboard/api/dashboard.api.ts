import {
  SummaryCardData,
  MonthlyHeatmapRow,
  MonthlyTrendData,
  DivisionRankingData,
  QuarterlySnapshotData,
  WaterfallItem,
} from '../types/dashboard.types'

// Mock database containing exact data matching the Eastern Railway Screenshot 1
export const MOCK_SUMMARY_CARDS: SummaryCardData[] = [
  {
    id: 'card-gross-earnings',
    title: 'GROSS EARNINGS YTD / FY',
    subtitle: 'Cumulative to Month',
    value: '54,214.20',
    unit: 'Cr',
    totalBudget: '1,22,974.02 Cr',
    metricKey: 'gross_earnings',
    trend: { direction: 'down', percent: -9.41 },
    vsTargetText: 'vs BP: -9.41% (-5,632.24 Cr)',
    statusBadge: { text: 'CRITICAL', variant: 'critical' },
    sparkline: [4200, 4350, 4100, 4400, 4300, 4500, 4600, 5100, 6800, 6900, 5200],
    rawData: [
      { stream: 'Passenger (Suburban & Mail)', budgetPlan: 45200.0, actual: 38940.5, variance: -6259.5, varPct: -13.85, divisionLeader: 'Howrah (₹14,200 Cr)' },
      { stream: 'Goods / Freight Traffic (Coal, Steel, Ore)', budgetPlan: 68500.0, actual: 63150.2, variance: -5349.8, varPct: -7.81, divisionLeader: 'Asansol (₹28,900 Cr)' },
      { stream: 'Other Coaching (Parcel, Luggage, Postal)', budgetPlan: 4800.0, actual: 4420.3, variance: -379.7, varPct: -7.91, divisionLeader: 'Sealdah (₹1,850 Cr)' },
      { stream: 'Sundry Earnings (Land Lease, Commercial, Scrap)', budgetPlan: 4474.02, actual: 2315.4, variance: -2158.62, varPct: -48.25, divisionLeader: 'HQ (₹1,120 Cr)' },
    ],
  },
  {
    id: 'card-working-expense',
    title: 'TOTAL WORKING EXPENSE YTD',
    subtitle: 'Cumulative to Month',
    value: '95,919.97',
    unit: 'Cr',
    totalBudget: '2,09,397.78 Cr',
    metricKey: 'working_expense',
    trend: { direction: 'up', percent: 1.92 },
    vsTargetText: 'vs BP: +1.92% (-1,874.18 Cr)',
    statusBadge: { text: 'FAVOURABLE', variant: 'favourable' },
    sparkline: [8800, 8900, 8750, 8600, 8500, 8700, 9200, 9800, 10200, 9900, 9100],
    rawData: [
      { primaryUnit: 'Staff Salaries & Allowances (Demands 3-10)', budgetPlan: 52000.0, actual: 51200.4, variance: 799.6, savingsPct: 1.54, remarks: 'Controlled overtime & vacancy management' },
      { primaryUnit: 'Fuel & Traction Energy (Electric & Diesel)', budgetPlan: 26500.0, actual: 25140.2, variance: 1359.8, savingsPct: 5.13, remarks: '100% Electrification energy regeneration benefits' },
      { primaryUnit: 'Repairs & Maintenance (Rolling Stock, P-Way)', budgetPlan: 18400.0, actual: 19120.5, variance: -720.5, savingsPct: -3.92, remarks: 'Intensive monsoon track renewals in Howrah & Malda' },
      { primaryUnit: 'Operating Expenses & Station Management', budgetPlan: 8497.78, actual: 8058.87, variance: 438.91, savingsPct: 5.16, remarks: 'Strict budgetary austerity on store procurement' },
    ],
  },
  {
    id: 'card-operating-ratio',
    title: 'OPERATING RATIO YTD',
    subtitle: 'Efficiency Percentage',
    value: '1873.71%',
    unit: '',
    totalBudget: 'Target: 148.89%',
    metricKey: 'operating_ratio',
    trend: { direction: 'up', percent: 192.62 },
    vsTargetText: 'vs Target: +192.62 pts',
    statusBadge: { text: 'CRITICAL', variant: 'critical' },
    sparkline: [1780, 1810, 1850, 1890, 1920, 1880, 1860, 1910, 1870, 1840, 1873],
    rawData: [
      { segment: 'Suburban Passenger (Howrah & Sealdah Commuter)', operatingRatio: 2840.5, targetOR: 185.0, primaryBurden: 'High frequency EMU operations at subsidized fares' },
      { segment: 'Non-Suburban Mail / Express Services', operatingRatio: 1420.2, targetOR: 110.0, primaryBurden: 'Concessionary travel and terminal maintenance overhead' },
      { segment: 'Freight Operations (Coal & Container Corridors)', operatingRatio: 74.8, targetOR: 68.5, primaryBurden: 'Healthy operating profit margin subsidizing passenger losses' },
      { segment: 'Overall Eastern Railway Network Consolidated', operatingRatio: 1873.71, targetOR: 148.89, primaryBurden: 'Heavy suburban network density (Sealdah 18M daily riders)' },
    ],
  },
  {
    id: 'card-budget-achievement',
    title: 'BUDGET ACHIEVEMENT',
    subtitle: 'Of Earnings Target',
    value: '44.09%',
    unit: '',
    totalBudget: '54,214.20 Cr YTD / 1,22,974.02 Cr',
    metricKey: 'budget_achievement',
    trend: { direction: 'flat', percent: 44.09 },
    vsTargetText: '54,214.20 Cr YTD | 1,22,974.02 Cr Target',
    statusBadge: { text: 'ON TRACK', variant: 'favourable' },
    sparkline: [12, 18, 24, 29, 34, 38, 41, 42, 43, 44, 44.09],
    rawData: [
      { division: 'Malda (MLDT)', targetCr: 8400.0, achievedCr: 7828.8, pct: 93.2, rank: 1, keyDriver: 'Stone chips & jute freight loading' },
      { division: 'HQ / Zonal (ER-HQ)', targetCr: 4500.0, achievedCr: 4117.5, pct: 91.5, rank: 2, keyDriver: 'Centralized scrap auction & siding lease' },
      { division: 'Asansol (ASN)', targetCr: 48500.0, achievedCr: 44086.5, pct: 90.9, rank: 3, keyDriver: 'ECL Coal loading & Steel plant sidings' },
      { division: 'Howrah (HWH)', targetCr: 36500.0, achievedCr: 32412.0, pct: 88.8, rank: 4, keyDriver: 'Major coaching terminal & freight loops' },
      { division: 'Sealdah (SDAH)', targetCr: 25074.02, achievedCr: 21714.1, pct: 86.6, rank: 5, keyDriver: 'World busiest suburban network congestion' },
    ],
  },
]

export const MOCK_MONTHLY_HEATMAP: MonthlyHeatmapRow[] = [
  { category: 'Passenger', apr: -16.1, may: -17.0, jun: -17.7, jul: -17.5, aug: -15.5, sep: -15.5, oct: -13.8, nov_dec: -12.8, jan_feb: -4.5, mar: -0.4 },
  { category: 'Goods', apr: -8.2, may: -7.3, jun: -7.5, jul: -8.3, aug: -8.8, sep: -8.6, oct: -8.9, nov_dec: -8.7, jan_feb: -6.2, mar: -5.1 },
  { category: 'Sundry', apr: -52.1, may: -36.0, jun: -16.8, jul: -23.7, aug: -16.7, sep: -18.7, oct: -16.9, nov_dec: -8.2, jan_feb: -12.3, mar: 9.8 },
  { category: 'Gross Earnings', apr: -14.6, may: -12.5, jun: -12.4, jul: -13.4, aug: -12.7, sep: -12.5, oct: -12.0, nov_dec: -11.1, jan_feb: -6.4, mar: -3.1 },
  { category: 'Total Working Expense', apr: -1.3, may: -0.4, jun: 2.3, jul: 1.5, aug: 0.6, sep: -1.9, oct: -2.3, nov_dec: -7.1, jan_feb: -3.1, mar: -0.1 },
  { category: 'Operating Ratio', apr: 15.6, may: 13.8, jun: 16.8, jul: 17.2, aug: 15.1, sep: 12.1, oct: 11.0, nov_dec: 4.5, jan_feb: 3.5, mar: 3.1 },
]

export const MOCK_MONTHLY_TRENDS: MonthlyTrendData[] = [
  { month: 'Apr', grossEarnings: 820, workingExpense: 1950, earningsBudget: 950 },
  { month: 'May', grossEarnings: 890, workingExpense: 1680, earningsBudget: 980 },
  { month: 'Jun', grossEarnings: 880, workingExpense: 1720, earningsBudget: 970 },
  { month: 'Jul', grossEarnings: 850, workingExpense: 1540, earningsBudget: 990 },
  { month: 'Aug', grossEarnings: 920, workingExpense: 1480, earningsBudget: 1010 },
  { month: 'Sep', grossEarnings: 910, workingExpense: 1900, earningsBudget: 1040 },
  { month: 'Oct', grossEarnings: 890, workingExpense: 1650, earningsBudget: 1020 },
  { month: 'Nov/Dec', grossEarnings: 1850, workingExpense: 2420, earningsBudget: 1980 },
  { month: 'Jan/Feb', grossEarnings: 1890, workingExpense: 2200, earningsBudget: 1940 },
  { month: 'Mar', grossEarnings: 1380, workingExpense: 1050, earningsBudget: 1420 },
]

export const MOCK_DIVISION_RANKINGS: DivisionRankingData[] = [
  { rank: 1, division: 'Malda', achievement: 93.2, vsBP: -6.8, status: 'favourable' },
  { rank: 2, division: 'HQ', achievement: 91.5, vsBP: -8.5, status: 'favourable' },
  { rank: 3, division: 'Asansol', achievement: 90.9, vsBP: -9.1, status: 'watch' },
  { rank: 4, division: 'Howrah', achievement: 88.8, vsBP: -11.2, status: 'critical' },
  { rank: 5, division: 'Sealdah', achievement: 86.6, vsBP: -13.4, status: 'critical' },
]

export const MOCK_QUARTERLY_SNAPSHOTS: QuarterlySnapshotData[] = [
  { quarter: 'Q1', period: 'Apr-Jun', earningsVsBP: '-12.4%', expenseVsBP: '+2.3%', operatingRatio: '198.0%', status: 'CRITICAL' },
  { quarter: 'Q2', period: 'Jul-Sep', earningsVsBP: '-12.5%', expenseVsBP: '-0.0%', operatingRatio: '193.3%', status: 'CRITICAL' },
  { quarter: 'Q3', period: 'Oct-Dec', earningsVsBP: '-8.4%', expenseVsBP: '-10.4%', operatingRatio: '176.7%', status: 'CRITICAL' },
  { quarter: 'Q4', period: 'Jan-Mar', earningsVsBP: '+24.8%', expenseVsBP: '+50.1%', operatingRatio: '163.5%', status: 'WATCH' },
]

export const MOCK_WATERFALL_ITEMS: WaterfallItem[] = [
  { name: 'BP Earnings (YTD)', amount: 11692.44, isTotal: true },
  { name: 'Passenger', amount: -13.45 },
  { name: 'Other Coaching', amount: -48.11 },
  { name: 'Goods', amount: -362.97 },
  { name: 'Sundry', amount: 62.84 },
  { name: 'Net Variance (YTD)', amount: 11330.75, isTotal: true },
]

// Pure async mock API functions
export async function getSummaryCards(): Promise<SummaryCardData[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return MOCK_SUMMARY_CARDS
}

export async function getCardDetail(id: string): Promise<SummaryCardData | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_SUMMARY_CARDS.find((c) => c.id === id)
}

export async function getMonthlyHeatmap(): Promise<MonthlyHeatmapRow[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_MONTHLY_HEATMAP
}

export async function getMonthlyTrends(): Promise<MonthlyTrendData[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_MONTHLY_TRENDS
}

export async function getDivisionRankings(): Promise<DivisionRankingData[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_DIVISION_RANKINGS
}

export async function getQuarterlySnapshots(): Promise<QuarterlySnapshotData[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_QUARTERLY_SNAPSHOTS
}

export async function getYtdWaterfall(): Promise<WaterfallItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_WATERFALL_ITEMS
}
