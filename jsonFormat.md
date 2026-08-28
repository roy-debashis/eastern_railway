# Eastern Railway MCDO Dashboard — Complete JSON Data Contract

This document contains the consolidated API response schema and sample JSON data for the dashboard.

---

```json
{
  "summaryCards": [
    {
      "id": "card-gross-earnings",
      "title": "GROSS EARNINGS YTD / FY",
      "subtitle": "Cumulative to Month",
      "value": "54,214.20",
      "unit": "Cr",
      "totalBudget": "1,22,974.02 Cr",
      "metricKey": "gross_earnings",
      "trend": {
        "direction": "down",
        "percent": -9.41
      },
      "vsTargetText": "vs BP: -9.41% (-5,632.24 Cr)",
      "statusBadge": {
        "text": "CRITICAL",
        "variant": "critical"
      },
      "sparkline": [4200, 4350, 4100, 4400, 4300, 4500, 4600, 5100, 6800, 6900, 5200],
      "rawData": [
        {
          "stream": "Passenger (Suburban & Mail)",
          "budgetPlan": 45200.0,
          "actual": 38940.5,
          "variance": -6259.5,
          "varPct": -13.85,
          "divisionLeader": "Howrah (₹14,200 Cr)"
        },
        {
          "stream": "Goods / Freight Traffic (Coal, Steel, Ore)",
          "budgetPlan": 68500.0,
          "actual": 63150.2,
          "variance": -5349.8,
          "varPct": -7.81,
          "divisionLeader": "Asansol (₹28,900 Cr)"
        },
        {
          "stream": "Other Coaching (Parcel, Luggage, Postal)",
          "budgetPlan": 4800.0,
          "actual": 4420.3,
          "variance": -379.7,
          "varPct": -7.91,
          "divisionLeader": "Sealdah (₹1,850 Cr)"
        },
        {
          "stream": "Sundry Earnings (Land Lease, Commercial, Scrap)",
          "budgetPlan": 4474.02,
          "actual": 2315.4,
          "variance": -2158.62,
          "varPct": -48.25,
          "divisionLeader": "HQ (₹1,120 Cr)"
        }
      ]
    },
    {
      "id": "card-working-expense",
      "title": "TOTAL WORKING EXPENSE YTD",
      "subtitle": "Cumulative to Month",
      "value": "95,919.97",
      "unit": "Cr",
      "totalBudget": "2,09,397.78 Cr",
      "metricKey": "working_expense",
      "trend": {
        "direction": "up",
        "percent": 1.92
      },
      "vsTargetText": "vs BP: +1.92% (-1,874.18 Cr)",
      "statusBadge": {
        "text": "FAVOURABLE",
        "variant": "favourable"
      },
      "sparkline": [8800, 8900, 8750, 8600, 8500, 8700, 9200, 9800, 10200, 9900, 9100],
      "rawData": [
        {
          "primaryUnit": "Staff Salaries & Allowances (Demands 3-10)",
          "budgetPlan": 52000.0,
          "actual": 51200.4,
          "variance": 799.6,
          "savingsPct": 1.54,
          "remarks": "Controlled overtime & vacancy management"
        },
        {
          "primaryUnit": "Fuel & Traction Energy (Electric & Diesel)",
          "budgetPlan": 26500.0,
          "actual": 25140.2,
          "variance": 1359.8,
          "savingsPct": 5.13,
          "remarks": "100% Electrification energy regeneration benefits"
        }
      ]
    },
    {
      "id": "card-operating-ratio",
      "title": "OPERATING RATIO YTD",
      "subtitle": "Efficiency Percentage",
      "value": "1873.71%",
      "unit": "",
      "totalBudget": "Target: 148.89%",
      "metricKey": "operating_ratio",
      "trend": {
        "direction": "up",
        "percent": 192.62
      },
      "vsTargetText": "vs Target: +192.62 pts",
      "statusBadge": {
        "text": "CRITICAL",
        "variant": "critical"
      },
      "sparkline": [1780, 1810, 1850, 1890, 1920, 1880, 1860, 1910, 1870, 1840, 1873]
    },
    {
      "id": "card-budget-achievement",
      "title": "BUDGET ACHIEVEMENT",
      "subtitle": "Of Earnings Target",
      "value": "44.09%",
      "unit": "",
      "totalBudget": "54,214.20 Cr YTD / 1,22,974.02 Cr",
      "metricKey": "budget_achievement",
      "trend": {
        "direction": "flat",
        "percent": 44.09
      },
      "vsTargetText": "54,214.20 Cr YTD | 1,22,974.02 Cr Target",
      "statusBadge": {
        "text": "ON TRACK",
        "variant": "favourable"
      },
      "sparkline": [12, 18, 24, 29, 34, 38, 41, 42, 43, 44, 44.09]
    }
  ],
  "monthlyTrends": [
    { "month": "Apr", "grossEarnings": 820, "workingExpense": 1950, "earningsBudget": 950 },
    { "month": "May", "grossEarnings": 890, "workingExpense": 1680, "earningsBudget": 980 },
    { "month": "Jun", "grossEarnings": 880, "workingExpense": 1720, "earningsBudget": 970 },
    { "month": "Jul", "grossEarnings": 850, "workingExpense": 1540, "earningsBudget": 990 },
    { "month": "Aug", "grossEarnings": 920, "workingExpense": 1480, "earningsBudget": 1010 },
    { "month": "Sep", "grossEarnings": 910, "workingExpense": 1900, "earningsBudget": 1040 },
    { "month": "Oct", "grossEarnings": 890, "workingExpense": 1650, "earningsBudget": 1020 },
    { "month": "Nov/Dec", "grossEarnings": 1850, "workingExpense": 2420, "earningsBudget": 1980 },
    { "month": "Jan/Feb", "grossEarnings": 1890, "workingExpense": 2200, "earningsBudget": 1940 },
    { "month": "Mar", "grossEarnings": 1380, "workingExpense": 1050, "earningsBudget": 1420 }
  ],
  "monthlyHeatmap": [
    { "category": "Passenger", "apr": -16.1, "may": -17.0, "jun": -17.7, "jul": -17.5, "aug": -15.5, "sep": -15.5, "oct": -13.8, "nov_dec": -12.8, "jan_feb": -4.5, "mar": -0.4 },
    { "category": "Goods", "apr": -8.2, "may": -7.3, "jun": -7.5, "jul": -8.3, "aug": -8.8, "sep": -8.6, "oct": -8.9, "nov_dec": -8.7, "jan_feb": -6.2, "mar": -5.1 },
    { "category": "Sundry", "apr": -52.1, "may": -36.0, "jun": -16.8, "jul": -23.7, "aug": -16.7, "sep": -18.7, "oct": -16.9, "nov_dec": -8.2, "jan_feb": -12.3, "mar": 9.8 },
    { "category": "Gross Earnings", "apr": -14.6, "may": -12.5, "jun": -12.4, "jul": -13.4, "aug": -12.7, "sep": -12.5, "oct": -12.0, "nov_dec": -11.1, "jan_feb": -6.4, "mar": -3.1 },
    { "category": "Total Working Expense", "apr": -1.3, "may": -0.4, "jun": 2.3, "jul": 1.5, "aug": 0.6, "sep": -1.9, "oct": -2.3, "nov_dec": -7.1, "jan_feb": -3.1, "mar": -0.1 },
    { "category": "Operating Ratio", "apr": 15.6, "may": 13.8, "jun": 16.8, "jul": 17.2, "aug": 15.1, "sep": 12.1, "oct": 11.0, "nov_dec": 4.5, "jan_feb": 3.5, "mar": 3.1 }
  ],
  "demandWiseAnalytics": [
    {
      "demand": "Demand 9",
      "broadHead": "Operating Expenses – Traffic",
      "actualCr": 0.0,
      "bpCr": 918.78,
      "varPct": 94.01,
      "aiNote": "Major outlier; very large shortfall requiring reconciliation/examination."
    },
    {
      "demand": "Demand 7",
      "broadHead": "Repairs & Maintenance of Plant & Equipment",
      "actualCr": 0.0,
      "bpCr": 225.2,
      "varPct": -27.29,
      "aiNote": "High excess over BP and significant YoY increase."
    },
    {
      "demand": "Demand 12",
      "broadHead": "Miscellaneous Working Expenses",
      "actualCr": 0.0,
      "bpCr": 258.27,
      "varPct": -26.22,
      "aiNote": "Large excess over BP and sharp YoY increase."
    },
    {
      "demand": "Demand 6",
      "broadHead": "Repairs & Maintenance of Carriages & Wagons",
      "actualCr": 0.0,
      "bpCr": 423.89,
      "varPct": -19.59,
      "aiNote": "Above BP, though lower than last year."
    },
    {
      "demand": "Demand 4",
      "broadHead": "Repairs & Maintenance of Permanent Way & Works",
      "actualCr": 0.0,
      "bpCr": 355.3,
      "varPct": -18.41,
      "aiNote": "Significant excess over BP; moderate YoY increase."
    },
    {
      "demand": "Demand 8",
      "broadHead": "Operating Expenses – Rolling Stock & Equipment",
      "actualCr": 0.0,
      "bpCr": 379.65,
      "varPct": -12.28,
      "aiNote": "Above BP and last year’s level."
    },
    {
      "demand": "Demand 13",
      "broadHead": "Provident Fund, Pension & Other Retirement Benefits",
      "actualCr": 0.0,
      "bpCr": 159.15,
      "varPct": 4.43,
      "aiNote": "Below BP and below last year."
    }
  ],
  "aiHighlights": [
    {
      "type": "gross_earnings",
      "title": "Gross Earnings",
      "metric": "96.9%",
      "delta": "-361.69 Cr",
      "text": "Gross Earnings YTD achieved 96.9% of target, facing a deficit of -361.69 Cr vs BP plan."
    },
    {
      "type": "goods_earnings",
      "title": "Goods earnings",
      "metric": "Shortfall",
      "delta": "-363.97 Cr",
      "text": "Goods earnings represents the largest shortfall contributor with -363.97 Cr variance YTD."
    },
    {
      "type": "operating_ratio",
      "title": "Operating Ratio",
      "metric": "153.51%",
      "target": "148.89%",
      "delta": "+4.62 pts",
      "text": "Operating Ratio stands at 153.51% against BP projection of 148.89% (+4.62 pts above target)."
    },
    {
      "type": "working_expense",
      "title": "Working Expenses",
      "metric": "Within Ceiling",
      "delta": "+15.61 Cr",
      "text": "Working Expenses are within the budget ceiling, reporting a positive savings of +15.61 Cr (under budget by 0.1%)."
    }
  ],
  "divisionRankings": [
    { "rank": 1, "division": "Malda", "achievement": 93.2, "vsBP": -6.8, "status": "favourable" },
    { "rank": 2, "division": "HQ", "achievement": 91.5, "vsBP": -8.5, "status": "favourable" },
    { "rank": 3, "division": "Asansol", "achievement": 90.9, "vsBP": -9.1, "status": "watch" },
    { "rank": 4, "division": "Howrah", "achievement": 88.8, "vsBP": -11.2, "status": "critical" },
    { "rank": 5, "division": "Sealdah", "achievement": 86.6, "vsBP": -13.4, "status": "critical" }
  ],
  "annualTargetAchievement": {
    "grossEarningsYtdPct": 44.09,
    "grossEarningsTargetCr": "1,22,974 Cr",
    "workingExpenseYtdPct": 45.8,
    "workingExpenseBudgetCr": "2,09,398 Cr"
  },
  "forecastOutlook": {
    "forecastGrossEarnings": "₹62,346.33 Cr",
    "forecastGrossEarningsVsBP": "vs BP -49.30%",
    "forecastWorkingExpense": "₹1,09,348.77 Cr",
    "forecastWorkingExpenseVsBP": "vs BP +47.78%",
    "forecastOR": "175.4%",
    "forecastORVsBP": "vs BP -1,505.70 pts",
    "probabilityOfTarget": "0%",
    "status": "At Risk"
  }
}
```
