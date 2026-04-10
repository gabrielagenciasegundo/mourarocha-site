"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  index: number;
  featured?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  coverImage,
  index,
  featured = false,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={featured ? "md:col-span-2 lg:col-span-2" : ""}
    >
      <Link
        href={`/blog/${slug}`}
        className={`group flex overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${
          featured ? "flex-col md:flex-row" : "flex-col"
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-white/5 flex-shrink-0 ${
            featured ? "h-60 md:h-auto md:w-1/2" : "h-52"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className={`flex flex-col p-6 gap-4 ${featured ? "md:p-10" : ""}`}>
          {/* Meta */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0c4ad1] bg-[#0c4ad1]/10 px-2.5 py-1">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
          </div>

          <h3
            className={`font-semibold text-white leading-snug group-hover:text-white/80 transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {title}
          </h3>

          <p className="text-sm text-white/50 leading-relaxed flex-1 line-clamp-3">
            {excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-300">
            Ler mais <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
