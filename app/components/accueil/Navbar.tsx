
"use client";

import { useEffect, useState } from "react";
import { Menu, X, Code2, Skull, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Stacks et Technologies", href: "/stack" },
  { label: "Contacts", href: "/contacts" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Fermer le menu après un changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#F5EBDD]/10 bg-[#0B1F3A]/95 text-[#F5EBDD] shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Ngansop Erwan - Accueil"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#0B1F3A] transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Skull size={23} strokeWidth={2} />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight sm:text-xl">
              Ngansop Erwan
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5EBDD]/50 sm:text-xs">
              Développeur web
            </span>
          </div>
        </Link>

        {/* Navigation ordinateur */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#F5EBDD] text-[#0B1F3A]"
                    : "text-[#F5EBDD]/75 hover:bg-[#F5EBDD]/10 hover:text-[#F5EBDD]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-[#F5EBDD] md:hidden" />
                )}
              </Link>
            );
          })}

          {/* Bouton de contact */}
          
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F5EBDD]/15 text-[#F5EBDD] transition-all duration-300 hover:bg-[#F5EBDD] hover:text-[#0B1F3A] active:scale-95 md:hidden"
        >
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </span>
        </button>
      </div>

      {/* Navigation mobile avec animation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`grid overflow-hidden border-t border-[#F5EBDD]/10 bg-[#0B1F3A] transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out md:hidden ${
          isOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pb-6 pt-4 sm:px-6">
            {navLinks.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isOpen
                      ? "translate-y-0"
                      : "-translate-y-2"
                  } ${
                    isActive
                      ? "bg-[#F5EBDD] text-[#0B1F3A]"
                      : "text-[#F5EBDD]/80 hover:bg-[#F5EBDD]/10 hover:text-[#F5EBDD]"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-40 group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}

            <div className="mt-2 border-t border-[#F5EBDD]/10 pt-4">
             

              <p className="mt-4 text-center text-xs text-[#F5EBDD]/40">
                Créons quelque chose d&apos;exceptionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}