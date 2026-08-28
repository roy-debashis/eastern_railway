import { useDashboardStore } from '@/features/dashboard/store/dashboardStore'
import { useUIStore } from '@/store/uiStore'
import { FINANCIAL_YEARS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  Train,
  LogOut,
  ExternalLink,
  UserCheck,
} from 'lucide-react'

const MONTHS_LIST = [
  'All Months (YTD)',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov/Dec',
  'Jan/Feb',
  'Mar',
]

export function Header() {
  const financialYear = useDashboardStore((state) => state.financialYear)
  const setFinancialYear = useDashboardStore((state) => state.setFinancialYear)
  const selectedMonth = useDashboardStore((state) => state.selectedMonth)
  const setSelectedMonth = useDashboardStore((state) => state.setSelectedMonth)

  const userSession = useUIStore((state) => state.userSession)
  const navigateTo = useUIStore((state) => state.navigateTo)
  const logout = useUIStore((state) => state.logout)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#040d1a]/95 backdrop-blur-md px-4 py-2.5 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Branding & Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-900/50">
            <Train className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-extrabold tracking-tight text-white font-sans">
                Eastern Railway Financial Performance Dashboard
              </h1>
              <span className="hidden sm:inline-flex items-center rounded-xs bg-blue-950 px-1.5 py-0.5 text-[9px] font-bold text-sky-300 border border-blue-800/60">
                OFFICIAL
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              MCDO Review - Monthly
            </div>
          </div>
        </div>

        {/* Right: Filters (FY, Month, Data Coverage) + User Profile + Actions */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Financial Year Selector */}
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
              FINANCIAL YEAR
            </span>
            <select
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
              className="h-7 rounded border border-slate-700 bg-slate-900 px-2.5 text-xs font-medium text-slate-200 focus:border-sky-500 focus:outline-hidden"
            >
              {FINANCIAL_YEARS.map((fy) => (
                <option key={fy.id} value={fy.id}>
                  {fy.name}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
              MONTH
            </span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="h-7 rounded border border-slate-700 bg-slate-900 px-2.5 text-xs font-medium text-slate-200 focus:border-sky-500 focus:outline-hidden"
            >
              {MONTHS_LIST.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Data Coverage Badge */}
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
              DATA COVERAGE
            </span>
            <div className="flex h-7 items-center rounded border border-blue-900/60 bg-blue-950/80 px-2.5 text-[11px] font-bold text-sky-300">
              Apr 2025 - Mar 2026
            </div>
          </div>

          {/* User Profile Info Card */}
          {userSession && (
            <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/80 border border-blue-700 text-sky-300">
                <UserCheck className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-100 leading-tight">
                  {userSession.name}
                </span>
                <span className="text-[10px] text-sky-400 font-medium leading-tight">
                  {userSession.designation}
                </span>
              </div>
            </div>
          )}

          {/* Navigation Action Buttons */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigateTo('landing')}
              title="Return to Eastern Railway Public Portal"
              className="h-7 text-xs border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white px-2.5"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Portal
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={logout}
              title="Log out from Railway MCDO Session"
              className="h-7 text-xs bg-rose-900/80 hover:bg-rose-800 text-rose-100 border border-rose-700/50 px-2.5"
            >
              <LogOut className="mr-1.5 h-3.5 w-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
