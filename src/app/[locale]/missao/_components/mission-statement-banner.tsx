"use client";
import Image from "next/image";

export const MissionStatementBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Nossa Declaração de Missão</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Entenda o que nos motiva e por que existimos como empresa, nossa razão de ser e o impacto que queremos causar
          no mundo.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video rounded-[var(--radius)] overflow-hidden shadow-lg">
            <Image src="/img/wallpaper/6.jpeg" alt="Nossa Missão" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="body-title-bold">Impacto Real</h4>
                <p className="body-callout text-white/90">
                  Nossa missão vai além do software - queremos transformar vidas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <blockquote className="relative p-6 bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border/30 shadow-md">
              <span className="text-6xl text-primary/20 absolute top-2 left-2">&quot;</span>
              <p className="body-title-medium text-foreground/90 relative z-10 pl-4 pr-4">
                Simplificar e otimizar a gestão de academias e escolas de treinamento, fornecendo ferramentas intuitivas
                que conectam professores e alunos, melhorando a experiência de todos os envolvidos e contribuindo para
                uma sociedade mais saudável e ativa.
              </p>
              <span className="text-6xl text-primary/20 absolute bottom-0 right-4">&quot;</span>
            </blockquote>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="heading-05-bold text-foreground">Por que isso importa?</h4>
            <p className="body-paragraph text-foreground/80">
              Acreditamos que o sucesso das academias e escolas de treinamento está diretamente ligado à qualidade da
              experiência oferecida aos seus alunos. Quando professores podem se concentrar no ensino e não na
              burocracia, quando alunos têm acesso fácil aos seus treinos e progresso, e quando administradores podem
              tomar decisões baseadas em dados concretos, todos ganham.
            </p>
            <p className="body-paragraph text-foreground/80">
              Nossa missão é remover as barreiras tecnológicas e administrativas que impedem academias e escolas de
              treinamento de alcançarem seu pleno potencial, proporcionando ferramentas que facilitam o dia a dia e
              permitem o crescimento sustentável do negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
