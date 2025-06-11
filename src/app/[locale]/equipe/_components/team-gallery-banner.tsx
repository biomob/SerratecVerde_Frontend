"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TeamGalleryBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= galleryImages.length ? 0 : prevIndex + 3));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? Math.max(0, galleryImages.length - 3) : prevIndex - 3));
  };

  // Exibir imagens em grupos de 3
  const visibleImages = galleryImages.slice(currentIndex, currentIndex + 3);
  // Preencher com imagens do início se necessário
  while (visibleImages.length < 3) {
    visibleImages.push(galleryImages[visibleImages.length % galleryImages.length]);
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full relative">
      <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center">
        <span className="body-title">Nossa Galeria</span>
        <span className="heading-03-bold">Momentos em equipe</span>
        <span className="body-title-light">
          Confira alguns registros especiais do nosso time trabalhando, celebrando e construindo relações.
        </span>
      </div>

      <div className="w-full relative mt-8">
        <div className="flex justify-between items-center gap-4 md:gap-8">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="flex-1 aspect-[4/3] relative rounded-lg overflow-hidden shadow-md group cursor-pointer transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white body-title-bold">{image.title}</p>
                <p className="text-white/80 body-callout">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={prevImage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 transition-colors duration-300"
            aria-label="Ver imagens anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Indicadores de paginação */}
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === idx
                    ? "bg-primary scale-110"
                    : "bg-none border border-border hover:border-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextImage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 transition-colors duration-300"
            aria-label="Ver próximas imagens"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const galleryImages = [
  {
    src: "/img/wallpaper/1.jpeg",
    alt: "Equipe em reunião de planejamento",
    title: "Planejamento Trimestral",
    description: "Nossa equipe discutindo os próximos passos para o desenvolvimento do produto",
  },
  {
    src: "/img/wallpaper/2.jpeg",
    alt: "Sessão de design thinking",
    title: "Design Sprint",
    description: "Sessão criativa para solucionar desafios de interface do usuário",
  },
  {
    src: "/img/wallpaper/3.jpeg",
    alt: "Confraternização de equipe",
    title: "Happy Hour",
    description: "Momento de descontração após o lançamento de uma nova funcionalidade",
  },
  {
    src: "/img/wallpaper/4.jpeg",
    alt: "Apresentação para clientes",
    title: "Demo Day",
    description: "Apresentando nossas soluções para potenciais parceiros",
  },
  {
    src: "/img/wallpaper/5.jpeg",
    alt: "Hackathon interno",
    title: "Hackathon NonoDan",
    description: "24 horas de inovação e desenvolvimento intenso",
  },
  {
    src: "/img/wallpaper/6.jpeg",
    alt: "Workshop com a equipe",
    title: "Workshop de Inovação",
    description: "Aprendendo novas tecnologias para melhorar nosso produto",
  },
];
