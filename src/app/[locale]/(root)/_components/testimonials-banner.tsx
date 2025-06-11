"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Paula Souza",
    role: "Colaboradora",
    company: "T2M (Equipe Azul)",
    content:
      "Participar da coleta seletiva no polo Serratec me fez repensar meus hábitos. É gratificante ver o quanto conseguimos reciclar juntos e ainda ajudar minha equipe na gincana!",
    imageSrc: "/img/wallpaper/5.jpeg",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Gestor Ambiental",
    company: "Empresa Parceira Serratec",
    content:
      "A mobilização das empresas e colaboradores é inspiradora. O projeto Serratec Verde mostra que pequenas atitudes coletivas geram grandes resultados para o meio ambiente.",
    imageSrc: "/img/wallpaper/6.jpeg",
  },
  {
    id: 3,
    name: "Juliana Ribeiro",
    role: "Equipe Verde",
    company: "T2M",
    content:
      "A gincana trouxe um clima de união e competição saudável. Cada entrega de material reciclável é uma vitória para nossa equipe e para o planeta!",
    imageSrc: "/img/wallpaper/7.jpeg",
  },
  {
    id: 4,
    name: "Eduardo Lima",
    role: "Equipe BIOMOB",
    company: "BIOMOB",
    content:
      "É muito bom ver o engajamento de todos. O registro transparente das pesagens motiva as empresas a participarem cada vez mais!",
    imageSrc: "/img/wallpaper/8.jpeg",
  },
];

export const TestimonialsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full bg-card/30 backdrop-blur-sm py-16">
      <div className="max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw] flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="heading-03-bold text-foreground">O que dizem nossos participantes</h3>
          <p className="body-paragraph text-foreground/80 max-w-[50rem]">
            Veja como a coleta seletiva e a gincana T2M estão transformando o polo Serratec e inspirando atitudes mais
            sustentáveis no dia a dia das empresas e colaboradores.
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3 relative aspect-square max-w-[400px]">
              <div className="w-full h-full rounded-[var(--radius)] overflow-hidden shadow-lg relative">
                <Image
                  src={testimonials[currentSlide].imageSrc}
                  alt={testimonials[currentSlide].name}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="body-title-bold">{testimonials[currentSlide].name}</h4>
                    <p className="body-callout text-white/90">
                      {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-6 p-6 bg-card rounded-[var(--radius)] border border-border shadow-md relative">
              <Quote className="text-primary/20 w-12 h-12 absolute -top-6 -left-2" />
              <p className="body-paragraph text-foreground/80 mt-4">{testimonials[currentSlide].content}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (isAnimating) return;
                        setIsAnimating(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary scale-110 shadow-sm shadow-primary/20"
                          : "bg-none border border-border hover:border-primary/50"
                      }`}
                      aria-label={`Ir para o depoimento ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    disabled={isAnimating}
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="transition-transform duration-300" size={18} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    disabled={isAnimating}
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="transition-transform duration-300" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
