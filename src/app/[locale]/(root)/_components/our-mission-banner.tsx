"use client";
import { Heart, Target, Lightbulb } from "lucide-react";

export const OurMissionBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Como participar?</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Entregue seus resíduos recicláveis (plástico, papel/papelão e alumínio) na área de coleta do polo Serratec. As
          pesagens são feitas pela equipe BIOMOB e registradas por empresa. Colaboradores da T2M: informem sua equipe
          para pontuar na gincana!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Target size={24} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Nossa Missão</h4>
          <p className="body-paragraph text-foreground/80">
            Co Mobilizar empresas, colaboradores e parceiros do polo Serratec para promover a coleta seletiva,
            incentivar a educação ambiental e gerar impacto positivo na comunidade.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Lightbulb size={24} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Nossa Visão</h4>
          <p className="body-paragraph text-foreground/80">
            Tornar o polo Serratec referência em sustentabilidade, engajamento e responsabilidade ambiental, inspirando
            outras comunidades e empresas a adotarem práticas conscientes.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20 text-center md:col-span-2 lg:col-span-1">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart size={24} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Nosso Propósito</h4>
          <p className="body-paragraph text-foreground/80">
            Construir um ambiente colaborativo onde cada entrega de resíduo reciclável contribui para um futuro mais
            sustentável, saudável e consciente para todos.
          </p>
        </div>
      </div>
    </div>
  );
};
