"use client";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO & Fundador",
    bio: "Empreendedor com mais de 10 anos de experiência em tecnologia e gestão de academias. Visionário por trás da NonoDan.",
    imageSrc: "/img/wallpaper/1.jpeg",
    linkedin: "https://linkedin.com/in/carlossilva",
    email: "carlos@nonodan.com",
  },
  {
    id: 2,
    name: "Ana Rodrigues",
    role: "CTO",
    bio: "Especialista em desenvolvimento de software com foco em experiência do usuário e soluções para o mercado fitness.",
    imageSrc: "/img/wallpaper/2.jpeg",
    linkedin: "https://linkedin.com/in/anarodrigues",
    email: "ana@nonodan.com",
  },
  {
    id: 3,
    name: "Rafael Souza",
    role: "Diretor de Produto",
    bio: "Apaixonado por inovação, lidera o desenvolvimento de novos recursos para melhorar a experiência dos usuários.",
    imageSrc: "/img/wallpaper/3.jpeg",
    linkedin: "https://linkedin.com/in/rafaelsouza",
    email: "rafael@nonodan.com",
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Gerente de Sucesso do Cliente",
    bio: "Dedicada a garantir que nossos clientes aproveitem ao máximo todas as funcionalidades da plataforma.",
    imageSrc: "/img/wallpaper/4.jpeg",
    linkedin: "https://linkedin.com/in/julianacosta",
    email: "juliana@nonodan.com",
  },
];

export const OurTeamBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Nossa Equipe</h3>
        <p className="body-paragraph text-foreground/80 max-w-[50rem]">
          Conheça os talentosos profissionais por trás de toda a ação, dedicados a revolucionar o mundo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col bg-card/30 backdrop-blur-sm rounded-[var(--radius)] border border-border shadow-md transition-all duration-300 hover:border-primary/20 overflow-hidden"
          >
            <div className="relative w-full aspect-square">
              <Image src={member.imageSrc} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="body-title-bold text-foreground">{member.name}</h4>
              <span className="body-callout text-primary font-medium">{member.role}</span>
              <p className="body-callout text-foreground/80 mt-1">{member.bio}</p>
              <div className="flex items-center gap-2 mt-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Mail size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline" className="gap-2">
          Junte-se à Nossa Equipe
        </Button>
      </div>
    </div>
  );
};
