"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#0e3187] flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-center pt-20"
    >
      {/* Decorative background element - matching Testimonials */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d3faf]/20 -skew-x-12 transform translate-x-1/4" />
      {/* Subtle grid overlay */}
      {/* <div
        className="absolute inset-0  opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div> */}

      {/* Blue radial glow at bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      ></div>

      {/* Robot images — left and right panels */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
  <div className="mx-auto flex h-full max-w-6xl items-end justify-between px-16">
    {/* Left robot */}
    <motion.div
      initial={{ opacity: 0, x: -40, y: 20 }}
      animate={{ opacity: 0.85, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="hidden md:flex items-end"
    >
      <Image
        src="/images/robo3.png"
        alt=""
        width={200}
        height={500}
        className="object-contain object-bottom drop-shadow-2xl"
        priority
      />
    </motion.div>

    {/* Right robot */}
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 0.85, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="hidden md:flex items-end"
    >
      <Image
        src="/images/robo2.png"
        alt=""
        width={180}
        height={460}
        className="object-contain object-bottom drop-shadow-2xl"
        priority
      />
    </motion.div>
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center gap-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-white/60 text-xs tracking-[0.25em] uppercase font-medium"
        >
          <span className="block h-px w-8 bg-white/40"></span>
          Jurídico para o digital
          <span className="block h-px w-8 bg-white/40"></span>
        </motion.div>

        {/* Main headline */}
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-tight leading-none text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            Jurídico para
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            quem cria,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-white/75"
          >
            inova e cresce
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            no digital.
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto max-w-xl text-md text-lg leading-tight md:leading-relaxed font-light text-white/70"
        >
          A Moura Rocha é o escritório especializado em negócios de tecnologia, startups, agências de marketing e empresas que usam IA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
        >
          <Link
            href="#contato"
            className="h-12 px-8 text-sm font-semibold text-primary bg-white hover:bg-slate-100 transition-all duration-300 flex items-center justify-center rounded-sm shadow-lg hover:shadow-xl"
            style={{ color: "#243588" }}
          >
            Falar com a equipe
          </Link>
          <Link
            href="#areas"
            className="h-12 px-8 text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center rounded-sm"
          >
            Ver áreas de atuação
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
