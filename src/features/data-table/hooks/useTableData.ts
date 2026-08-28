import { useState, useMemo } from 'react'
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  ColumnDef,
} from '@tanstack/react-table'

interface UseTableDataProps<T extends Record<string, unknown>> {
  data: T[]
  columns: ColumnDef<T>[]
  pageSize?: number
}

export function useTableData<T extends Record<string, unknown>>({
  data,
  columns,
  pageSize = 5,
}: UseTableDataProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const safeData = useMemo(() => data || [], [data])

  const table = useReactTable({
    data: safeData,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return {
    table,
    globalFilter,
    setGlobalFilter,
  }
}
