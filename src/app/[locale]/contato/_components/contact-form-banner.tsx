"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ContactFormBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementado o envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="heading-02-bold text-primary mb-4">Fale Conosco</h2>{" "}
          <p className="text-foreground body-02-regular mb-6">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais rápido possível. Estamos à
            disposição para esclarecer dúvidas, fornecer informações sobre nossos serviços e ajudá-lo a encontrar a
            melhor solução para a gestão da sua academia.
          </p>
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="heading-04-semibold mb-4 text-primary">Horário de Atendimento</h3>
            <ul className="space-y-2 body-02-regular">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary"></span>
                <span>Segunda a Sexta: 08:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary"></span>
                <span>Sábado: 09:00 - 13:00</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary"></span>
                <span>Suporte 24/7 para clientes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className=" p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              {" "}
              <label htmlFor="name" className="block body-02-semibold mb-2 text-foreground">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {" "}
                <label htmlFor="email" className="block body-02-semibold mb-2 text-foreground">
                  E-mail
                </label>{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="phone" className="block body-02-semibold mb-2 text-foreground">
                  Telefone
                </label>{" "}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              {" "}
              <label htmlFor="subject" className="block body-02-semibold mb-2 text-foreground">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="info">Informações</option>
                <option value="demo">Agendar demonstração</option>
                <option value="support">Suporte técnico</option>
                <option value="sales">Vendas</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div>
              {" "}
              <label htmlFor="message" className="block body-02-semibold mb-2 text-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
