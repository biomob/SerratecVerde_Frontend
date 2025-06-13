"use client";
import { Heart, Target, Lightbulb } from "lucide-react";

export const OurMissionBanner = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Como participar?</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          Entregue seus resíduos recicláveis (plástico, papel/papelão e alumínio) na área de coleta do polo Serratec. As
          pesagens são feitas pela equipe BIOMOB e registradas por empresa. Colaboradores da T2M: informem sua equipe
          para pontuar na gincana!
        </p>
      </div>
    </div>
  );
};
