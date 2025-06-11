"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export const ContactFaqBanner = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Como posso solicitar uma demonstração do sistema NonoDan?",
      answer:
        "Você pode solicitar uma demonstração gratuita através do nosso formulário de contato nesta página, ligando para o nosso número de telefone ou enviando um e-mail para contato@nonodan.com. Nossa equipe entrará em contato em até 24 horas para agendar a demonstração conforme sua disponibilidade.",
    },
    {
      id: 2,
      question: "Qual é o prazo para resposta de contatos via formulário?",
      answer:
        "Nossa equipe se compromete a responder todos os contatos recebidos pelo formulário em até 24 horas úteis. Para assuntos urgentes, recomendamos entrar em contato diretamente por telefone.",
    },
    {
      id: 3,
      question: "Vocês oferecem suporte técnico 24 horas?",
      answer:
        "Sim, para clientes ativos do sistema NonoDan, oferecemos suporte técnico 24/7 através de nossa central de atendimento e chat online. Garantimos respostas rápidas e eficientes para quaisquer problemas ou dúvidas.",
    },
    {
      id: 4,
      question: "Como posso agendar uma visita ao escritório da NonoDan?",
      answer:
        "Você pode agendar uma visita ao nosso escritório através do formulário de contato ou ligando diretamente para nossa central de atendimento. Recomendamos o agendamento com pelo menos 2 dias de antecedência para garantirmos o melhor atendimento.",
    },
    {
      id: 5,
      question: "Vocês oferecem treinamento para uso do sistema?",
      answer:
        "Sim, oferecemos treinamento completo para todos os clientes. O pacote inicial inclui 10 horas de treinamento online com nossa equipe de especialistas. Treinamentos adicionais podem ser contratados conforme necessidade.",
    },
    {
      id: 6,
      question: "O NonoDan oferece período de teste gratuito?",
      answer:
        "Sim, oferecemos um período de teste gratuito de 14 dias com todas as funcionalidades do sistema. Durante este período, você receberá suporte dedicado para configuração e treinamento inicial sem custos adicionais.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw] py-16">
      <div className="text-center mb-12">
        {" "}
        <h2 className="heading-02-bold text-primary mb-4">Perguntas Frequentes</h2>
        <p className="text-foreground body-02-regular max-w-2xl mx-auto">
          Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços e atendimento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faqItems.map((item) => (
          <div key={item.id} className="bg-card rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full p-6 text-left"
            >
              <h3 className="heading-04-semibold text-card-foreground">{item.question}</h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-transform ${
                  openItem === item.id ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {" "}
              <p className="p-6 pt-0 body-02-regular text-foreground">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="body-02-semibold text-foreground mb-4">Não encontrou o que procurava?</p>
        <Button>Entre em contato</Button>
      </div>
    </div>
  );
};
