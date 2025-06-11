"use client";
import { CheckCircle2, Shield, Users, Zap, BadgeDollarSign, TrendingUp } from "lucide-react";

export const OurValuesBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Destaques da Coleta Seletiva</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          A coleta seletiva no polo Serratec é uma ação conjunta para promover sustentabilidade, engajamento e
          responsabilidade ambiental entre todas as empresas e colaboradores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Entrega e pesagem organizada</h4>
          <p className="body-callout text-foreground/80">
            A BIOMOB realiza a pesagem e registra o material entregue por cada empresa, garantindo controle e
            organização em todo o processo.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Participação coletiva</h4>
          <p className="body-callout text-foreground/80">
            Todas as empresas do polo participam da ação. Colaboradores da T2M pontuam para suas equipes, promovendo
            engajamento e espírito de equipe.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Coletas semanais</h4>
          <p className="body-callout text-foreground/80">
            As entregas podem ser feitas às terças e quintas-feiras, das 9h às 17h. Programe-se e contribua
            regularmente!
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Gincana T2M</h4>
          <p className="body-callout text-foreground/80">
            As equipes Azul, Verde, Rosa e Vermelha da T2M disputam para ver quem recicla mais. Participe e ajude sua
            equipe a conquistar o destaque!
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <BadgeDollarSign className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Transparência nos resultados</h4>
          <p className="body-callout text-foreground/80">
            Acompanhe periodicamente quanto cada empresa e equipe já reciclou. Os resultados são divulgados para todos,
            promovendo transparência e motivação.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h4 className="body-title-bold text-foreground">Materiais aceitos</h4>
          <p className="body-callout text-foreground/80">
            Plástico, papel/papelão e alumínio são os materiais aceitos. Consulte as orientações para garantir o
            descarte correto e contribuir com a reciclagem.
          </p>
        </div>
      </div>
    </div>
  );
};
