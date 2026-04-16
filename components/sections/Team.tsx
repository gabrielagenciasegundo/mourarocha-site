"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
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
];

export default function Team() {
  return (
    <section id="equipe" className="bg-white px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              // NOSSA EQUIPE
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-slate-900">
              Profissionais que unem
              <span className="text-[#243588] block md:inline md:ml-2">experiência, inovação </span>
              e propósito.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg leading-relaxed font-light max-w-lg text-slate-600 md:pl-2">
              A Moura Rocha é formada por uma equipe multidisciplinar que alia conhecimento jurídico, visão estratégica e domínio tecnológico. Nosso compromisso é transformar o direito em uma ferramenta de crescimento e proteção para empresas e empreendedores.
            </p>
          </div>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              className="group relative overflow-hidden bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#0e3187]/40 hover:shadow-xl transition-all duration-500"
            >
              {/* Photo - Changed to vertical aspect ratio */}
              <div className="relative overflow-hidden aspect-[3/4] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.photo}
                  alt={partner.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(14,49,135,0.7) 0%, transparent 60%)" }}
                ></div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{partner.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#0e3187" }}>
                    {partner.role}
                  </p>
                </div>
                <p className="text-lg text-slate-500 leading-relaxed font-light">{partner.specialty}</p>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-[#0e3187] hover:text-white hover:border-[#0e3187] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href={partner.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-[#0e3187] hover:text-white hover:border-[#0e3187] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

