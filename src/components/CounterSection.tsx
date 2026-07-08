/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Ship, Handshake, Globe2, CheckCircle2 } from "lucide-react";

interface CounterProps {
  targetValue: number;
  duration?: number;
}

function SequentialCounter({ targetValue, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = targetValue;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    const step = Math.ceil(end / (totalMiliseconds / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function CounterSection() {
  const stats = [
    {
      id: "stat1",
      icon: <Ship className="w-8 h-8 text-[#00AEEF]" />,
      target: 3,
      suffix: "+",
      label: "Remessas Internacionais",
      desc: "Trânsito internacional consolidado para grandes players."
    },
    {
      id: "stat2",
      icon: <Handshake className="w-8 h-8 text-[#00AEEF]" />,
      target: 10,
      suffix: "+",
      label: "Parceiros Comerciais",
      desc: "Fornecedores de confiança espalhados pelo mundo."
    },
    {
      id: "stat3",
      icon: <Globe2 className="w-8 h-8 text-[#00AEEF]" />,
      target: 5,
      suffix: "+",
      label: "Países de Operação",
      desc: "Eixos estratégicos em múltiplos continentes."
    },
    {
      id: "stat4",
      icon: <CheckCircle2 className="w-8 h-8 text-[#00AEEF]" />,
      target: 100,
      suffix: "%",
      label: "Compromisso e Qualidade",
      desc: "Total zelo na entrega conforme prazos decretados."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 border-b border-gray-100" id="estatisticas-section">
      {/* Decorative subtle vectors */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#004D80]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-50/70 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#00AEEF] hover:bg-white transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#004D80]/5 flex items-center justify-center mb-5 shrink-0 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-300 text-[#004D80]">
                {stat.icon}
              </div>

              {/* Number Animate */}
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#004D80] flex items-center justify-center">
                <SequentialCounter targetValue={stat.target} />
                <span>{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="text-sm font-bold text-slate-800 mt-4 uppercase tracking-widest leading-snug">
                {stat.label}
              </h3>

              {/* Small description */}
              <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
