/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, User, Settings, Image as ImageIcon, Sparkles } from "lucide-react";
import { PROJECTS_DATA, ProjectDetail } from "../data/websiteData";

interface ProjectsProps {
  initialProjectId?: string;
}

export default function Projects({ initialProjectId }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // Set selected project if opened from other sections
  useEffect(() => {
    if (initialProjectId) {
      const found = PROJECTS_DATA.find((p) => p.id === initialProjectId);
      if (found) {
        setSelectedProject(found);
      }
    } else if (PROJECTS_DATA.length > 0) {
      setSelectedProject(PROJECTS_DATA[0]);
    }
  }, [initialProjectId]);

  const categories = ["Todos", "Oil & Gas", "Logística", "Industrial", "Marítimo"];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    return activeFilter === "Todos" || proj.category === activeFilter;
  });

  return (
    <div className="w-full">
      {/* BANNER */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-[#001729]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Estudos de Caso de Sucesso</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            NOSSOS PROJETOS
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* PORTFOLIO GRID & DETAILS LAYOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: LIST OF PROJECTS WITH CATEGORY FILTER */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Filtrar Atividades</span>
                <h2 className="text-2xl font-display font-bold text-[#001E33]">Lista de Obras e Desafios</h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        activeFilter === cat
                          ? "bg-[#004D80] text-white shadow-sm"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* PROJECT TILES LIST */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                {filteredProjects.map((proj) => {
                  const isSelected = selectedProject?.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                        isSelected
                          ? "bg-[#004D80]/5 border-[#00AEEF] shadow-md"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100/70"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0 relative">
                        <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#00AEEF] font-bold">
                          {proj.category}
                        </span>
                        <h3 className="text-sm font-display font-semibold text-[#001E33] leading-tight mt-1">
                          {proj.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 font-mono mt-1">Ano: {proj.year} | Loc: {proj.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: RICH DETAIL SHEET FOR SELECTED PROJECT */}
            <div className="lg:col-span-7">
              {selectedProject ? (
                <div className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
                  
                  {/* Photo area */}
                  <div className="aspect-video rounded-2xl overflow-hidden border border-slate-100 relative bg-slate-50">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E33]/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-[#00AEEF] text-[#001E33] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                      {selectedProject.category}
                    </span>
                  </div>

                  {/* Header details */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-[#001E33]">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technical Datasheet Details Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-6 text-left">
                    <div className="flex items-center space-x-2.5 text-xs">
                      <User className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <div>
                        <span className="text-slate-400 font-mono block text-[10px] uppercase">Cliente</span>
                        <strong className="text-slate-700 font-semibold">{selectedProject.client}</strong>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 text-xs">
                      <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <div>
                        <span className="text-slate-400 font-mono block text-[10px] uppercase">Local</span>
                        <strong className="text-slate-700 font-semibold">{selectedProject.location}</strong>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 text-xs">
                      <Calendar className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <div>
                        <span className="text-slate-400 font-mono block text-[10px] uppercase">Ano de Conclusão</span>
                        <strong className="text-slate-700 font-semibold">{selectedProject.year}</strong>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 text-xs">
                      <Settings className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <div>
                        <span className="text-slate-400 font-mono block text-[10px] uppercase">Estilo</span>
                        <strong className="text-slate-700 font-semibold">{selectedProject.category}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Services provided list */}
                  <div className="space-y-3 text-left">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">Serviços Lizando Prestados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.servicesProvided.map((serv, idx) => (
                        <span key={idx} className="bg-slate-100 text-[#004D80] text-[11px] font-semibold px-3 py-1 rounded-md">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Before & After comparison simulation! */}
                  {selectedProject.beforeImageUrl && selectedProject.afterImageUrl && (
                    <div className="space-y-3.5 border-t border-slate-100 pt-6 text-left">
                      <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                        <Sparkles className="w-4 h-4 text-[#00AEEF]" />
                        <span>Visualização de Evolução do Projeto (Antes e Depois)</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative rounded-xl overflow-hidden border border-slate-100 aspect-video">
                          <img src={selectedProject.beforeImageUrl} alt="Antes" className="w-full h-full object-cover grayscale opacity-80" />
                          <span className="absolute top-2 left-2 bg-black/60 text-white text-[9px] font-mono uppercase px-2 py-0.5 rounded">Antes</span>
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-slate-100 aspect-video">
                          <img src={selectedProject.afterImageUrl} alt="Depois" className="w-full h-full object-cover" />
                          <span className="absolute top-2 left-2 bg-[#00AEEF]/80 text-[#001E33] text-[9px] font-mono uppercase px-2 py-0.5 rounded">Depois (Conclusão)</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ) : (
                /* No selected fallback */
                <div className="text-center py-24 bg-slate-50 border border-slate-150 rounded-3xl">
                  <p className="text-sm text-slate-500 font-light">Selecione um projeto à esquerda para ver os detalhes completos.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
