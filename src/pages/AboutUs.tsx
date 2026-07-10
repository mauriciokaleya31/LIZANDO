/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, Target, Star, Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { TIMELINE_EVENTS, GALLERY_DATA } from "../data/websiteData";
import { TypewriterTitle } from "../components/TypewriterTitle";

interface AboutUsProps {
  onNavigateToPage: (pageId: string) => void;
}

export default function AboutUs({ onNavigateToPage }: AboutUsProps) {
  const values = [
    {
      title: "Missão",
      desc: "Fornecer soluções logísticas, ship chandling e apoio industrial com integridade, rapidez e conformidade, impulsionando a competitividade das empresas em Angola e integrando-as no comércio mundial.",
      icon: Target,
      color: "from-blue-500 to-[#004D80]"
    },
    {
      title: "Visão",
      desc: "Ser reconhecida nacional e internacionalmente como a parceira de logística e comércio de maior excelência técnica e valorização do conteúdo local em Angola até 2030.",
      icon: Compass,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Valores",
      desc: "Ética comercial incorruptível, segurança máxima operacional, excelência no serviço ao cliente, valorização do capital humano angolano e total transparência financeira.",
      icon: Star,
      color: "from-[#00AEEF] to-indigo-500"
    }
  ];

  const commitments = [
    { title: "Segurança em Primeiro Lugar", desc: "Cumprimos rigorosamente os padrões QHSE internacionais em todas as nossas frentes onshore e offshore." },
    { title: "Valorização do Conteúdo Local", desc: "Capacitamos e priorizamos o talento angolano, gerando empregabilidade e transferência tecnológica." },
    { title: "Qualidade HACCP Rigorosa", desc: "No abastecimento alimentar, garantimos a cadeia de frio e frescor total com controlos contínuos." },
    { title: "Parcerias de Longo Prazo", desc: "Construímos pontes comerciais assentes na transparência, ética e no crescimento mútuo sustentável." }
  ];

  return (
    <div className="w-full">
      {/* INSTITUTIONAL BANNER */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#001A2E]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Conheça a nossa Trajetória</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            SOBRE NÓS
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* QUEM SOMOS / HISTÓRIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Quem Somos</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#001E33] tracking-tight leading-snug">
                Uma Estrutura Sólida Dedicada ao Desenvolvimento de Angola
              </h2>
              <div className="w-12 h-1 bg-[#004D80] rounded" />
              
              <div className="text-sm sm:text-base text-slate-600 font-light leading-relaxed space-y-4">
                <p>
                  A <strong>Lizando Lda</strong> é uma empresa privada angolana de capitais próprios, especializada na prestação de serviços logísticos integrados, procurement internacional de suprimentos e trading multimodal de alto padrão comercial.
                </p>
                <p>
                  Desde a nossa génese em Luanda, compreendemos as exigências de agilidade que as indústrias modernas e operadoras petrolíferas requerem. Por isso, investimos em frotas, armazenamento com controlo térmico e uma rede internacional de parceiros na China, Turquia, Europa e Médio Oriente para garantir cadeias de abastecimento ininterruptas.
                </p>
                <p>
                  Com uma forte presença na província de Luanda e bases de apoio estratégico no Soyo e Cabinda, estamos perfeitamente posicionados para responder instantaneamente a qualquer necessidade de Ship Chandling, abastecimento offshore ou assessoria aduaneira nas maiores plataformas logísticas do país.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Imagem de Suporte de Operações Logísticas */}
              <div className="aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-150 shadow-md">
                <img 
                  id="quem-somos-team-img"
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                  alt="Operações de Logística em Angola" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-lg">
                <Shield className="w-12 h-12 text-[#00AEEF] mb-6" />
                <h3 className="text-lg font-display font-bold text-[#001E33] uppercase tracking-wide">Nosso Compromisso Local</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-3">
                  Apoiamos as diretrizes de Conteúdo Local regulamentadas pela ANPG. Isto traduz-se no desenvolvimento de cadeias produtivas angolanas, formação continuada da nossa equipa interna poliglota e na valorização de recursos do mercado nacional.
                </p>
                <div className="mt-8 flex items-center space-x-3 text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#00AEEF]" />
                  <span>Cadastrado oficial ANPG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO, VALORES (Bento Cards) */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Nossos Pilares</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight mt-3">História de Propósito e Diretrizes Claras</h2>
            <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-150 hover:border-[#00AEEF] hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-[#004D80]/5 text-[#004D80] flex items-center justify-center mb-6`}>
                    <IconComp className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#001E33] mb-4">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* O NOSSO COMPROMISSO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Princípios</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#001E33] tracking-tight mt-3">
                A Garantia de um Serviço Perfeito
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light mt-4 leading-relaxed">
                A Lizando rege-se pelos mais rigorosos standards internacionais. O nosso sucesso operacional apoia-se em quatro compromissos centrais que asseguram a estabilidade logística da sua empresa.
              </p>
              
              {/* Imagem representativa de compromisso e parceria de longo prazo */}
              <div className="aspect-video rounded-3xl overflow-hidden border border-slate-150 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="Princípios e Qualidade Lizando" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commitments.map((com, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-3.5">
                  <CheckCircle className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-display font-bold text-[#001E33]">{com.title}</h3>
                    <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">{com.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO DA EMPRESA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#001A2E]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Crescimento</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-3">A Nossa Linha do Tempo</h2>
            <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
          </div>

          <div className="relative border-l-2 border-slate-700 space-y-12 pl-8 ml-4 sm:ml-8">
            {TIMELINE_EVENTS.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* timeline bullet */}
                <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#001A2E] border-2 border-[#00AEEF] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF]" />
                </div>
                
                <span className="text-xs font-mono font-bold tracking-widest text-[#00AEEF] block">{evt.year}</span>
                <h3 className="text-lg font-display font-bold text-white mt-1">{evt.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mt-2 max-w-2xl leading-relaxed">{evt.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase block">Portfólio em Imagens</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001E33] tracking-tight mt-3">Galeria de Atividades Reais</h2>
            <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_DATA.slice(0, 4).map((gal, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
                <img src={gal.imageUrl} alt={gal.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#001E33]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <span className="text-white text-xs font-display font-semibold">{gal.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-gradient-to-r from-[#004D80] to-[#002B47] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Deseja Agendar uma Reunião Institucional Connosco?</h2>
          <p className="text-xs sm:text-base text-gray-300 font-light max-w-xl mx-auto">
            Agende uma reunião estratégica para debater parcerias comerciais, representações de trading e assessoria técnica em Angola.
          </p>
          <button
            onClick={() => onNavigateToPage("contactos")}
            className="bg-[#00AEEF] hover:bg-[#00AEEF]/80 text-[#001E33] px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
          >
            <span>Fale com a nossa Direção</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
