/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from "react";
import { Maximize2, Image as ImageIcon, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_DATA } from "../data/mockData";
import { GalleryItem } from "../types";
import { TypewriterTitle } from "./TypewriterTitle";

export default function GallerySection() {
  const [filter, setFilter] = useState<string>("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories extracted from our data items
  const categories = ["todos", "Porto de carga", "Navios de carga", "Contentores", "Reuniões empresariais", "Pessoas africanas em escritórios modernos", "Logística internacional", "Transporte terrestre", "Armazéns modernos"];

  // Simplify category label for custom modern design tags
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "todos": return "Todos os Registos";
      case "Porto de carga": return "Portos";
      case "Navios de carga": return "Navios";
      case "Contentores": return "Terminais";
      case "Reuniões empresariais": return "Negócios";
      case "Pessoas africanas em escritórios modernos": return "Equipa Corporate";
      case "Logística internacional": return "Logística";
      case "Transporte terrestre": return "Terrestre";
      case "Armazéns modernos": return "Armazéns";
      default: return cat;
    }
  };

  const filteredItems = filter === "todos" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  // Lightbox navigational controls
  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="galeria-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
            <TypewriterTitle text="Ativos e Operações Reais" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 tracking-tight">
            <TypewriterTitle text="Galeria do Universo Lizando" delay={0.4} />
          </h2>
          <div className="w-12 h-1 bg-[#004D80] rounded mr-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Descubra as nossas frentes operacionais diárias nas cadeias internacionais de comércio, infraestruturas portuárias parceiras e instalações de suporte.
          </p>
        </div>

        {/* Categories horizontal filter wheel */}
        <div className="flex flex-wrap justify-start gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs py-2 px-4 rounded-full border transition-all duration-300 font-medium ${
                filter === cat
                  ? "bg-[#004D80] border-[#004D80] text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-350 hover:bg-gray-50"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Photo Grid bento style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => {
                // Find index of this item in the filtered list
                setLightboxIndex(index);
              }}
              className="relative rounded-2xl overflow-hidden aspect-4/3 group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 border border-gray-200 bg-gray-100"
            >
              {/* Image element with safety referrer configuration */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover content glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10 text-white">
                <span className="text-[10px] text-[#00AEEF] uppercase font-mono font-bold tracking-widest">
                  {getCategoryLabel(item.category)}
                </span>
                <h4 className="text-sm font-bold font-display tracking-tight leading-snug mt-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  <Eye className="w-4 h-4 shrink-0 text-[#00AEEF] ml-2" />
                </h4>
              </div>

              {/* Top magnifying glass icon decor */}
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state callback */}
        {filteredItems.length === 0 && (
          <div className="bg-white p-12 text-center rounded-2xl border border-gray-100">
            <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500 font-light">Nenhuma imagem neste segmento operacional de momento.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal Carousel */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          id="gallery-lightbox"
        >
          {/* Close control button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Core active image container */}
          <div className="max-w-5xl max-h-[80vh] w-full relative flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-lg border border-white/15"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()} // stop close modal from firing when clicking image
            />
            
            {/* Legend underneath */}
            <div className="text-center mt-4 text-white max-w-xl px-4" onClick={(e) => e.stopPropagation()}>
              <span className="text-xs text-[#00AEEF] uppercase font-mono tracking-widest">
                {getCategoryLabel(filteredItems[lightboxIndex].category)}
              </span>
              <p className="text-base font-bold font-display mt-0.5">{filteredItems[lightboxIndex].title}</p>
              <p className="text-xs text-gray-400 mt-1">Imagem {lightboxIndex + 1} de {filteredItems.length}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
