import { AgentRequestContext, AgentStructuredResponse } from '../types/agent.types'

/**
 * Intelligent client-side service simulating LLM inference for the Railway MCDO Dashboard.
 * In a real production deployment, this would be an API route calling Claude / Gemini / GPT-4.
 */
export async function queryAgentService(
  request: AgentRequestContext
): Promise<AgentStructuredResponse> {
  // Simulate network streaming/inference latency
  await new Promise((resolve) => setTimeout(resolve, 800))

  const { metricKey, cardTitle, userQuery, rawData } = request
  const queryLower = (userQuery || '').toLowerCase()

  // 1. Gross Earnings Context
  if (metricKey === 'gross_earnings' || queryLower.includes('earnings') || queryLower.includes('revenue')) {
    return {
      summary: `MCDO Gross Earnings Analysis for ${cardTitle}: Eastern Railway has achieved ₹54,214.20 Cr against a target of ₹1,22,974.02 Cr (deficit of -₹5,632.24 Cr or -9.41%). The primary drag is concentrated in Sundry earnings (-48.25%) and Passenger traffic (-13.85%) due to reduced festival special runs in early Q1/Q2.`,
      keyMetrics: [
        { label: 'Total Deficit', value: '₹-5,632.24 Cr', delta: '-9.41% vs BP' },
        { label: 'Freight (Goods)', value: '₹63,150.20 Cr', delta: '92.2% Target achieved' },
        { label: 'Passenger Gap', value: '₹-6,259.50 Cr', delta: '-13.85% vs BP' },
        { label: 'Sundry Shortfall', value: '₹-2,158.62 Cr', delta: '-48.25% vs BP' },
      ],
      insights: [
        'Coal freight loading in Asansol division (ECL sidings) remained robust at 112 rakes/day, compensating for luggage parcel shortfalls.',
        'Sundry revenue suffered due to delays in executing long-term land commercialization policies in Howrah & Sealdah urban fringes.',
        'Passenger earnings rebounded sharply in Nov/Dec and Jan/Feb with 24.8% growth following the launch of 8 new Amrit Bharat and Vande Bharat services.',
      ],
      recommendation:
        'Expedite the pending commercial siding leases in Asansol and launch targeted parcel express rakes between Kolkata and Northeast corridors.',
      tableData: rawData || [
        { Segment: 'Passenger Traffic', BP_Cr: 45200.0, Actual_Cr: 38940.5, Variance_Cr: -6259.5, VarPct: -13.85, Health: 'Adverse' },
        { Segment: 'Freight / Goods', BP_Cr: 68500.0, Actual_Cr: 63150.2, Variance_Cr: -5349.8, VarPct: -7.81, Health: 'Watch' },
        { Segment: 'Other Coaching', BP_Cr: 4800.0, Actual_Cr: 4420.3, Variance_Cr: -379.7, VarPct: -7.91, Health: 'Watch' },
        { Segment: 'Sundry Commercial', BP_Cr: 4474.02, Actual_Cr: 2315.4, Variance_Cr: -2158.62, VarPct: -48.25, Health: 'Critical' },
      ],
    }
  }

  // 2. Working Expense Context
  if (metricKey === 'working_expense' || queryLower.includes('expense') || queryLower.includes('cost') || queryLower.includes('spending')) {
    return {
      summary: `MCDO Total Working Expense Evaluation: Current expenditure stands at ₹95,919.97 Cr against the BP of ₹2,09,397.78 Cr (+1.92% savings, ₹1,874.18 Cr below ceiling). Controlled traction power tariffs and automated crew management kept operational costs favourable.`,
      keyMetrics: [
        { label: 'Net Savings', value: '₹1,874.18 Cr', delta: '+1.92% Favourable' },
        { label: 'Traction Energy', value: '₹25,140.20 Cr', delta: '5.13% Energy Savings' },
        { label: 'Track Maintenance', value: '₹19,120.50 Cr', delta: '-3.92% Monsoon Outlay' },
        { label: 'Staff Wage Bill', value: '₹51,200.40 Cr', delta: '1.54% Vacancy Control' },
      ],
      insights: [
        '100% route electrification across Eastern Railway yielded ₹1,359.80 Cr in net traction fuel savings.',
        'Track renewals and monsoon flood-proofing in Malda and Howrah divisions required a minor overrun (+₹720.50 Cr), pre-approved under safety demands.',
        'Strict curtailment of non-safety store purchases generated ₹438.91 Cr in departmental administrative savings.',
      ],
      recommendation:
        'Sustain current power wheeling arrangements with DVC and WBSEDCL to lock in preferential industrial traction tariffs for the next fiscal year.',
      tableData: rawData || [
        { DemandUnit: 'Staff Salaries (D3-D10)', Budget_Cr: 52000.0, Actual_Cr: 51200.4, Savings_Cr: 799.6, Status: 'Favourable' },
        { DemandUnit: 'Traction Power (D11)', Budget_Cr: 26500.0, Actual_Cr: 25140.2, Savings_Cr: 1359.8, Status: 'Favourable' },
        { DemandUnit: 'Track & Asset Repairs (D4-D7)', Budget_Cr: 18400.0, Actual_Cr: 19120.5, Savings_Cr: -720.5, Status: 'Adverse' },
        { DemandUnit: 'Station & Store Admin', Budget_Cr: 8497.78, Actual_Cr: 8058.87, Savings_Cr: 438.91, Status: 'Favourable' },
      ],
    }
  }

  // 3. Operating Ratio Context
  if (metricKey === 'operating_ratio' || queryLower.includes('operating ratio') || queryLower.includes('or')) {
    return {
      summary: `MCDO Operating Ratio Diagnostic: YTD Operating Ratio is 1873.71% against a target ceiling of 148.89% (+192.62 pts deviation). High commuter suburban density in Sealdah and Howrah divisions (serving over 3.2 million daily commuters at low regulated fares) structurally inflates Eastern Railway's consolidated OR.`,
      keyMetrics: [
        { label: 'Consolidated OR', value: '1873.71%', delta: '+192.62 pts Critical' },
        { label: 'Freight Segment OR', value: '74.80%', delta: 'Highly Profitable' },
        { label: 'Suburban EMU OR', value: '2840.50%', delta: 'Social Obligation' },
        { label: 'Mail/Express OR', value: '1420.20%', delta: 'Cross-Subsidized' },
      ],
      insights: [
        'Freight operations in Asansol and Dhanbad boundary lines remain highly profitable with an operating ratio of 74.80%.',
        'Passenger suburban services absorb 64% of total rolling stock maintenance and crew hours while contributing only 18% to gross earnings.',
        'Pension liabilities and retirement gratuity payments account for approximately 28% of the overall operating burden.',
      ],
      recommendation:
        'Increase freight throughput by deploying 25-tonne axle load wagons on the Durgapur-Dankuni industrial branch and monetize station digital advertising.',
      tableData: rawData || [
        { Sector: 'Suburban Passenger Service', OperatingRatio: 2840.5, TargetOR: 185.0, ProfitMargin: '-1740.5%', NetSubsidy: '₹14,200 Cr' },
        { Sector: 'Mail & Express Trains', OperatingRatio: 1420.2, TargetOR: 110.0, ProfitMargin: '-420.2%', NetSubsidy: '₹4,850 Cr' },
        { Sector: 'Freight Operations (Coal/Goods)', OperatingRatio: 74.8, TargetOR: 68.5, ProfitMargin: '+25.2%', NetSubsidy: '₹19,050 Cr Surplus' },
      ],
    }
  }

  // 4. Budget Achievement / Division Rankings Context
  if (metricKey === 'budget_achievement' || queryLower.includes('division') || queryLower.includes('target') || queryLower.includes('malda') || queryLower.includes('sealdah')) {
    return {
      summary: `Division Earnings & Budget Achievement: Eastern Railway overall stands at 44.09% cumulative achievement. Malda Division ranks #1 at 93.2% achievement of its assigned target, followed by HQ (91.5%) and Asansol (90.9%). Sealdah Division faces heavy suburban congestion and ranks 5th at 86.6%.`,
      keyMetrics: [
        { label: 'Malda Division (#1)', value: '93.20%', delta: '-6.8 pts vs BP' },
        { label: 'Asansol Division (#3)', value: '90.90%', delta: '-9.1 pts vs BP' },
        { label: 'Howrah Division (#4)', value: '88.80%', delta: '-11.2 pts vs BP' },
        { label: 'Sealdah Division (#5)', value: '86.60%', delta: '-13.4 pts vs BP' },
      ],
      insights: [
        'Malda division overachieved in stone chips, dolomite, and agricultural food grain rakes to Bangladesh via Gede-Darshana interchange.',
        'Asansol maintained high coal evocation for NTPC power plants with an average turnaround time of 21.4 hours.',
        'Sealdah division ticketless travel checks yielded ₹42.8 Cr in penalties, but suburban line capacity limits further earnings growth.',
      ],
      recommendation:
        'Implement automated QR-based ticketing kiosks across all Sealdah south section stations and open two new container loading loops at Dankuni.',
      tableData: rawData || [
        { Division: 'Malda (MLDT)', Target_Cr: 8400.0, Achieved_Cr: 7828.8, PctAchieved: 93.2, Rank: 1, Status: 'Favourable' },
        { Division: 'Headquarters (HQ)', Target_Cr: 4500.0, AchievedCr: 4117.5, PctAchieved: 91.5, Rank: 2, Status: 'Favourable' },
        { Division: 'Asansol (ASN)', Target_Cr: 48500.0, AchievedCr: 44086.5, PctAchieved: 90.9, Rank: 3, Status: 'Watch' },
        { Division: 'Howrah (HWH)', Target_Cr: 36500.0, AchievedCr: 32412.0, PctAchieved: 88.8, Rank: 4, Status: 'Critical' },
        { Division: 'Sealdah (SDAH)', Target_Cr: 25074.02, AchievedCr: 21714.1, PctAchieved: 86.6, Rank: 5, Status: 'Critical' },
      ],
    }
  }

  // 5. Default General Intelligence Summary
  return {
    summary: `MCDO Review Assessment for Eastern Railway (${cardTitle || 'All Indicators'}): Reviewing query "${userQuery}". Eastern Railway's net variance against Budget Plan is -₹361.69 Cr (-3.09%), primarily influenced by Sundry and Passenger deficits, offset by strict working expense control and strong Asansol coal freight loading.`,
    keyMetrics: [
      { label: 'Gross Earnings', value: '₹54,214.20 Cr', delta: '-9.41% vs BP' },
      { label: 'Working Expense', value: '₹95,919.97 Cr', delta: '+1.92% Favourable' },
      { label: 'Operating Ratio', value: '1873.71%', delta: '+192.6 pts Critical' },
      { label: 'Leading Division', value: 'Malda (MLDT)', delta: '93.2% Target' },
    ],
    insights: [
      'Operating expenditure has been contained within safe limits with ₹1,874.18 Cr in positive budgetary savings.',
      'Quarterly trajectory indicates recovery: Q1 (-12.4%) improved to Q3 (-8.4%) and Q4 (+24.8% projection).',
      'Goods freight continues to be the principal pillar generating over 65% of overall Eastern Railway revenue.',
    ],
    recommendation:
      'Prioritize high-value industrial freight agreements and enforce rigorous punctuality monitoring on Howrah-New Delhi mainline.',
    tableData: rawData || [
      { KeyIndicator: 'Gross Earnings', YTD_Actual_Cr: 54214.20, BP_Target_Cr: 122974.02, VariancePct: -9.41, Classification: 'Critical' },
      { KeyIndicator: 'Working Expense', YTD_Actual_Cr: 95919.97, BP_Target_Cr: 209397.78, VariancePct: +1.92, Classification: 'Favourable' },
      { KeyIndicator: 'Operating Ratio', YTD_Actual_Cr: '1873.71%', BP_Target_Cr: '148.89%', VariancePct: '+192.6 pts', Classification: 'Critical' },
      { KeyIndicator: 'Division Rank Leader', YTD_Actual_Cr: 'Malda', BP_Target_Cr: '93.2%', VariancePct: '-6.8 pts', Classification: 'Favourable' },
    ],
  }
}
