export interface DemandWiseAnalyticsRow {
  demand: string
  broadHead: string
  actualCr: number | string
  bpCr: number
  varPct: number
  aiNote: string
}

export const MOCK_DEMAND_ANALYTICS: DemandWiseAnalyticsRow[] = [
  {
    demand: 'Demand 9',
    broadHead: 'Operating Expenses – Traffic',
    actualCr: 0.00,
    bpCr: 918.78,
    varPct: 94.01,
    aiNote: 'Major outlier; very large shortfall requiring reconciliation/examination.',
  },
  {
    demand: 'Demand 7',
    broadHead: 'Repairs & Maintenance of Plant & Equipment',
    actualCr: 0.00,
    bpCr: 225.20,
    varPct: -27.29,
    aiNote: 'High excess over BP and significant YoY increase.',
  },
  {
    demand: 'Demand 12',
    broadHead: 'Miscellaneous Working Expenses',
    actualCr: 0.00,
    bpCr: 258.27,
    varPct: -26.22,
    aiNote: 'Large excess over BP and sharp YoY increase.',
  },
  {
    demand: 'Demand 6',
    broadHead: 'Repairs & Maintenance of Carriages & Wagons',
    actualCr: 0.00,
    bpCr: 423.89,
    varPct: -19.59,
    aiNote: 'Above BP, though lower than last year.',
  },
  {
    demand: 'Demand 4',
    broadHead: 'Repairs & Maintenance of Permanent Way & Works',
    actualCr: 0.00,
    bpCr: 355.30,
    varPct: -18.41,
    aiNote: 'Significant excess over BP; moderate YoY increase.',
  },
  {
    demand: 'Demand 8',
    broadHead: 'Operating Expenses – Rolling Stock & Equipment',
    actualCr: 0.00,
    bpCr: 379.65,
    varPct: -12.28,
    aiNote: 'Above BP and last year’s level.',
  },
  {
    demand: 'Demand 13',
    broadHead: 'Provident Fund, Pension & Other Retirement Benefits',
    actualCr: 0.00,
    bpCr: 159.15,
    varPct: 4.43,
    aiNote: 'Below BP and below last year.',
  },
  {
    demand: 'Demand 5',
    broadHead: 'Repairs & Maintenance of Motive Power',
    actualCr: 0.00,
    bpCr: 146.01,
    varPct: -3.38,
    aiNote: 'Broadly in line with BP and last year.',
  },
  {
    demand: 'Demand 3',
    broadHead: 'General Superintendence & Services',
    actualCr: 0.00,
    bpCr: 213.36,
    varPct: -2.17,
    aiNote: 'Marginally above BP; higher than last year.',
  },
]

export async function getDemandWiseAnalytics(): Promise<DemandWiseAnalyticsRow[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return MOCK_DEMAND_ANALYTICS
}
