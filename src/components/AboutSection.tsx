/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ship, Award, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="sobre-nos-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image container */}
          <div className="lg:col-span-6 relative">
            {/* Visual background decor squares */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#004D80]/10 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#00AEEF]/10 rounded-2xl z-0" />
            
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
                alt="Gestores corporativos de comércio Lizando"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Floating micro stat badges to enhance realism and avoid boring layouts */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#004D80] flex items-center justify-center text-white shrink-0">
                  <Award className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-display">100% Capital Angolano</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Comprometidos ativamente com o crescimento industrial e comercial de Angola.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content text block */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase mb-3 block">
              Conheça a Nossa Organização
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 tracking-tight leading-tight">
              Lizando Comércio, Serviços, <br />
              Importação e Exportação, Lda
            </h2>
            
            <div className="w-16 h-1.5 bg-[#004D80] rounded mt-4 mb-8" />

            <p className="text-base text-gray-700 leading-relaxed font-light">
              A <strong className="font-semibold text-[#004D80]">Lizando Comércio, Serviços, Importação e Exportação, Lda</strong> é uma proeminente empresa angolana focada em proporcionar assessoria excelente em comércio internacional, importação técnica, exportação e fluxos de transporte marítimo e aéreo nacional.
            </p>

            <p className="text-base text-gray-700 leading-relaxed font-light mt-4">
              Com uma forte presença estratégica nos mercados mundiais, estabelecemos parcerias estáveis e auditadas com fornecedores e clientes em diversos continentes, contribuindo de forma decisiva para a elevação e progresso do desenvolvimento económico de Angola.
            </p>

            {/* Core commitments list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="p-1 bg-[#004D80]/10 text-[#004D80] rounded mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Origem Homologada</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Garantia de fabrico homologado internacionalmente.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 bg-[#004D80]/10 text-[#004D80] rounded mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Soluções Ponta a Ponta</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Cobrimos desde a origem até à entrega final no armazém.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 bg-[#004D80]/10 text-[#004D80] rounded mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Negociação Direta</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Preços competitivos através de hubs comerciais.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 bg-[#004D80]/10 text-[#004D80] rounded mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Segurança Alfandegária</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Compliance rigorosa com a legislação da AGT.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
