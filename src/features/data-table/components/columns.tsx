import { ColumnDef } from '@tanstack/react-table'

/**
 * Generates TanStack column definitions dynamically from the keys of tabular row records.
 */
export function generateColumnsFromData<T extends Record<string, unknown>>(
  data: T[]
): ColumnDef<T>[] {
  if (!data || data.length === 0) return []

  const sampleRow = data[0]
  const keys = Object.keys(sampleRow)

  return keys.map((key) => {
    // Format camelCase or snake_case key to human-readable label
    const headerTitle = key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toUpperCase()

    return {
      accessorKey: key,
      header: headerTitle,
      cell: ({ getValue }) => {
        const val = getValue()
        if (typeof val === 'number') {
          return (
            <span className="font-mono font-medium text-slate-200">
              {val.toLocaleString('en-IN')}
            </span>
          )
        }
        if (typeof val === 'boolean') {
          return val ? 'Yes' : 'No'
        }
        if (val === null || val === undefined) {
          return <span className="text-slate-500">—</span>
        }
        // Badge highlight for Status / Health / Classification
        const valStr = String(val)
        if (['Critical', 'Adverse'].includes(valStr)) {
          return (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-950/80 text-rose-300 border border-rose-800/40">
              {valStr}
            </span>
          )
        }
        if (['Favourable', 'Healthy', 'On Track'].includes(valStr)) {
          return (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
              {valStr}
            </span>
          )
        }
        if (['Watch'].includes(valStr)) {
          return (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-950/80 text-amber-300 border border-amber-800/40">
              {valStr}
            </span>
          )
        }
        return <span className="text-slate-300">{valStr}</span>
      },
    }
  })
}
