"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({
  eyebrow,
  titleLight,
  titleBold,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ backgroundColor: "#0e3187" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(12,74,209,0.4), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Início
            </Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-white/60">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-white/70 transition-colors">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/50 uppercase tracking-wider mb-4 font-medium"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] max-w-3xl"
        >
          {titleLight}{" "}
          <span className="font-semibold">{titleBold}</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-md text-lg leading-tight md:leading-relaxed font-light text-white/60 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
