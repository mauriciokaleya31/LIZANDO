/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ship, Anchor, ArrowRight, ShieldCheck, Milestone, Share2, Compass, Layers, Hourglass, Award, Star, Quote, ChevronLeft, ChevronRight, MessageSquare, Phone, Mail, Flame, Utensils, Truck, Search, Globe } from "lucide-react";
import { SERVICES_DETAILED, PRODUCTS_DATA, PROJECTS_DATA, NEWS_DATA, TIMELINE_EVENTS } from "../data/websiteData";
import { TypewriterTitle } from "../components/TypewriterTitle";
import CounterSection from "../components/CounterSection";

const TESTIMONIALS = [
  {
    name: "Dr. António Silva",
    role: "Diretor de Operações • Angola Distribuidora S.A.",
    quote: "A Lizando Lda tornou as nossas importações muito mais rápidas e eficientes. A desalfandegação de insumos alimentares e industriais que antes demorava semanas flui agora com total planeamento operacional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Dr.ª Sandra Melo",
    role: "Head of Supply Chain • Global Tech Luanda",
    quote: "Parceiro estratégico excelente em termos de procurement e conteúdo local. O nosso suporte offshore de Oil & Gas requer altíssima urgência, e a Lizando responde sempre em tempo recorde.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Dr. Francisco Van-Dúnem",
    role: "Administrador de Célula Fabril • AngoIndústria",
    quote: "Sua agilidade na consolidação e coordenação de fretes vindos da Turquia e Portugal reduziu drasticamente nossos custos. A transparência nos relatórios de custos de procurement é irrepreensível.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Eng.ª Ana Paula Santos",
    role: "Gestora de Projetos de Infraestrutura • Luanda S.A.",
    quote: "A parceria com a Lizando garantiu o fornecimento constante de materiais de construção civil de alta qualidade para as nossas grandes obras públicas em Angola.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Dr. Manuel Gourgel",
    role: "Diretor de Compras • Minerais de Angola Lda.",
    quote: "A consultoria comercial e o mapeamento de fornecedores globais feitos pela equipa da Lizando superaram as nossas expectativas. Conseguimos novos fornecedores qualificados em tempo recorde.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Dr.ª Beatriz da Costa",
    role: "Supervisora de Logística • AgroAngola S.A.",
    quote: "Importar maquinaria agrícola com a assessoria aduaneira e logística da Lizando foi um processo transparente, com cumprimento rigoroso de prazos e apoio permanente.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

function getServiceIcon(iconName: string) {
  const css = "w-6 h-6 transition-transform duration-500 group-hover:scale-110";
  switch (iconName) {
    case "Anchor":
      return <Anchor className={css} />;
    case "Flame":
      return <Flame className={css} />;
    case "SearchCode":
    case "Search":
      return <Search className={css} />;
    case "Utensils":
      return <Utensils className={css} />;
    case "Truck":
      return <Truck className={css} />;
    case "Layers":
      return <Layers className={css} />;
    default:
      return <Compass className={css} />;
  }
}

interface HomeProps {
  onNavigateToPage: (pageId: string, params?: any) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Home({ onNavigateToPage, onOpenQuoteModal }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentHeroBg, setCurrentHeroBg] = useState(0);

  const heroBgs = [
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
  ];

  // Auto-play interval for hero backgrounds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroBg((prev) => (prev + 1) % heroBgs.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Auto-play interval for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Highlight first 3 products
  const featuredProducts = PRODUCTS_DATA.slice(0, 3);
  // Highlight first 2 projects
  const featuredProjects = PROJECTS_DATA.slice(0, 2);
  // Highlight first 2 news posts
  const featuredNews = NEWS_DATA.slice(0, 2);

  // Partners array
  const partners = [
    { name: "Porto de Luanda", logoText: "PL" },
    { name: "Chevron Angola", logoText: "CV" },
    { name: "Sonangol S.A.", logoText: "SN" },
    { name: "ExxonMobil", logoText: "EM" },
    { name: "AGT Angola", logoText: "AG" },
    { name: "TotalEnergies", logoText: "TE" },
    { name: "ANPG", logoText: "AN" }
  ];

  const valueProps = [
    {
      title: "Experiência Internacional",
      desc: "Profundo domínio dos trâmites e regimes aduaneiros do Porto de Luanda, Soyo e Cabinda.",
      icon: Compass
    },
    {
      title: "Rede de Fornecedores Globais",
      desc: "Conexões diretas com fabricantes certificados na Europa, Turquia, China e Emirados Árabes.",
      icon: Share2
    },
    {
      title: "Conformidade Total",
      desc: "Registos operacionais atualizados e conformidade absoluta com as diretrizes da ANPG.",
      icon: ShieldCheck
    },
    {
      title: "Precisão Temporal",
      desc: "Controlo logístico rigoroso para garantir zero paragens operacionais em frentes industriais.",
      icon: Hourglass
    },
    {
      title: "Soluções Multimodais",
      desc: "Planeamento sofisticado de transportes integrados: marítimo, terrestre e aéreo.",
      icon: Milestone
    },
    {
      title: "Equipa Especializada",
      desc: "Especialistas poliglotas com vasta experiência em trading, catering industrial e supply chain.",
      icon: Layers
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#00101F]">
        {/* Ambient background slideshow of maximum 3 images with smooth transitions */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroBg}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.45, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
              style={{ backgroundImage: `url('${heroBgs[currentHeroBg]}')` }}
            />
          </AnimatePresence>
        </div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-1" />
        
        {/* Gradient vignette mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/80 to-transparent z-1" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >


            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none max-w-4xl mx-auto uppercase">
              <TypewriterTitle text="CONECTAMOS ANGOLA" className="block text-white" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-300 block mt-2">
                AO COMÉRCIO GLOBAL
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light mt-6 max-w-2xl leading-relaxed">
              Trading multimodal, Ship Chandling de excelência, Apoio Offshore à Indústria de Oil & Gas e Procurement Internacional com rigor aduaneiro absoluto.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto bg-[#00AEEF] hover:bg-[#00AEEF]/80 text-[#001E33] hover:scale-[1.02] active:scale-95 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#00AEEF]/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onNavigateToPage("sobre-nos")}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-[1.02] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Conhecer a Empresa</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroBgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroBg(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentHeroBg === idx ? "bg-[#00AEEF] w-8" : "bg-white/40 w-2.5 hover:bg-white/70"
              }`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. QUEM SOMOS (Resumo) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">
                Excelência Operacional
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight">
                Lizando Lda
              </h2>
              <div className="w-12 h-1 bg-[#004D80] rounded" />
              
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Fundada com a visão de ser a maior referência em comércio internacional, logística multimodal e apoio direto à indústria petrolífera, a <strong>Lizando Lda</strong> é o parceiro de confiança para empresas que exigem máxima precisão, conformidade jurídica e segurança.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Unimos portos internacionais a todas as províncias angolanas, gerindo com maestria serviços complexos de <strong>Ship Chandling</strong>, <strong>Catering Industrial</strong>, suprimentos técnicos de <strong>Procurement</strong> e assessoria aduaneira dedicada.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigateToPage("sobre-nos")}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#004D80] hover:text-[#00AEEF] transition-colors"
                >
                  <span>Ler história completa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                  alt="Operações Portuárias e Importação Lizando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSSOS SERVIÇOS (6 Cartões) */}
      <section className="py-24 bg-[#F8FAFC] border-t border-b border-slate-200/60 relative overflow-hidden">
        {/* Decorative background vectors */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004D80]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-left max-w-2xl space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#001E33] tracking-tight">
                Portfólio de <span className="bg-gradient-to-r from-[#004D80] to-[#00AEEF] bg-clip-text text-transparent">Serviços Corporativos</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#004D80] rounded-full" />
              <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                Cobrimos as frentes estratégicas mais críticas de logística, comércio internacional e suporte industrial em Angola com infraestrutura de ponta e rigor internacional.
              </p>
            </div>
            
            <button
              onClick={() => onNavigateToPage("servicos")}
              className="mt-6 md:mt-0 bg-white hover:bg-[#001E33] text-[#001E33] hover:text-white border border-slate-200 hover:border-[#001E33] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer self-start md:self-auto shadow-sm hover:shadow-md animate-fade-in"
            >
              <span>Ver Todos os Detalhes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DETAILED.map((service, idx) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/8 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative"
                >
                  <div>
                    {/* Top image section with elegant overlay */}
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001729]/90 via-[#001729]/35 to-transparent" />
                      
                      {/* Floating badge for corporate tag */}
                      <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                        Lizando Lda • Soluções
                      </span>

                      {/* Overlapping Floating Icon */}
                      <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-[#001E33] text-[#00AEEF] flex items-center justify-center shadow-xl border-2 border-white group-hover:bg-[#00AEEF] group-hover:text-[#001E33] transition-colors duration-300 z-10">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="pt-10 px-6 pb-4">
                      <h3 className="text-lg font-display font-bold text-[#001E33] group-hover:text-[#004D80] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-3 mb-5">
                        {service.description}
                      </p>

                      {/* Micro-benefits tags */}
                      <div className="space-y-2 mb-4 border-t border-slate-100 pt-4">
                        {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] mt-1.5 shrink-0" />
                            <span className="text-[11px] text-slate-500 font-light leading-tight">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                    <button
                      onClick={() => onNavigateToPage("servicos", { activeServiceId: service.id })}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#004D80] group-hover:text-[#00AEEF] uppercase tracking-wider transition-all duration-300 py-2"
                    >
                      <span>Saber mais</span>
                      <span className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-[#00AEEF]/10 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUTOS EM DESTAQUE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-100 pb-8"
          >
            <div className="text-left space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#001E33] tracking-tight">
                Produtos Industriais <span className="bg-gradient-to-r from-[#004D80] to-[#00AEEF] bg-clip-text text-transparent">em Destaque</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#004D80] rounded-full" />
            </div>
            
            <button
              onClick={() => onNavigateToPage("produtos")}
              className="group mt-6 md:mt-0 relative overflow-hidden bg-gradient-to-r from-[#003B66] to-[#001E33] hover:from-[#00AEEF] hover:to-[#004D80] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-500 flex items-center space-x-3 cursor-pointer self-start md:self-auto shadow-lg hover:shadow-xl hover:shadow-[#00AEEF]/15 hover:-translate-y-0.5"
            >
              <span className="relative z-10 transition-colors duration-300">Ver Catálogo Completo</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200/50 flex flex-col justify-between hover:border-[#00AEEF]/40 hover:shadow-2xl hover:shadow-[#00AEEF]/5 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="aspect-video bg-slate-900 relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001729]/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 text-[#001E33] text-[9px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-xl shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-display font-black text-[#001E33] leading-snug group-hover:text-[#004D80] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => onOpenQuoteModal(`Cotação para: ${product.name} (${product.category})`)}
                      className="text-xs font-bold text-[#00AEEF] hover:text-[#004D80] uppercase tracking-widest transition-colors duration-300 bg-[#00AEEF]/5 hover:bg-[#00AEEF]/10 px-4 py-2.5 rounded-xl border border-[#00AEEF]/10"
                    >
                      Solicitar Cotação
                    </button>
                    <button
                      onClick={() => onNavigateToPage("produtos", { search: product.name })}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors py-2"
                    >
                      <span>Ficha Técnica</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORQUE ESCOLHER A LIZANDO (Value section grid) */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Glowing background highlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#004D80]/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle dot pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Por Que Escolher a <span className="bg-gradient-to-r from-[#00AEEF] to-white bg-clip-text text-transparent">Lizando?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#004D80] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Aliamos compromisso local, rigor de governança internacional e infraestrutura integrada para garantir entregas com zero incidentes e máxima eficiência em Angola.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/[0.08] hover:border-[#00AEEF]/40 hover:bg-white/[0.05] transition-all duration-500 group hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-6 border border-[#00AEEF]/15 group-hover:bg-[#00AEEF] group-hover:text-[#001E33] group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#00AEEF] transition-colors duration-300">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{val.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center text-xs text-[#00AEEF] font-mono tracking-wider font-bold">
                    <span>PADRÃO LIZANDO</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. NÚMEROS DA EMPRESA (Contadores) */}
      <CounterSection />

      {/* 7. PROJETOS REALIZADOS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#004D80]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-150 pb-8"
          >
            <div className="text-left space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#001E33] tracking-tight">
                Projetos Recentes <span className="bg-gradient-to-r from-[#004D80] to-[#00AEEF] bg-clip-text text-transparent">Executados</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#004D80] rounded-full" />
            </div>
            
            <button
              onClick={() => onNavigateToPage("projetos")}
              className="group mt-6 md:mt-0 relative overflow-hidden bg-gradient-to-r from-[#003B66] to-[#001E33] hover:from-[#00AEEF] hover:to-[#004D80] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-500 flex items-center space-x-3 cursor-pointer self-start md:self-auto shadow-lg hover:shadow-xl hover:shadow-[#00AEEF]/15 hover:-translate-y-0.5"
            >
              <span className="relative z-10 transition-colors duration-300">Ver Todos os Projetos</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                onClick={() => onNavigateToPage("projetos", { activeProjectId: project.id })}
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200/60 flex flex-col sm:flex-row shadow-sm hover:shadow-2xl hover:shadow-[#00AEEF]/5 transition-all duration-500 cursor-pointer group hover:-translate-y-1.5 hover:border-[#00AEEF]/30"
              >
                <div className="sm:w-2/5 aspect-video sm:aspect-auto bg-slate-900 relative overflow-hidden shrink-0">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001729]/60 to-transparent sm:hidden" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#00AEEF] font-bold bg-[#00AEEF]/10 border border-[#00AEEF]/15 px-2.5 py-1 rounded-full inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-black text-[#001E33] leading-snug group-hover:text-[#004D80] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">Ano: {project.year}</span>
                    <span className="text-[#004D80] font-bold uppercase tracking-widest text-[10px] group-hover:text-[#00AEEF] transition-colors flex items-center space-x-1">
                      <span>Ver Ficha</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CERTIFICAÇÃO ANPG */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#002847] to-[#001224] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#00AEEF]/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
                  Parceiro Homologado da ANPG para Operações de Petróleo e Gás
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl">
                  A Lizando Lda está devidamente qualificada no cadastro geral de fornecedores da Agência Nacional de Petróleo, Gás e Biocombustíveis (ANPG). Asseguramos o cumprimento estrito das diretrizes de Conteúdo Local angolano, integrando profissionais formados e promovendo sustentabilidade local.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center max-w-xs">
                  <span className="text-[#00AEEF] text-4xl font-black font-display block">A+</span>
                  <span className="text-xs font-mono tracking-widest text-slate-300 uppercase block mt-2">Classificação de Risco</span>
                  <p className="text-[11px] text-gray-400 font-light mt-2">Cumprimento integral de auditorias fiscais, de integridade e HACCP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NOTÍCIAS RECENTES */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200/50 pb-8"
          >
            <div className="text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#001E33] tracking-tight">
                Notícias Recentes <span className="bg-gradient-to-r from-[#004D80] to-[#00AEEF] bg-clip-text text-transparent">&amp; Análises</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#004D80] rounded-full" />
            </div>
            <button
              onClick={() => onNavigateToPage("noticias")}
              className="group mt-6 md:mt-0 relative overflow-hidden bg-gradient-to-r from-[#003B66] to-[#001E33] hover:from-[#00AEEF] hover:to-[#004D80] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-500 flex items-center space-x-3 cursor-pointer self-start md:self-auto shadow-lg hover:shadow-xl hover:shadow-[#00AEEF]/20 hover:-translate-y-0.5"
            >
              <span className="relative z-10 transition-colors duration-300">Ir para o Blog</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => onNavigateToPage("noticias", { activePostId: news.id })}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video bg-slate-100 relative overflow-hidden">
                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-[#00AEEF] text-[#001E33] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md shadow-md">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono">
                      <span>{news.date}</span>
                      <span>•</span>
                      <span>Por: {news.author}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#001E33] mt-3 group-hover:text-[#00AEEF] transition-colors leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light mt-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-[#004D80] font-bold uppercase tracking-wider">
                  <span>Ler artigo completo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTEMUNHOS (Comentários reais com carrossel) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004D80]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">
              Testemunhos dos Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight mt-3">
              Quem Confia na Nossa Operação
            </h2>
            <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4" />
          </div>

          {/* Testimonial slider showcase */}
          <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto relative">
            <Quote className="w-16 h-16 text-[#00AEEF]/10 absolute top-8 right-8 pointer-events-none" />
            
            {/* Main content slider with fade-in */}
            <div className="min-h-[220px] sm:min-h-[160px] flex flex-col justify-between">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg text-slate-700 font-light italic leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00AEEF]/30 bg-slate-100 shadow-sm shrink-0">
                    <img 
                      src={TESTIMONIALS[activeTestimonial].image} 
                      alt={TESTIMONIALS[activeTestimonial].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#001E33]">{TESTIMONIALS[activeTestimonial].name}</h4>
                    <p className="text-xs text-[#00AEEF] font-medium">{TESTIMONIALS[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-8 pt-6 border-t border-slate-200">
              {/* Profile thumbnails row for quick jumping */}
              <div className="flex items-center justify-center sm:justify-start space-x-3 overflow-x-auto py-1">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                      activeTestimonial === idx 
                        ? "border-[#00AEEF] scale-110 shadow-md ring-2 ring-[#00AEEF]/20" 
                        : "border-transparent opacity-60 hover:opacity-100 scale-95"
                    }`}
                    title={t.name}
                  >
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Prev/Next Navigation buttons and dots */}
              <div className="flex items-center justify-between sm:justify-end gap-6">
                {/* Dots indicator for mobile/tablet */}
                <div className="flex space-x-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === idx ? "bg-[#00AEEF] w-6" : "bg-slate-300 w-2"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2 shrink-0">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#001E33] transition-colors cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#001E33] transition-colors cursor-pointer"
                    aria-label="Seguinte"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CONTACTE-NOS (CTA) */}
      <section className="py-24 bg-gradient-to-br from-[#003B66] to-[#001E33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <MessageSquare className="w-12 h-12 text-[#00AEEF] mx-auto animate-bounce" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
            Pronto para Elevar a Eficiência Logística da Sua Empresa?
          </h2>
          <p className="text-xs sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Fale com a nossa equipa de consultores comerciais. Estamos à sua disposição para formular orçamentos detalhados, desenhar rotas inteligentes de suprimentos e prestar apoio completo a frentes industriais ou offshore.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigateToPage("contactos")}
              className="w-full sm:w-auto bg-[#00AEEF] hover:bg-[#00AEEF]/85 text-[#001E33] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#00AEEF]/20 cursor-pointer"
            >
              Contactar Equipa Comercial
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/20 cursor-pointer"
            >
              Solicitar Orçamento Direto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
