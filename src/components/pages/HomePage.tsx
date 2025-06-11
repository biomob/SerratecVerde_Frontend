import { AboutUsBanner } from "@/app/[locale]/(root)/_components/about-us-banner";
import { OurHistoryBanner } from "@/app/[locale]/(root)/_components/our-history-banner";
import { OurTeamBanner } from "@/app/[locale]/(root)/_components/our-team-banner";
import { OurMissionBanner } from "@/app/[locale]/(root)/_components/our-mission-banner";
import { OurValuesBanner } from "@/app/[locale]/(root)/_components/our-values-banner";
import { TestimonialsBanner } from "@/app/[locale]/(root)/_components/testimonials-banner";
import { Separator } from "@/components/ui/separator";
import { DiverseFunctionalitesBanner } from "@/app/[locale]/(root)/_components/diverse-functionalities-banner";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      <AboutUsBanner />
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        <OurHistoryBanner />
        <Separator className="bg-primary" />
        <OurMissionBanner />
        <Separator className="bg-primary" />
        <OurValuesBanner />
        <Separator className="bg-primary" />
        <OurTeamBanner />
        <Separator className="bg-primary" />
        <DiverseFunctionalitesBanner />
        <Separator className="bg-primary" />
        <TestimonialsBanner />
      </div>
      <Separator className="bg-primary" />
    </div>
  );
};
