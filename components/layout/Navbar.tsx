"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight ?? 600;

      if (scrollY > heroHeight - 80) {
        setIsScrolled(false);
        setIsLightSection(true);
      } else if (scrollY > 50) {
        setIsScrolled(true);
        setIsLightSection(false);
      } else {
        setIsScrolled(false);
        setIsLightSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6",
        isScrolled && "bg-[#080c1c]/90 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3",
        isLightSection && "bg-white/97 backdrop-blur-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.08)] py-3"
      )}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-white text-2xl font-black tracking-tighter leading-none">
            <Image 
              src={isLightSection ? '/images/Logo MR_Prancheta 1-03.png' : '/images/Logo MR_Prancheta 1-04.png'} 
              alt="Logo MouraRocha" 
              width={160} 
              height={60} 
              priority 
              className="w-auto h-[60px]" 
            />
          </span>
        </Link>

        {/* Center Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/sobre"
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              isLightSection
                ? "text-slate-600 hover:text-slate-900"
                : "text-white/75 hover:text-white"
            )}
          >
            Quem Somos
          </Link>
          <Link
            href="/solucoes"
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              isLightSection
                ? "text-slate-600 hover:text-slate-900"
                : "text-white/75 hover:text-white"
            )}
          >
            Soluções
          </Link>
          <Link
            href="/#empresas"
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              isLightSection
                ? "text-slate-600 hover:text-slate-900"
                : "text-white/75 hover:text-white"
            )}
          >
            Clientes
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              isLightSection
                ? "text-slate-600 hover:text-slate-900"
                : "text-white/75 hover:text-white"
            )}
          >
            Blog
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="#contato"
            className={cn(
              "hidden sm:flex items-center justify-center h-10 px-5 text-sm font-medium border transition-all duration-300 rounded-sm",
              isLightSection
                ? "border-primary/50 text-primary hover:bg-primary hover:text-white"
                : "border-white/80 text-white hover:bg-white hover:text-slate-900"
            )}
          >
            Falar com a MouraRocha
          </Link>
          {/* Mobile Hamburger */}
          <button
            className={cn(
              "md:hidden p-2",
              isLightSection ? "text-slate-900" : "text-white"
            )}
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 border-t border-white/10 bg-[#080c1c]/97 backdrop-blur-[20px]">
          <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white text-base font-medium py-2 transition-colors">Quem Somos</Link>
          <Link href="/solucoes" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white text-base font-medium py-2 transition-colors">Soluções</Link>
          <Link href="/#empresas" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white text-base font-medium py-2 transition-colors">Clientes</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white text-base font-medium py-2 transition-colors">Blog</Link>
          <Link
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center h-11 px-5 text-sm font-medium border border-white/80 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 rounded-sm"
          >
            Falar com a MouraRocha
          </Link>
        </div>
      )}
    </header>
  );
}
