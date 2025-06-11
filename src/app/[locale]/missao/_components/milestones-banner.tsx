"use client";
import { Check } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  achievement: string;
}

const milestones: Milestone[] = [
  {
    year: "2018",
    title: "O Início da Jornada",
    description: "Fundação da NonoDan com a visão de transformar a gestão de academias através da tecnologia.",
    achievement: "Primeiro protótipo desenvolvido",
  },
  {
    year: "2019",
    title: "Lançamento Oficial",
    description: "Primeira versão do aplicativo lançada, conectando professores e alunos de forma inovadora.",
    achievement: "10 academias parceiras",
  },
  {
    year: "2020",
    title: "Crescimento e Adaptação",
    description: "Adaptação às mudanças impostas pela pandemia, implementando funcionalidades para treinos remotos.",
    achievement: "Aumento de 200% na base de usuários",
  },
  {
    year: "2021",
    title: "Expansão Regional",
    description: "Expansão para novos estados e aprimoramento da plataforma com recursos de análise de dados.",
    achievement: "Presente em 5 estados brasileiros",
  },
  {
    year: "2022",
    title: "Inovação Contínua",
    description: "Lançamento do dashboard administrativo completo e implementação de recursos avançados de gestão.",
    achievement: "Reconhecimento como startup promissora",
  },
  {
    year: "2023",
    title: "Consolidação no Mercado",
    description: "Consolidação como uma das principais soluções de gestão para academias no Brasil.",
    achievement: "Mais de 30 academias parceiras",
  },
];

export const MilestonesBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Nossa Jornada de Impacto</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Os marcos importantes que definiram nossa trajetória e construíram nossa missão ao longo dos anos.
        </p>
      </div>

      <div className="relative flex flex-col gap-0">
        {/* Linha vertical central */}
        <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 mb-12 relative`}
          >
            {/* Círculo na linha do tempo */}
            <div className="absolute left-[50%] top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>

            {/* Círculo para mobile */}
            <div className="absolute left-[24px] top-[30px] w-6 h-6 rounded-full bg-primary md:hidden flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>

            {/* Conteúdo */}
            <div className="md:w-1/2 flex flex-col ml-16 md:ml-0">
              <div className="flex flex-col gap-3">
                <div className={`flex flex-row items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="px-3 py-1 bg-primary/10 text-primary body-callout-bold rounded-full">
                    {milestone.year}
                  </span>
                  <h4 className="heading-05-bold text-foreground">{milestone.title}</h4>
                </div>
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : ""}`}>
                  <p className="body-paragraph text-foreground/80">{milestone.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="body-callout-medium text-foreground">{milestone.achievement}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Espaço reservado para manter o layout na alternância dos lados */}
            <div className="md:w-1/2 hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
