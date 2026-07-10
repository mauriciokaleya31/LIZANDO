/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Clock, Globe } from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    mensagem: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Por favor, preencha os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email to geral@lizandolda.com
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randomId = "LIZ-" + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(randomId);
    }, 1500);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(submissionId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      nome: "",
      empresa: "",
      telefone: "",
      email: "",
      mensagem: ""
    });
    setSubmitSuccess(false);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-150" id="contactos-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
            Canais de Comunicação Direta
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 tracking-tight">
            Entre em Contacto Connosco
          </h2>
          <div className="w-12 h-1 bg-[#004D80] rounded mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Estamos prontos para esclarecer as suas dúvidas operacionais e desenhar uma rota internacional personalizada para o seu negócio.
          </p>
        </div>

        {/* Form & Map Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info & Mock Google Map representing Luanda, Angola */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md h-full flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <h3 className="text-lg font-display font-bold text-gray-950 uppercase tracking-wide">
                  Lizando Lda • Escritório Sede
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  A nossa assessoria principal está localizada estrategicamente em Luanda, facilitando o contacto direto com despachantes e autoridades alfandegárias portuárias angolanas.
                </p>

                {/* Contacts quick links list */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-[#004D80]/5 text-[#004D80] rounded-xl">
                      <MapPin className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Endereço</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">
                        Avenida Kelson, Edifício Marginal de Luanda, 4º Andar, Luanda, Angola
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-[#004D80]/5 text-[#004D80] rounded-xl">
                      <Phone className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Telefones (Angola & Internacional)</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">
                        +244 923 456 789 / +244 912 345 678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-[#004D80]/5 text-[#004D80] rounded-xl">
                      <Mail className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono font-sans">E-mail Corporativo</p>
                      <p className="text-sm font-semibold text-[#004D80] hover:text-[#00AEEF] mt-0.5 transition-colors">
                        geral@lizandolda.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-[#004D80]/5 text-[#004D80] rounded-xl">
                      <Clock className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Horário de Atendimento</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">
                        Segunda a Sexta: 08:00 - 17:00 (Hora de Angola)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Mock Google Map for Luanda Center */}
              <div className="relative rounded-2xl overflow-hidden shadow-xs border border-gray-100 aspect-16/9 bg-gray-100">
                {/* Embed modern OpenStreetMap/Google map representation for perfect visuals */}
                <iframe
                  title="Lizando Sede Luanda Angola"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.354020968997!2d13.23555546977539!3d-8.81555559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b3ffffff7f%3A0xc3c5efed3364df22!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2s!4v1700000000000!5m2!1spt-PT!2s"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* floating address overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-lg border border-gray-100 shadow flex items-center space-x-2 text-[11px] text-gray-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>Porto de Luanda e Zona Comercial Próxima</span>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Interactive Contact Message Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md h-full flex flex-col justify-between">
              
              {submitSuccess ? (
                /* Success submit state layout with nice graphics */
                <div className="flex flex-col items-center justify-center text-center py-16 h-full space-y-6 animate-fade-in" id="contact-success-panel">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-2 shadow-inner border border-green-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-950 tracking-tight">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm leading-relaxed font-light">
                    Agradecemos o seu interesse na Lizando Lda. Um dos nossos consultores de negócios internacionais entrará em contacto num prazo de 24 horas úteis.
                  </p>

                  {/* submission tracker widget */}
                  <div className="bg-gray-50 px-5 py-4 rounded-2xl border border-gray-100 flex items-center justify-between w-full max-w-md">
                    <div className="text-left">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Num. de Atendimento</span>
                      <p className="text-sm font-mono font-bold text-[#004D80] mt-0.5">{submissionId}</p>
                    </div>
                    <button
                      onClick={handleCopyId}
                      className="p-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-[#004D80] transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
                    >
                      {copiedId ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-500" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="bg-[#004D80] hover:bg-[#00AEEF] text-white py-3 px-8 rounded font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                /* Standard dynamic contact submission form fields */
                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full" id="contact-institutional-form">
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden h-44 border border-gray-150 shadow-inner group">
                      <img
                        src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/pagiina-do-conatcctto.png"
                        alt="Atendimento ao Cliente Lizando"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <h3 className="text-base sm:text-lg font-display font-black uppercase tracking-wide text-white">
                          Formulário de Mensagem
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-200 font-light mt-0.5">
                          Preencha os campos abaixo e faça-nos a sua consulta corporativa directa.
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all"
                        />
                      </div>

                      {/* Company input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                          Nome da Empresa
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          placeholder="Ex: Comercial Angola Lda"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: +244 923 456 789"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                          Endereço de E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: contacto@empresa.com"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                        Como podemos ajudar o seu negócio? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="mensagem"
                        rows={5}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Descreva sumariamente as suas necessidades de importação, exportação de produtos, procuras e assessorias comerciais..."
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-light text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#004D80] focus:ring-1 focus:ring-[#004D80] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission buttons info disclaimer row */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 text-left">
                    <p className="text-[10px] text-gray-500 sm:max-w-xs leading-normal">
                      Ao enviar, os seus dados são criptografados de forma segura e encaminhados para a equipa executiva da Lizando.
                    </p>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#004D80] hover:bg-[#00AEEF] text-white px-8 py-3.5 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center space-x-2 shrink-0 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>A enviar...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#00AEEF]" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
