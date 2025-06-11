import { TeamBanner } from "@/app/[locale]/equipe/_components/team-banner";
import { TeamMembersBanner } from "@/app/[locale]/equipe/_components/team-members-banner";
import { TeamFoundersBanner } from "@/app/[locale]/equipe/_components/team-founders-banner";
import { TeamCultureBanner } from "@/app/[locale]/equipe/_components/team-culture-banner";
import { CareersBanner } from "@/app/[locale]/equipe/_components/careers-banner";
import { TeamGalleryBanner } from "@/app/[locale]/equipe/_components/team-gallery-banner";
import { Separator } from "@/components/ui/separator";

export const TeamPage = () => {
  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      <TeamBanner />
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        <TeamFoundersBanner />
        <Separator className="bg-primary" />
        <TeamMembersBanner />
        <Separator className="bg-primary" />
        <TeamCultureBanner />
        <Separator className="bg-primary" />
        <TeamGalleryBanner />
      </div>
      <Separator className="bg-primary" />
      <CareersBanner />
      <Separator className="bg-primary" />
    </div>
  );
};
