"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export const JoinUsBanner = () => {
  return (
    <div className="w-full bg-card/30 backdrop-blur-sm py-16">
      <div className="max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw] flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <h5 className="body-title-medium text-foreground">Faça Parte da Nossa Missão</h5>
          </div>

          <h3 className="heading-03-bold text-foreground">Transforme sua Academia com o NonoDan</h3>

          <p className="body-paragraph text-foreground/80">
            Junte-se a nós nessa jornada de transformação e inovação no mundo das academias e centros de treinamento.
            Com o NonoDan, você terá todas as ferramentas necessárias para otimizar sua gestão, melhorar a experiência
            dos seus alunos e impulsionar o crescimento do seu negócio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full">
                <ArrowRight size={16} className="text-primary" />
              </div>
              <span className="body-callout text-foreground/80">
                Sistema completo de gestão de alunos e professores
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full">
                <ArrowRight size={16} className="text-primary" />
              </div>
              <span className="body-callout text-foreground/80">Dashboard intuitivo com informações em tempo real</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full">
                <ArrowRight size={16} className="text-primary" />
              </div>
              <span className="body-callout text-foreground/80">
                Aplicativo mobile para alunos acompanharem treinos
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-full">
                <ArrowRight size={16} className="text-primary" />
              </div>
              <span className="body-callout text-foreground/80">
                Suporte personalizado e treinamento para sua equipe
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="px-6">Agende uma Demonstração</Button>
            <Button variant="outline" className="px-6">
              Entre em Contato
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video max-h-[350px] rounded-[var(--radius)] overflow-hidden shadow-lg border border-border/30">
            <Image src="/img/wallpaper/8.jpeg" alt="Junte-se a Nós" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-card rounded-[var(--radius)] p-4 border border-border/30 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    JM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">
                    PT
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                    AS
                  </div>
                </div>
                <span className="body-callout-medium text-foreground">+50 academias já transformadas</span>
              </div>
              <span className="body-callout text-primary">Seja a próxima!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
