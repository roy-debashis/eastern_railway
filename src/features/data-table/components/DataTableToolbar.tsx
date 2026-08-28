import { Input } from '@/components/ui/input'
import { Search, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DataTableToolbarProps {
  globalFilter: string
  setGlobalFilter: (value: string) => void
  totalRows: number
  onExport?: () => void
}

export function DataTableToolbar({
  globalFilter,
  setGlobalFilter,
  totalRows,
  onExport,
}: DataTableToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-2 py-2">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
        <Input
          placeholder="Filter records..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="h-8 pl-8 text-xs bg-slate-900/80 border-slate-700 text-slate-200 placeholder:text-slate-500"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-400 font-mono">
          {totalRows} records
        </span>
        {onExport && (
          <Button
            size="sm"
            variant="outline"
            onClick={onExport}
            className="h-7 text-xs border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
          >
            <Download className="mr-1 h-3 w-3" />
            CSV
          </Button>
        )}
      </div>
    </div>
  )
}
