"use client";
import Image from "next/image";

export const ConsciousDisposalBatteriesBanner = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <h3 className="heading-03-bold text-foreground">Descarte Consciente: Pilhas e Baterias</h3>
      <p className="body-title-light text-foreground/80 max-w-[40rem]">
        Pilhas e baterias precisam de destinação correta para evitar contaminação do solo e da água.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-[260px] h-[180px] md:w-[420px] md:h-[320px] rounded-[var(--radius)] overflow-hidden ">
          <Image
            src="/img/wallpaper/Recycling-bro.svg"
            alt="Descarte consciente de pilhas e baterias"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="heading-05-bold text-foreground">Como descartar corretamente?</h4>
          <p className="body-callout-medium text-foreground/80">
            Nunca jogue pilhas e baterias no lixo comum! Deposite sempre em pontos de coleta específicos, como
            supermercados, lojas de eletrônicos ou ecopontos autorizados. Assim, garantimos a destinação ambientalmente
            correta e protegemos o meio ambiente.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="heading-05-bold text-foreground">Por que é importante?</h4>
          <p className="body-callout-medium text-foreground/80">
            O descarte incorreto pode causar sérios danos ambientais e à saúde. Faça sua parte e contribua para um
            futuro mais limpo e seguro!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const ConsciousDisposalElectronicsBanner = () => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col items-center text-center gap-2">
      <h3 className="heading-03-bold text-foreground">Descarte Consciente: Eletrônicos</h3>
      <p className="body-title-light text-foreground/80 max-w-[40rem]">
        Eletrônicos devem ser reciclados ou reaproveitados para evitar poluição e desperdício de recursos.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-[260px] h-[180px] md:w-[420px] md:h-[320px] rounded-[var(--radius)] overflow-hidden ">
          <Image
            src="/img/wallpaper/Waste management-pana.svg"
            alt="Descarte consciente de pilhas e baterias"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="heading-05-bold text-foreground">Como funciona no Serratec Verde?</h4>
          <p className="body-callout-medium text-foreground/80">
            Computadores, celulares, tablets e outros eletrônicos devem ser destinados a locais apropriados para
            reciclagem ou reuso. No Serratec Verde, buscamos reaproveitar ao máximo os equipamentos, promovendo a doação
            e o recondicionamento. O que não pode ser reutilizado é encaminhado para reciclagem em pontos autorizados.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="heading-05-bold text-foreground">Benefícios do descarte correto</h4>
          <p className="body-callout-medium text-foreground/80">
            Equipamentos em bom estado são reaproveitados e doados. Os demais são reciclados de forma segura, evitando
            danos ao meio ambiente e promovendo a economia circular.
          </p>
        </div>
      </div>
    </div>
  </div>
);
