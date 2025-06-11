import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialsBannerSkeleton = () => (
  <div className="w-full bg-card/30 backdrop-blur-sm ">
    <div className="max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw] flex flex-col items-center gap-12">
      <div className="flex flex-col items-center text-center gap-2">
        <Skeleton className="h-8 w-2/3 mb-2" />
        <Skeleton className="h-5 w-1/2 mb-2" />
      </div>
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3 relative aspect-square max-w-[400px]">
            <Skeleton className="w-full h-full rounded-[var(--radius)]" />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-6 p-6 bg-card rounded-[var(--radius)] border border-border shadow-md relative">
            <Skeleton className="w-12 h-12 absolute -top-6 -left-2 rounded-full" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="w-2.5 h-2.5 rounded-full" />
                ))}
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
