import { Skeleton } from "@/components/ui/skeleton";

export const OurValuesBannerSkeleton = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <Skeleton className="h-8 w-2/3 mb-2" />
      <Skeleton className="h-5 w-1/2 mb-2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-6 bg-card/30 rounded-[var(--radius)] border border-border shadow-md"
        >
          <Skeleton className="p-3 w-10 h-10 rounded-lg mb-2" />
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);
