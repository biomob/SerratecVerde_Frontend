import { Skeleton } from "@/components/ui/skeleton";

export const OurTeamBannerSkeleton = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <Skeleton className="h-8 w-2/3 mb-2" />
      <Skeleton className="h-5 w-1/2 mb-2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col bg-card/30 rounded-[var(--radius)] border border-border shadow-md overflow-hidden"
        >
          <Skeleton className="w-full aspect-square" />
          <div className="p-4 flex flex-col gap-2">
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <div className="flex items-center gap-2 mt-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <Skeleton className="h-10 w-40 rounded-full" />
    </div>
  </div>
);
