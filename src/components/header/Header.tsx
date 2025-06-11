"use client";

import Link from "next/link";

import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { LogoWithTheme } from "./button/LogoWithTheme";

interface HeaderProps {
  href?: string;
}

export const Header = ({ href = "/" }: HeaderProps) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // setDropdownVisible(false); resolver bug
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible, sidebarRef]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="w-full bg-card-foreground min-h-[4.5rem] flex items-center justify-center px-4 max-sm:px-2 max-2sm:flex-col-reverse max-2sm:py-1 fixed top-[45px] z-50">
      <div className="px-5 lg:px-[6.25rem] overflow-visible my-0 mx-auto flex items-center justify-center sm:justify-between w-full">
        <button onClick={toggleSidebar} className="lg:hidden mr-4">
          <svg className={`w-6 h-6 text-text-cinza-escuro`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <LogoWithTheme />

        <nav className="relative items-center justify-end px-9 w-full gap-6 hidden lg:flex">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Link className="" href="/sobre">
                  <span className="h2-semibold text-[1.125rem]">Sobre Nós</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>{" "}
            <MenubarMenu>
              <MenubarTrigger>
                <Link className="" href="/missao">
                  <span className="h2-semibold text-[1.125rem]">Nossa Missão</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link className="" href="/equipe">
                  <span className="h2-semibold text-[1.125rem]">Equipe</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link className="" href="/contato">
                  <span className="h2-semibold text-[1.125rem]">Contato</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </nav>

        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"}  lg:hidden bg-[rgb(var(--var-background-principal))] h-screen p-5 transition-transform duration-300 flex flex-col text-md font-semibold fixed top-0 left-0 z-50`}
          ref={sidebarRef}
        >
          <button onClick={toggleSidebar} className="lg:hidden mr-4">
            <svg className={`w-6 h-6 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>{" "}
          <nav className="flex flex-col items-center justify-end px-9 w-full space-y-4">
            {" "}
            <Link href="/sobre" className="h2-semibold text-[1.125rem]">
              Sobre Nós
            </Link>
            <Link href="/missao" className="h2-semibold text-[1.125rem]">
              Nossa Missão
            </Link>
            <Link href="/equipe" className="h2-semibold text-[1.125rem]">
              Equipe
            </Link>
            <Link onClick={toggleSidebar} className="h2-semibold text-[1.125rem]" href="/contato">
              Contato
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
