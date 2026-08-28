import { Skeleton } from '@/components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="space-y-4 p-6 bg-[#040d1a] min-h-screen">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800">
        <Skeleton className="h-10 w-72 bg-slate-800" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-28 bg-slate-800" />
          <Skeleton className="h-9 w-32 bg-slate-800" />
          <Skeleton className="h-9 w-32 bg-slate-800" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 space-y-3">
          <Skeleton className="h-32 w-full bg-slate-800" />
          <Skeleton className="h-32 w-full bg-slate-800" />
          <Skeleton className="h-32 w-full bg-slate-800" />
          <Skeleton className="h-32 w-full bg-slate-800" />
        </div>
        <div className="col-span-6 space-y-4">
          <Skeleton className="h-72 w-full bg-slate-800" />
          <Skeleton className="h-64 w-full bg-slate-800" />
        </div>
        <div className="col-span-3 space-y-4">
          <Skeleton className="h-44 w-full bg-slate-800" />
          <Skeleton className="h-44 w-full bg-slate-800" />
          <Skeleton className="h-52 w-full bg-slate-800" />
        </div>
      </div>
    </div>
  )
}
