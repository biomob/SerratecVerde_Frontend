import { Skeleton } from "@/components/ui/skeleton";

export const OurHistoryBannerSkeleton = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <Skeleton className="h-8 w-2/3 mb-2" />
      <Skeleton className="h-5 w-1/2 mb-2" />
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-1/2">
        <Skeleton className="w-full aspect-video rounded-[var(--radius)]" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <div className="flex items-center gap-6 mt-2">
          <Skeleton className="h-8 w-12 rounded" />
          <Skeleton className="h-8 w-12 rounded" />
          <Skeleton className="h-8 w-12 rounded" />
        </div>
      </div>
    </div>
  </div>
);
