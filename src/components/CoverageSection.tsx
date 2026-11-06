import React from 'react';
import { MapPin, Navigation, Clock, MessageCircle, Truck } from 'lucide-react';
import { REGIONAL_CITIES, COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export const CoverageSection: React.FC = () => {
  return (
    <section id="regiao" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Sudoeste Goiano</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Atendimento em <span className="text-amber-400">Santa Helena de Goiás</span> e Região
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Nossa base operacional em Santa Helena de Goiás possui saída estratégica para a rodovia GO-210, permitindo rápido deslocamento de caminhões munck, pranchas e guinchos para lavouras, usinas e centros urbanos vizinhos.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shrink-0 text-xs text-slate-300 flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Base em Santa Helena - GO</div>
              <div className="text-slate-400">Prontidão para atendimento urgente ou programado</div>
            </div>
          </div>
        </div>

        {/* Cities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONAL_CITIES.map((city, idx) => (
            <div
              key={idx}
              className={`bg-slate-900 rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                city.name.includes('Santa Helena')
                  ? 'border-amber-500/70 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{city.name}</span>
                  </div>
                  {city.name.includes('Santa Helena') && (
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      Sede
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Distância:</span>
                    <span className="font-semibold text-white">{city.distanceFromSantaHelena}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Chegada Estimada:</span>
                    </span>
                    <span className="font-semibold text-emerald-400">{city.estimatedTime}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                  <strong className="text-slate-300 font-semibold">Demandas comuns:</strong> {city.highDemandServices}
                </p>
              </div>

              <a
                href={createWhatsAppLink(`Olá! Preciso de caminhão munck ou auto socorro na cidade/região de ${city.name}. Poderia me passar um orçamento?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Solicitar em {city.name.split(' ')[0]}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Rodovias e Acesso Banner */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Plantão Rodoviário na GO-210 e BR-452</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Veículo pesado enguiçado ou tombado na pista? Atendemos emergências rodoviárias 24 horas por dia com agilidade.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
            className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-lg shadow-red-950/40"
          >
            <span>Ligar Emergência 24h: {COMPANY_INFO.phoneEmergencyDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
