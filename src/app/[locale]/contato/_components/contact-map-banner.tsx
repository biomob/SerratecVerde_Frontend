"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ContactMapBanner = () => {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="heading-02-bold text-primary mb-4">Nossa Localização</h2>{" "}
        <p className="text-foreground body-02-regular max-w-2xl mx-auto">
          Venha conhecer nossa sede e conversar pessoalmente com nossa equipe de especialistas.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 relative h-[400px] rounded-lg overflow-hidden">
          {/* Como não há API key do Google Maps, estou utilizando uma imagem simulada de um mapa */}{" "}
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/img/wallpaper/image.png"
                alt="Mapa de localização da NonoDan"
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="md:col-span-2 p-6 bg-card rounded-lg shadow-md flex flex-col justify-center">
          <h3 className="heading-04-semibold text-primary mb-4">Escritório Central</h3>
          <address className="not-italic body-02-regular text-foreground mb-6 space-y-3">
            <p className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </span>
              <span>Rua NonoDan, 123, São Paulo, SP - Brasil, CEP: 01234-567</span>
            </p>
            <p className="flex items-start gap-2">
              {" "}
              <span className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </span>
              <span>A 10 minutos da estação de metrô República</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </span>
              <span>Estacionamento disponível no local</span>
            </p>
          </address>

          <div className="space-y-4 mt-4">
            <Button className="w-full">Como Chegar</Button>
            <Button variant="outline" className="w-full">
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
