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
    name: "Fernanda Lima",
    role: "Coordenadora de Sustentabilidade",
    bio: "Apaixonada por meio ambiente, lidera as ações de coleta seletiva e engajamento no polo Serratec.",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    email: "fernanda@serratecverde.com",
  },
  {
    id: 2,
    name: "Lucas Martins",
    role: "Analista de Projetos",
    bio: "Responsável pelo acompanhamento dos resultados e transparência das pesagens.",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    email: "lucas@serratecverde.com",
  },
  {
    id: 3,
    name: "Patrícia Souza",
    role: "Comunicação e Engajamento",
    bio: "Fomenta a participação das empresas e equipes, promovendo campanhas educativas.",
    imageSrc: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "#",
    email: "patricia@serratecverde.com",
  },
  {
    id: 4,
    name: "João Pedro Alves",
    role: "Apoio Operacional",
    bio: "Auxilia na logística das coletas e no suporte às equipes participantes.",
    imageSrc: "https://randomuser.me/api/portraits/men/41.jpg",
    linkedin: "#",
    email: "joao@serratecverde.com",
  },
];

export const OurTeamBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Nossa Equipe</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          Conheça os responsáveis por tornar o Serratec Verde realidade, promovendo sustentabilidade e engajamento no
          polo.
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
