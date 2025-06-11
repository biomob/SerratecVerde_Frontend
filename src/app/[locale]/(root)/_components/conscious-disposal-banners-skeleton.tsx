import { Skeleton } from "@/components/ui/skeleton";

export const ConsciousDisposalBatteriesBannerSkeleton = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <Skeleton className="h-8 w-2/3 mb-2" />
      <Skeleton className="h-5 w-1/2 mb-2" />
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Skeleton className="w-[260px] h-[180px] md:w-[420px] md:h-[320px] rounded-[var(--radius)]" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
      </div>
    </div>
  </div>
);

export const ConsciousDisposalElectronicsBannerSkeleton = ConsciousDisposalBatteriesBannerSkeleton;
