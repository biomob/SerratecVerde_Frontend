"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const TeamBanner = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/img/wallpaper/image.png"
        alt="Banner Nossa Equipe"
        fill
        className="object-cover absolute max-h-[21rem]"
        priority
      />
      <div className="min-h-[27.875rem] h-full w-full relative m-auto max-w-[90vw] rounded-b-[2.6875rem] bg-[url(/img/wallpaper/image1.png)] object-cover flex text-center items-center justify-center px-12 py-14">
        <div className="flex flex-col items-center gap-3 max-w-[39.25rem]">
          <h3 className="heading-03-bold text-[hsl(var(--neutral-lightest))]">Conheça Nossa Equipe</h3>
          <h5 className="heading-05-medium text-[hsl(var(--neutral-mid))]">Os talentos e mentes por trás da NonoDan</h5>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Button variant={"outline"}>Junte-se a Nós</Button>
            <Button>Fale Conosco</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
