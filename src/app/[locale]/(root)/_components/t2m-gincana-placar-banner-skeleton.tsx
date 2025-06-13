import { Skeleton } from "@/components/ui/skeleton";

export function T2MGincanaPlacarBannerSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <Skeleton className="h-8 w-2/3 mb-2" />
        <Skeleton className="h-5 w-1/2 mb-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-full h-auto flex flex-col p-6 bg-card/30 rounded-[var(--radius)] border border-border shadow-md"
          >
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-4 w-1/3 mb-2" />
            <div className="flex flex-col gap-3 mt-4">
              {[1, 2, 3, 4, 5, 6].map((j) => (
                <Skeleton key={j} className="h-10 w-4/5 rounded-lg" />
              ))}
            </div>
            <div className="flex gap-2 mt-6">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-4 w-2/3 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
