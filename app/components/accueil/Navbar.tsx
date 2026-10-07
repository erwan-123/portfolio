"use client";

import { useState } from "react";
import { Menu, X, Code2, SkullIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#243B5A] bg-[#0B1F3A]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center gap-3 text-[#F5EBDD]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#0B1F3A]">
            <SkullIcon size={22} />
          </div>

          <span className="text-xl font-bold">
            Ngansop Erwan 
          </span>
        </a>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#accueil"
            className="rounded-full px-5 py-2.5 font-medium text-[#F5EBDD] transition hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
          >
            Accueil
          </a>

          <a
            href="#projets"
            className="rounded-full px-5 py-2.5 font-medium text-[#F5EBDD] transition hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
          >
            Projets
          </a>

          <a
            href="#contacts"
            className="rounded-full px-5 py-2.5 font-medium text-[#F5EBDD] transition hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
          >
            Contacts
          </a>
        </div>

        {/* Menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#F5EBDD] md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation mobile */}
      {isOpen && (
        <div className="border-t border-[#243B5A] bg-[#0B1F3A] px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#accueil"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-[#F5EBDD] hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
            >
              Accueil
            </a>

            <a
              href="#projets"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-[#F5EBDD] hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
            >
              Projets
            </a>

            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-[#F5EBDD] hover:bg-[#F5EBDD] hover:text-[#0B1F3A]"
            >
              Contacts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}