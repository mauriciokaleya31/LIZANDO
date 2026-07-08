/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Eye, Clock, MessageSquare } from "lucide-react";
import { NEWS_DATA, NewsPost } from "../data/websiteData";

interface NewsProps {
  initialPostId?: string;
}

export default function News({ initialPostId }: NewsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [readingPost, setReadingPost] = useState<NewsPost | null>(null);

  // Set reading post if opened from home page or other components
  useEffect(() => {
    if (initialPostId) {
      const found = NEWS_DATA.find((n) => n.id === initialPostId);
      if (found) {
        setReadingPost(found);
      }
    }
  }, [initialPostId]);

  const categories = [
    "Todos",
    "Empresa",
    "Oil & Gas",
    "Indústria",
    "Logística",
    "Ship Chandling",
    "Eventos",
    "Certificações",
    "Sustentabilidade"
  ];

  const filteredNews = NEWS_DATA.filter((post) => {
    return activeCategory === "Todos" || post.category === activeCategory;
  });

  // Calculate related posts for reading view
  const relatedPosts = readingPost
    ? NEWS_DATA.filter((p) => p.id !== readingPost.id && p.category === readingPost.category).slice(0, 2)
    : [];

  // If no related posts of the same category, grab any other two posts
  const fallbackRelated = relatedPosts.length > 0 
    ? relatedPosts 
    : readingPost 
      ? NEWS_DATA.filter((p) => p.id !== readingPost.id).slice(0, 2) 
      : [];

  return (
    <div className="w-full">
      {/* BANNER */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-[#001729]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Notícias & Imprensa Corporativa</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            BLOG DE NOTÍCIAS
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* DYNAMIC VIEW MANAGEMENT */}
      <AnimatePresence mode="wait">
        {readingPost ? (
          /* READ MODE SECTION */
          <motion.section
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="py-24 bg-white"
          >
            <div className="max-w-4xl mx-auto px-6">
              {/* Back to list button */}
              <button
                onClick={() => setReadingPost(null)}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#004D80] hover:text-[#00AEEF] uppercase tracking-wider mb-8 cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Voltar para as Notícias</span>
              </button>

              {/* Header meta */}
              <div className="space-y-4 text-left">
                <span className="bg-[#004D80] text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-md">
                  {readingPost.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] leading-snug">
                  {readingPost.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono border-b border-slate-100 pb-6 pt-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-[#00AEEF]" />
                    <span>{readingPost.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <User className="w-4 h-4 text-[#00AEEF]" />
                    <span>Autor: {readingPost.author}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-[#00AEEF]" />
                    <span>Leitura: 4 min</span>
                  </span>
                </div>
              </div>

              {/* Main Featured Photo */}
              <div className="aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-lg mt-8 mb-10">
                <img src={readingPost.imageUrl} alt={readingPost.title} className="w-full h-full object-cover" />
              </div>

              {/* Full Content */}
              <div className="text-sm sm:text-base text-slate-600 font-light leading-relaxed text-left space-y-6">
                <p className="text-lg font-semibold text-[#001E33] italic">
                  "{readingPost.summary}"
                </p>
                <p>{readingPost.content}</p>
                <p>
                  As operações e parcerias desenvolvidas em Angola reforçam o nosso propósito de entregar soluções integradas de Ship Chandling de padrão internacional, mantendo total conformidade alfandegária e otimizando frotas industriais terrestres e offshore de forma célere.
                </p>
                <p>
                  Através destas iniciativas, a Lizando Lda estabelece-se firmemente como o pilar de trading para empresas que necessitam de desalfandegamento fluído e abastecimento permanente.
                </p>
              </div>

              {/* Photo gallery if present */}
              {readingPost.gallery && readingPost.gallery.length > 0 && (
                <div className="mt-12 space-y-3.5 text-left">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">Galeria do Evento / Notícia:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {readingPost.gallery.map((img, iIdx) => (
                      <div key={iIdx} className="aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                        <img src={img} alt="Galeria" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related posts */}
              <div className="border-t border-slate-150 mt-16 pt-12 text-left space-y-6">
                <h4 className="text-base font-display font-bold text-[#001E33] uppercase tracking-wide">Artigos Relacionados</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {fallbackRelated.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => {
                        setReadingPost(rel);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="p-5">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#00AEEF] font-bold block">{rel.category}</span>
                        <h5 className="text-sm font-display font-semibold text-[#001E33] leading-tight mt-1.5 group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                          {rel.title}
                        </h5>
                        <p className="text-xs text-slate-500 font-light mt-2 line-clamp-2">{rel.summary}</p>
                      </div>
                      <div className="px-5 py-3 bg-white border-t border-slate-100 text-[11px] font-bold text-[#004D80] uppercase tracking-wider flex items-center justify-between">
                        <span>Ler mais</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.section>
        ) : (
          /* LIST MODE SECTION */
          <motion.section
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="py-24 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Category selector tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-16">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-[#004D80] text-white shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-500 border border-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* News Grid */}
              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredNews.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => {
                        setReadingPost(post);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-video bg-slate-50 relative overflow-hidden shrink-0">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          />
                          <span className="absolute top-4 left-4 bg-[#004D80] text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-md">
                            {post.category}
                          </span>
                        </div>
                        <div className="p-6 sm:p-8 space-y-3 text-left">
                          <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>Por: {post.author}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-display font-bold text-[#001E33] leading-snug group-hover:text-[#00AEEF] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                            {post.summary}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-[#004D80] font-bold uppercase tracking-wider">
                        <span>Ler notícia completa</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="text-center py-24 bg-slate-50 border border-slate-150 rounded-3xl max-w-xl mx-auto">
                  <p className="text-sm text-slate-500 font-light">Nenhuma notícia correspondente a este filtro no momento.</p>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
