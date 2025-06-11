"use client";
import { Heart, Coffee, Users, Star } from "lucide-react";

export const TeamCultureBanner = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full relative">
      <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center">
        <span className="body-title">Nossa Cultura</span>
        <span className="heading-03-bold">Valores que nos guiam</span>
        <span className="body-title-light">
          Na NonoDan, acreditamos que uma cultura forte é a base para o sucesso. Nossos valores orientam nossas decisões
          e moldam a maneira como trabalhamos juntos.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full">
        {cultureValues.map((value, index) => (
          <div
            key={index}
            className="flex p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300"
          >
            <div className="mr-4 mt-1">
              <div className="p-3 rounded-full bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="body-title-bold mb-2">{value.title}</h3>
              <p className="body-paragraph text-foreground/80">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const cultureValues = [
  {
    icon: Heart,
    title: "Paixão pelo que fazemos",
    description:
      "Somos apaixonados por tecnologia e pelo universo das academias. Colocamos nosso coração em cada linha de código e em cada interação com nossos clientes.",
  },
  {
    icon: Users,
    title: "Colaboração e respeito",
    description:
      "Acreditamos que as melhores soluções surgem quando trabalhamos juntos. Respeitamos a diversidade de ideias e experiências em nossa equipe.",
  },
  {
    icon: Star,
    title: "Excelência em tudo",
    description:
      "Buscamos a excelência em cada aspecto do nosso trabalho, desde o desenvolvimento de software até o suporte ao cliente. Não nos contentamos com menos que o melhor.",
  },
  {
    icon: Coffee,
    title: "Equilíbrio e bem-estar",
    description:
      "Valorizamos o equilíbrio entre vida pessoal e profissional. Uma equipe saudável e feliz é fundamental para criar produtos incríveis.",
  },
];
