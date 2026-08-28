import { Table } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2 py-2 text-xs text-slate-400">
      <div className="flex-1 text-[11px] text-muted-foreground">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount() || 1}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="iconSm"
          className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-30"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="iconSm"
          className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-30"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="iconSm"
          className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-30"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="iconSm"
          className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-30"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}
