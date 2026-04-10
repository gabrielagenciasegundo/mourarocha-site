"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SolutionCardProps {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  index: number;
}

export default function SolutionCard({
  slug,
  title,
  subtitle,
  coverImage,
  index,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <Link
        href={`/solucoes/${slug}`}
        className="group relative flex flex-col overflow-hidden bg-white border border-slate-100 hover:border-[#0c4ad1]/30 hover:shadow-xl transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                "linear-gradient(to top, rgba(14,49,135,0.7) 0%, transparent 60%)",
            }}
          />
          {/* Arrow badge */}
          <div className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 bg-white/10 border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-3">
          <h3 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-[#0e3187] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed flex-1">
            {subtitle}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c4ad1] mt-1 group-hover:gap-2.5 transition-all duration-300">
            Saiba mais <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
