/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { X, CheckCircle, Ship, Plane, Compass, FileCheck, ArrowRight, Copy, Check } from "lucide-react";
import { QuoteRequestFormData } from "../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService = "" }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequestFormData>({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    mensagem: "",
    serviceRequired: preselectedService || "importacao",
    urgency: "media",
    origins: "",
    destinations: "Angola (Sede Luanda)"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [quoteId, setQuoteId] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync preselectedService changes if modal re-opens
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.origins) {
      alert("Por favor, preencha todos os campos fundamentais (Nome, Email e Origem da Mercadoria).");
      return;
    }

    setIsSubmitting(true);

    // Simulated quote calculating logic (completely realistic UI outcome)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      const generatedId = "LCO-" + Math.floor(100000 + Math.random() * 900000);
      setQuoteId(generatedId);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in" id="quote-modal-overlay">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Block of Modal */}
        <div className="bg-[#004D80] p-6 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-[#00AEEF]/20 text-[#00AEEF] rounded-xl hidden sm:block">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-lg font-display font-medium leading-tight">Solicitar Orçamento / Cotação</h3>
              <p className="text-xs text-slate-200 mt-0.5">Lizando Comércio • Serviços aduaneiros globais</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Core Contents */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {success ? (
            /* Submission success state layout with nice graphics */
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-6" id="quote-success-panel">
              <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-2 shadow-inner border border-green-150">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-950 tracking-tight">
                Pedido de Cotação Registado!
              </h4>
              <p className="text-xs sm:text-sm text-gray-650 max-w-sm leading-relaxed font-light">
                O seu processo mercantil foi gerado com sucesso. A nossa equipa de analistas aduaneiros irá estimar tarifas alfandegárias para o itinerário solicitado e retornará em breve.
              </p>

              {/* quote tracker widget */}
              <div className="bg-gray-50 px-5 py-4 rounded-2xl border border-gray-100 flex items-center justify-between w-full max-w-md">
                <div className="text-left">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">ID de Rastreamento de Cotação</span>
                  <p className="text-sm font-mono font-bold text-[#004D80] mt-0.5">{quoteId}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-white border border-gray-205 hover:bg-gray-50 text-gray-700 hover:text-[#004D80] transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-500" />
                      <span>Copiar ID</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex space-x-3 w-full max-w-sm">
                <button
                  onClick={onClose}
                  className="w-full bg-[#004D80] hover:bg-[#00AEEF] text-white py-3.5 rounded-xl text-center font-medium tracking-wide transition-all uppercase text-xs"
                >
                  Concluir Operação
                </button>
              </div>
            </div>
          ) : (
            /* Multi-field professional quote questionnaire form fields */
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Service & Route Coordinates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Service Picker */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Serviço Pretendido <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white focus:outline-none focus:border-[#004D80]"
                  >
                    <option value="Importação Internacional">Importação Internacional</option>
                    <option value="Exportação">Exportação</option>
                    <option value="Logística Internacional">Logística Internacional</option>
                    <option value="Procurement">Procurement Internacional</option>
                    <option value="Consultoria">Consultoria Comercial</option>
                    <option value="Gestão de Abastecimento">Cadeia de Suprimentos</option>
                  </select>
                </div>

                {/* Origin Route */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Origem da Carga <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="origins"
                    value={formData.origins}
                    onChange={handleInputChange}
                    placeholder="Ex: Porto de Shanghai, China"
                    required
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80]"
                  />
                </div>

                {/* Destination Route */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Destino da Carga
                  </label>
                  <input
                    type="text"
                    name="destinations"
                    value={formData.destinations}
                    onChange={handleInputChange}
                    placeholder="Ex: Porto de Luanda, Angola"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80]"
                  />
                </div>

              </div>

              {/* Client Profile Metadata Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nome input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Ex: Dr. José Maria"
                    required
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Empresa input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="Ex: Comercial Luanda Lda"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none"
                  />
                </div>

              </div>

              {/* Contact numbers Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Telefone input */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="Ex: +244 923 456 789"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white focus:outline-none"
                  />
                </div>

                {/* E-mail input */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Endereço de E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: geral@empresa.com"
                    required
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white focus:outline-none"
                  />
                </div>

                {/* Urgência selector */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                    Nivel de Urgência
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white focus:outline-none"
                  >
                    <option value="alta">Urgente (Envio Aéreo / Imediato)</option>
                    <option value="media">Padrão (Próximos 15-30 dias)</option>
                    <option value="baixa">Sem pressa (Fase de Planeamento)</option>
                  </select>
                </div>

              </div>

              {/* Cargo descriptions Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                  Descrição Física da Mercadoria / Observações
                </label>
                <textarea
                  name="mensagem"
                  rows={3}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Por favor detalhe o volume aproximado, peso bruto, número de contentores de 20/40 pés ou tipo de mercadoria a cotar..."
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none resize-none"
                />
              </div>

              {/* CTA buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-bold text-gray-500 hover:text-gray-700 uppercase tracking-wider"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#004D80] hover:bg-[#00AEEF] text-white px-8 py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>A estimar...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4 text-[#00AEEF]" />
                      <span>Solicitar Cotação</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
