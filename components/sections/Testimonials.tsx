"use client";

import { motion } from "motion/react";
import React, { useId, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Ssr from "embla-carousel-ssr";
import googleReviews from "@/public/google_reviews.json";

// Filtering reviews: 4 and 5 stars with valid text content
const filteredReviews = googleReviews
  .filter((r: any) =>
    r.rating >= 4 &&
    r.description &&
    typeof r.description.en === "string" &&
    r.description.en.length > 10
  )
  .map((r: any) => ({
    author: r.author,
    rating: Math.floor(r.rating),
    text: r.description.en,
    profile_picture: r.profile_picture,
    role: "Cliente"
  }));

export default function Testimonials() {
  const carouselId = useId();

  const [emblaRef, emblaApi, emblaServerApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({ speed: 1.5 }),
      Ssr({
        slideSizes: filteredReviews.map(() => 85), // Default mobile: 85%
        breakpoints: {
          '(min-width: 768px)': { slideSizes: filteredReviews.map(() => 50) }, // md: 50%
          '(min-width: 1024px)': { slideSizes: filteredReviews.map(() => 33.333333) } // lg: ~33.33%
        }
      })
    ]
  );

  const renderSsrStyles = !emblaApi;

  // Manual hover controls to ensure AutoScroll stops
  const onMouseEnter = () => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.stop();
  };

  const onMouseLeave = () => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.play();
  };

  // Ensure it starts playing on mount just in case
  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll && !autoScroll.isPlaying()) {
        autoScroll.play();
      }
    }
  }, [emblaApi]);

  return (
    <section id="depoimentos" className="bg-[#0e3187] py-24 md:py-36 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d3faf]/20 -skew-x-12 transform translate-x-1/4" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Header - Aligned Pattern: Title Left, Paragraph Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            // DEPOIMENTOS
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-white">
              O que nossos clientes
              <br />têm a dizer.
            </h2>
          </div>
          <p className="text-lg leading-relaxed font-light md:max-w-sm text-white mx-auto">
            Empresas que cresceram com segurança jurídica ao lado da Moura Rocha.
          </p>
        </motion.div>
      </div>

      {renderSsrStyles && (
        <style>
          {emblaServerApi
            ?.plugins()
            .ssr?.getStyles(`#${carouselId.replace(/:/g, '\\:')}`, '.embla__slide')}
        </style>
      )}

      {/* Embla Carousel Container */}
      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex touch-pan-y -ml-6 items-stretch" id={carouselId}>
            {filteredReviews.map((review, i) => (
              <div
                key={i}
                className="embla__slide flex-none min-w-0 pl-6 w-[85%] md:w-[50%] lg:w-[33.333333%] flex h-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6 flex flex-col w-full h-full hover:bg-white/15 transition-all duration-500 group">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow-400"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                  </div>

                  {/* Review text */}
                  <p className="text-lg text-blue-50 leading-relaxed font-light flex-1 line-clamp-6">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                      <img
                        src={review.profile_picture}
                        alt={review.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{review.author}</h4>
                      <p className="text-xs text-blue-200 uppercase tracking-widest opacity-80">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Google Trust Badge / Note */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92V14.51h6.73a6.83 6.83 0 0 1-2.28 4.79c-1.39.95-3.14 1.51-4.45 1.51a7.48 7.48 0 0 1-7.48-7.48c0-4.13 3.35-7.48 7.48-7.48 2.3 0 4.15 1.14 5.25 2.1l2.76-2.76A11.3 11.3 0 0 0 12.48 3C6.54 3 2 7.72 2 12.3c0 5.4 4.54 9.7 10.48 9.7 3.5 0 6.13-1.15 8.16-3.11 2.21-2.13 2.82-5.13 2.82-7.17 0-.54-.05-1.01-.13-1.47l-10.85-.43v-.01z" />
            </svg>
            <span className="text-sm font-semibold tracking-wider uppercase">Google Reviews</span>
          </div>
          <p className="text-sm text-blue-300/60 font-light text-center md:text-right">
            Extraído dinamicamente das avaliações oficiais da Moura Rocha no Google Maps.
          </p>
        </div>
      </div>
    </section>
  );
}



