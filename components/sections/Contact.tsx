"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="bg-[#102456] text-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Text Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05]">
              Pronto para conversar?
            </h2>
            <p className="text-md text-lg leading-tight md:leading-relaxed font-light max-w-lg text-slate-300">
              Conte-nos sobre o seu desafio. Nossa equipe técnica entrará em contato para mapear a melhor solução para sua operação.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-200">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Seu nome"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-white shadow-none placeholder:text-slate-400 text-white h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-200">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Nome da empresa"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-white shadow-none placeholder:text-slate-400 text-white h-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-white shadow-none placeholder:text-slate-400 text-white h-10"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="flex w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-2 text-base focus:outline-none focus:border-white placeholder:text-slate-400 text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#243588] hover:bg-slate-100 font-bold h-12 flex items-center justify-center rounded-sm transition-colors"
              >
                Enviar mensagem
              </button>
              <p className="text-xs text-slate-400 text-center">
                Suas informações estão seguras. Não enviamos spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
