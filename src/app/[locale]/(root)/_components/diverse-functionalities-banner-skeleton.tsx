import { Skeleton } from "@/components/ui/skeleton";

export const DiverseFunctionalitesBannerSkeleton = () => (
  <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-center">
    <Skeleton className="w-[196px] h-[196px] md:h-[425px] rounded-xl" />
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Skeleton className="h-8 w-2/3 mb-2" />
      <Skeleton className="h-5 w-1/2 mb-4" />
      <div className="flex flex-col gap-3 items-start">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  </div>
);
