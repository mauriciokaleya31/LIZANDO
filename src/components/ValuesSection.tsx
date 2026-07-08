/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Milestone, Share2, Compass, Layers, Hourglass } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data/mockData";
import { TypewriterTitle } from "./TypewriterTitle";

export default function ValuesSection() {
  // Helper to map values to distinctive premium icons
  const getValueIcon = (id: string) => {
    switch (id) {
      case "exp":
        return <Compass className="w-6 h-6 text-[#00AEEF]" />;
      case "rede":
        return <Share2 className="w-6 h-6 text-[#00AEEF]" />;
      case "sol":
        return <Milestone className="w-6 h-6 text-[#00AEEF]" />;
      case "ent":
        return <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />;
      case "trans":
        return <Layers className="w-6 h-6 text-[#00AEEF]" />;
      case "eq":
        return <Hourglass className="w-6 h-6 text-[#00AEEF]" />;
      default:
        return <Check className="w-6 h-6 text-[#00AEEF]" />;
    }
  };

  return (
    <section className="py-24 bg-white" id="valores-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
            <TypewriterTitle text="Diferencial Competitivo" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 tracking-tight">
            <TypewriterTitle text="Por Que Escolher a Lizando?" delay={0.4} />
          </h2>
          <div className="w-12 h-1 bg-[#004D80] rounded mr-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Oferecemos suporte mercantil confiável, ligando parceiros ao redor do mundo através de trâmites descomplicados, garantindo a sua paz de espírito.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon wrap */}
                  <div className="w-12 h-12 bg-[#004D80]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-300">
                    {getValueIcon(item.id)}
                  </div>
                  {/* Check seal */}
                  <span className="text-xs bg-[#004D80]/10 text-[#004D80] py-1 px-2.5 rounded-full font-bold flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span>LIZANDO OK</span>
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-[#004D80] group-hover:text-[#00AEEF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {item.description}
                </p>
              </div>

              {/* Minimal footer line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                <span>Garantia de Compliance Corporativo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
