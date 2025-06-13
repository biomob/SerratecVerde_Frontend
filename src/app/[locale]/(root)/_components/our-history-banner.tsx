"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const OurHistoryBanner = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <Image
          src={theme == "light" ? "/img/serrateclight.png" : "/img/serratecdark.png"}
          alt="Ilustração coleta seletiva Serratec Verde"
          width={196}
          height={425}
          className="w-[196px] h-auto "
        />
        <h3 className="heading-03-bold text-foreground">Destaques da Coleta Seletiva: Por que participar?</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          A coleta seletiva no polo Serratec é uma ação conjunta para promover sustentabilidade, engajamento e
          responsabilidade ambiental entre todas as empresas e colaboradores.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video rounded-[var(--radius)] overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="/img/wallpaper/Recycling-amico.svg"
              alt="Coleta seletiva Serratec Verde"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="heading-05-bold text-foreground">Do conceito à realidade</h4>
            <p className="body-callout-medium text-foreground/80">
              Tudo começou com o desejo de transformar o polo Serratec em referência em sustentabilidade. Unimos
              empresas, colaboradores e parceiros para criar uma grande mobilização pela coleta seletiva, promovendo
              educação ambiental, engajamento e impacto positivo para toda a comunidade.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="heading-05-bold text-foreground">Transparência e registro</h4>
            <p className="body-callout-medium text-foreground/80">
              Todas as entregas são registradas por empresa, garantindo transparência e controle. Acompanhe os
              resultados e incentive sua equipe a participar cada vez mais!
            </p>
          </div>

          <div className="flex items-center justify-start gap-6 mt-2">
            <div className="flex flex-col items-center">
              <span className="heading-04-bold text-primary">50+</span>
              <span className="body-callout text-foreground/80">Parceiros</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="heading-04-bold text-primary">500+</span>
              <span className="body-callout text-foreground/80">Participantes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="heading-04-bold text-primary">4000</span>
              <span className="body-callout text-foreground/80">Quilos reciclados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
