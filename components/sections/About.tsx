"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";


const bullets = [
  "Jurídico especializado em negócios digitais, startups e tecnologia",
  "Soluções práticas, modernas e sem juridiquês para decisões rápidas",
  "Proteção completa para quem cria, inova e cresce no digital",
];

const stats = [
  { value: "100+", label: "Clientes atendidos" },
  { value: "10+", label: "Anos de atuação" },
  { value: "6", label: "Áreas de especialidade" },
  { value: "Zero", label: "Juridiquês" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: image with accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex items-end justify-center lg:justify-start"
          >
            <div className="relative z-10 w-full max-w-sm lg:max-w-none">
              {/* Accent blob behind robot */}
              <div
                className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-10"
                style={{ backgroundColor: "#243588", filter: "blur(60px)" }}
              ></div>
              <Image
                src='/images/robo1.png'
                alt="Robô Moura Rocha"
                width={400}
                height={480}
                className="relative z-10 w-1/4 md:w-full max-h-[480px] object-contain drop-shadow-2xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 right-0 lg:right-6 bg-white rounded-xl shadow-xl border border-slate-100 px-5 py-3 flex items-center gap-3 z-20">
              <span className="flex h-3 w-3 rounded-full" style={{ backgroundColor: "#243588" }}></span>
              <span className="text-sm font-semibold text-slate-700">Advocacia moderna</span>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 lg:pt-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              // QUEM SOMOS
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-slate-900">
              Uma advocacia
              <span className="block" style={{ color: "#243588" }}>
                moderna para
              </span>
              empresas modernas.
            </h2>

            <p className="text-md text-lg leading-tight md:leading-relaxed font-light max-w-lg text-slate-600">
              A Moura Rocha nasceu para quebrar o padrão da advocacia tradicional. Somos um escritório que fala a sua língua, entende a realidade de quem vive no digital e entrega soluções que acompanham tecnologia, velocidade e inovação.
            </p>
            <p className="text-md text-lg leading-tight md:leading-relaxed font-light max-w-lg text-slate-600">
              Estamos aqui para dar suporte jurídico a quem constrói o futuro, garantindo que sua única preocupação seja o crescimento do seu negócio.
            </p>

            <ul className="space-y-3 pt-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#243588" }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="#contato"
                className="inline-flex items-center gap-2 font-semibold text-sm group transition-all duration-300"
                style={{ color: "#243588" }}
              >
                Falar com nossa equipe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:border-r border-slate-100 last:border-0 md:pl-8 first:pl-0 space-y-1"
            >
              <span className="text-4xl font-black text-slate-900 tracking-tight" style={{ color: "#243588" }}>
                {stat.value}
              </span>
              <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}