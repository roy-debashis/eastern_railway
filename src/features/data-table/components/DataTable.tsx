import { useMemo } from 'react'
import { flexRender, ColumnDef } from '@tanstack/react-table'
import { generateColumnsFromData } from './columns'
import { useTableData } from '../hooks/useTableData'
import { DataTableToolbar } from './DataTableToolbar'
import { DataTablePagination } from './DataTablePagination'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[]
  columns?: ColumnDef<T>[]
  title?: string
  pageSize?: number
  onExportCsv?: () => void
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns: propColumns,
  title,
  pageSize = 5,
}: DataTableProps<T>) {
  const dynamicColumns = useMemo(() => {
    if (propColumns && propColumns.length > 0) return propColumns
    return generateColumnsFromData(data)
  }, [propColumns, data])

  const { table, globalFilter, setGlobalFilter } = useTableData({
    data,
    columns: dynamicColumns,
    pageSize,
  })

  const exportAsCsv = () => {
    if (!data || data.length === 0) return
    const headers = Object.keys(data[0]).join(',')
    const rows = data.map((row) =>
      Object.values(row)
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(',')
    )
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `eastern_railway_data_${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-md border border-slate-800 bg-slate-950/60 p-4 text-center text-xs text-slate-400">
        No records available for tabular rendering.
      </div>
    )
  }

  return (
    <div className="w-full space-y-2 rounded-lg border border-slate-800 bg-slate-950/80 p-3 shadow-inner">
      {title && (
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            {title}
          </h4>
        </div>
      )}

      <DataTableToolbar
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        totalRows={data.length}
        onExport={exportAsCsv}
      />

      <div className="overflow-x-auto rounded-md border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900/90 text-[11px] font-semibold text-slate-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-slate-800">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort()
                  const isSorted = header.column.getIsSorted()

                  return (
                    <th
                      key={header.id}
                      className="px-3 py-2 text-slate-300 select-none whitespace-nowrap"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={`flex items-center space-x-1 ${
                            canSort ? 'cursor-pointer hover:text-sky-400' : ''
                          }`}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <span>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                          {canSort && (
                            <span className="text-slate-500">
                              {isSorted === 'asc' ? (
                                <ArrowUp className="h-3 w-3 text-sky-400" />
                              ) : isSorted === 'desc' ? (
                                <ArrowDown className="h-3 w-3 text-sky-400" />
                              ) : (
                                <ArrowUpDown className="h-3 w-3" />
                              )}
                            </span>
                          )}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-800/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3 py-2 text-slate-200">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={dynamicColumns.length}
                  className="h-16 text-center text-xs text-slate-400"
                >
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
