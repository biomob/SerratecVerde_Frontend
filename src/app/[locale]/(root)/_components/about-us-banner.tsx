"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const AboutUsBanner = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/img/wallpaper/recycle-storyset.svg"
        alt="Banner Sobre Nós - Serratec Verde"
        fill
        className="object-cover absolute max-h-[21rem]"
        priority
      />
      <div className="min-h-[27.875rem] h-full w-full relative m-auto max-w-[90vw] rounded-b-[2.6875rem] bg-[url(/img/wallpaper/image1.png)] object-cover flex text-center items-center justify-center px-12 py-14">
        <div className="flex flex-col items-center gap-3 max-w-[39.25rem]">
          <h3 className="heading-03-bold text-[hsl(var(--neutral-lightest))]">
            Serratec Verde: Sustentabilidade em Ação
          </h3>
          <h5 className="heading-05-medium text-[hsl(var(--neutral-mid))]">
            Unindo empresas, colaboradores e parceiros para transformar o polo Serratec em referência em coleta seletiva
            e responsabilidade ambiental.
          </h5>
          <Button>Quero conhecer</Button>
        </div>
      </div>
    </div>
  );
};
