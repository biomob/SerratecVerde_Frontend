import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ParticipatingCompaniesBannerSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
        {/* Gráfico de pizza skeleton */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-center min-h-[350px]">
          <div className="relative w-[250px] h-[250px] flex items-center justify-center">
            <Skeleton className="rounded-full w-[180px] h-[180px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <Skeleton className="h-7 w-20 mb-1" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
        {/* Lista de empresas skeleton */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3 w-full">
          <div className="flex flex-col mb-2">
            <Skeleton className="h-6 w-56 mb-2" />
            <Skeleton className="h-4 w-80" />
          </div>
          {[...Array(5)].map((_, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <div className="flex gap-4 justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Skeleton className="rounded-full w-[3.75rem] h-[3.75rem]" />
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-40" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-[1px] w-full bg-border" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-4 w-64 mt-4" />
    </div>
  );
}
