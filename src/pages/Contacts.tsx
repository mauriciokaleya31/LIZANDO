/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";
import { MessageSquare, Calendar, Award } from "lucide-react";

interface ContactsProps {
  onOpenQuoteModal: () => void;
}

export default function Contacts({ onOpenQuoteModal }: ContactsProps) {
  return (
    <div className="w-full">
      {/* CONTACTS BANNER */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-[#001729]">
        <div className="absolute inset-0 bg-cover bg-center opacity-65 scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E33] via-[#00101F]/90 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-xs font-mono tracking-widest text-[#00AEEF] uppercase block mb-3">Fale Connosco Directamente</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            NOSSOS CONTACTOS
          </h1>
          <div className="w-12 h-1 bg-[#00AEEF] rounded mx-auto mt-4" />
        </div>
      </section>

      {/* RENDER THE DETAILED CONTACT FORM COMPONENT */}
      <div className="bg-white">
        <ContactForm />
      </div>

      {/* QUICK INQUIRY CALLOUT */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#001A2E]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <Award className="w-10 h-10 text-[#00AEEF] mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Solicitar Cotação Direta</h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Se preferir preencher uma estimativa detalhada de volumes, destinos e urgência operacional, clique no botão abaixo para abrir a nossa consola de cotação direta.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#00AEEF] hover:bg-[#004D80] hover:text-white text-[#001E33] py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
          >
            Abrir Consola de Orçamento
          </button>
        </div>
      </section>
    </div>
  );
}
