import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200 text-sm">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 lg:grid-cols-5 md:grid-cols-2">
          {/* Branding Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image src='/images/Logo MR_Prancheta 1-03.png' alt="Moura Rocha Advocacia" className="h-10 w-auto" width={160} height={40} />
            </Link>
            <p className="text-slate-500 max-w-xs leading-relaxed text-sm">
              Jurídico para quem cria, inova e cresce no digital. Startups, agências, tech e negócios digitais.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/mourarochaadv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-400 hover:bg-[#243588] hover:text-white hover:border-[#243588] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://br.linkedin.com/company/moura-rocha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-400 hover:bg-[#243588] hover:text-white hover:border-[#243588] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MrGestao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-400 hover:bg-[#243588] hover:text-white hover:border-[#243588] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-slate-500 hover:text-primary transition-colors">Quem Somos</Link></li>
              <li><Link href="/solucoes" className="text-slate-500 hover:text-[#0e3187] transition-colors">Soluções</Link></li>
              <li><Link href="/#fazemos" className="text-slate-500 hover:text-[#0e3187] transition-colors">O que Fazemos</Link></li>
              <li><Link href="/blog" className="text-slate-500 hover:text-[#0e3187] transition-colors">Blog</Link></li>
              <li><Link href="/#contato" className="text-slate-500 hover:text-[#0e3187] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Especialidades</h4>
            <ul className="space-y-3">
              <li><Link href="/solucoes/propriedade-intelectual-e-protecao-de-criacoes" className="text-slate-500 hover:text-[#0e3187] transition-colors">Propriedade Intelectual</Link></li>
              <li><Link href="/solucoes/direito-civil-aplicado-ao-digital" className="text-slate-500 hover:text-[#0e3187] transition-colors">Direito Digital</Link></li>
              <li><Link href="/solucoes/protecao-de-dados-ia-e-privacidade-lgpd" className="text-slate-500 hover:text-[#0e3187] transition-colors">LGPD e Privacidade</Link></li>
              <li><Link href="/solucoes/direito-societario-para-startups" className="text-slate-500 hover:text-[#0e3187] transition-colors">Direito Societário</Link></li>
              <li><Link href="/solucoes/franchising" className="text-slate-500 hover:text-[#0e3187] transition-colors">Franchising</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4 lg:col-span-1 md:col-span-2">
            <h4 className="font-semibold text-slate-900">Fale Conosco</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Pronto para proteger sua empresa e crescer com segurança jurídica?</p>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 h-10 px-6 text-xs font-semibold text-white rounded-sm transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#0e3187" }}
            >
              Falar com a equipe
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Moura Rocha Advocacia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#243588] transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-[#243588] transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
