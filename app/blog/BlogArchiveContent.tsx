"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "@/lib/data/blog";

export default function BlogArchiveContent() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ─── Hero do Blog — AZUL ESCURO ─── */}
      <section
        className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
        style={{ backgroundColor: "#0e3187" }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(12,74,209,0.35), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            {/* Left: título */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4 font-medium">
                // BLOG
              </p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]">
                Acompanhe{" "}
                <span className="font-semibold">nossas novidades</span>
              </h1>
            </motion.div>

            {/* Right: subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
                Insights, tendências e análises jurídicas para quem empreende no digital.
              </p>
              <p className="text-sm text-white/40 mt-3">— Moura Rocha Newsroom</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Post Destaque — AZUL ESCURO (continuação) ─── */}
      <section
        className="px-6 pb-16"
        style={{ backgroundColor: "#0e3187" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col md:flex-row overflow-hidden border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative flex-shrink-0 h-64 md:h-auto md:w-1/2 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, transparent 60%, rgba(14,49,135,0.3))" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-8 md:p-12 gap-5">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0c4ad1] bg-white/10 px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <Calendar className="w-3 h-3" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug group-hover:text-white/80 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 group-hover:text-white group-hover:gap-3 transition-all duration-300">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Todos os Posts — FUNDO ESCURO ─── */}
      <section
        className="px-6 py-16 pb-24"
        style={{ backgroundColor: "#080c1c" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-white/30 uppercase tracking-widest mb-8 pb-4 border-b border-white/10"
          >
            // TODAS AS EDIÇÕES
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#0c4ad1]">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/30">{post.date}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug group-hover:text-white/75 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 group-hover:text-white group-hover:gap-2.5 transition-all duration-300 mt-1">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
