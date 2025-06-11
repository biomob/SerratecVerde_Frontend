"use client";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useState } from "react";

export const TeamMembersBanner = () => {
  const [activeTeam, setActiveTeam] = useState<"development" | "design" | "marketing">("development");

  const filteredTeamMembers = teamMembers.filter((member) => member.team === activeTeam);

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full relative">
      <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center">
        <span className="body-title">Nossa Equipe</span>
        <span className="heading-03-bold">Conheça o time por trás da NonoDan</span>
        <span className="body-title-light">
          Nosso time é composto por profissionais apaixonados e experientes que trabalham diariamente para criar a
          melhor experiência para academias, professores e alunos.
        </span>
      </div>

      <div className="flex space-x-4 my-6">
        <button
          className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTeam === "development" ? "bg-primary text-white" : "bg-muted/30 hover:bg-muted/50"}`}
          onClick={() => setActiveTeam("development")}
        >
          Desenvolvimento
        </button>
        <button
          className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTeam === "design" ? "bg-primary text-white" : "bg-muted/30 hover:bg-muted/50"}`}
          onClick={() => setActiveTeam("design")}
        >
          Design
        </button>
        <button
          className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTeam === "marketing" ? "bg-primary text-white" : "bg-muted/30 hover:bg-muted/50"}`}
          onClick={() => setActiveTeam("marketing")}
        >
          Marketing
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full">
        {filteredTeamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image src={member.image} alt={member.name} className="object-cover" fill />
            </div>
            <h3 className="body-title-bold text-center">{member.name}</h3>
            <p className="body-callout text-foreground/80 text-center mb-2">{member.position}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  // Desenvolvimento
  {
    name: "Ana Souza",
    position: "Desenvolvedora Full Stack",
    image: "/img/wallpaper/team1.jpg",
    linkedin: "https://linkedin.com",
    team: "development",
  },
  {
    name: "Carlos Mendes",
    position: "Engenheiro de Software",
    image: "/img/wallpaper/team2.jpg",
    linkedin: "https://linkedin.com",
    team: "development",
  },
  {
    name: "Rafael Costa",
    position: "Desenvolvedor Mobile",
    image: "/img/wallpaper/team3.jpg",
    linkedin: "https://linkedin.com",
    team: "development",
  },
  {
    name: "Juliana Santos",
    position: "QA & Testes",
    image: "/img/wallpaper/team4.jpg",
    linkedin: "https://linkedin.com",
    team: "development",
  },

  // Design
  {
    name: "Fernanda Lima",
    position: "UI/UX Designer",
    image: "/img/wallpaper/team5.jpg",
    linkedin: "https://linkedin.com",
    team: "design",
  },
  {
    name: "Marcos Alves",
    position: "Designer Gráfico",
    image: "/img/wallpaper/team6.jpg",
    linkedin: "https://linkedin.com",
    team: "design",
  },
  {
    name: "Luiza Teixeira",
    position: "UX Researcher",
    image: "/img/wallpaper/team7.jpg",
    linkedin: "https://linkedin.com",
    team: "design",
  },
  {
    name: "Bruno Oliveira",
    position: "Motion Designer",
    image: "/img/wallpaper/team8.jpg",
    linkedin: "https://linkedin.com",
    team: "design",
  },

  // Marketing
  {
    name: "Camila Borges",
    position: "Marketing Manager",
    image: "/img/wallpaper/team9.jpg",
    linkedin: "https://linkedin.com",
    team: "marketing",
  },
  {
    name: "Ricardo Gomes",
    position: "Growth Specialist",
    image: "/img/wallpaper/team10.jpg",
    linkedin: "https://linkedin.com",
    team: "marketing",
  },
  {
    name: "Tatiana Silva",
    position: "Content Creator",
    image: "/img/wallpaper/team11.jpg",
    linkedin: "https://linkedin.com",
    team: "marketing",
  },
  {
    name: "Lucas Martins",
    position: "Social Media",
    image: "/img/wallpaper/team12.jpg",
    linkedin: "https://linkedin.com",
    team: "marketing",
  },
];
