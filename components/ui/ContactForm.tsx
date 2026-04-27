"use client";
import Link from "next/link";

interface ContactFormProps {
  className?: string;
  rows?: number;
}

export default function ContactForm({ className = "", rows = 4 }: ContactFormProps) {
  return (
    <form className={`space-y-6 ${className}`}>
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
            rows={rows}
            placeholder="Como podemos ajudar?"
            className="flex w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-2 text-base focus:outline-none focus:border-white placeholder:text-slate-400 text-white resize-none"
          ></textarea>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          id="privacy" 
          required
          className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-[#243588] focus:ring-[#243588] focus:ring-offset-slate-900" 
        />
        <label htmlFor="privacy" className="text-xs text-slate-300 leading-relaxed">
          Declaro que tive acesso à Política de Privacidade e concordo com seus termos. Para acesso à Política de Privacidade <Link href="/politica-de-privacidade" className="text-white underline hover:text-slate-200 transition-colors">clique aqui</Link>!
        </label>
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full bg-white text-[#243588] hover:bg-slate-100 font-bold h-12 flex items-center justify-center rounded-sm transition-colors"
      >
        Enviar mensagem
      </button>
      <p className="text-xs text-slate-400 text-center">
        Suas informações estão seguras. Não enviamos spam.
      </p>
    </form>
  );
}
