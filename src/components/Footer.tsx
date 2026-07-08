/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Globe, ArrowUp, Send } from "lucide-react";

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "sobre-nos", label: "Sobre Nós" },
    { id: "servicos", label: "Nossos Serviços" },
    { id: "produtos", label: "Catálogo de Produtos" },
    { id: "projetos", label: "Projetos Realizados" },
    { id: "noticias", label: "Blog & Notícias" },
    { id: "contactos", label: "Contactos" }
  ];

  return (
    <footer className="bg-[#0b1320] text-gray-400 text-xs sm:text-sm border-t border-white/10" id="footer-section">
      {/* Upper Newsletter Strap */}
      <div className="bg-black/30 py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 text-left">
            <h4 className="text-white font-display font-bold text-lg">Parceria Comercial de Qualidade</h4>
            <p className="text-xs text-gray-400 mt-1 font-light">
              Subscreva os nossos comunicados oficiais sobre trâmites e operações de trading em Angola.
            </p>
          </div>
          <div className="md:col-span-6 flex items-center md:justify-end">
            <div className="flex w-full max-w-sm rounded-xl overflow-hidden border border-white/15 focus-within:border-[#00AEEF] transition-all bg-black/20">
              <input
                type="email"
                placeholder="Inscreva-se na nossa newsletter"
                className="px-4 py-3 bg-transparent text-white w-full text-xs focus:outline-none placeholder-gray-500"
              />
              <button 
                className="bg-[#004D80] hover:bg-[#00AEEF] text-white px-5 flex items-center justify-center transition-colors font-semibold uppercase tracking-wider text-[10px]"
                onClick={() => alert("Obrigado pela sua subscrição institucional!")}
              >
                <span>Subscrever</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        
        {/* Profile */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-5.png"
              alt="Lizando Lda Logo"
              className="h-10 object-contain bg-white/5 px-2 py-1 rounded"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            Lizando Comércio, Serviços, Importação e Exportação, Lda. Empresa angolana registada e habilitada junto da ANPG para conduzir operações internacionais robustas de supply chain e comércio global.
          </p>
          <div className="flex space-x-2.5 pt-2">
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold hover:bg-[#00AEEF] transition-colors cursor-pointer">F</span>
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold hover:bg-[#00AEEF] transition-colors cursor-pointer">In</span>
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold hover:bg-[#00AEEF] transition-colors cursor-pointer">X</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-widest font-display border-l-2 border-[#00AEEF] pl-3">
            Eixos do Website
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 hover:translate-x-0.5 transform duration-300 cursor-pointer"
                >
                  <span className="text-[#00AEEF]">»</span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-widest font-display border-l-2 border-[#00AEEF] pl-3">
            Soluções Customizadas
          </h4>
          <ul className="space-y-2.5 text-slate-400 text-xs">
            <li>• Ship Chandling & Provisões Marítimas</li>
            <li>• Apoio Logístico de Petróleo e Gás</li>
            <li>• Procurement & Fornecimento Industrial</li>
            <li>• Catering & Lavandaria para Acampamentos</li>
            <li>• Logística Integrada & Armazenagem</li>
            <li>• Aluguer de Geradores e Equipamento Pesado</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-widest font-display border-l-2 border-[#00AEEF] pl-3">
            Localização e Contacto
          </h4>
          <ul className="space-y-3 font-sans">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed">
                Av Kelson, Edifício Marginal de Luanda, 4º Andar, Luanda, Angola
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <span>+244 923 456 789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <span className="hover:text-white transition-colors">geral@lizandolda.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <span>NIF: 5412497645 (Angola)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-6 text-center text-gray-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {currentYear} Lizando Lda. Todos os direitos reservados. Conectando Angola ao Mercado Global.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Serviço</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
            <button
              onClick={handleScrollTop}
              className="bg-[#004D80] hover:bg-[#00AEEF] text-white p-2.5 rounded-lg shadow transition-colors cursor-pointer flex items-center justify-center space-x-1 group"
              aria-label="Rolar para o topo"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
