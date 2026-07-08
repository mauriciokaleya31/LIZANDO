/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Anchor, Flame, SearchCode, Utensils, Truck, Layers, HelpCircle, Check, ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES_DETAILED, FAQS_DATA } from "../data/websiteData";

interface ServicesProps {
  activeServiceId?: string;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Services({ activeServiceId, onOpenQuoteModal }: ServicesProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Auto-scroll to selected service if provided
  useEffect(() => {
    if (activeServiceId) {
      const element = document.getElementById(`service-${activeServiceId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [activeServiceId]);

  const workflowSteps = [
    { num: "01", title: "Consulta", desc: "A nossa equipa comercial ouve as suas necessidades aduaneiras, de catering ou de suprimento, e elabora os cadernos de encargos." },
    { num: "02", title: "Planeamento", desc: "Desenhamos as rotas de transporte ideais, regimes alfandegários isentos e planeamos cronogramas minuciosos." },
    { num: "03", title: "Aquisição", desc: "Acedemos aos nossos hubs na China, Turquia ou Europa, homologamos as peças técnicas e provisões necessárias." },
    { num: "04", title: "Entrega", desc: "Efetuamos a entrega final diretamente no porto de Luanda, bases onshore ou plataformas offshore em segurança absoluta." },
    { num: "05", title: "Suporte", desc: "Garantimos monitorização contínua, auditorias HACCP/regulares e assistência 24 horas por dia, 7 dias por semana." }
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Anchor": return Anchor;
      case "Flame": return Flame;
      case "SearchCode": return SearchCode;
      case "Utensils": return Utensils;
      case "Truck": return Truck;
      case "Layers": return Layers;
      default: return Anchor;
    }
  };

  return (
    <div className="w-full">
      {/* OPERATIONS BANNER */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#001729]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Nossos Serviços e Atividades</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            NOSSOS SERVIÇOS
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">O Que Fazemos</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight mt-3">Competências Globais de Alto Padrão</h2>
            <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4" />
          </div>

          {SERVICES_DETAILED.map((service, index) => {
            const IconComponent = getIconComponent(service.iconName);
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 pb-12 border-b border-slate-100 last:border-0 scroll-mt-24`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#004D80]/5 text-[#004D80] flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-widest uppercase">Serviço {index + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#001E33] leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">Benefícios Operacionais:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 font-light">
                          <Check className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center space-x-2 bg-[#004D80] hover:bg-[#00AEEF] text-white py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>Solicitar Orçamento de {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Cover Photo */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-xl relative group">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E33]/60 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK (Workflow) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#001A2E]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Metodologia</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-3">Como Trabalhamos</h2>
            <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch relative">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between relative group hover:border-[#00AEEF]/50 transition-colors">
                <div>
                  <span className="text-4xl font-display font-black text-[#00AEEF]/20 group-hover:text-[#00AEEF]/50 transition-colors block leading-none">
                    {step.num}
                  </span>
                  <h3 className="text-base font-display font-bold text-white mt-4">{step.title}</h3>
                  <p className="text-xs text-gray-300 font-light mt-2.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Dúvidas Frequentes</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight mt-3">Perguntas Frequentes</h2>
            <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = expandedFAQ === idx;
              return (
                <div key={idx} className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50 transition-all">
                  <button
                    onClick={() => setExpandedFAQ(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-display font-semibold text-[#001E33]">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00AEEF]" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORÇAMENTO CTA */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001E33]">Interessado em Nossas Soluções?</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
            Nossa equipa comercial está pronta para estruturar uma cotação formal para as demandas logísticas e de suprimentos do seu negócio.
          </p>
          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center space-x-2 bg-[#00AEEF] hover:bg-[#004D80] hover:text-white text-[#001E33] py-4 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Solicitar Orçamento Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
