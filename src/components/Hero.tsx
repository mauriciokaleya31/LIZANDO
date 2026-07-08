/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Ship, Anchor, ArrowRight, Play, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onOpenQuoteModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

// Set of alternating cinematic backgrounds representing the logistics vibe in Angola & globally
const HERO_BG_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    caption: "Logística Portuária de Contentores - Conexões Globais"
  },
  {
    url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80",
    caption: "Transporte Multimodal de Longa Distância"
  },
  {
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80",
    caption: "Assessoria Aduaneira e Reuniões Corporativas Modernas"
  }
];

export default function Hero({ onOpenQuoteModal, onScrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[650px] w-full bg-black overflow-hidden flex items-center justify-center pt-16" id="hero-section">
      {/* Background Slides with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG_IMAGES[currentSlide].url})` }}
          />
        </AnimatePresence>
        {/* Abstract overlays (Grid pattern, vignettes to emphasize text readability) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-black/40 to-transparent z-1" />
      </div>

      {/* Decorative Floating Trade Widgets */}
      <div className="absolute right-8 bottom-8 z-10 hidden xl:flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-white shadow-xl max-w-sm hover:bg-white/15 transition-all">
        <div className="p-2.5 bg-[#00AEEF]/20 text-[#00AEEF] rounded-lg">
          <Anchor className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <p className="text-xs text-gray-300 uppercase tracking-widest font-bold">Lizando Lda</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{HERO_BG_IMAGES[currentSlide].caption}</p>
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-white">
            
            {/* Main Title Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight text-white drop-shadow-md text-center lg:text-left"
              id="hero-main-title"
            >
              Conectamos Angola <br className="hidden md:inline" />
              ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#004D80]">Mercado Global</span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed text-center lg:text-left"
              id="hero-sub-title"
            >
              Soluções de Importação, Exportação, Comércio Internacional e Gestão de Cadeias de Suprimentos para empresas que procuram crescer sem fronteiras.
            </motion.p>

            {/* Call to action CTAs Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenQuoteModal}
                id="hero-btn-quote"
                className="bg-[#004D80] hover:bg-[#003d66] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onScrollToSection("contactos")}
                id="hero-btn-contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>Falar Connosco</span>
              </button>
            </motion.div>
          </div>

          {/* Side Graphics / Simulated Video Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-4/3 bg-black/40 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=650&q=80"
                alt="Operações de Carga Lizando"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-white font-medium text-xs tracking-wider uppercase bg-[#00AEEF] py-1 px-2.5 rounded self-start mb-2">
                  Navios & Logística
                </span>
                <h3 className="text-white font-bold text-lg leading-tight tracking-tight">
                  Operações Integradas em Tempo Real
                </h3>
                <p className="text-gray-300 text-xs mt-1">
                  Coordenamos rotas internacionais para o porto de Luanda sem complicações.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-5">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 text-white fill-current ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
