import { Skeleton } from "@/components/ui/skeleton";

export const AboutUsBannerSkeleton = () => (
  <div className="relative w-full">
    <Skeleton className="absolute w-full h-[21rem] max-h-[21rem] object-cover" />
    <div className="min-h-[27.875rem] h-full w-full relative m-auto max-w-[90vw] rounded-b-[2.6875rem] flex text-center items-center justify-center px-12 py-14 bg-muted/30">
      <div className="flex flex-col items-center gap-4 max-w-[39.25rem] w-full">
        <Skeleton className="h-8 w-2/3 mb-2" />
        <Skeleton className="h-5 w-1/2 mb-2" />
        <Skeleton className="h-10 w-32 mt-2 rounded-full" />
      </div>
    </div>
  </div>
);
