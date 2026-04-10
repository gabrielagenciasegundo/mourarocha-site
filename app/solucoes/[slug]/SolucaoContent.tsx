"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import type { Solucao } from "@/lib/data/solucoes";

interface Props {
  solucao: Solucao;
}

export default function SolucaoContent({ solucao }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ─── Intro — BRANCA ─── */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                // A SOLUÇÃO
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
                {solucao.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-semibold" style={{ color: "#0e3187" }}>
                  {solucao.title.split(" ").slice(-1).join(" ")}
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 lg:pt-6"
            >
              {solucao.intro.map((p, i) => (
                <p key={i} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-2 group transition-all duration-300"
                style={{ color: "#0c4ad1" }}
              >
                Agendar conversa
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Pilares — AZUL ─── */}
      <section
        className="px-6 py-24 md:py-32"
        style={{ backgroundColor: "#0e3187" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16"
          >
            <div>
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
                // PILARES
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]">
                Como atuamos{" "}
                <span className="font-semibold">para você.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
                Nossa abordagem combina estratégia preventiva, gestão de riscos e defesa técnica
                para entregar resultados duradouros.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solucao.pilares.map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border border-white/10 p-8 hover:border-white/25 hover:bg-white/5 transition-all duration-400"
              >
                <span
                  className="block text-5xl font-black mb-6 select-none"
                  style={{ color: "rgba(255,255,255,0.08)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {pilar.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {pilar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Serviços — BRANCA ─── */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left: título sticky */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                // PRINCIPAIS SERVIÇOS
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
                O que fazemos{" "}
                <span className="font-semibold" style={{ color: "#0e3187" }}>
                  por você.
                </span>
              </h2>
            </motion.div>

            {/* Right: lista de serviços */}
            <div className="space-y-0">
              {solucao.servicos.map((servico, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="border-b border-slate-100 py-7 last:border-0 group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 text-xs font-bold tabular-nums mt-0.5"
                      style={{ color: "#0c4ad1" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-[#0e3187] transition-colors">
                        {servico.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {servico.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Processo — AZUL ─── */}
      <section
        className="px-6 py-24 md:py-32"
        style={{ backgroundColor: "#0c4ad1" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16"
          >
            <div>
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
                // NOSSO PROCESSO
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]">
                Como{" "}
                <span className="font-semibold">trabalhamos.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/60 leading-relaxed">
                Um processo estruturado em três etapas para garantir que nenhum detalhe fique
                descoberto — do diagnóstico à sustentação contínua.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {solucao.processo.map((etapa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative border-t border-white/20 md:border-t-0 md:border-l md:border-white/20 first:border-l-0 px-0 md:px-8 py-10 first:pl-0"
              >
                <span className="block text-6xl font-black text-white/10 mb-4 select-none">
                  {etapa.step}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {etapa.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {etapa.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — BRANCA ─── */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                // DÚVIDAS FREQUENTES
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
                Perguntas{" "}
                <span className="font-semibold" style={{ color: "#0e3187" }}>
                  frequentes.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Ainda tem dúvidas?{" "}
                <Link
                  href="/#contato"
                  className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                  style={{ color: "#0c4ad1" }}
                >
                  Fale com nossa equipe.
                </Link>
              </p>
            </motion.div>

            <div className="space-y-0">
              {solucao.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="border-b border-slate-100 last:border-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                  >
                    <span className="text-base font-semibold text-slate-900 group-hover:text-[#0e3187] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "#0c4ad1" }}>
                      {openFaq === i ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-slate-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
