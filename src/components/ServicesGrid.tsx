/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ship, Globe, Truck, Search, TrendingUp, Network, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../data/mockData";
import { Service } from "../types";
import { TypewriterTitle } from "./TypewriterTitle";

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  // Helper to map icon code to a crisp Lucide Icon Component
  const getIcon = (iconName: string, className = "w-6 h-6 text-white") => {
    switch (iconName) {
      case "Ship":
        return <Ship className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "Truck":
        return <Truck className={className} />;
      case "SearchCode":
        return <Search className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Network":
        return <Network className={className} />;
      default:
        return <Ship className={className} />;
    }
  };

  // Helper to map service ID to a high-quality professional Unsplash image
  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case "importacao":
        return "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&h=400&q=80";
      case "exportacao":
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80";
      case "logistica":
        return "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=400&q=80";
      case "procurement":
        return "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&h=400&q=80";
      case "consultoria":
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80";
      case "chain":
        return "https://images.unsplash.com/photo-1566576912321-d58def7a6088?auto=format&fit=crop&w=600&h=400&q=80";
      default:
        return "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&h=400&q=80";
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100" id="servicos-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
            <TypewriterTitle text="Nossos Serviços Multimodais" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            <TypewriterTitle text="Soluções Globais Sob Medida" delay={0.4} />
          </h2>
          <div className="w-12 h-1 bg-[#004D80] rounded mr-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Cobrimos todas as frentes de comércio global e trâmites alfandegários para que a sua empresa possa crescer de forma sustentável, focada no seu negócio principal.
          </p>
        </div>

        {/* Grid Layout with Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: Service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#00AEEF] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              <div className="relative">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={getServiceImage(service.id)}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Elegant Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Icon Container with smooth hover transition */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-2xl bg-[#004D80] border-2 border-white shadow-md flex items-center justify-center group-hover:bg-[#00AEEF] transition-colors duration-300 z-10">
                  {getIcon(service.iconName, "w-5 h-5 text-white")}
                </div>

                {/* Card Content area with shifted padding */}
                <div className="pt-10 px-8">
                  {/* Card Title */}
                  <h3 className="text-lg font-display font-bold text-[#004D80] group-hover:text-[#00AEEF] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mt-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button CTA */}
              <div className="mt-8 mx-8 mb-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-bold text-[#004D80] hover:text-[#00AEEF] transition-colors flex items-center space-x-1.5 uppercase tracking-wider group/btn"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono">LIZANDO • SERVICES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
