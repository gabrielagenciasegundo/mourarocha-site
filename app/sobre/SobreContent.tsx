"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const valores = [
  {
    title: "Ética acima de tudo",
    description:
      "Conduzimos cada relação com transparência, honestidade e respeito — sem atalhos que comprometam a integridade dos nossos clientes.",
  },
  {
    title: "Legalidade estratégica",
    description:
      "Interpretamos a lei não como barreira, mas como ferramenta. Criamos soluções que respeitam a legislação e protegem o crescimento.",
  },
  {
    title: "Cooperação real",
    description:
      "Atuamos como parceiros estratégicos, não como prestadores de serviço. Estamos no projeto junto com você, do início ao resultado.",
  },
];

const stats = [
  { value: "2007", label: "Ano de fundação" },
  { value: "100+", label: "Clientes atendidos" },
  { value: "6", label: "Especialidades" },
  { value: "Zero", label: "Juridiquês" },
];

const team = [
  {
    name: "Henrique Moura Rocha",
    role: "Sócio-fundador",
    specialty: "Especialista em direito empresarial e propriedade intelectual",
    photo: "https://segundodesign.com/mrocha/wp-content/uploads/2025/11/foto_henrique_2020px.jpg",
    linkedin: "https://br.linkedin.com/in/henriquemourarocha",
    instagram: "https://www.instagram.com/henrique.m.rocha/",
  },
  {
    name: "Pamella Pinheiro",
    role: "Sócia",
    specialty: "Especialista em direito digital, trabalhista e empresarial",
    photo: "https://segundodesign.com/mrocha/wp-content/uploads/2026/03/pamela-edit.jpg",
    linkedin: "https://br.linkedin.com/in/pamellapinheiroadv",
    instagram: "https://www.instagram.com/drapamellapinheiro/",
  },
  {
    name: "Livia Isnard",
    role: "Advogada Trabalhista",
    specialty: "Especialista em direito trabalhista e relações de emprego",
    photo: "https://segundodesign.com/mrocha/wp-content/uploads/2026/03/livia-retrato.png",
    linkedin: "https://www.linkedin.com/in/livia-isnard-b61941224/",
    instagram: "",
  },
];

const bullets = [
  "Assessoria integrada e multidisciplinar",
  "Tecnologia e processos para dar velocidade e segurança",
  "Foco em ativos intangíveis e rotinas do negócio",
];

export default function SobreContent() {
  return (
    <>
      {/* ─── Seção 1: História — BRANCA ─── */}
      <section className="bg-white px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: imagem dos sócios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://segundodesign.com/mrocha/wp-content/uploads/2025/12/socios_edit.png"
                  alt="Sócios Moura Rocha"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Badge flutuante */}
              <div className="absolute bottom-6 right-0 lg:-right-6 bg-white shadow-2xl border border-slate-100 px-5 py-3.5 flex items-center gap-3">
                <span
                  className="flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "#0c4ad1" }}
                />
                <span className="text-sm font-semibold text-slate-700">
                  Desde 2007
                </span>
              </div>
            </motion.div>

            {/* Right: texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                // QUEM SOMOS
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
                Protegemos o que{" "}
                <span className="font-semibold" style={{ color: "#0e3187" }}>
                  move o seu negócio.
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Formada por uma equipe multidisciplinar, a Moura Rocha iniciou suas
                atividades em 2007 e, desde então, evoluiu para entregar uma assessoria
                sólida e fundamentada, guiada por ética, legalidade e cooperação.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossos departamentos atuam de forma integrada para oferecer soluções
                completas — do estratégico ao operacional — com agilidade, segurança e
                clareza para empresas em diferentes fases de crescimento.
              </p>

              <ul className="space-y-3 pt-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 h-5 w-5 flex items-center justify-center text-white"
                      style={{ backgroundColor: "#0c4ad1" }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
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
                <span className="text-4xl font-black" style={{ color: "#0e3187" }}>
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Seção 2: Valores — AZUL ─── */}
      <section
        className="px-6 py-24 md:py-36"
        style={{ backgroundColor: "#0e3187" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: eyebrow + título */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-sm text-white/50 uppercase tracking-wider font-medium">
                // PROPÓSITO
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]">
                Existimos para{" "}
                <span className="font-semibold">causar impacto real.</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-sm mt-2">
                No mercado, nos negócios, nas carreiras. Combinando estratégia jurídica,
                processos modernos e criatividade como linguagem comum.
              </p>
              <blockquote className="border-l-2 border-white/20 pl-4 mt-6">
                <p className="text-white/40 text-sm italic">
                  &quot;Por trás da Moura Rocha, estão profissionais que acreditam que o
                  direito deve acompanhar o ritmo dos negócios.&quot;
                </p>
              </blockquote>
            </motion.div>

            {/* Right: valores */}
            <div className="space-y-0">
              {valores.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="border-b border-white/10 py-8 last:border-0"
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Seção 3: Equipe — BRANCA ─── */}
      <section className="bg-white px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end"
          >
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                // NOSSA EQUIPE
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1]">
                Profissionais que unem{" "}
                <span className="font-semibold" style={{ color: "#0e3187" }}>
                  experiência, inovação e propósito.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                A Moura Rocha é formada por uma equipe multidisciplinar que alia
                conhecimento jurídico, visão estratégica e domínio tecnológico.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-slate-50 border border-slate-200 hover:border-[#0e3187]/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Photo */}
                <div className="relative overflow-hidden h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(14,49,135,0.5) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm font-semibold" style={{ color: "#0c4ad1" }}>
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {member.specialty}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 border border-slate-200 text-slate-500 hover:bg-[#0e3187] hover:text-white hover:border-[#0e3187] transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 border border-slate-200 text-slate-500 hover:bg-[#0e3187] hover:text-white hover:border-[#0e3187] transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
