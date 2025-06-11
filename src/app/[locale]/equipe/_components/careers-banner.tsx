"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Clock, Heart, Users, Map } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const CareersBanner = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "design" | "business">("tech");

  // Filtrar vagas com base na aba ativa
  const filteredJobs = jobOpenings.filter((job) => job.department === activeTab);

  return (
    <div className="w-full bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[76.8125rem] mx-auto">
          <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center mb-8">
            <span className="body-title">Carreiras</span>
            <span className="heading-03-bold">Junte-se ao nosso time</span>
            <span className="body-title-light">
              Estamos sempre à procura de talentos apaixonados para fazer parte da nossa jornada. Confira nossas vagas
              em aberto e venha construir o futuro da gestão de academias conosco.
            </span>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex bg-card p-6 rounded-lg border border-border">
                <benefit.icon className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="body-title-bold mb-1">{benefit.title}</h3>
                  <p className="body-paragraph text-foreground/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Abas de departamentos */}
          <div className="flex justify-center space-x-2 mb-8">
            <button
              className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTab === "tech" ? "bg-primary text-white" : "bg-muted/50 hover:bg-muted/70"}`}
              onClick={() => setActiveTab("tech")}
            >
              Tecnologia
            </button>
            <button
              className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTab === "design" ? "bg-primary text-white" : "bg-muted/50 hover:bg-muted/70"}`}
              onClick={() => setActiveTab("design")}
            >
              Design
            </button>
            <button
              className={`px-5 py-2 rounded-full transition-all duration-300 ${activeTab === "business" ? "bg-primary text-white" : "bg-muted/50 hover:bg-muted/70"}`}
              onClick={() => setActiveTab("business")}
            >
              Negócios
            </button>
          </div>

          {/* Lista de vagas */}
          <div className="w-full space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="body-title-bold">{job.title}</h3>
                      <p className="body-callout text-foreground/80">
                        {job.location} • {job.type}
                      </p>
                    </div>
                    <Link href={`/carreiras/${job.id}`} className="inline-block">
                      <Button variant="outline" size="sm" className="gap-1">
                        Ver vaga <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="body-paragraph mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="bg-muted/50 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-card rounded-lg border border-border">
                <p className="body-title-bold">Não há vagas abertas neste departamento no momento.</p>
                <p className="body-paragraph text-foreground/80 mt-2">
                  Envie seu currículo para nosso banco de talentos por e-mail:{" "}
                  <span className="text-primary">carreiras@nonodan.com</span>
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="body-paragraph mb-4">
              Não encontrou a vaga ideal? Envie seu currículo para nosso banco de talentos!
            </p>
            <Button>Enviar Currículo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "Gerencie seu tempo de forma que você seja mais produtivo e mantenha seu equilíbrio pessoal.",
  },
  {
    icon: Heart,
    title: "Plano de Saúde",
    description: "Oferecemos plano de saúde completo para você e seus dependentes, porque saúde vem em primeiro lugar.",
  },
  {
    icon: Users,
    title: "Ambiente Inclusivo",
    description: "Valorizamos a diversidade e trabalhamos para criar um ambiente onde todos se sintam bem-vindos.",
  },
];

const jobOpenings = [
  {
    id: "dev-fullstack-01",
    title: "Desenvolvedor(a) Full Stack",
    description:
      "Buscamos desenvolvedor(a) com experiência em React, Node.js e bancos de dados SQL para trabalhar no desenvolvimento de novas funcionalidades do nosso sistema de gestão.",
    location: "Remoto",
    type: "Tempo integral",
    department: "tech",
    skills: ["React", "Node.js", "TypeScript", "SQL", "Git"],
  },
  {
    id: "mobile-dev-02",
    title: "Desenvolvedor(a) Mobile",
    description:
      "Venha desenvolver a experiência do nosso aplicativo para alunos e professores, ampliando recursos e melhorando a usabilidade em Android e iOS.",
    location: "São Paulo, SP",
    type: "Tempo integral",
    department: "tech",
    skills: ["React Native", "Flutter", "API REST", "UI/UX"],
  },
  {
    id: "ux-designer-01",
    title: "UX/UI Designer",
    description:
      "Procuramos um designer apaixonado por criar interfaces intuitivas e atraentes para nosso ecossistema de produtos digitais.",
    location: "Remoto / São Paulo",
    type: "Tempo integral",
    department: "design",
    skills: ["Figma", "Design Systems", "User Research", "Prototipagem"],
  },
  {
    id: "product-manager-01",
    title: "Product Manager",
    description:
      "Lidere o desenvolvimento de produtos que transformam a maneira como academias são geridas, desde a concepção até o lançamento.",
    location: "São Paulo, SP",
    type: "Tempo integral",
    department: "business",
    skills: ["Gestão de produtos", "Análise de dados", "Metodologias ágeis", "Road mapping"],
  },
];
