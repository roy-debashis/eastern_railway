import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-slate-800 bg-[#0c1b30] p-4 space-y-3">
      <div className="flex justify-between items-start">
        <div className="space-y-1.5 flex-1">
          <Skeleton className="h-3 w-32 bg-slate-800" />
          <Skeleton className="h-2.5 w-20 bg-slate-800/60" />
        </div>
        <Skeleton className="h-7 w-7 rounded-md bg-slate-800" />
      </div>
      <Skeleton className="h-7 w-28 bg-slate-800" />
      <Skeleton className="h-10 w-full bg-slate-800/40" />
      <div className="flex justify-between items-center pt-1">
        <Skeleton className="h-3 w-24 bg-slate-800" />
        <Skeleton className="h-4 w-16 rounded bg-slate-800" />
      </div>
    </div>
  )
}
