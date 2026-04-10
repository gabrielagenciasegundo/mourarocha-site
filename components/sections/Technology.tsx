"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientTypes = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    label: "Startups",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    label: "Agências de Marketing",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    label: "Empresas de Tecnologia",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
    label: "SaaS e Plataformas Digitais",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    label: "Influenciadores e Creators",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    label: "Negócios que Usam IA",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    label: "Economia Criativa",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>`,
    label: "E-commerce e Marketplaces",
  },
];

export default function Technology() {
  return (
    <section id="empresas" className="bg-slate-50 px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] space-y-16">
        {/* Header: two-column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          <div className="col-span-1 lg:col-span-7 space-y-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
              // EMPRESAS QUE ATENDEMOS
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-slate-900">
              Especialistas no jurídico
              <span className="block text-slate-400">das novas economias.</span>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 lg:pt-12">
            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-lg">
              Atuamos com empresas que vivem na velocidade do digital. Entendemos o que você faz e sabemos exatamente como proteger.
            </p>
          </div>
        </motion.div>

        {/* Main content: client types + robot image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Client type chips/cards */}
          <div className="grid grid-cols-2 gap-4">
            {clientTypes.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-[#243588] hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#243588]"
                  style={{ backgroundColor: "rgba(36,53,136,0.06)" }}
                >
                  <div
                    className="text-[#243588] group-hover:text-white transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: client.icon }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-tight transition-colors duration-300">
                  {client.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: robot illustration + call-out box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-center gap-8"
          >
            <div className="relative">
              {/* Decorative background circle */}
              <div
                className="absolute inset-0 rounded-full scale-75"
                style={{ background: "radial-gradient(circle, rgba(36,53,136,0.08) 0%, transparent 70%)" }}
              ></div>
              <Image
                src='/images/robo3.png'
                alt="Especialistas no digital"
                width={400}
                height={380}
                className="relative z-10 w-full max-h-[380px] object-contain drop-shadow-xl"
              />
            </div>

            {/* Highlight box */}
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <p className="text-slate-900 font-semibold text-lg leading-snug mb-3">
                "Entendemos o que você faz e sabemos exatamente como proteger."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#243588" }}></span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Moura Rocha Advocacia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
