"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const scrollingItems = [
  "Uso de IA e Governança",
  "Crise Digital (Fake News, Reputação, Fraudes)",
  "Venda Digital e Risco de Consumo",
  "Agência com Escopo/Inadimplência",
  "Creator/Influência com Uso de Imagem",
  "SaaS/Plataforma com Termos, Privacidade e SLA",
  "Acordos Societários",
  "Gestão Jurídica Completa para Negócios Tech",
  "Propriedade Intelectual para Criativos",
  "Contratos que Evitam Gargalos",
];

const differentials = [
  {
    number: "01",
    title: "Zero juridiquês",
    description: "Comunicação clara, objetiva e prática. Sem enrolação.",
  },
  {
    number: "02",
    title: "Profundo entendimento do mercado digital",
    description: "Startups, agências, tech e IA exigem um jurídico diferente — e é exatamente o que fazemos.",
  },
  {
    number: "03",
    title: "Materiais didáticos e tecnológicos",
    description: "Contratos, análises e orientações desenhadas para ser fáceis de entender e aplicar.",
  },
  {
    number: "04",
    title: "Visão estratégica de negócio",
    description: "Decisões jurídicas alinhadas ao crescimento, não ao bloqueio.",
  },
  {
    number: "05",
    title: "Assessoria moderna e integrada",
    description: "Linguagem acessível, foco em resultados e soluções jurídicas orientadas à tecnologia.",
  },
  {
    number: "06",
    title: "Atendimento próximo e colaborativo",
    description: "Acompanhamos cada etapa do seu negócio como parceiros, não como burocratas.",
  },
];

export default function Features() {
  return (
    <section id="fazemos" className="bg-[#243588] text-white px-6 py-24 md:py-36 overflow-hidden relative">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="mx-auto max-w-[1400px] relative z-10 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            // O QUE FAZEMOS
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-white">
            O jurídico que acompanha
            <strong className="font-bold block">seu ritmo de inovação.</strong>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed font-light max-w-lg">
            Empresas digitais crescem rápido e precisam de um jurídico que não atrase suas decisões. Aqui, você recebe orientação prática, direta e alinhada ao que seu modelo de negócio realmente precisa para crescer com segurança.
          </p>
        </motion.div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden border-y border-white/15 py-5 -mx-6 group">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8 w-max group-hover:[animation-play-state:paused]"
          >
            {[...scrollingItems, ...scrollingItems].map((item, i) => (
              <span key={i} className="flex items-center gap-4 text-sm font-medium text-white/80 whitespace-nowrap">
                <span className="text-white/30 text-lg">◆</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Differentials Grid */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/10">
          {differentials.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-[#243588] p-8 md:p-10 space-y-4 hover:bg-white/5 transition-colors duration-300 cursor-default"
            >
              <span className="text-xs font-mono text-white/30 tracking-widest">{d.number}</span>
              <h3 className="text-lg font-bold text-white transition-colors duration-300">
                {d.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#contato"
            className="inline-flex items-center gap-3 h-12 px-10 text-sm font-semibold bg-white hover:bg-slate-100 transition-all duration-300 rounded-sm shadow-lg"
            style={{ color: "#243588" }}
          >
            Fale com um especialista
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
