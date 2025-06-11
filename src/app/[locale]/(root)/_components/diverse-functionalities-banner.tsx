import { Calendar, CheckCircle, MessageSquare, Trophy, UserCheck } from "lucide-react";
import Image from "next/image";
import { BorderIconCard } from "./icon-card";

export const DiverseFunctionalitesBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-center">
      <Image
        alt="Ilustração coleta seletiva Serratec Verde"
        src="/img/wallpaper/recycle-storyset.svg"
        width={196}
        height={425}
        className="w-[196px] h-[425px] object-contain duration-500  rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="heading-03-bold">Orientações para descarte</span>
          <span className="body-title-light w-full">
            Confira o que pode ou não ser descartado: plástico, papel/papelão e alumínio. Siga as orientações para
            garantir o sucesso da coleta seletiva!
          </span>
        </div>
        <div className="flex flex-col gap-3 items-start">
          {SystemFeaturesIconsCardsData.map((item, index) => (
            <BorderIconCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SystemFeaturesIconsCardsData = [
  {
    icon: CheckCircle,
    title: "Pode: Garrafa PET, tampinha, embalagem de sabão, papel, papelão, latinhas e lacres.",
  },
  {
    icon: MessageSquare,
    title:
      "Não pode: Guardanapo sujo, isopor, embalagens de fast food, sacola de supermercado, tampinha de refrigerante, metais em geral.",
  },
  {
    icon: Trophy,
    title: "Dica: Separe os resíduos limpos e secos para facilitar a reciclagem!",
  },
];
