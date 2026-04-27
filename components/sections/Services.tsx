import * as motion from "motion/react-client"
import { ArrowRight, ShieldCheck, MonitorSmartphone, Lock, Building2, Store, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const areas = [
  {
    icon: ShieldCheck,
    title: "Propriedade Intelectual e Proteção de Criações",
    description: "Registramos marcas, softwares, metodologias, campanhas, conteúdos e tudo que sustenta sua operação. Se é seu, precisa ser blindado.",
    featured: true,
    link: "/solucoes/propriedade-intelectual-e-protecao-de-criacoes",
    image: "/images/solucoes/propriedade-intelectual.webp"
  },
  {
    icon: MonitorSmartphone,
    title: "Direito Empresarial Aplicado ao Digital",
    description: "Imagem, voz, conteúdo, campanhas, entregáveis e direitos de uso. Ajudamos empresas a evitar conflitos e proteger sua reputação no ambiente digital.",
    link: "/solucoes/direito-civil-aplicado-ao-digital",
    image: "/images/solucoes/direito-digital.webp"
  },
  {
    icon: Lock,
    title: "Proteção de Dados, IA e Privacidade (LGPD)",
    description: "Orientamos empresas que utilizam inteligência artificial ou dados sensíveis. Do consentimento ao uso correto de ferramentas de IA, garantimos segurança digital.",
    link: "/solucoes/protecao-de-dados-ia-e-privacidade-lgpd",
    image: "/images/solucoes/protecao-dados.webp"
  },
  {
    icon: Building2,
    title: "Direito Societário",
    description: "Acordo de sócios, captable, entrada/saída de founders, expansão, seed, Série A, reorganização societária. Estruturas que acompanham a velocidade da sua empresa.",
    link: "/solucoes/direito-societario-para-startups",
    image: "/images/solucoes/direito-societario.webp"
  },
  {
    icon: Store,
    title: "Franchising",
    description: "Suporte jurídico completo para redes de franquias da formatação à expansão. Contratos, compliance e proteção da marca em novos mercados.",
    link: "/solucoes/franchising",
    image: "/images/solucoes/franchising.webp"
  },
  {
    icon: Users,
    title: "Direito Trabalhista para Times Híbridos e Tech",
    description: "Modelos mistos entre CLT, PJ, freelancers e creators são comuns no digital. Organizamos tudo para evitar riscos trabalhistas que possam travar seu crescimento.",
    link: "/solucoes/direito-trabalhista-para-times-hibridos-e-tech",
    image: "/images/solucoes/direito-trabalhista.webp"
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
            <p className="text-md text-lg leading-tight md:leading-relaxed font-light max-w-lg text-slate-500">
              Protegemos o que você cria, constrói e escala. Soluções jurídicas modernas e especializadas para o mercado de tecnologia e inovação.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/80">
          {areas.map((area, i) => {
            const Icon = area.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={cn(
                  "group relative overflow-hidden bg-white cursor-pointer block",
                  area.featured ? "sm:col-span-2 lg:col-span-1" : ""
                )}
              >
                <Link href={area.link || "#contato"} className="block h-full p-8 md:p-10">
                  {/* Background Image (Hover) */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Image 
                      src={area.image} 
                      alt={area.title} 
                      fill 
                      className="object-cover" 
                    />
                    {/* Overlay para garantir a leitura do texto */}
                    <div className="absolute inset-0 bg-[#0c4ad1]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e3187] to-[#0e3187]/60 opacity-95" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-5 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-md"
                      style={{ backgroundColor: "rgba(36,53,136,0.08)" }}
                    >
                      <Icon className="w-7 h-7 text-[#243588] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-tight transition-colors duration-500">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 group-hover:text-white/90 leading-relaxed transition-colors duration-500 flex-grow">
                      {area.description}
                    </p>

                    {/* Arrow */}
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 group-hover:text-white pt-2"
                      style={{ color: "#243588" }}
                    >
                      <span className="group-hover:text-white">Saiba mais</span>
                      <ArrowRight className="h-4 w-4 group-hover:text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div> 
      </div >
    </section >
  );
}
