"use client";
import { Shield, Heart, Lightbulb, Users, Rocket, CheckCircle2 } from "lucide-react";

export const ValuesBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Valores que Nos Guiam</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Os princípios fundamentais que norteiam nossas decisões e ações diárias, definindo quem somos como empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Shield size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Confiabilidade</h4>
          <p className="body-paragraph text-foreground/80">
            Construímos relacionamentos baseados na confiança, entregando consistentemente o que prometemos e protegendo
            os dados de nossos clientes com os mais altos padrões de segurança.
          </p>
        </div>

        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Lightbulb size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Inovação</h4>
          <p className="body-paragraph text-foreground/80">
            Estamos sempre um passo à frente, buscando novas ideias e tecnologias para melhorar nossos produtos e criar
            valor para nossos clientes em um ambiente de constante evolução.
          </p>
        </div>

        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Users size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Colaboração</h4>
          <p className="body-paragraph text-foreground/80">
            Acreditamos no poder da colaboração, trabalhando juntos com nossos clientes e parceiros para criar soluções
            que realmente atendam às suas necessidades específicas.
          </p>
        </div>

        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Heart size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Compromisso</h4>
          <p className="body-paragraph text-foreground/80">
            Somos apaixonados pelo que fazemos e nos comprometemos totalmente com o sucesso dos nossos clientes, indo
            além do esperado para garantir resultados excepcionais.
          </p>
        </div>

        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <CheckCircle2 size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Excelência</h4>
          <p className="body-paragraph text-foreground/80">
            Buscamos constantemente a excelência em nossos produtos e serviços, garantindo que cada detalhe seja pensado
            para oferecer a melhor experiência possível ao usuário.
          </p>
        </div>

        <div className="group flex flex-col items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-card/50 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Rocket size={28} className="text-primary" />
          </div>
          <h4 className="heading-05-bold text-foreground">Impacto</h4>
          <p className="body-paragraph text-foreground/80">
            Buscamos criar um impacto positivo real, ajudando academias e centros de treinamento a alcançarem seu pleno
            potencial através da tecnologia e inovação.
          </p>
        </div>
      </div>
    </div>
  );
};
