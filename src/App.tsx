/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import { Loader } from "./components/Loader";

// Import dynamic page views
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contacts from "./pages/Contacts";

import { ArrowUp, PhoneCall, MessageSquare } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [pageParams, setPageParams] = useState<any>({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalPreselectedService, setModalPreselectedService] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to trigger back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (pageId: string, params?: any) => {
    setActivePage(pageId);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenQuoteWithService = (serviceTitle?: string) => {
    setModalPreselectedService(serviceTitle || "");
    setIsQuoteModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render the currently selected page view
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home
            onNavigateToPage={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteWithService}
          />
        );
      case "sobre-nos":
        return <AboutUs onNavigateToPage={handleNavigate} />;
      case "servicos":
        return (
          <Services
            activeServiceId={pageParams.activeServiceId}
            onOpenQuoteModal={handleOpenQuoteWithService}
          />
        );
      case "produtos":
        return (
          <Products
            initialSearch={pageParams.search}
            onOpenQuoteModal={handleOpenQuoteWithService}
          />
        );
      case "projetos":
        return <Projects initialProjectId={pageParams.activeProjectId} />;
      case "noticias":
        return <News initialPostId={pageParams.activePostId} />;
      case "contactos":
        return <Contacts onOpenQuoteModal={() => handleOpenQuoteWithService()} />;
      default:
        return (
          <Home
            onNavigateToPage={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteWithService}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#00AEEF]/20 selection:text-[#004D80] flex flex-col justify-between">
      {/* Enterprise Preloader animation */}
      <Loader />

      {/* Main Layout Wrap */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Sticky Premium Header */}
        <Header
          activePage={activePage}
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => handleOpenQuoteWithService()}
        />

        {/* Dynamic Page Stage Container */}
        <main className="pt-[72px] md:pt-[116px] flex-grow bg-[#00101F]">
          {renderPage()}
        </main>

        {/* Dynamic Footer with instant page routing */}
        <Footer onNavigate={(id) => handleNavigate(id)} />
      </div>

      {/* Quote request form modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={modalPreselectedService}
      />

      {/* FLOATING ACTION HUBS (WhatsApp + Scroll Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-center">
        {/* Enriched WhatsApp Direct Floating button */}
        <a
          href="https://wa.me/244923456789?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20à%20Lizando%20Lda."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative group cursor-pointer"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-14 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-100 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp On-line (Suporte)
          </span>
        </a>

        {/* Scroll To Top float indicator */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="w-11 h-11 rounded-full bg-[#004D80] text-white flex items-center justify-center shadow-md hover:bg-[#00AEEF] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Rolar para o topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
