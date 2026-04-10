"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

export default function BlogPostContent({ post, related }: Props) {
  // Convert markdown-like content to paragraphs
  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <>
      {/* ─── Post Header — AZUL ESCURO ─── */}
      <section
        className="relative overflow-hidden pt-36 pb-0"
        style={{ backgroundColor: "#0e3187" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1 max-w-xs">{post.title}</span>
          </motion.nav>

          {/* Category + date */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0c4ad1] bg-white/10 px-3 py-1.5">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] max-w-4xl mb-0"
          >
            {post.title}
          </motion.h1>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mt-12 overflow-hidden"
            style={{ height: "clamp(240px, 45vw, 520px)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(8,12,28,0.9) 100%)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Post Content — FUNDO MUITO ESCURO ─── */}
      <section
        className="px-6 py-16 md:py-24"
        style={{ backgroundColor: "#080c1c" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              {paragraphs.map((paragraph, i) => {
                // Bold headers (lines starting with **)
                if (paragraph.startsWith("**") && paragraph.match(/^\*\*[^*]+\*\*/)) {
                  const text = paragraph.replace(/^\*\*(.+?)\*\*/, "$1");
                  return (
                    <h3 key={i} className="text-lg font-semibold text-white mt-10 mb-2">
                      {text}
                    </h3>
                  );
                }

                // Bullet lists
                if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((l) => l.startsWith("- "))
                    .map((l) => l.replace("- ", ""));
                  return (
                    <ul key={i} className="space-y-2 pl-0">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/60 text-base leading-relaxed">
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "#0c4ad1" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Numbered lists
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph
                    .split("\n")
                    .filter((l) => l.match(/^\d+\./))
                    .map((l) => l.replace(/^\d+\.\s*/, ""));
                  return (
                    <ol key={i} className="space-y-2 pl-0">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/60 text-base leading-relaxed">
                          <span
                            className="flex-shrink-0 text-xs font-bold tabular-nums pt-1"
                            style={{ color: "#0c4ad1" }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Regular paragraph — handle inline bold
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={i} className="text-white/60 text-base leading-relaxed">
                    {parts.map((part, j) =>
                      part.startsWith("**") ? (
                        <strong key={j} className="text-white font-semibold">
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              })}
            </motion.article>

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 pt-10 border-t border-white/10"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Voltar ao blog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Posts Relacionados — AZUL ─── */}
      {related.length > 0 && (
        <section
          className="px-6 py-20 md:py-28"
          style={{ backgroundColor: "#0d3faf" }}
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                  // LEIA TAMBÉM
                </p>
                <h2 className="text-2xl font-light text-white">
                  Outros <span className="font-semibold">artigos</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors group"
              >
                Ver todos
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((relPost, i) => (
                <motion.div
                  key={relPost.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="group flex gap-5 border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 p-6 transition-all duration-400"
                  >
                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={relPost.coverImage}
                        alt={relPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <span className="text-xs font-semibold text-[#0c4ad1] uppercase tracking-wider">
                        {relPost.category}
                      </span>
                      <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-white/75 transition-colors">
                        {relPost.title}
                      </h3>
                      <span className="text-xs text-white/40 mt-auto">{relPost.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
