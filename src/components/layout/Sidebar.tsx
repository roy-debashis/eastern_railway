import {
  Train,
  Coins,
  Receipt,
  Percent,
  Layers,
  HelpCircle,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="sticky top-14 flex h-[calc(100vh-56px)] w-14 shrink-0 flex-col items-center justify-between border-r border-slate-800 bg-[#040d1a] py-4 text-slate-400">
      {/* Top Nav Icons */}
      <div className="flex flex-col items-center space-y-4">
        <button
          type="button"
          title="Eastern Railway Operations"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950 transition-transform hover:scale-105"
        >
          <Train className="h-5 w-5" />
        </button>

        <button
          type="button"
          title="Financial Performance (Active)"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600/30 text-sky-400 border border-sky-500/50 shadow-inner"
        >
          <Coins className="h-4 w-4" />
        </button>

        <button
          type="button"
          title="Working Expenses & Demands"
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <Receipt className="h-4 w-4" />
        </button>

        <button
          type="button"
          title="Operating Ratio & Efficiency"
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <Percent className="h-4 w-4" />
        </button>

        <button
          type="button"
          title="Division Comparisons"
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <Layers className="h-4 w-4" />
        </button>
      </div>

      {/* Bottom Nav: Help & Documentation (AI Button removed as requested) */}
      <div className="flex flex-col items-center space-y-3">
        <button
          type="button"
          title="Help & Documentation"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
        >
          <HelpCircle className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
