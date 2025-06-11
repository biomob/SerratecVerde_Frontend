"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const footerLinks = [
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "/ajuda" },
        { name: "Política de Privacidade", href: "/privacidade" },
        { name: "Termos de Uso", href: "/termos" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-40 relative h-12">
              <Image src="/img/LOGO-ABERTA.png" alt="NonoDan Logo" width={160} height={48} className="object-contain" />
            </div>
            <p className="body-paragraph text-foreground/80 max-w-xs">
              Projeto Serratec Verde: mobilização de empresas, colaboradores e parceiros para incentivar a coleta
              seletiva, promover sustentabilidade e gerar impacto positivo no polo Serratec.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="body-callout text-foreground/80">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="body-callout text-foreground/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="body-callout text-foreground/80">contato@nonodan.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="body-title-bold text-foreground">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="body-callout text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Social Media and App Download Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/biomobguia/"
                target="_blank"
                className="w-9 h-9 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <IoLogoInstagram size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/biomob/"
                target="_blank"
                className="w-9 h-9 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </Link>
              <Link
                href="https://pt-br.facebook.com/biomobguia/"
                target="_blank"
                className="w-9 h-9 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="https://www.youtube.com/@biomobguia"
                target="_blank"
                className="w-9 h-9 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <FaYoutube size={16} />
              </Link>
            </div>

            {/* App Download */}
            <div className="flex items-center space-x-3">
              <span className="body-callout-medium text-foreground">Baixe o app:</span>
              <Link
                href="https://apps.apple.com/br/app/biomob/id1090156739"
                className="flex items-center justify-center h-9 px-3 rounded-full bg-muted/30 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <FaApple size={16} className="mr-1" />
                <span className="body-callout">App Store</span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.biomob.bioplus"
                className="flex items-center justify-center h-9 px-3 rounded-full bg-muted/30 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <FaGooglePlay size={14} className="mr-1" />
                <span className="body-callout">Google Play</span>
              </Link>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Voltar para o topo"
          >
            <span className="body-callout-medium">Voltar ao topo</span>
            <BsArrowUpCircleFill className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="body-caption text-foreground/60">
            © {new Date().getFullYear()} NonoDan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
