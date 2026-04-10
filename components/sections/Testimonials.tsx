"use client";

import { motion } from "framer-motion";

// Testimonials placeholder — client reviews will be added here
const placeholderTestimonials = [
  { initials: "JM", name: "João M.", company: "Startup Tech", text: "" },
  { initials: "AS", name: "Ana S.", company: "Agência Digital", text: "" },
  { initials: "RP", name: "Ricardo P.", company: "SaaS Platform", text: "" },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#f0f4f8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            // DEPOIMENTOS
          </p>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold text-slate-900 leading-[1.1] tracking-tight">
            O que nossos clientes
            <span style={{ color: "#243588" }}> têm a dizer.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Empresas que cresceram com segurança jurídica ao lado da Moura Rocha.
          </p>
        </motion.div>

        {/* Placeholder grid — to be populated with real reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 space-y-5 flex flex-col"
            >
              {/* Stars placeholder */}
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: "#243588" }}
                      className="opacity-30"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
              </div>

              {/* Review text placeholder */}
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-slate-100 rounded-full w-full"></div>
                <div className="h-3 bg-slate-100 rounded-full w-5/6"></div>
                <div className="h-3 bg-slate-100 rounded-full w-4/6"></div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#243588", opacity: 0.3 }}
                >
                  {t.initials}
                </div>
                <div className="space-y-0.5 opacity-40">
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-sm text-slate-400 italic">
          Avaliações reais serão adicionadas em breve.
        </p>
      </div>
    </section>
  );
}
