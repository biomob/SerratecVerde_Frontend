import { MissionBanner } from "@/app/[locale]/missao/_components/mission-banner";
import { MissionStatementBanner } from "@/app/[locale]/missao/_components/mission-statement-banner";
import { VisionBanner } from "@/app/[locale]/missao/_components/vision-banner";
import { ValuesBanner } from "@/app/[locale]/missao/_components/values-banner";
import { MilestonesBanner } from "@/app/[locale]/missao/_components/milestones-banner";
import { JoinUsBanner } from "@/app/[locale]/missao/_components/join-us-banner";
import { Separator } from "@/components/ui/separator";

export const MissionPage = () => {
  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      <MissionBanner />
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        <MissionStatementBanner />
        <Separator className="bg-primary" />
        <VisionBanner />
        <Separator className="bg-primary" />
        <ValuesBanner />
        <Separator className="bg-primary" />
        <MilestonesBanner />
      </div>
      <Separator className="bg-primary" />
      <JoinUsBanner />
      <Separator className="bg-primary" />
    </div>
  );
};
