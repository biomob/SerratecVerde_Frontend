"use client";
import { useEffect, useState } from "react";
import { AboutUsBanner } from "@/app/[locale]/(root)/_components/about-us-banner";
import { AboutUsBannerSkeleton } from "@/app/[locale]/(root)/_components/about-us-banner-skeleton";
import { OurHistoryBanner } from "@/app/[locale]/(root)/_components/our-history-banner";
import { OurHistoryBannerSkeleton } from "@/app/[locale]/(root)/_components/our-history-banner-skeleton";
import { OurTeamBanner } from "@/app/[locale]/(root)/_components/our-team-banner";
import { OurTeamBannerSkeleton } from "@/app/[locale]/(root)/_components/our-team-banner-skeleton";
import { OurMissionBanner } from "@/app/[locale]/(root)/_components/our-mission-banner";
import { OurMissionBannerSkeleton } from "@/app/[locale]/(root)/_components/our-mission-banner-skeleton";
import { OurValuesBanner } from "@/app/[locale]/(root)/_components/our-values-banner";
import { OurValuesBannerSkeleton } from "@/app/[locale]/(root)/_components/our-values-banner-skeleton";
import { TestimonialsBanner } from "@/app/[locale]/(root)/_components/testimonials-banner";
import { TestimonialsBannerSkeleton } from "@/app/[locale]/(root)/_components/testimonials-banner-skeleton";
import { Separator } from "@/components/ui/separator";
import { DiverseFunctionalitesBanner } from "@/app/[locale]/(root)/_components/diverse-functionalities-banner";
import { DiverseFunctionalitesBannerSkeleton } from "@/app/[locale]/(root)/_components/diverse-functionalities-banner-skeleton";
import {
  ConsciousDisposalBatteriesBanner,
  ConsciousDisposalElectronicsBanner,
} from "@/app/[locale]/(root)/_components/conscious-disposal-banners";
import {
  ConsciousDisposalBatteriesBannerSkeleton,
  ConsciousDisposalElectronicsBannerSkeleton,
} from "@/app/[locale]/(root)/_components/conscious-disposal-banners-skeleton";

export const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      {isMounted ? <AboutUsBanner /> : <AboutUsBannerSkeleton />}
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        {isMounted ? <OurHistoryBanner /> : <OurHistoryBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <OurMissionBanner /> : <OurMissionBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <OurValuesBanner /> : <OurValuesBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <ConsciousDisposalBatteriesBanner /> : <ConsciousDisposalBatteriesBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <ConsciousDisposalElectronicsBanner /> : <ConsciousDisposalElectronicsBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <DiverseFunctionalitesBanner /> : <DiverseFunctionalitesBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <OurTeamBanner /> : <OurTeamBannerSkeleton />}
        <Separator className="bg-primary" />
        {isMounted ? <TestimonialsBanner /> : <TestimonialsBannerSkeleton />}
      </div>
      <Separator className="bg-primary" />
    </div>
  );
};
