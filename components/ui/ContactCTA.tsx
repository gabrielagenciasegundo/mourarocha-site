"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function ContactCTA({
  title = "Pronto para proteger o seu negócio?",
  subtitle = "Fale com nossa equipe e entenda como podemos estruturar a segurança jurídica da sua empresa.",
  buttonLabel = "Falar com a equipe",
  buttonHref = "/#contato",
  dark = true,
}: ContactCTAProps) {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={dark ? { backgroundColor: "#0c4ad1" } : { backgroundColor: "#f8faff" }}
    >
      {/* Grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)"
            : "linear-gradient(rgba(14,49,135,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,49,135,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={`text-sm uppercase tracking-wider mb-4 font-medium ${
                dark ? "text-white/50" : "text-[#0e3187]/50"
              }`}
            >
              // CONTATO
            </p>
            <h2
              className={`text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.1] ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              {title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="font-semibold">
                {title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p
              className={`text-lg lg:text-xl leading-relaxed ${
                dark ? "text-white/60" : "text-slate-500"
              }`}
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={buttonHref}
                className={`inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold transition-all duration-300 ${
                  dark
                    ? "bg-white text-[#0e3187] hover:bg-slate-100"
                    : "bg-[#0e3187] text-white hover:bg-[#0c4ad1]"
                }`}
              >
                {buttonLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/5519982610022"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold border transition-all duration-300 ${
                  dark
                    ? "border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                    : "border-[#0e3187]/30 text-[#0e3187] hover:border-[#0e3187]/60 hover:bg-[#0e3187]/5"
                }`}
              >
                WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
