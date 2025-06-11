import { ContactBanner } from "@/app/[locale]/contato/_components/contact-banner";
import { ContactFormBanner } from "@/app/[locale]/contato/_components/contact-form-banner";
import { ContactInfoBanner } from "@/app/[locale]/contato/_components/contact-info-banner";
import { ContactMapBanner } from "@/app/[locale]/contato/_components/contact-map-banner";
import { ContactFaqBanner } from "@/app/[locale]/contato/_components/contact-faq-banner";
import { Separator } from "@/components/ui/separator";

export const ContactPage = () => {
  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      <ContactBanner />
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        <ContactFormBanner />
        <Separator className="bg-primary" />
        <ContactInfoBanner />
        <Separator className="bg-primary" />
        <ContactMapBanner />
      </div>
      <Separator className="bg-primary" />
      <ContactFaqBanner />
      <Separator className="bg-primary" />
    </div>
  );
};
