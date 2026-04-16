"use client";

import { motion } from "framer-motion";
import SolutionCard from "@/components/ui/SolutionCard";
import { solucoes } from "@/lib/data/solucoes";

export default function SolucoesArchiveContent() {
  return (
    <section className="bg-white px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16"
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              // ESPECIALIDADES
            </p>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
              Jurídico especializado para{" "}
              <span className="font-semibold" style={{ color: "#0e3187" }}>
                quem cresce no digital.
              </span>
            </h2>
          </div>
          <div>
            <p className="text-md text-lg leading-tight md:leading-relaxed font-light text-muted-foreground">
              Cada especialidade foi desenhada para empresas de tecnologia, startups e negócios
              digitais. Escolha a área que melhor representa o seu desafio e entenda como podemos ajudar.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((solucao, i) => (
            <SolutionCard
              key={solucao.slug}
              slug={solucao.slug}
              title={solucao.title}
              subtitle={solucao.subtitle}
              coverImage={solucao.coverImage}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
