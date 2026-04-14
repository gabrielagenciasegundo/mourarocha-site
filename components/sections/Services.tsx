"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

const areas = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "Propriedade Intelectual e Proteção de Criações",
    description: "Registramos marcas, softwares, metodologias, campanhas, conteúdos e tudo que sustenta sua operação. Se é seu, precisa ser blindado.",
    featured: true,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    title: "Direito Empresarial Aplicado ao Digital",
    description: "Imagem, voz, conteúdo, campanhas, entregáveis e direitos de uso. Ajudamos empresas a evitar conflitos e proteger sua reputação no ambiente digital.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    title: "Proteção de Dados, IA e Privacidade (LGPD)",
    description: "Orientamos empresas que utilizam inteligência artificial ou dados sensíveis. Do consentimento ao uso correto de ferramentas de IA, garantimos segurança digital.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    title: "Direito Societário para Startups",
    description: "Acordo de sócios, captable, entrada/saída de founders, expansão, seed, Série A, reorganização societária. Estruturas que acompanham a velocidade da sua empresa.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
    title: "Franchising",
    description: "Suporte jurídico completo para redes de franquias da formatação à expansão. Contratos, compliance e proteção da marca em novos mercados.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    title: "Direito Trabalhista para Times Híbridos e Tech",
    description: "Modelos mistos entre CLT, PJ, freelancers e creators são comuns no digital. Organizamos tudo para evitar riscos trabalhistas que possam travar seu crescimento.",
  },
];

export default function Services() {
  return (
    <section id="areas" className="bg-[#f0f4f8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-2 lg:items-end"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              // NOSSA EXPERTISE
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-slate-900">
              Áreas de atuação
              <strong className="font-bold block" style={{ color: "#243588" }}>
                pensadas para o digital.
              </strong>
            </h2>
          </div>
          <div className="lg:pb-3 lg:pl-8">
            <p className="text-lg leading-relaxed font-light max-w-lg text-slate-500">
              Protegemos o que você cria, constrói e escala. Soluções jurídicas modernas e especializadas para o mercado de tecnologia e inovação.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/80">
          {areas.map((area, i) => (
            <MotionLink
              key={i}
              href="#contato"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={cn(
                "group relative overflow-hidden bg-white cursor-pointer block p-8 md:p-10 space-y-5",
                "hover:bg-[#243588] transition-colors duration-500",
                area.featured ? "sm:col-span-2 lg:col-span-1" : ""
              )}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-500 group-hover:bg-white/10"
                style={{ backgroundColor: "rgba(36,53,136,0.08)" }}
              >
                <div
                  className="text-[#243588] group-hover:text-white transition-colors duration-500"
                  dangerouslySetInnerHTML={{ __html: area.icon }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-tight transition-colors duration-500">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                {area.description}
              </p>

              {/* Arrow */}
              <div
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: "#243588" }}
              >
                <span className="group-hover:text-white transition-colors duration-500">
                  Saiba mais
                </span>
                <ArrowRight className="h-4 w-4 group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
