"use client";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export const TeamFoundersBanner = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full relative">
      <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center">
        <span className="body-title">Fundadores</span>
        <span className="heading-03-bold">Conheça os fundadores da NonoDan</span>
        <span className="body-title-light">
          Nossa empresa foi fundada por profissionais apaixonados por tecnologia e pelo universo das artes marciais, com
          o objetivo de revolucionar a gestão de academias.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {founders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden mb-4 border-2 border-primary">
              <Image src={founder.image} alt={founder.name} className="object-cover" fill />
            </div>
            <h3 className="body-title-bold text-center">{founder.name}</h3>
            <p className="body-callout text-foreground/80 text-center">{founder.position}</p>
            <div className="flex space-x-2 mt-2">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={founder.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
            <p className="body-paragraph text-center mt-4 max-w-[300px]">{founder.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const founders = [
  {
    name: "João Silva",
    position: "CEO & Co-fundador",
    image: "/img/wallpaper/founder1.jpg",
    bio: "Mestre de Jiu-Jitsu com 20 anos de experiência. Apaixonado por tecnologia, buscou uma solução para modernizar a gestão de academias.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Maria Oliveira",
    position: "CTO & Co-fundadora",
    image: "/img/wallpaper/founder2.jpg",
    bio: "Engenheira de software com especialização em UX/UI. Combina sua paixão por desenvolvimento com anos de experiência em treinamento.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Pedro Santos",
    position: "Diretor de Operações",
    image: "/img/wallpaper/founder3.jpg",
    bio: "Administrador com experiência em gestão de negócios esportivos. Responsável pela estratégia de crescimento e parcerias estratégicas.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];
