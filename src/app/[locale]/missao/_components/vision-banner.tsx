"use client";
import Image from "next/image";
import { Telescope, TrendingUp, LineChart, Users } from "lucide-react";

export const VisionBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Nossa Visão de Futuro</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Onde queremos chegar e como estamos trabalhando para construir um futuro melhor para o setor de fitness e
          treinamento.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h4 className="heading-05-bold text-foreground flex items-center gap-2">
              <Telescope className="text-primary" size={24} />
              Liderança e Inovação
            </h4>
            <p className="body-paragraph text-foreground/80">
              Ser a plataforma de referência em gestão de academias no Brasil, reconhecida pela inovação, eficiência e
              impacto positivo na qualidade dos serviços oferecidos pelos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md">
              <div className="p-2 bg-primary/10 w-fit rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h5 className="body-title-bold text-foreground">Crescimento Sustentável</h5>
              <p className="body-callout text-foreground/80">
                Expandir nossa atuação mantendo a qualidade e personalização que nos define
              </p>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md">
              <div className="p-2 bg-primary/10 w-fit rounded-lg">
                <LineChart className="w-5 h-5 text-primary" />
              </div>
              <h5 className="body-title-bold text-foreground">Tecnologia de Ponta</h5>
              <p className="body-callout text-foreground/80">
                Integrar IA e análise de dados para oferecer insights mais precisos
              </p>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md md:col-span-2">
              <div className="p-2 bg-primary/10 w-fit rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h5 className="body-title-bold text-foreground">Comunidade Engajada</h5>
              <p className="body-callout text-foreground/80">
                Construir uma comunidade ativa de usuários que contribuam para a evolução contínua da plataforma
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-square max-h-[400px] rounded-[var(--radius)] overflow-hidden shadow-lg">
            <Image src="/img/wallpaper/7.jpeg" alt="Nossa Visão" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-[var(--radius)] max-w-md text-center">
                <h4 className="heading-04-bold text-white mb-2">Visão 2030</h4>
                <p className="body-paragraph text-white/90">
                  Ser líder em soluções tecnológicas para o mercado fitness, presente em mais de 1000 academias em todo
                  o Brasil e expandindo para a América Latina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
