/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Globe, MapPin, Check, Info, Navigation, Star } from "lucide-react";
import { COUNTRIES_DATA } from "../data/mockData";
import { OperatingCountry } from "../types";
import { TypewriterTitle } from "./TypewriterTitle";

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<OperatingCountry | null>(COUNTRIES_DATA[0]);
  const [hoveredCountry, setHoveredCountry] = useState<OperatingCountry | null>(null);

  return (
    <section className="py-24 bg-[#0A192F] text-white overflow-hidden relative" id="mercados-section">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0" />
      
      {/* Decorative Cyan flare orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#004D80]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
            <TypewriterTitle text="Eixo de Trabalho Global" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            <TypewriterTitle text="Mercados Internacionais de Operação" delay={0.4} />
          </h2>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mr-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Interligamos Angola às principais forças de manufactura, tecnologia e abastecimento do mundo, cobrindo rotas críticas com segurança e agilidade aduaneira.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Map Representation (Canvas projection) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="bg-[#112240] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  <span className="text-xs text-gray-300 font-mono tracking-wider lowercase">status: linhas de frete ativas</span>
                </div>
                <span className="text-[10px] text-gray-400 font-mono uppercase bg-[#1d3557] px-2.5 py-1 rounded">
                  Projeção Mercator Estilizada
                </span>
              </div>

              {/* Styled SVG Map Block or Grid Projection */}
              <div className="relative aspect-16/9 w-full bg-[#0d1e3d] rounded-2xl border border-white/5 overflow-hidden group">
                
                {/* Simulated World Continent Outlines (Minimalistic polygon paths to look premium tech) */}
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* North America */}
                  <path d="M5,15 L25,15 L30,25 L25,35 L12,35 L5,25 Z" fill="#94a3b8" />
                  {/* South America */}
                  <path d="M22,50 L28,50 L34,68 L28,85 L22,65 Z" fill="#94a3b8" />
                  {/* Europe */}
                  <path d="M42,20 L55,20 L54,32 L47,38 L40,32 Z" fill="#94a3b8" />
                  {/* Africa */}
                  <path d="M42,42 L56,42 L59,57 L54,80 L49,85 L44,70 Z" fill="#94a3b8" />
                  {/* Asia */}
                  <path d="M56,22 L85,22 L91,48 L80,58 L63,45" fill="#94a3b8" />
                  {/* Australia */}
                  <path d="M80,70 L90,70 L92,80 L82,85 Z" fill="#94a3b8" />
                  
                  {/* Logistics connection lines from rest of the world converging into Luanda, Angola (coordinates 50, 72) */}
                  {COUNTRIES_DATA.map((c) => {
                    if (c.code !== "AO") {
                      return (
                        <g key={`line-${c.code}`}>
                          <path
                            d={`M ${c.coordinates.x} ${c.coordinates.y} Q ${(c.coordinates.x + 50) / 2} ${(c.coordinates.y + 72) / 2 - 10} 50 72`}
                            fill="none"
                            stroke="#00AEEF"
                            strokeWidth="0.4"
                            strokeDasharray="1.5,1.5"
                            className="animate-pulse"
                          />
                        </g>
                      );
                    }
                    return null;
                  })}
                </svg>

                {/* Country Relative Nodes Pins */}
                {COUNTRIES_DATA.map((country: OperatingCountry) => {
                  const isSelected = selectedCountry?.code === country.code;
                  const isHovered = hoveredCountry?.code === country.code;
                  
                  return (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country)}
                      onMouseEnter={() => setHoveredCountry(country)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{
                        left: `${country.coordinates.x}%`,
                        top: `${country.coordinates.y}%`
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10"
                      id={`map-pin-${country.code}`}
                    >
                      {/* Pulse ring for selected/hovered pins */}
                      <span className={`absolute inset-0 rounded-full bg-[#00AEEF] transition-all ${
                        isSelected || isHovered ? "scale-250 opacity-40 animate-ping" : "scale-100 opacity-0"
                      }`} />

                      {/* Core pin marker */}
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${
                        country.code === "AO" 
                          ? "bg-red-500 scale-120 border-2 border-white shadow shadow-red-500/50" 
                          : isSelected 
                            ? "bg-[#00AEEF] scale-110 border border-white" 
                            : "bg-[#004D80] hover:bg-[#00AEEF] border border-white/20"
                      }`}>
                        {country.code === "AO" ? (
                          <Star className="w-3 h-3 text-white fill-current" />
                        ) : (
                          <MapPin className="w-3 h-3 text-white" />
                        )}
                      </div>

                      {/* Floating mini tooltips */}
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-black text-white text-[9px] font-bold py-0.5 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {country.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick instructions indicator */}
              <p className="text-[11px] text-gray-400 mt-3 text-center sm:text-left flex items-center justify-center sm:justify-start space-x-1">
                <Info className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                <span>Clique num pino do mapa ou selecione na barra lateral para ver os detalhes operacionais de cada praça comercial.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Detailed Info Panel of Selected Country */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="bg-[#112240] rounded-3xl p-8 border border-white/10 shadow-2xl h-full flex flex-col justify-between">
              
              {/* Country Selection Header */}
              <div>
                <h3 className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-4">
                  Detalhes do Mercado Selecionado
                </h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl font-bold font-display">
                    {selectedCountry?.name}
                  </div>
                  <span className="text-xs bg-[#004D80] text-[#00AEEF] px-2.5 py-1 rounded font-mono font-bold uppercase">
                    {selectedCountry?.code}
                  </span>
                </div>

                <div className="h-px bg-white/10 my-4" />

                {/* Meta details key values */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 block uppercase tracking-wider font-mono">Hub / Capital</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{selectedCountry?.capital}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block uppercase tracking-wider font-mono">Papel Estratégico na Cadeia</span>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1.5 leading-relaxed font-light font-sans">
                      {selectedCountry?.importance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick-Click List */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest font-mono mb-3">
                  Lista de Mercados
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  {COUNTRIES_DATA.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelectedCountry(c)}
                      className={`text-xs text-left py-2 px-3 rounded-lg border transition-all flex items-center space-x-2 ${
                        selectedCountry?.code === c.code
                          ? "bg-[#004D80] border-[#00AEEF] text-[#00AEEF] font-bold"
                          : "bg-black/20 border-white/5 text-gray-300 hover:bg-black/40 hover:border-white/10"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
