/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Globe, Mail, Phone, ExternalLink, ChevronDown, Anchor, Flame, SearchCode, Utensils, Truck, Layers, ShoppingBag, HardHat, Shield } from "lucide-react";

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string, params?: any) => void;
  onOpenQuoteModal: () => void;
}

const LANGUAGES = [
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" }
];

export default function Header({ activePage, onNavigate, onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"servicos" | "produtos" | null>(null);
  const [currentLang, setCurrentLang] = useState("pt");
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/pt\/([^;]+)/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    } else {
      setCurrentLang("pt");
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    if (langCode === "pt") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
    } else {
      document.cookie = `googtrans=/pt/${langCode}; path=/;`;
      document.cookie = `googtrans=/pt/${langCode}; path=/; domain=${window.location.hostname};`;
    }
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "sobre-nos", label: "Sobre Nós" },
    { id: "servicos", label: "Serviços", hasMega: true },
    { id: "produtos", label: "Produtos", hasMega: true },
    { id: "projetos", label: "Projetos" },
    { id: "noticias", label: "Notícias" },
    { id: "contactos", label: "Contactos" }
  ];

  const megaServices = [
    { id: "ship-chandling", title: "Ship Chandling", desc: "Abastecimento completo de navios e cargueiros.", icon: Anchor },
    { id: "oil-gas-support", title: "Oil & Gas Support", desc: "Suporte logístico offshore e onshore.", icon: Flame },
    { id: "procurement-industrial", title: "Procurement", desc: "Aquisição global homologada de sobressalentes.", icon: SearchCode },
    { id: "catering-hospitality", title: "Catering", desc: "Refeições e gestão de bases remotas.", icon: Utensils },
    { id: "logistica-integrada", title: "Logística Integrada", desc: "Desembaraço aduaneiro e distribuição.", icon: Truck },
    { id: "rental-services", title: "Rental Services", desc: "Aluguer de frotas e geradores industriais.", icon: Layers }
  ];

  const megaProductCategories = [
    "Equipamentos Marítimos",
    "Equipamentos Industriais",
    "EPIs",
    "Produtos Alimentares",
    "Equipamentos de Segurança",
    "Equipamentos Petrolíferos"
  ];

  const handleNavClick = (id: string, params?: any) => {
    onNavigate(id, params);
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#001E33] shadow-lg" : "bg-[#00101F]"}`}>
      {/* Institutional Top Bar */}
      <div 
        className={`bg-[#002847] text-white text-[11px] px-6 shadow-xs hidden md:block transition-all duration-300 ${
          isScrolled 
            ? "h-0 py-0 border-b-0 overflow-hidden opacity-0" 
            : "py-2 border-b border-white/5 h-auto"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>+244 923 456 789</span>
            </span>
            <span className="flex items-center space-x-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>geral@lizandolda.com</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-[#00AEEF] font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Luanda • Soyo • Cabinda</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 py-4 px-6 ${
          isScrolled
            ? "bg-[#001E33]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
            : "bg-[#00101F]/80 backdrop-blur-xs py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          {/* Logo Brand Area */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-10 md:h-12 flex items-center bg-white/5 px-3 py-1 rounded-xl transition-colors group-hover:bg-white/10 border border-white/10">
              <img
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-5.png"
                alt="Lizando Lda Logo"
                className="h-full object-contain max-w-[150px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const p = e.currentTarget.parentElement;
                  if (p) {
                    const fallback = document.createElement("span");
                    fallback.className = "text-[#00AEEF] font-black text-lg leading-none tracking-widest font-display";
                    fallback.innerText = "LIZANDO";
                    p.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              const hasMega = item.hasMega;

              return (
                <div
                  key={item.id}
                  className="relative group py-2"
                  onMouseEnter={() => hasMega && setActiveMegaMenu(item.id as any)}
                  onMouseLeave={() => hasMega && setActiveMegaMenu(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-sm font-semibold tracking-wide transition-colors flex items-center space-x-1 cursor-pointer ${
                      isActive ? "text-[#00AEEF]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />}
                    
                    {isActive && (
                      <span className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-[#00AEEF] rounded-full" />
                    )}
                  </button>

                  {/* MEGA MENU COMPONENT SLIDE DOWN */}
                  {hasMega && activeMegaMenu === item.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[580px] bg-[#001729]/98 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6 text-white"
                    >
                      {item.id === "servicos" ? (
                        <>
                          <div className="col-span-8 grid grid-cols-2 gap-4">
                            {megaServices.map((srv) => {
                              const SrvIcon = srv.icon;
                              return (
                                <div
                                  key={srv.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavClick("servicos", { activeServiceId: srv.id });
                                  }}
                                  className="p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left space-y-1 group/item"
                                >
                                  <div className="flex items-center space-x-2 text-[#00AEEF]">
                                    <SrvIcon className="w-4 h-4" />
                                    <h4 className="text-xs font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">{srv.title}</h4>
                                  </div>
                                  <p className="text-[10px] text-slate-400 font-light leading-normal">{srv.desc}</p>
                                </div>
                              );
                            })}
                          </div>
                          <div className="col-span-4 bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col justify-between text-left">
                            <div>
                              <span className="text-[9px] font-mono font-bold tracking-widest text-[#00AEEF] uppercase block">Lizando Hub</span>
                              <h4 className="text-xs font-bold uppercase tracking-wider mt-1 text-white leading-tight">Operações Offshore 24/7</h4>
                              <p className="text-[10px] text-slate-400 font-light leading-normal mt-2">Nossos serviços marítimos contam com suporte imediato para garantir zero inatividade nas vossas bases.</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenQuoteModal();
                              }}
                              className="w-full bg-[#004D80] hover:bg-[#00AEEF] text-white py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors mt-4 text-center cursor-pointer"
                            >
                              Orçamento Direto
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-span-7 space-y-3 text-left">
                            <span className="text-[9px] font-mono font-bold tracking-widest text-[#00AEEF] uppercase block">Aceda por Categoria</span>
                            <div className="grid grid-cols-1 gap-2">
                              {megaProductCategories.map((catIdx) => (
                                <div
                                  key={catIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavClick("produtos");
                                  }}
                                  className="text-xs font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors flex items-center space-x-2 py-1 hover:translate-x-1 transition-transform"
                                >
                                  <div className="w-1 h-1 rounded-full bg-[#00AEEF]" />
                                  <span>{catIdx}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-span-5 bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col justify-between text-left">
                            <div>
                              <ShoppingBag className="w-6 h-6 text-[#00AEEF] mb-2 animate-pulse" />
                              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Catálogo de Provisões</h4>
                              <p className="text-[10px] text-slate-400 font-light leading-normal mt-2">Consulte alimentos embalados HACCP, EPIs certificados SOLAS, ferramentas e materiais industriais.</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNavClick("produtos");
                              }}
                              className="w-full bg-[#00AEEF] text-[#001E33] hover:bg-white hover:text-[#001E33] py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors mt-4 text-center cursor-pointer"
                            >
                              Ver Produtos
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side Translation Button & Selector */}
          <div className="hidden lg:flex items-center space-x-3 relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-[#00AEEF] hover:bg-white text-[#001E33] font-bold text-xs py-2.5 px-5 rounded-xl transition-all duration-300 tracking-wider uppercase shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{LANGUAGES.find(l => l.code === currentLang)?.flag || "🇵🇹"} {LANGUAGES.find(l => l.code === currentLang)?.label || "Traduzir"}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-65" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#001729]/95 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl z-50 text-white animate-fade-in">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center space-x-2 cursor-pointer ${
                      currentLang === lang.code ? "text-[#00AEEF] bg-white/5" : "text-white/85"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded focus:outline-none text-white hover:text-[#00AEEF]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 bg-[#00101F]/98 backdrop-blur-xl z-50 flex flex-col p-6 space-y-4 text-white overflow-y-auto transition-all duration-300 ${
            isScrolled 
              ? "top-[64px] md:top-[68px]" 
              : "top-[80px] md:top-[116px]"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-semibold text-left py-3 border-b border-white/5 flex items-center justify-between ${
                  isActive ? "text-[#00AEEF]" : "text-slate-200 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#00AEEF]" : "bg-transparent"}`} />
              </button>
            );
          })}
          
          <div className="pt-6 flex flex-col space-y-4">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#00AEEF] uppercase block">Traduzir / Translate</span>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-xs font-bold rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      currentLang === lang.code 
                        ? "bg-[#00AEEF] text-[#001E33]" 
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-[11px] text-slate-400 space-y-2 pt-6 border-t border-white/5">
              <p>📍 Avenida Kelson, Marginal de Luanda, Angola</p>
              <p>📞 +244 923 456 789</p>
              <p>✉️ geral@lizandolda.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
