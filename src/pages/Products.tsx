/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, ShoppingBag, Info, PhoneCall } from "lucide-react";
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from "../data/websiteData";

interface ProductsProps {
  initialSearch?: string;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Products({ initialSearch, onOpenQuoteModal }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearch || "");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Keep search state in sync with initialSearch parameter if it changes
  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* CATALOG BANNER */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-[#001729]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Catálogo Corporativo</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            PRODUTOS E PROVISÕES
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* INTERACTIVE CATALOG CONTAINER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SEARCH AND FILTERS TOOLBAR */}
          <div className="space-y-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Intelligent Search Input */}
              <div className="lg:col-span-4 relative">
                <input
                  type="text"
                  placeholder="Pesquisar produtos ou especificações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm font-light text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              </div>

              {/* Reset Search / Active Search Indicator */}
              <div className="lg:col-span-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  A mostrar <strong className="font-semibold text-[#001E33]">{filteredProducts.length}</strong> produtos
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-xs text-red-500 hover:text-red-700 font-mono font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Limpar pesquisa [X]
                  </button>
                )}
              </div>
            </div>

            {/* HORIZONTAL CATEGORY TAGS */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Filtrar por Categoria:</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#004D80] text-white shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CATALOG GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Photo area */}
                  <div className="aspect-video bg-slate-50 relative overflow-hidden shrink-0">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#004D80]/90 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-base font-display font-bold text-[#001E33] leading-snug group-hover:text-[#00AEEF] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specifications list if present */}
                      {product.specification && product.specification.length > 0 && (
                        <div className="pt-3 border-t border-slate-100 space-y-1.5">
                          {product.specification.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400">
                              <Info className="w-3.5 h-3.5 text-[#00AEEF]" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom action row */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() =>
                          onOpenQuoteModal(`Cotação para: ${product.name} (Cat: ${product.category})`)
                        }
                        className="bg-[#004D80] hover:bg-[#00AEEF] text-white py-2.5 px-4 rounded text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Solicitar Cotação</span>
                      </button>
                      
                      <button
                        onClick={() =>
                          onOpenQuoteModal(`Pedido de informações: Especificações de ${product.name}`)
                        }
                        className="text-[11px] text-slate-400 hover:text-slate-600 font-medium transition-colors"
                      >
                        Informação Técnica
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state if search returns nothing */
            <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-150 max-w-xl mx-auto space-y-4">
              <p className="text-sm text-slate-500 font-light">Nenhum produto encontrado correspondente aos seus filtros.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
                className="bg-[#004D80] hover:bg-[#00AEEF] text-white py-2 px-4 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Limpar Filtros e Busca
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TECHNICAL ASSIST CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[#001A2E]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <PhoneCall className="w-10 h-10 text-[#00AEEF] mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Procura Peças Técnicas de Difícil Acesso?</h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            Dispomos de canais diretos de trading e procurement com os maiores hubs mundiais. Localizamos e despachamos sobressalentes específicos com urgência.
          </p>
          <button
            onClick={() => onOpenQuoteModal("Procurement / Fornecimento Técnico Especializado")}
            className="bg-[#00AEEF] hover:bg-white hover:text-[#001E33] text-[#001E33] py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
          >
            Fazer Consulta de Procurement
          </button>
        </div>
      </section>
    </div>
  );
}
